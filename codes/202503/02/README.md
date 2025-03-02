이번 뉴스 주제 중 "AI시대, 불안한 마음들… 어떤 직업 가져야 하나요?"에 대한 내용을 바탕으로, Java를 사용하여 AI 관련 직업 정보를 검색하고 필터링하는 간단한 예제 코드를 작성하였다. 이 코드는 Java의 `Stream` API를 활용하여 직업 목록을 필터링하는 기능을 구현한다.

```java
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

class Job {
    private String title;
    private String field;

    public Job(String title, String field) {
        this.title = title;
        this.field = field;
    }

    public String getTitle() {
        return title;
    }

    public String getField() {
        return field;
    }

    @Override
    public String toString() {
        return title + " - " + field;
    }
}

public class JobFilter {
    public static void main(String[] args) {
        List<Job> jobs = new ArrayList<>();
        jobs.add(new Job("AI 연구원", "인공지능"));
        jobs.add(new Job("데이터 과학자", "데이터 분석"));
        jobs.add(new Job("소프트웨어 개발자", "프로그래밍"));
        jobs.add(new Job("비즈니스 분석가", "비즈니스"));
        jobs.add(new Job("AI 시스템 엔지니어", "인공지능"));

        String searchField = "인공지능";

        List<Job> filteredJobs = jobs.stream()
            .filter(job -> job.getField().equalsIgnoreCase(searchField))
            .collect(Collectors.toList());

        System.out.println("검색한 분야: " + searchField);
        System.out.println("해당 분야의 직업 목록:");
        filteredJobs.forEach(System.out::println);
    }
}
```

위 코드는 다양한 직업 목록에서 특정 분야(여기서는 "인공지능")에 해당하는 직업만을 필터링하여 출력하는 기능을 수행한다. `Job` 클래스는 직업의 제목과 분야를 저장하고, `JobFilter` 클래스의 `main` 메서드에서는 직업 목록을 생성한 후 `Stream` API를 사용하여 분야에 따라 필터링한 결과를 출력한다. 이 예제는 AI 관련 직업에 대한 정보를 효과적으로 검색하고 필터링하는 데 유용할 수 있다.