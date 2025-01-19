최근 뉴스에서는 생성형 AI의 활용에 대한 논의가 활발하게 이루어지고 있다. 이에 따라, JavaScript를 사용하여 간단한 생성형 AI 텍스트 생성기를 구현해보겠다. 이 예제에서는 OpenAI의 GPT API를 사용할 것이다.

### JavaScript로 생성형 AI 텍스트 생성기 구현하기

다음 코드는 `axios` 라이브러리를 사용하여 OpenAI API에 요청을 보내고, 응답으로부터 생성된 텍스트를 받아오는 예제이다.

```javascript
// axios 라이브러리 설치 필요
// npm install axios

const axios = require('axios');

const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // 여기에 OpenAI API 키를 입력하세요.

async function generateText(prompt) {
    const url = 'https://api.openai.com/v1/completions';
    
    try {
        const response = await axios.post(url, {
            model: 'text-davinci-003', // 사용할 모델
            prompt: prompt,
            max_tokens: 100, // 생성할 최대 토큰 수
            temperature: 0.7 // 창의성 조절 (0~1)
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        const generatedText = response.data.choices[0].text.trim();
        console.log('생성된 텍스트:', generatedText);
    } catch (error) {
        console.error('오류 발생:', error);
    }
}

// 예시 프롬프트
const examplePrompt = "인공지능의 미래에 대해 설명해 주세요.";
generateText(examplePrompt);
```

### 코드 설명
- `axios` 라이브러리를 사용하여 OpenAI API에 POST 요청을 보낸다.
- 요청 본문에는 사용할 모델, 프롬프트, 최대 토큰 수, 그리고 온도를 설정한다.
- 응답으로부터 생성된 텍스트를 출력한다.
- `YOUR_OPENAI_API_KEY` 부분에 본인의 OpenAI API 키를 입력해야 한다.

위 코드를 통해 생성형 AI의 기본적인 활용 예를 살펴볼 수 있다. 이는 교육 및 다양한 산업에 걸쳐 AI 리터러시 교육의 중요성을 강조하는 데 기여할 수 있다.