이번 뉴스에서 "AI 반도체부터 사이버보안까지…올해 ICT 연구개발 성과"라는 주제를 바탕으로, Java를 이용하여 간단한 사이버 보안 관련 프로그램을 작성해보겠다. 이 예제에서는 Apache Commons Crypto 라이브러리를 사용하여 데이터를 암호화하고 복호화하는 기능을 구현할 것이다.

### Java를 이용한 데이터 암호화 및 복호화 예제

```java
import org.apache.commons.crypto.cipher.CryptoCipher;
import org.apache.commons.crypto.utils.Utils;

import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.util.Arrays;

public class CryptoExample {
    private static final String ALGORITHM = "AES";

    public static void main(String[] args) throws Exception {
        String key = "1234567890123456"; // 16바이트 키
        String originalText = "안녕하세요, 사이버 보안 테스트입니다.";

        // 데이터 암호화
        byte[] encryptedData = encrypt(originalText, key);
        System.out.println("암호화된 데이터: " + Arrays.toString(encryptedData));

        // 데이터 복호화
        String decryptedText = decrypt(encryptedData, key);
        System.out.println("복호화된 데이터: " + decryptedText);
    }

    public static byte[] encrypt(String data, String key) throws Exception {
        byte[] inputData = data.getBytes(StandardCharsets.UTF_8);
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), ALGORITHM);
        CryptoCipher cipher = Utils.getCipherInstance(ALGORITHM + "/ECB/PKCS5Padding", null);
        cipher.init(CryptoCipher.ENCRYPT_MODE, secretKey);
        byte[] outputData = new byte[cipher.getOutputSize(inputData.length)];
        int updateLength = cipher.update(inputData, 0, inputData.length, outputData, 0);
        cipher.doFinal(outputData, updateLength);
        return outputData;
    }

    public static String decrypt(byte[] encryptedData, String key) throws Exception {
        SecretKeySpec secretKey = new SecretKeySpec(key.getBytes(StandardCharsets.UTF_8), ALGORITHM);
        CryptoCipher cipher = Utils.getCipherInstance(ALGORITHM + "/ECB/PKCS5Padding", null);
        cipher.init(CryptoCipher.DECRYPT_MODE, secretKey);
        byte[] outputData = new byte[cipher.getOutputSize(encryptedData.length)];
        int updateLength = cipher.update(encryptedData, 0, encryptedData.length, outputData, 0);
        cipher.doFinal(outputData, updateLength);
        return new String(outputData, StandardCharsets.UTF_8).trim();
    }
}
```

### 코드 설명
1. **Apache Commons Crypto 라이브러리**: 이 라이브러리는 Java에서 효율적으로 암호화를 처리할 수 있도록 지원한다.
2. **암호화 및 복호화 메서드**: `encrypt`와 `decrypt` 메서드를 통해 사용자가 입력한 문자열을 AES 알고리즘으로 암호화하고 복호화한다.
3. **키 관리**: 예제에서는 간단한 16바이트 키를 사용하였지만, 실제로는 안전하게 관리해야 한다.

이 코드는 사이버 보안을 위한 기본적인 암호화 기술을 보여주며, 실제 개발 환경에서 데이터 보호를 위한 출발점으로 활용될 수 있다.