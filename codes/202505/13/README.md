최근 뉴스 중 '삼성, 역대 가장 얇은 갤럭시 S25 엣지 공개'라는 주제를 바탕으로, 사용자가 스마트폰의 다양한 기능을 활용할 수 있는 간단한 JavaScript 코드를 작성해 보겠다. 이 코드는 카메라 기능을 활용하여 사진을 촬영하는 예제이다. 이를 위해 HTML5의 `getUserMedia` API를 사용하여 웹캠에 접근하는 기능을 구현한다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>카메라 사진 촬영</title>
    <style>
        video {
            width: 100%;
            border: 1px solid black;
        }
        canvas {
            display: none;
        }
    </style>
</head>
<body>
    <h1>카메라 사진 촬영 예제</h1>
    <video id="video" autoplay></video>
    <button id="snap">사진 찍기</button>
    <canvas id="canvas"></canvas>

    <script>
        const video = document.getElementById('video');
        const canvas = document.getElementById('canvas');
        const snapButton = document.getElementById('snap');
        const context = canvas.getContext('2d');

        // 카메라 접근
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(err => {
                console.error("카메라 접근 오류: ", err);
            });

        // 사진 찍기 기능
        snapButton.addEventListener('click', () => {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');
            console.log("촬영된 사진 데이터 URL: ", dataURL);
        });
    </script>
</body>
</html>
```

위 코드는 사용자가 웹페이지에서 카메라를 통해 실시간으로 영상을 보면서 사진을 찍을 수 있는 기능을 제공한다. 버튼을 클릭하면 현재 비디오 프레임이 캔버스에 그려지고, 그 결과물은 데이터 URL 형식으로 콘솔에 출력된다. 이는 다양한 어플리케이션에서 유용하게 활용될 수 있는 기능이다.