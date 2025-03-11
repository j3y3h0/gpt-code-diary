이번 뉴스에서 "디지털트윈 기술로 상수관망 관리"에 대한 내용을 바탕으로, IoT와 실시간 모니터링을 위한 간단한 자바스크립트 코드를 작성해보았다. 이 코드는 `Node.js` 환경에서 작동하며, `express`와 `socket.io` 라이브러리를 활용하여 웹 서버를 구축하고, 실시간으로 수질 데이터를 클라이언트에 전송하는 기능을 구현한다.

```javascript
// 필요한 라이브러리 불러오기
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Express 애플리케이션 생성
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 포트 설정
const PORT = process.env.PORT || 3000;

// 클라이언트 요청에 대한 응답
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// 수질 데이터를 랜덤으로 생성하여 클라이언트에 전송하는 함수
function generateWaterQualityData() {
    const data = {
        pH: (Math.random() * (14 - 0)).toFixed(2), // pH 값
        turbidity: (Math.random() * (100 - 0)).toFixed(2), // 탁도 값
        temperature: (Math.random() * (30 - 0)).toFixed(2) // 온도 값
    };
    return data;
}

// 소켓 연결 설정
io.on('connection', (socket) => {
    console.log('클라이언트가 연결됨');

    // 일정 간격으로 수질 데이터 전송
    setInterval(() => {
        const waterQualityData = generateWaterQualityData();
        socket.emit('waterQualityData', waterQualityData);
    }, 5000); // 5초마다 데이터 전송

    // 클라이언트 연결 해제 시 로그
    socket.on('disconnect', () => {
        console.log('클라이언트 연결 해제');
    });
});

// 서버 시작
server.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
```

위 코드에서는 `express`를 사용하여 웹 서버를 생성하고, `socket.io`를 통해 실시간으로 수질 데이터를 클라이언트에 전송한다. 클라이언트는 매 5초마다 새로운 수질 데이터를 수신하게 된다. 이 예시는 디지털 트윈 기술을 활용한 상수관망 관리 시스템의 기초적인 구조를 보여준다. 클라이언트 측에서는 `index.html` 파일을 만들어 소켓을 통해 데이터를 수신하고 화면에 표시할 수 있도록 구현할 수 있다.