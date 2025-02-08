### 카카오톡 메모장 기능을 위한 간단한 자바스크립트 코드 예제

최근 카카오톡의 메모장 기능이 강화되었다는 소식에 착안하여, 사용자에게 메모를 저장하고 불러오는 기능을 제공하는 간단한 자바스크립트 애플리케이션을 만들어 보았다. 이 코드는 로컬 스토리지를 활용하여 사용자의 메모를 저장하고 관리할 수 있도록 설계되었다.

```javascript
// 메모를 저장하는 함수
function saveMemo() {
    const memoInput = document.getElementById("memoInput").value;
    if (memoInput) {
        localStorage.setItem("userMemo", memoInput);
        alert("메모가 저장되었습니다.");
    } else {
        alert("메모를 입력해 주세요.");
    }
}

// 메모를 불러오는 함수
function loadMemo() {
    const savedMemo = localStorage.getItem("userMemo");
    if (savedMemo) {
        document.getElementById("memoDisplay").innerText = savedMemo;
    } else {
        document.getElementById("memoDisplay").innerText = "저장된 메모가 없습니다.";
    }
}

// HTML 구조
document.body.innerHTML = `
    <h1>메모장</h1>
    <textarea id="memoInput" placeholder="메모를 입력하세요..." rows="4" cols="50"></textarea><br>
    <button onclick="saveMemo()">메모 저장</button>
    <button onclick="loadMemo()">메모 불러오기</button>
    <h2>저장된 메모:</h2>
    <div id="memoDisplay" style="border: 1px solid #ccc; padding: 10px;"></div>
`;

// 초기 메모 로드
loadMemo();
```

이 코드는 사용자가 텍스트 영역에 메모를 입력하고 버튼을 클릭하여 메모를 저장하거나 불러오는 기능을 제공한다. 로컬 스토리지를 사용하여 데이터가 브라우저에 저장되므로, 페이지를 새로 고침해도 메모가 사라지지 않는다. 이처럼 간단한 메모장 기능을 통해 카카오톡과 유사한 사용자 경험을 제공할 수 있다.