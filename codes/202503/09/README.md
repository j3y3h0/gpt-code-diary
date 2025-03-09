## AI 기반의 대화형 챗봇 예제

최근 AI와 관련된 다양한 뉴스가 보도되고 있다. 특히 사람 중심의 AI 개발이 주목받고 있으며, 이를 위해 자연어 처리(NLP) 기술을 활용한 대화형 챗봇을 구현해보는 것이 유익할 것이다. 아래는 JavaScript와 Node.js 환경에서 `express`와 `node-fetch` 라이브러리를 사용하여 간단한 챗봇 서버를 구현하는 예제이다.

### 필요한 라이브러리 설치

먼저, 아래의 명령어를 통해 필요한 라이브러리를 설치해야 한다.

```bash
npm install express node-fetch
```

### 챗봇 서버 코드

아래 코드는 간단한 챗봇 서버를 설정하고, 사용자의 질문에 대해 OpenAI의 GPT-3 API를 통해 응답을 생성하는 기능을 포함하고 있다.

```javascript
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

app.use(express.json());

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // 여기에 OpenAI API 키를 입력해야 함

app.post('/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userMessage }],
            }),
        });

        const data = await response.json();
        const botReply = data.choices[0].message.content;

        res.json({ reply: botReply });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT}에서 실행 중입니다.`);
});
```

### 코드 설명

1. **라이브러리 임포트**: `express`와 `node-fetch`를 사용하여 웹 서버와 API 요청을 처리한다.
2. **서버 설정**: `/chatbot` 엔드포인트를 설정하고 POST 요청을 통해 사용자 메시지를 받는다.
3. **OpenAI API 호출**: 사용자의 메시지를 OpenAI의 GPT-3 모델에 보내고, 생성된 응답을 다시 클라이언트에 전달한다.
4. **오류 처리**: API 호출 중 오류가 발생할 경우, 적절한 오류 메시지를 반환한다.

이 예제를 통해 AI 챗봇을 구현하는 기본적인 방법을 이해할 수 있으며, 향후 다양한 기능을 추가하여 더욱 발전시킬 수 있다.