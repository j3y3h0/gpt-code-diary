이번 뉴스에서 'AI기본법'의 통과와 관련하여 인공지능을 활용한 간단한 예제 코드를 작성해 보았다. Java 언어를 사용하여 머신러닝 모델을 간단하게 구축하는 코드이다. 이 코드는 Weka 라이브러리를 활용하여 데이터를 분류하는 기능을 보여준다.

### Java 코드 예제: Weka를 이용한 Iris 데이터셋 분류

```java
import weka.classifiers.Classifier;
import weka.classifiers.trees.J48;
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;

public class IrisClassifier {
    public static void main(String[] args) {
        try {
            // 데이터셋 로드
            DataSource source = new DataSource("iris.arff");
            Instances data = source.getDataSet();

            // 클래스 인덱스 설정 (마지막 속성이 클래스)
            if (data.classIndex() == -1) {
                data.setClassIndex(data.numAttributes() - 1);
            }

            // 분류기 생성
            Classifier classifier = new J48(); // J48 의사결정 나무 알고리즘 사용
            
            // 모델 학습
            classifier.buildClassifier(data);

            // 모델 정보 출력
            System.out.println(classifier);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 코드 설명
- `DataSource`를 사용하여 Iris 데이터셋을 로드한다.
- 데이터셋에서 마지막 속성을 클래스 인덱스으로 설정한다.
- `J48` 분류기를 사용하여 데이터를 학습시킨다.
- 학습된 모델의 정보를 출력한다.

### 필요 라이브러리
이 코드를 실행하기 위해서는 Weka 라이브러리를 포함해야 한다. Maven을 사용하는 경우, 다음과 같이 `pom.xml`에 의존성을 추가할 수 있다.

```xml
<dependency>
    <groupId>nz.ac.waikato.cms.weka</groupId>
    <artifactId>weka-stable</artifactId>
    <version>3.8.5</version>
</dependency>
```

이 예제는 인공지능 기본법과 관련된 최신 뉴스에 따라 인공지능 기술을 이해하고 적용하는 데 도움이 될 것이다.