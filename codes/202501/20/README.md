이번 뉴스 중에서 "UNIST '챗봇과 대화, 외로움·불안 완화에 효과'"라는 주제를 선택하였다. 이를 바탕으로 자바를 이용한 간단한 챗봇 프로그램 샘플 코드를 제공하겠다. 이 프로그램은 사용자로부터 입력을 받아 기본적인 응답을 제공하는 기능을 구현한다.

```java
import java.util.Scanner;

public class SimpleChatbot {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String userInput;

        System.out.println("안녕하세요! 저는 간단한 챗봇입니다. 대화를 시작해보세요.");

        while (true) {
            System.out.print("당신: ");
            userInput = scanner.nextLine();

            // 종료 조건
            if (userInput.equalsIgnoreCase("종료")) {
                System.out.println("챗봇: 대화해 주셔서 감사합니다. 안녕히 가세요!");
                break;
            }

            // 기본 응답 로직
            String response = generateResponse(userInput);
            System.out.println("챗봇: " + response);
        }

        scanner.close();
    }

    private static String generateResponse(String input) {
        // 간단한 응답 로직
        if (input.contains("외로움")) {
            return "외로움은 많은 사람들이 느끼는 감정입니다. 대화를 나누는 것이 도움이 될 수 있어요.";
        } else if (input.contains("불안")) {
            return "불안감을 느낄 때는 심호흡이나 마음을 가라앉히는 방법이 도움이 될 수 있습니다.";
        } else {
            return "그것에 대해 더 이야기하고 싶어요.";
        }
    }
}
```

위 코드는 사용자와의 기본적인 대화를 수행하는 간단한 챗봇을 구현한 것이다. 사용자가 "외로움"이나 "불안"이라는 단어를 입력하면, 챗봇이 이에 대한 응답을 제공한다. 사용자가 "종료"라고 입력하면 대화가 종료된다. 이 예제는 챗봇의 기본적인 동작을 이해하는 데 유용하다.