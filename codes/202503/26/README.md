최근 SK브로드밴드가 양자내성암호 전용회선을 구축했다는 소식에 따라, JavaScript를 사용하여 간단한 암호화 및 복호화 기능을 구현하는 예제를 작성해 보았다. 이 예제에서는 `crypto` 라이브러리를 활용하여 문자열을 암호화하고 복호화하는 방법을 보여준다.

```javascript
const crypto = require('crypto');

// 비밀 키와 초기화 벡터 생성
const secretKey = crypto.randomBytes(32); // 32 바이트의 비밀 키 생성
const iv = crypto.randomBytes(16); // 16 바이트의 초기화 벡터 생성

// 문자열 암호화 함수
function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return { iv: iv.toString('hex'), encryptedData: encrypted };
}

// 문자열 복호화 함수
function decrypt(encryptedData) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, Buffer.from(encryptedData.iv, 'hex'));
    let decrypted = decipher.update(encryptedData.encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

// 사용 예시
const textToEncrypt = "안녕하세요, 양자내성암호를 사용해 보세요!";
const encryptedData = encrypt(textToEncrypt);
console.log("암호화된 데이터:", encryptedData);

const decryptedData = decrypt(encryptedData);
console.log("복호화된 데이터:", decryptedData);
```

이 코드는 사용자가 입력한 문자열을 AES-256-CBC 알고리즘을 사용하여 암호화하고, 다시 복호화하는 기능을 제공한다. 암호화된 데이터는 초기화 벡터와 함께 반환되며, 이를 통해 복호화가 가능하다. 이처럼 양자내성암호와 관련된 기술을 JavaScript로 구현할 수 있는 예시를 통해, 암호화의 기본 개념을 이해하는 데 도움을 줄 수 있다.