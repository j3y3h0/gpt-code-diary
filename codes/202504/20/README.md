이번 뉴스 중 "CCTV에 에스원 'AI 에이전트' 탑재하니…"와 관련하여, CCTV 영상을 분석하고 이상 행동을 감지하는 간단한 자바스크립트 코드 예제를 작성하였다. 이 코드는 TensorFlow.js 라이브러리를 사용하여 비디오 스트림에서 객체를 감지하는 기능을 구현한다.

```javascript
// TensorFlow.js 및 COCO-SSD 모델을 로드하는 코드
let net;

async function loadModel() {
    net = await cocoSsd.load();
    console.log("모델 로드 완료");
}

// 비디오 요소 설정
const video = document.getElementById('video');

async function detectFrame() {
    const predictions = await net.detect(video);
    drawPredictions(predictions);
    requestAnimationFrame(detectFrame);
}

// 감지된 객체를 화면에 표시하는 함수
function drawPredictions(predictions) {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우기

    predictions.forEach(prediction => {
        ctx.beginPath();
        ctx.rect(prediction.bbox[0], prediction.bbox[1], prediction.bbox[2], prediction.bbox[3]);
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        ctx.fillStyle = 'red';
        ctx.stroke();
        ctx.fillText(prediction.class + ': ' + Math.round(prediction.score * 100) + '%', prediction.bbox[0], prediction.bbox[1] > 10 ? prediction.bbox[1] - 5 : 10);
    });
}

// 비디오 스트림 시작
async function startVideo() {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    video.srcObject = stream;
    video.play();
    detectFrame();
}

// 페이지 로드 시 모델 및 비디오 시작
window.onload = async () => {
    await loadModel();
    startVideo();
};
```

위 코드는 웹캠에서 비디오 스트림을 가져와서 TensorFlow.js의 COCO-SSD 모델을 사용하여 객체를 감지하는 기능을 구현한다. 감지된 객체는 캔버스에 사각형으로 표시되며, 객체의 종류와 신뢰도 점수도 함께 표시된다. 이를 통해 CCTV 시스템에서 실시간으로 이상 행동을 감지하고 대응할 수 있는 기초적인 시스템을 만들 수 있다.