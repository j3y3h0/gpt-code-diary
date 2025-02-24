최근 KT가 스마트 보안 카메라 'KT 홈캠 안심'을 출시한 소식과 관련하여, JavaScript를 이용한 간단한 보안 카메라 모니터링 웹 애플리케이션 예제를 소개하겠다. 이 예제에서는 `Socket.IO` 라이브러리를 사용하여 실시간으로 카메라 영상을 스트리밍하는 기능을 구현한다.

### 보안 카메라 모니터링 웹 애플리케이션 예제

#### 필요한 라이브러리
- `express`: 웹 서버 구축을 위한 라이브러리
- `socket.io`: 실시간 양방향 통신을 위한 라이브러리
- `cv` (OpenCV): 비디오 스트리밍 및 처리 (Node.js에서 사용할 경우 `opencv4nodejs`와 같은 패키지를 설치해야 함)

#### 서버 코드 (server.js)
```javascript
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cv = require('opencv4nodejs');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = 3000;

// 비디오 캡처 초기화
const wCap = new cv.VideoCapture(0); // 0은 기본 웹캠을 의미

// 클라이언트 연결 시 이벤트 처리
io.on('connection', (socket) => {
    console.log('클라이언트 연결됨');

    const sendFrame = () => {
        const frame = wCap.read(); // 비디오 프레임 읽기
        const image = cv.imencode('.jpg', frame).toString('base64'); // 이미지를 Base64로 인코딩
        socket.emit('video', image); // 클라이언트로 프레임 전송

        setTimeout(sendFrame, 100); // 100ms마다 프레임 전송
    };

    sendFrame();

    socket.on('disconnect', () => {
        console.log('클라이언트 연결 끊김');
    });
});

// 정적 파일 제공
app.use(express.static('public'));

// 서버 시작
server.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});
```

#### 클라이언트 코드 (public/index.html)
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>스마트 보안 카메라 모니터링</title>
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <h1>스마트 보안 카메라 모니터링</h1>
    <img id="video" src="" alt="비디오 스트리밍" style="width: 640px; height: auto;"/>
    <script>
        const socket = io();

        socket.on('video', (image) => {
            document.getElementById('video').src = `data:image/jpeg;base64,${image}`;
        });
    </script>
</body>
</html>
```

### 사용 방법
1. Node.js 환경에서 `express`, `socket.io`, `opencv4nodejs`를 설치한다.
2. 위의 서버 코드를 `server.js` 파일로 저장하고, 클라이언트 코드를 `public/index.html` 파일로 저장한다.
3. 터미널에서 `node server.js` 명령어로 서버를 실행한다.
4. 웹 브라우저에서 `http://localhost:3000`에 접속하여 실시간 비디오 스트리밍을 확인한다.

이 코드는 KT 홈캠 안심과 같은 스마트 보안 카메라의 기본적인 기능을 구현한 예시로, 실시간으로 비디오를 스트리밍하여 모니터링할 수 있도록 한다.