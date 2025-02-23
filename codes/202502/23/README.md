최근 인공지능(AI)과 관련된 사이버 공격 방지의 중요성이 대두되고 있다. 이에 따라, AI를 활용한 악성코드 탐지 및 스팸 필터링을 구현하는 간단한 파이썬 코드를 작성해 보았다. 이 코드는 자연어 처리(NLP) 라이브러리인 `nltk`와 머신러닝 라이브러리인 `scikit-learn`을 사용하여 스팸 메시지를 분류하는 기능을 제공한다.

```python
import nltk
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import train_test_split
from sklearn import metrics

# 데이터셋 준비 (스팸과 정상 메시지)
data = [
    ("무료로 당첨되셨습니다! 지금 클릭하세요.", "spam"),
    ("안녕하세요, 회의는 내일입니다.", "ham"),
    ("할인 쿠폰 드립니다. 지금 구매하세요!", "spam"),
    ("이번 주말에 만나요.", "ham"),
    ("당신의 계좌가 잠겼습니다. 확인하세요.", "spam"),
    ("보고서 제출 기한이 다가옵니다.", "ham"),
]

# 데이터와 라벨 분리
texts, labels = zip(*data)

# 훈련 데이터와 테스트 데이터로 분할
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.3, random_state=42)

# 스팸 분류기 모델 생성
model = make_pipeline(CountVectorizer(), MultinomialNB())

# 모델 훈련
model.fit(X_train, y_train)

# 테스트 데이터로 예측
predicted_labels = model.predict(X_test)

# 정확도 평가
accuracy = metrics.accuracy_score(y_test, predicted_labels)
print(f"모델 정확도: {accuracy:.2f}")

# 예시 메시지 분류
example_message = ["할인 혜택을 놓치지 마세요!", "내일 수업은 무엇인가요?"]
predictions = model.predict(example_message)
for msg, prediction in zip(example_message, predictions):
    print(f"메시지: '{msg}' - 예측: {prediction}")
```

위 코드는 스팸 메시지를 탐지하기 위한 기본적인 머신러닝 모델을 구현하고 있다. `nltk`와 `scikit-learn` 라이브러리를 활용하여 텍스트 데이터의 특징을 추출하고, 나이브 베이즈 분류기를 통해 메시지를 분류한다. 이는 AI 기술을 활용한 사이버 보안의 일환으로, 악성 메시지 탐지에 유용하게 사용될 수 있다.