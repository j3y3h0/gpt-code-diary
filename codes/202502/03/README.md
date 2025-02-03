최근 SKT가 업무용 AI '에이닷 비즈'의 베타 테스트를 시작한 소식이 있다. 이에 따라, 업무에 활용할 수 있는 간단한 AI 챗봇을 생성하는 예제를 제시하고자 한다. 이 예제는 JavaScript와 `node.js` 환경에서 동작하며, `express`와 `axios` 라이브러리를 사용하여 간단한 API 호출을 포함한다.

```javascript
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/chatbot', async (req, res) => {
    const userMessage = req.body.message;

    try {
        // OpenAI API 호출
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }],
        }, {
            headers: {
                'Authorization': `Bearer YOUR_API_KEY`, // 자신의 API 키를 입력해야 함
                'Content-Type': 'application/json'
            }
        });

        const botReply = response.data.choices[0].message.content;
        res.json({ reply: botReply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: '서버 오류가 발생했습니다.' });
    }
});

app.listen(PORT, () => {
    console.log(`서버가 ${PORT} 포트에서 실행 중입니다.`);
});
```

위 코드는 간단한 챗봇 서버를 구현한다. 사용자가 `/chatbot` 엔드포인트에 메시지를 보내면, OpenAI API를 통해 응답을 받아 클라이언트에게 돌려준다. 이 코드에서 `YOUR_API_KEY` 부분에는 본인의 OpenAI API 키를 입력하여야 한다. 

이와 같이 AI 기술을 활용하여 업무에서의 효율성을 높일 수 있는 다양한 응용 프로그램을 개발할 수 있다.