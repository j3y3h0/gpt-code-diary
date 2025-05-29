최근 AI와 관련된 뉴스가 많아지고 있으며, 기업들이 AI 기술을 활용하여 경쟁력을 강화하고 있다는 점이 주목할 만하다. 이에 따라, AI 모델을 학습하고 예측하는 간단한 Java 예제를 작성하였다. 이 예제는 `Weka`라는 머신러닝 라이브러리를 활용하여 데이터를 분류하는 기능을 포함하고 있다.

### Java 코드 예제: Weka를 이용한 데이터 분류

```java
import weka.classifiers.Classifier;
import weka.classifiers.trees.J48;
import weka.core.Instances;
import weka.core.converters.ConverterUtils.DataSource;

public class WekaClassificationExample {
    public static void main(String[] args) {
        try {
            // 데이터 소스 로드
            DataSource source = new DataSource("path/to/your/data.arff");
            Instances data = source.getDataSet();

            // 클래스 인덱스를 마지막 속성으로 설정
            if (data.classIndex() == -1) {
                data.setClassIndex(data.numAttributes() - 1);
            }

            // 분류기 생성
            Classifier classifier = new J48(); // 결정 트리 모델 사용

            // 모델 학습
            classifier.buildClassifier(data);

            // 예측 수행 (여기서는 첫 번째 인스턴스 예측)
            double label = classifier.classifyInstance(data.instance(0));
            System.out.println("예측된 클래스: " + data.classAttribute().value((int) label));

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### 설명
1. **데이터 소스 로드**: `DataSource` 클래스를 사용하여 ARFF 형식의 데이터를 로드한다.
2. **클래스 인덱스 설정**: 라벨이 마지막 속성으로 설정되도록 한다.
3. **분류기 생성**: `J48` 클래스를 통해 결정 트리 모델을 생성한다.
4. **모델 학습**: `buildClassifier` 메서드를 통해 모델을 학습한다.
5. **예측 수행**: 학습된 모델을 사용하여 첫 번째 인스턴스에 대한 클래스를 예측하고 출력한다.

위 코드는 Weka 라이브러리를 사용하여 머신러닝 모델을 간단하게 학습하고 예측하는 과정을 보여준다. Weka는 Java로 작성된 대표적인 머신러닝 라이브러리로, 데이터 분석 및 예측에 널리 사용된다. 이 코드를 통해 AI 기술의 기초적인 활용 방법을 이해할 수 있을 것이다.