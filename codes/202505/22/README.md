최근 LGU+가 외국인 고객을 위한 전문 상담 인력을 늘린 것과 관련하여, 외국인 고객의 문의를 처리하는 간단한 웹 애플리케이션을 개발하는 예제를 소개하겠다. 이 예제는 JavaScript와 Express.js를 사용하여 외국인 고객의 문의를 관리하는 기능을 구현한다.

### 외국인 고객 문의 관리 애플리케이션 예제

```javascript
// 필요한 라이브러리 임포트
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// 미들웨어 설정
app.use(bodyParser.json());

// 문의 데이터를 저장할 배열
let inquiries = [];

// 문의 접수 엔드포인트
app.post('/inquiry', (req, res) => {
    const { name, email, message } = req.body;

    // 유효성 검사
    if (!name || !email || !message) {
        return res.status(400).json({ error: '모든 필드를 입력해야 합니다.' });
    }

    // 문의 저장
    const inquiry = { id: inquiries.length + 1, name, email, message };
    inquiries.push(inquiry);

    return res.status(201).json({ message: '문의가 접수되었습니다.', inquiry });
});

// 문의 목록 조회 엔드포인트
app.get('/inquiries', (req, res) => {
    return res.status(200).json(inquiries);
});

// 서버 시작
app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
```

### 설명

1. **Express.js**: 이 코드는 Express.js 프레임워크를 사용하여 웹 서버를 구현한다. Express.js는 Node.js 환경에서 웹 애플리케이션을 쉽게 구축할 수 있도록 도와준다.
  
2. **Body-Parser**: `body-parser` 미들웨어를 사용하여 요청 본문을 JSON 형식으로 파싱한다.

3. **문의 접수 및 조회**: `/inquiry` 엔드포인트에서는 POST 요청을 통해 외국인 고객의 문의를 접수하고, `/inquiries` 엔드포인트에서는 접수된 문의 목록을 조회할 수 있다.

4. **유효성 검사**: 문의 접수 시 모든 필드가 입력되었는지 확인하는 간단한 유효성 검사를 포함하고 있다.

이 코드를 통해 외국인 고객의 문의를 보다 효율적으로 관리할 수 있는 기본적인 시스템을 구축할 수 있다. 이를 기반으로 추가적인 기능을 개발하여 상담 인력의 업무를 지원할 수 있을 것이다.