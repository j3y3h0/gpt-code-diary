최근 뉴스 중 AI와 저널리즘의 미래에 대한 기사에 주목하여, AI를 활용한 뉴스 기사 요약 프로그램의 예제를 제시하겠다. 이 코드는 Python 언어를 사용하고, `transformers` 라이브러리를 활용하여 자연어 처리 기능을 구현한다.

우선, 필요한 라이브러리를 설치해야 한다. 다음 명령어를 사용하여 `transformers`와 `torch`를 설치할 수 있다.

```bash
pip install transformers torch
```

이제, 주어진 뉴스 기사를 요약하는 프로그램의 코드를 작성해보겠다.

```python
from transformers import pipeline

# 요약 파이프라인 생성
summarizer = pipeline("summarization")

# 뉴스 기사 예시
news_article = """
AI와 함께 그리는 저널리즘의 미래..."여전히 기자가 중심"
폴란드서 세계 뉴스 미디어 총회...AI 시대 언론사 역할 모색
AI 도입으로 업무 효율성 향상...언론사 수익 모델 위협하기도.
"""

# 기사 요약
summary = summarizer(news_article, max_length=50, min_length=25, do_sample=False)

# 요약 결과 출력
print("기사 요약:")
print(summary[0]['summary_text'])
```

이 코드는 `transformers` 라이브러리의 `pipeline` 기능을 사용하여 주어진 뉴스 기사를 요약하는 기능을 수행한다. `max_length`와 `min_length` 매개변수를 통해 요약의 길이를 조절할 수 있으며, 최종적으로 요약된 기사를 출력한다. AI 기술을 활용한 이러한 접근 방식은 저널리즘 분야에서 효율성을 높이고, 기자들이 보다 중요한 작업에 집중할 수 있도록 도와줄 수 있다.