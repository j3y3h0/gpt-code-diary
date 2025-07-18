이번 뉴스에서 "로블록스, 게임 속 '모르는 어른'과 청소년 채팅 차단"에 관한 내용을 바탕으로, 청소년 보호를 위한 간단한 채팅 필터링 시스템을 구현하는 자바스크립트 예제를 소개하고자 한다. 이 코드는 특정 키워드에 따라 메시지를 차단하는 기능을 포함한다. 

```javascript
// 필터링할 키워드 목록
const blockedKeywords = ["어른", "위험", "불법"];

// 채팅 메시지를 필터링하는 함수
function filterChatMessage(message) {
    for (let keyword of blockedKeywords) {
        if (message.includes(keyword)) {
            return "이 메시지는 차단되었습니다.";
        }
    }
    return message;
}

// 예제 메시지
const messages = [
    "안녕하세요, 저는 게임을 좋아하는 청소년입니다.",
    "이 게임은 어른들과 함께하기에 위험합니다.",
    "재미있는 게임이네요!"
];

// 필터링 결과 출력
messages.forEach(msg => {
    console.log(filterChatMessage(msg));
});
```

위 코드는 `blockedKeywords` 배열에 정의된 키워드가 포함된 메시지를 차단하는 `filterChatMessage` 함수를 구현하고 있다. `messages` 배열에 포함된 각 메시지를 필터링하여 결과를 출력한다. 이와 같은 기능은 청소년들이 안전하게 채팅할 수 있는 환경을 조성하는 데 기여할 수 있다.