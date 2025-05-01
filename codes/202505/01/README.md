최근 뉴스에서 SKT 해킹 사태와 관련된 내용을 바탕으로, 사용자 정보를 안전하게 암호화하는 간단한 Java 코드 예제를 작성하였다. 이 코드는 `javax.crypto` 패키지를 사용하여 AES 알고리즘으로 데이터를 암호화하고 복호화하는 기능을 제공한다.

```java
import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64;

public class AESCryptography {

    private static final String ALGORITHM = "AES";

    // 데이터 암호화
    public static String encrypt(String data, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.ENCRYPT_MODE, key);
        byte[] encryptedData = cipher.doFinal(data.getBytes());
        return Base64.getEncoder().encodeToString(encryptedData);
    }

    // 데이터 복호화
    public static String decrypt(String encryptedData, SecretKey key) throws Exception {
        Cipher cipher = Cipher.getInstance(ALGORITHM);
        cipher.init(Cipher.DECRYPT_MODE, key);
        byte[] decryptedData = cipher.doFinal(Base64.getDecoder().decode(encryptedData));
        return new String(decryptedData);
    }

    public static void main(String[] args) {
        try {
            // AES 키 생성
            KeyGenerator keyGenerator = KeyGenerator.getInstance(ALGORITHM);
            keyGenerator.init(128); // 128 비트 키
            SecretKey secretKey = keyGenerator.generateKey();

            String originalData = "사용자 정보 예시";
            String encryptedData = encrypt(originalData, secretKey);
            String decryptedData = decrypt(encryptedData, secretKey);

            System.out.println("원본 데이터: " + originalData);
            System.out.println("암호화된 데이터: " + encryptedData);
            System.out.println("복호화된 데이터: " + decryptedData);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

이 코드는 사용자의 정보를 안전하게 보호하기 위해 AES 암호화를 적용하는 방법을 보여준다. 사용자가 입력한 데이터는 암호화되어 안전하게 저장될 수 있으며, 이후 복호화 과정을 통해 원본 데이터를 복원할 수 있다. 이를 통해 데이터 보안 강화를 위한 기초적인 접근 방식을 이해할 수 있다.