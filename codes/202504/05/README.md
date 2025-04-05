최근 뉴스 중 "AI는 감정을 나누는 창작파트너가 될 수 있을까"라는 주제가 눈에 띈다. 이에 따라, Java를 이용하여 간단한 감정 분석 프로그램의 예제를 작성해 보겠다. 이 프로그램은 사용자가 입력한 텍스트의 감정을 분석하고, 그 결과를 출력하는 기능을 가진다. 감정 분석에는 자연어 처리 라이브러리인 `Stanford NLP`를 사용하겠다.

다음은 감정 분석 프로그램의 코드 예제이다.

```java
import edu.stanford.nlp.pipeline.*;
import edu.stanford.nlp.ling.*;
import edu.stanford.nlp.util.*;
import java.util.*;

public class EmotionAnalysis {
    public static void main(String[] args) {
        // Stanford NLP 파이프라인 구성
        Properties props = new Properties();
        props.setProperty("annotators", "tokenize,ssplit,pos,lemma,ner,sentiment");
        props.setProperty("ner.useSUTime", "false");
        StanfordCoreNLP pipeline = new StanfordCoreNLP(props);

        // 사용자 입력 텍스트
        String text = "나는 오늘 정말 기분이 좋다.";
        
        // 텍스트를 Annotation 객체로 변환
        Annotation annotation = new Annotation(text);
        pipeline.annotate(annotation);

        // 감정 분석 결과 출력
        List<CoreMap> sentences = annotation.get(CoreAnnotations.SentencesAnnotation.class);
        for (CoreMap sentence : sentences) {
            String sentiment = sentence.get(SentimentCoreAnnotations.SentimentClass.class);
            System.out.println("입력한 문장: " + sentence.toString());
            System.out.println("감정: " + sentiment);
        }
    }
}
```

### 코드 설명
1. **Stanford NLP 라이브러리**: 이 코드는 Stanford NLP 라이브러리를 사용하여 감정 분석을 수행한다. 이 라이브러리를 사용하기 위해서는 해당 라이브러리를 프로젝트에 포함시켜야 한다.
2. **텍스트 입력**: 사용자가 분석하고자 하는 텍스트를 입력할 수 있다.
3. **감정 분석**: 분석 결과는 감정의 종류(예: 긍정적, 부정적, 중립적 등)로 출력된다.

이 프로그램을 통해 AI가 감정을 이해하고 표현하는 방법에 대한 기초적인 이해를 도울 수 있다. 감정 분석은 다양한 분야에서 활용될 수 있는 유용한 기능이다.