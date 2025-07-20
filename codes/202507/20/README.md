### 웹사이트 보안 강화를 위한 간단한 로그인 시스템 구현

최근 보안 인력의 부족 문제와 관련하여, 웹사이트의 보안을 강화하는 간단한 로그인 시스템을 JavaScript로 구현해보겠다. 이 예제에서는 `express`와 `bcrypt` 라이브러리를 사용하여 비밀번호 해싱 및 인증을 처리한다.

#### 필요한 라이브러리 설치
먼저, 아래의 명령어로 필요한 라이브러리를 설치해야 한다.

```bash
npm install express bcrypt body-parser
```

#### 코드 예제
아래의 코드는 기본적인 로그인 API를 제공하는 예제이다.

```javascript
const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let users = []; // 사용자를 저장할 배열

// 사용자 등록 API
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).send('User registered successfully');
});

// 로그인 API
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);

    if (user && await bcrypt.compare(password, user.password)) {
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`서버가 ${PORT}번 포트에서 실행 중입니다.`);
});
```

#### 코드 설명
1. `express`: 웹 서버를 구축하기 위해 사용되는 프레임워크이다.
2. `bcrypt`: 비밀번호를 안전하게 해싱하기 위해 사용된다.
3. `body-parser`: 요청 본문을 JSON 형식으로 파싱하기 위해 사용된다.
4. `/register` 엔드포인트는 사용자를 등록하고, 비밀번호를 해싱하여 저장한다.
5. `/login` 엔드포인트는 사용자가 입력한 비밀번호를 해싱된 비밀번호와 비교하여 인증을 수행한다.

이 예제를 통해 사용자는 안전하게 계정을 등록하고 로그인할 수 있다. 보안 강화를 위해 추가적인 조치를 고려하는 것이 좋다.