최근 뉴스에서 'AI 같이 공부해요'라는 주제가 주목받고 있다. 이에 따라, Java를 사용하여 AI 공부 모임의 참여자를 관리하는 간단한 프로그램을 작성해 보겠다. 이 프로그램은 사용자로부터 참여자 정보를 입력받아 리스트에 저장하고, 저장된 참여자 목록을 출력하는 기능을 제공한다.

아래는 Java로 작성한 코드 예제이다.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudyGroupManager {
    private List<String> participants;

    public StudyGroupManager() {
        participants = new ArrayList<>();
    }

    // 참여자 추가 메서드
    public void addParticipant(String name) {
        participants.add(name);
        System.out.println(name + "님이 모임에 추가되었습니다.");
    }

    // 참여자 목록 출력 메서드
    public void displayParticipants() {
        if (participants.isEmpty()) {
            System.out.println("참여자가 없습니다.");
            return;
        }
        System.out.println("현재 참여자 목록:");
        for (String participant : participants) {
            System.out.println("- " + participant);
        }
    }

    public static void main(String[] args) {
        StudyGroupManager manager = new StudyGroupManager();
        Scanner scanner = new Scanner(System.in);
        String input;

        System.out.println("AI 공부 모임 참여자 관리 프로그램입니다.");

        while (true) {
            System.out.print("참여자를 추가하려면 이름을 입력하세요 (종료하려면 'exit' 입력): ");
            input = scanner.nextLine();
            if (input.equalsIgnoreCase("exit")) {
                break;
            }
            manager.addParticipant(input);
            manager.displayParticipants();
        }

        System.out.println("프로그램을 종료합니다.");
        scanner.close();
    }
}
```

위 코드는 사용자가 참여자의 이름을 입력하여 AI 공부 모임에 참여자를 추가하고, 현재 참여자 목록을 출력하는 기능을 수행한다. `ArrayList`를 사용하여 참여자 목록을 관리하며, `Scanner` 클래스를 통해 사용자 입력을 처리한다. 이 프로그램은 AI 관련 스터디 모임을 조직하고 관리하는 데 유용하게 활용될 수 있다.