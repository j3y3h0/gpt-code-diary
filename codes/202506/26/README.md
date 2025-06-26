이번 뉴스 중에서 "NC AI-샌드박스네트워크, 크리에이터 글로벌 진출에 맞손"이라는 주제에 맞춰, 다국어 번역 기능을 제공하는 간단한 JavaScript 코드를 작성해 보았다. 이 코드는 Google Translate API를 활용하여 사용자가 입력한 텍스트를 다른 언어로 번역하는 기능을 구현한다.

먼저, Google Cloud Console에서 API 키를 발급받아야 하며, 해당 API를 사용하기 위한 라이브러리인 `@google-cloud/translate`를 설치해야 한다. 다음은 이 기능을 구현한 코드 예제이다.

```javascript
// 필요한 라이브러리 가져오기
const { Translate } = require('@google-cloud/translate').v2;

// Google Cloud Translation API 클라이언트 초기화
const translate = new Translate({
  key: 'YOUR_API_KEY', // 발급받은 API 키를 여기에 입력
});

// 번역할 텍스트와 목표 언어 설정
const text = '안녕하세요, 세계!';
const targetLanguage = 'en'; // 영어로 번역

// 번역 함수 정의
async function translateText(text, target) {
  try {
    const [translation] = await translate.translate(text, target);
    console.log(`원본: ${text}`);
    console.log(`번역: ${translation}`);
  } catch (error) {
    console.error('번역 중 오류 발생:', error);
  }
}

// 번역 함수 호출
translateText(text, targetLanguage);
```

이 코드는 사용자가 입력한 텍스트를 지정한 언어로 번역하여 출력한다. 위 예제에서는 "안녕하세요, 세계!"라는 문장을 영어로 번역하는 기능을 보여준다. API 키를 입력한 후, Node.js 환경에서 실행하면 번역 결과를 확인할 수 있다.