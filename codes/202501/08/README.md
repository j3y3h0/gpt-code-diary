이번 뉴스에서 "KT 대학생 IT 서포터스, 중학생 대상 AI 교육"이라는 주제를 바탕으로, 중학생들에게 AI를 교육하기 위한 간단한 예시 코드를 작성해 보았다. 이 코드는 JavaScript를 사용하여 AI 챗봇을 구현하는 예시이다. 이 챗봇은 사용자의 질문에 간단한 답변을 제공하는 기능을 가진다. 아래의 코드는 `readline` 모듈을 사용하여 콘솔에서 사용자 입력을 받을 수 있는 기능을 포함하고 있다.

```javascript
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 간단한 AI 챗봇 응답을 정의하는 객체
const chatbotResponses = {
    "안녕하세요": "안녕하세요! 무엇을 도와드릴까요?",
    "AI란 무엇인가요?": "AI는 인공지능의 약자로, 기계가 인간처럼 학습하고 문제를 해결할 수 있도록 하는 기술입니다.",
    "프로그래밍 언어는 무엇이 있나요?": "프로그래밍 언어에는 JavaScript, Python, Java, C++ 등이 있습니다.",
    "안녕": "안녕하세요! 또 다른 질문이 있으신가요?",
    "끝": "대화해 주셔서 감사합니다. 안녕히 가세요!"
};

// 사용자 질문에 대한 응답을 처리하는 함수
function getResponse(userInput) {
    return chatbotResponses[userInput] || "죄송합니다. 그 질문에 대한 답변을 알지 못합니다.";
}

// 대화 시작
console.log("AI 챗봇에 질문해 보세요! (종료하려면 '끝'이라고 입력하세요.)");

rl.on('line', (input) => {
    const response = getResponse(input);
    console.log(response);
    
    if (input === "끝") {
        rl.close();
    }
});
```

위 코드는 간단한 콘솔 기반 AI 챗봇을 구현하여 사용자가 입력한 질문에 대해 미리 정의된 답변을 제공하는 기능을 갖추고 있다. 사용자는 "안녕하세요", "AI란 무엇인가요?", "프로그래밍 언어는 무엇이 있나요?" 등의 질문을 입력할 수 있으며, 챗봇은 이에 대한 적절한 답변을 출력한다. "끝"이라는 입력을 통해 대화를 종료할 수 있다. 이 코드를 통해 중학생들은 AI의 기본 개념과 프로그래밍의 기초를 학습하는 데 도움을 받을 수 있을 것이다.