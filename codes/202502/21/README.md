최근 뉴스 중 "당근, 고객센터 AI 검색·요약 기능 도입"이라는 주제를 선택하여, 고객센터에서 자주 묻는 질문에 대한 AI 기반의 검색 및 요약 기능을 구현하는 Python 코드를 작성해 보겠다. 이 코드는 자연어 처리(NLP) 라이브러리인 `transformers`와 `nltk`를 사용하여 질문을 분석하고 요약하는 기능을 포함하고 있다.

```python
# 필요한 라이브러리 설치
# pip install transformers nltk

import nltk
from transformers import pipeline

# NLTK 데이터 다운로드
nltk.download('punkt')

# 질문 목록 (예시)
faq = {
    "환불 정책은 어떻게 되나요?": "당사는 상품 수령 후 7일 이내에 환불 요청을 하실 수 있습니다. 단, 상품이 훼손되지 않아야 합니다.",
    "배송은 얼마나 걸리나요?": "주문 후 3-5일 이내에 배송됩니다. 지역에 따라 다소 차이가 있을 수 있습니다.",
    "고객센터에 어떻게 연락하나요?": "고객센터는 전화와 이메일로 연락하실 수 있으며, 운영 시간은 평일 오전 9시부터 오후 6시까지입니다."
}

# 질문에 대한 요약 기능
def summarize_faq(faq):
    summarizer = pipeline("summarization")
    summaries = {}
    
    for question, answer in faq.items():
        # 텍스트 요약
        summary = summarizer(answer, max_length=30, min_length=10, do_sample=False)
        summaries[question] = summary[0]['summary_text']
    
    return summaries

# 자주 묻는 질문 요약
summarized_faq = summarize_faq(faq)

# 결과 출력
for question, summary in summarized_faq.items():
    print(f"질문: {question}\n요약: {summary}\n")
```

위 코드는 고객센터에서 자주 묻는 질문과 그에 대한 답변을 기반으로 요약하는 기능을 구현하였다. 사용자는 질문을 입력하면, AI가 해당 질문의 답변을 요약하여 제공한다. 이 과정에서 `transformers` 라이브러리의 요약 모델을 활용하였다. 이러한 기능은 고객센터의 업무 효율성을 높이는 데 기여할 수 있다.