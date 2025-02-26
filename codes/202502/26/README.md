이번 뉴스 중 "삼성·애플 'AI 혼용' 전략 본격화…갤럭시에 챗GPT 탑재 전망"을 주제로 삼아, Java를 사용하여 간단한 챗봇 기능을 구현하는 예제를 작성해 보았다. 이 예제는 OpenAI의 GPT 모델과 통신하기 위해 HTTP 클라이언트를 사용하는 방법을 보여준다.

### Maven 의존성 추가
먼저, `pom.xml` 파일에 다음의 의존성을 추가하여 HTTP 클라이언트를 사용할 수 있도록 한다.

```xml
<dependencies>
    <dependency>
        <groupId>org.apache.httpcomponents</groupId>
        <artifactId>httpclient</artifactId>
        <version>4.5.13</version>
    </dependency>
    <dependency>
        <groupId>com.fasterxml.jackson.core</groupId>
        <artifactId>jackson-databind</artifactId>
        <version>2.12.3</version>
    </dependency>
</dependencies>
```

### 챗봇 클래스 구현
다음으로, OpenAI의 API를 호출하는 챗봇 클래스를 구현한다.

```java
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.Map;

public class ChatBot {
    private static final String API_KEY = "YOUR_API_KEY"; // OpenAI API 키
    private static final String API_URL = "https://api.openai.com/v1/chat/completions";

    public String getResponse(String userInput) throws Exception {
        CloseableHttpClient httpClient = HttpClients.createDefault();
        HttpPost postRequest = new HttpPost(API_URL);
        
        // 요청 헤더 설정
        postRequest.setHeader("Authorization", "Bearer " + API_KEY);
        postRequest.setHeader("Content-Type", "application/json");
        
        // 요청 바디 설정
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-3.5-turbo");
        requestBody.put("messages", new HashMap<String, String>() {{
            put("role", "user");
            put("content", userInput);
        }});
        
        ObjectMapper objectMapper = new ObjectMapper();
        String json = objectMapper.writeValueAsString(requestBody);
        postRequest.setEntity(new StringEntity(json));
        
        // API 호출
        try (CloseableHttpResponse response = httpClient.execute(postRequest)) {
            String jsonResponse = EntityUtils.toString(response.getEntity());
            Map<String, Object> responseMap = objectMapper.readValue(jsonResponse, HashMap.class);
            return responseMap.get("choices").toString();
        }
    }

    public static void main(String[] args) {
        ChatBot chatBot = new ChatBot();
        try {
            String userInput = "안녕하세요, 오늘 날씨는 어떤가요?";
            String botResponse = chatBot.getResponse(userInput);
            System.out.println("챗봇의 응답: " + botResponse);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 코드 설명
위 코드는 OpenAI의 GPT 모델에 사용자의 질문을 전송하고, 챗봇의 응답을 받아 출력하는 기본적인 기능을 구현하고 있다. 사용자는 `userInput` 변수를 통해 질문을 입력할 수 있으며, 챗봇의 응답은 콘솔에 출력된다.

### 사용 방법
- 위 코드를 복사하여 Java 프로젝트에 붙여넣고, OpenAI API 키를 입력한 후 실행하면 챗봇의 응답을 확인할 수 있다.
- 필요한 라이브러리는 Maven을 통해 관리되므로, 추가적인 설정 없이 바로 사용할 수 있다.