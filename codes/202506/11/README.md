# 데이터 분석을 위한 Java 코드 예제

최근 코오롱베니트가 SAS와 협력하여 데이터 기반 분석 사업을 확대하고 있다는 소식에 영감을 받아, Java를 이용한 데이터 분석의 간단한 예제를 작성하였다. 이 예제에서는 Apache Commons Math 라이브러리를 사용하여 기본적인 통계 분석을 수행할 것이다.

```java
import org.apache.commons.math3.stat.descriptive.DescriptiveStatistics;

public class DataAnalysisExample {
    public static void main(String[] args) {
        // 샘플 데이터 배열
        double[] data = {10.5, 22.3, 18.7, 14.8, 16.5, 24.0, 30.2, 19.7};

        // DescriptiveStatistics 객체 생성
        DescriptiveStatistics statistics = new DescriptiveStatistics();

        // 데이터 추가
        for (double num : data) {
            statistics.addValue(num);
        }

        // 통계 분석 결과 출력
        System.out.println("평균: " + statistics.getMean());
        System.out.println("중앙값: " + statistics.getPercentile(50));
        System.out.println("최댓값: " + statistics.getMax());
        System.out.println("최솟값: " + statistics.getMin());
        System.out.println("표준편차: " + statistics.getStandardDeviation());
    }
}
```

## 코드 설명
이 코드는 Apache Commons Math 라이브러리를 통해 간단한 통계 분석을 수행한다. 샘플 데이터 배열을 생성한 후, `DescriptiveStatistics` 클래스를 사용하여 평균, 중앙값, 최댓값, 최솟값 및 표준편차를 계산한다. 

### 라이브러리 설치 방법
Apache Commons Math 라이브러리를 사용하기 위해서는 Maven을 통한 의존성 추가가 필요하다. `pom.xml` 파일에 다음 코드를 추가하면 된다.

```xml
<dependency>
    <groupId>org.apache.commons</groupId>
    <artifactId>commons-math3</artifactId>
    <version>3.6.1</version>
</dependency>
```

이 코드는 데이터 기반 분석의 기초를 보여주며, 실제 비즈니스 환경에서도 유용하게 활용될 수 있다.