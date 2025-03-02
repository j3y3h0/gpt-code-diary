AI와 관련된 최근 뉴스에 비추어, AI 기술을 활용한 간단한 Java 코드 예제를 작성해 보겠다. 이 코드는 자연어 처리(NLP) 라이브러리인 Stanford NLP를 사용하여 주어진 문장에서 명사 구를 추출하는 기능을 수행한다.

```java
import edu.stanford.nlp.pipeline.*;
import edu.stanford.nlp.ling.CoreAnnotations;
import edu.stanford.nlp.util.CoreMap;

import java.util.List;

public class NounPhraseExtractor {
    public static void main(String[] args) {
        // Stanford NLP 파이프라인 설정
        StanfordCoreNLP pipeline = new StanfordCoreNLP("properties/ner.properties");

        // 분석할 문장
        String text = "AI 시대에 우리는 어떤 직업을 가져야 할까?";

        // 문장을 CoreMap으로 변환
        CoreDocument document = new CoreDocument(text);
        pipeline.annotate(document);

        // 명사 구 추출
        for (CoreSentence sentence : document.sentences()) {
            List<String> nounPhrases = sentence.entityMentions().stream()
                    .map(entity -> entity.text())
                    .toList();

            System.out.println("명사 구: " + nounPhrases);
        }
    }
}
```

위 코드에서는 Stanford NLP 라이브러리를 사용하여 입력된 텍스트에서 명사 구를 추출하는 과정을 보여준다. `StanfordCoreNLP` 클래스를 통해 NLP 파이프라인을 설정하고, 입력된 문장을 분석하여 명사 구를 출력한다. 이 코드는 AI 관련 직업에 대한 문장 분석을 할 때 유용하게 사용될 수 있다. 

코드를 실행하기 위해서는 Stanford NLP 라이브러리를 Maven 또는 Gradle 프로젝트에 추가해야 하며, 필요한 데이터 파일을 다운로드하여 `properties/ner.properties` 경로에 위치시켜야 한다.