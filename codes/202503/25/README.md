스팸 문자 차단 기술이 최근 주목받고 있는 가운데, JavaScript를 사용하여 간단한 스팸 필터링 기능을 구현하는 예제를 제공하고자 한다. 이 코드는 정규 표현식을 사용하여 특정 키워드를 포함한 메시지를 필터링하는 기능을 포함한다.

```javascript
// 스팸 필터링 함수
function spamFilter(messages) {
    // 스팸으로 간주할 키워드 목록
    const spamKeywords = [
        '무료', 
        '당첨', 
        '바로 지금', 
        '긴급', 
        '확인하세요'
    ];

    // 각 메시지를 검사하여 스팸 여부를 판단
    return messages.filter(message => {
        return !spamKeywords.some(keyword => message.includes(keyword));
    });
}

// 테스트용 메시지 배열
const messages = [
    '당신은 무료 상품에 당첨되었습니다!',
    '안녕하세요, 오늘의 날씨는 좋습니다.',
    '긴급: 귀하의 계정을 확인하세요.',
    '새로운 소식이 있습니다. 확인하세요!',
    '바로 지금 가입하면 추가 혜택을 드립니다.',
    '올해도 건강하세요!'
];

// 스팸 필터링 결과
const filteredMessages = spamFilter(messages);
console.log(filteredMessages);
```

이 코드는 `spamFilter` 함수를 정의하여 주어진 메시지 목록에서 스팸 메시지를 필터링한다. 스팸으로 간주할 키워드 목록에 정의된 단어가 포함된 메시지는 결과에서 제외된다. 이와 같은 방식으로 사용자는 스팸 메시지를 효과적으로 관리할 수 있다.