이번 뉴스 중 넷마블의 게임 '왕좌의 게임: 킹스로드' 글로벌 정식 출시와 관련하여, Java 언어를 사용하여 간단한 게임 점수 리더보드 시스템을 구현하는 코드를 작성해 보겠다. 이 코드는 사용자가 점수를 입력하고, 점수를 기록하고, 현재 점수 순위를 출력하는 기능을 제공한다. 이를 위해 Java의 컬렉션 프레임워크를 활용할 것이다.

```java
import java.util.*;

public class GameLeaderboard {
    private Map<String, Integer> leaderboard;

    public GameLeaderboard() {
        this.leaderboard = new HashMap<>();
    }

    // 점수 추가 메서드
    public void addScore(String playerName, int score) {
        leaderboard.put(playerName, leaderboard.getOrDefault(playerName, 0) + score);
    }

    // 리더보드 출력 메서드
    public void printLeaderboard() {
        List<Map.Entry<String, Integer>> sortedLeaderboard = new ArrayList<>(leaderboard.entrySet());
        sortedLeaderboard.sort((entry1, entry2) -> entry2.getValue().compareTo(entry1.getValue()));

        System.out.println("리더보드:");
        for (Map.Entry<String, Integer> entry : sortedLeaderboard) {
            System.out.println(entry.getKey() + ": " + entry.getValue() + " 점");
        }
    }

    public static void main(String[] args) {
        GameLeaderboard leaderboard = new GameLeaderboard();
        
        // 예시 점수 추가
        leaderboard.addScore("플레이어1", 150);
        leaderboard.addScore("플레이어2", 200);
        leaderboard.addScore("플레이어1", 100);
        leaderboard.addScore("플레이어3", 250);
        
        // 리더보드 출력
        leaderboard.printLeaderboard();
    }
}
```

위 코드는 `GameLeaderboard` 클래스를 정의하고, 점수를 추가하고 리더보드를 출력하는 기능을 포함하고 있다. `HashMap`을 사용하여 플레이어의 점수를 저장하고, `ArrayList`와 `Collections.sort`를 통해 점수를 기준으로 정렬하여 리더보드를 출력한다. 이 코드는 게임 개발 및 리더보드 시스템을 구현하는 데 유용할 수 있다.