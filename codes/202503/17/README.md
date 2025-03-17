최근 방통위에서 방송·통신 공공 데이터 활용 공모전을 처음 개최했다는 소식에 따라, 공공 데이터를 활용하여 유용한 정보를 제공하는 Java 코드를 작성해 보겠다. 이 코드에서는 Java의 `HttpURLConnection`을 이용해 공공 API에 접근하고, JSON 데이터를 파싱하기 위해 `org.json` 라이브러리를 사용할 것이다.

아래는 공공 API에서 데이터를 가져와 출력하는 예제 코드이다.

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONArray;
import org.json.JSONObject;

public class PublicDataFetcher {
    private static final String API_URL = "https://api.example.com/publicdata"; // 실제 API URL로 변경해야 함

    public static void main(String[] args) {
        try {
            // API에 GET 요청을 보낸다.
            URL url = new URL(API_URL);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            // 응답 코드 확인
            int responseCode = connection.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) {
                BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                String inputLine;
                StringBuilder response = new StringBuilder();

                // 응답 데이터 읽기
                while ((inputLine = in.readLine()) != null) {
                    response.append(inputLine);
                }
                in.close();

                // JSON 데이터 파싱
                JSONArray jsonArray = new JSONArray(response.toString());
                for (int i = 0; i < jsonArray.length(); i++) {
                    JSONObject jsonObject = jsonArray.getJSONObject(i);
                    // 필요한 데이터 필드 출력
                    System.out.println("제목: " + jsonObject.getString("title"));
                    System.out.println("내용: " + jsonObject.getString("content"));
                }
            } else {
                System.out.println("GET 요청 실패: " + responseCode);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

위 코드에서 사용된 `HttpURLConnection`은 URL에 HTTP 요청을 보내고, `org.json` 라이브러리는 JSON 형식의 데이터를 파싱하는 데 사용된다. API URL은 해당 공공 데이터 API의 실제 URL로 변경해야 한다. 이 코드는 공공 데이터를 활용하여 필요한 정보를 추출하고 출력하는 기능을 가진다.