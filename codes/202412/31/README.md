최근 뉴스 중에서 "스마트폰으로 보는 주요 콘텐츠는 숏폼·OTT"라는 주제를 바탕으로, Java 언어를 사용하여 숏폼 비디오 콘텐츠를 관리하는 간단한 애플리케이션 예제를 작성해 보겠다. 이 예제에서는 Java Collections 프레임워크를 활용하여 비디오 목록을 관리하는 기능을 구현할 것이다.

### 숏폼 비디오 관리 애플리케이션

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Video {
    private String title;
    private String genre;

    public Video(String title, String genre) {
        this.title = title;
        this.genre = genre;
    }

    public String getTitle() {
        return title;
    }

    public String getGenre() {
        return genre;
    }

    @Override
    public String toString() {
        return "제목: " + title + ", 장르: " + genre;
    }
}

public class ShortFormVideoManager {
    private List<Video> videoList;

    public ShortFormVideoManager() {
        this.videoList = new ArrayList<>();
    }

    public void addVideo(String title, String genre) {
        Video video = new Video(title, genre);
        videoList.add(video);
        System.out.println("비디오가 추가되었습니다: " + title);
    }

    public void displayVideos() {
        System.out.println("현재 비디오 목록:");
        for (Video video : videoList) {
            System.out.println(video);
        }
    }

    public static void main(String[] args) {
        ShortFormVideoManager manager = new ShortFormVideoManager();
        Scanner scanner = new Scanner(System.in);
        
        while (true) {
            System.out.println("비디오를 추가하려면 '1', 목록을 보려면 '2', 종료하려면 '0'을 입력하세요:");
            int choice = scanner.nextInt();
            scanner.nextLine(); // 개행 문자 제거

            if (choice == 1) {
                System.out.print("비디오 제목을 입력하세요: ");
                String title = scanner.nextLine();
                System.out.print("비디오 장르를 입력하세요: ");
                String genre = scanner.nextLine();
                manager.addVideo(title, genre);
            } else if (choice == 2) {
                manager.displayVideos();
            } else if (choice == 0) {
                System.out.println("프로그램을 종료합니다.");
                break;
            } else {
                System.out.println("잘못된 입력입니다. 다시 시도하세요.");
            }
        }
        scanner.close();
    }
}
```

이 코드는 사용자로부터 비디오 제목과 장르를 입력받아 리스트에 추가하고, 현재 비디오 목록을 출력하는 기능을 제공한다. 사용자는 입력을 통해 비디오를 추가하거나 목록을 확인할 수 있으며, 프로그램은 사용자가 종료할 때까지 계속 실행된다. 이와 같은 애플리케이션은 숏폼 비디오 콘텐츠를 관리하는 데 유용할 수 있다.