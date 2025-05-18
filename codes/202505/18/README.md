### AI 음성 인식 프로그램 예제

최근 AI 기술의 발전으로 인해 음성 인식 기술이 주목받고 있다. 이 예제는 Java에서 Google Cloud Speech-to-Text API를 사용하여 음성을 텍스트로 변환하는 간단한 프로그램을 구현한다. 

#### 필요한 라이브러리

이 코드를 실행하기 위해서는 Google Cloud에 가입하고 Speech-to-Text API를 활성화한 후, 필요한 라이브러리를 Maven을 통해 추가해야 한다. 아래는 `pom.xml`에 추가해야 할 의존성이다.

```xml
<dependency>
    <groupId>com.google.cloud</groupId>
    <artifactId>google-cloud-speech</artifactId>
    <version>2.0.0</version>
</dependency>
```

#### Java 코드 예제

아래는 음성을 텍스트로 변환하는 Java 프로그램의 예이다.

```java
import com.google.cloud.speech.v1.RecognitionAudio;
import com.google.cloud.speech.v1.RecognitionConfig;
import com.google.cloud.speech.v1.RecognitionConfig.AudioEncoding;
import com.google.cloud.speech.v1.SpeechClient;
import com.google.cloud.speech.v1.RecognizeRequest;
import com.google.cloud.speech.v1.RecognizeResponse;
import com.google.cloud.speech.v1.RecognizeResponse.Transcript;
import com.google.protobuf.Duration;

import java.io.FileInputStream;
import java.io.IOException;

public class SpeechToTextExample {
    public static void main(String[] args) {
        String fileName = "path/to/your/audio/file.wav"; // 변환할 오디오 파일 경로

        try (SpeechClient speechClient = SpeechClient.create()) {
            // 오디오 파일 설정
            RecognitionAudio audio = RecognitionAudio.newBuilder()
                    .setContent(ByteString.readFrom(new FileInputStream(fileName)))
                    .build();

            // 인식 설정
            RecognitionConfig config = RecognitionConfig.newBuilder()
                    .setEncoding(AudioEncoding.LINEAR16)
                    .setSampleRateHertz(16000)
                    .setLanguageCode("ko-KR") // 한국어 설정
                    .build();

            // 요청 생성
            RecognizeRequest request = RecognizeRequest.newBuilder()
                    .setConfig(config)
                    .setAudio(audio)
                    .build();

            // 음성 인식 수행
            RecognizeResponse response = speechClient.recognize(request);
            for (Transcript transcript : response.getResultsList()) {
                System.out.printf("Transcript: %s\n", transcript.getAlternatives(0).getTranscript());
            }
        } catch (IOException e) {
            System.out.println("오류 발생: " + e.getMessage());
        }
    }
}
```

#### 코드 설명

1. **라이브러리 임포트**: Google Cloud Speech-to-Text API에 필요한 클래스를 임포트한다.
2. **파일 경로 설정**: 변환할 오디오 파일의 경로를 설정한다.
3. **SpeechClient 생성**: 음성 인식 클라이언트를 생성한다.
4. **오디오 및 인식 설정**: 오디오 파일과 인식에 필요한 설정을 구성한다.
5. **요청 생성 및 음성 인식**: 요청을 생성하고 음성을 인식하여 결과를 출력한다.

이 프로그램은 사용자가 제공한 오디오 파일을 텍스트로 변환하는 기능을 제공하며, 한국어 음성 인식에 최적화되어 있다.