이번 뉴스 중 "보이스피싱 기승에 경찰청 직접 운영 예방앱 사용 급증"에 관련하여, 보이스피싱 예방을 위한 간단한 JavaScript 코드 예제를 작성하였다. 본 예제는 사용자가 전화번호를 입력하면 해당 번호가 보이스피싱 범죄에 연관되어 있는지를 확인하는 기능을 구현한다. 이 코드는 `fetch` API를 사용하여 외부 API에 접근하여 번호의 위험성을 판단하는 방식으로 구성되어 있다.

```javascript
// 보이스피싱 예방 확인 함수
async function checkForPhishing(phoneNumber) {
    try {
        const response = await fetch(`https://api.phishingcheck.com/check?number=${phoneNumber}`);
        const data = await response.json();

        if (data.isPhishing) {
            console.log(`경고: 전화번호 ${phoneNumber}는 보이스피싱과 관련이 있습니다.`);
        } else {
            console.log(`안전: 전화번호 ${phoneNumber}는 보이스피싱과 관련이 없습니다.`);
        }
    } catch (error) {
        console.error("오류 발생:", error);
    }
}

// 사용자 입력 받기
const phoneNumber = prompt("전화번호를 입력하세요:");
checkForPhishing(phoneNumber);
```

이 코드는 보이스피싱 번호를 확인하기 위해 외부 API를 호출하는 기능을 포함하고 있으며, 사용자가 입력한 전화번호에 대해 즉각적인 피드백을 제공한다. 이를 통해 사용자들이 보이스피싱에 대한 경각심을 높일 수 있도록 돕는다.