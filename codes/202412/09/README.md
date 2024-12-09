- **title**: 스팸 메시지 필터링을 위한 파이썬 코드  
- **language**: Python  
- **content**: 
```python
import re
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline

# 예시 데이터: 스팸과 정상 메시지
data = [
    ("이 상품은 당신을 위한 특별한 할인입니다!", "spam"),
    ("회의가 내일로 변경되었습니다.", "ham"),
    ("긴급! 계정이 정지되었습니다.", "spam"),
    ("내일 만날 시간은 몇 시인가요?", "ham"),
    ("이 링크를 클릭하세요: http://spamlink.com", "spam"),
]

# 데이터 분리
texts, labels = zip(*data)

# 모델 생성
model = make_pipeline(CountVectorizer(), MultinomialNB())

# 모델 학습
model.fit(texts, labels)

# 새로운 메시지 예측
def predict_message(message):
    prediction = model.predict([message])
    return prediction[0]

# 예측 테스트
new_messages = [
    "특별 할인 혜택을 놓치지 마세요!",
    "다음 회의는 언제인가요?",
]

for msg in new_messages:
    result = predict_message(msg)
    print(f"메시지: '{msg}' - 예측: {result}")
```
