- **title**: 생성형 AI를 활용한 텍스트 요약 프로그램  
- **language**: Python  
- **content**: 
```python
from transformers import pipeline

# Hugging Face의 transformers 라이브러리를 사용하여 텍스트 요약을 위한 파이프라인 생성
summarizer = pipeline("summarization")

# 요약할 텍스트 입력
text = """
AI와 대화하며 독서…밀리의서재, AI독파밍 서비스 내년 출시. 
박현진 대표는 독서 시장의 게임 체인저로 도약할 것이라고 밝혔다. 
이 서비스는 사용자가 AI와 상호작용하며 책 내용을 요약하거나 
주요 포인트를 이해할 수 있도록 도와준다.
"""

# 텍스트 요약 수행
summary = summarizer(text, max_length=50, min_length=25, do_sample=False)

# 요약된 결과 출력
print("원문:\n", text)
print("\n요약:\n", summary[0]['summary_text'])
```