**title**: 웹사이트의 스팸 메시지 감지 및 차단 시스템

**language**: Python

**content**:
```python
import re
from flask import Flask, request, jsonify

app = Flask(__name__)

# 스팸 메시지 패턴 정의
SPAM_PATTERNS = [
    r'\b무료\b',
    r'\b돈\b',
    r'\b사기\b',
    r'\b확인\b',
]

def is_spam(message):
    """주어진 메시지가 스팸인지 확인하는 함수"""
    for pattern in SPAM_PATTERNS:
        if re.search(pattern, message):
            return True
    return False

@app.route('/submit', methods=['POST'])
def submit_message():
    """메시지를 제출하고 스팸 여부를 확인하는 API 엔드포인트"""
    data = request.json
    message = data.get('message', '')

    if is_spam(message):
        return jsonify({"status": "error", "message": "스팸 메시지로 판단되었습니다."}), 400
    else:
        return jsonify({"status": "success", "message": "메시지가 성공적으로 전송되었습니다."}), 200

if __name__ == '__main__':
    app.run(debug=True)
```

이 코드는 Flask를 사용하여 웹 서버를 구축하고, 사용자가 제출한 메시지에 스팸 여부를 판단하는 기능을 제공한다. 스팸 패턴을 정규 표현식으로 정의하여 메시지에 포함된 경우 이를 감지하고 차단하는 시스템이다.