**title**: Python을 사용한 AI 위협 메일 차단 서비스 구현 예제

**language**: Python

**content**:

```python
import os
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# 샘플 이메일 데이터와 레이블 (1: 위협 메일, 0: 정상 메일)
emails = [
    "당신의 계정이 해킹되었습니다. 비밀번호를 즉시 변경하세요.",
    "이번 주말 할인 행사에 참여하세요!",
    "긴급: 은행 계좌 정보가 유출되었습니다.",
    "안녕하세요, 새로운 제품을 소개합니다."
]
labels = [1, 0, 1, 0]

# 텍스트 데이터를 벡터로 변환
vectorizer = CountVectorizer()
X = vectorizer.fit_transform(emails)

# 학습 데이터와 검증 데이터로 분리
X_train, X_test, y_train, y_test = train_test_split(X, labels, test_size=0.25, random_state=42)

# 나이브 베이즈 분류기 학습
classifier = MultinomialNB()
classifier.fit(X_train, y_train)

# 검증 데이터로 예측 수행
y_pred = classifier.predict(X_test)

# 정확도 출력
accuracy = accuracy_score(y_test, y_pred)
print(f"모델 정확도: {accuracy * 100:.2f}%")

# 새로운 이메일에 대한 예측
new_emails = ["계정이 해킹되었습니다. 즉시 조치하세요.", "할인 쿠폰이 도착했습니다!"]
new_X = vectorizer.transform(new_emails)
predictions = classifier.predict(new_X)

# 예측 결과 출력
for email, pred in zip(new_emails, predictions):
    print(f"이메일: \"{email}\" - {'위협 메일' if pred == 1 else '정상 메일'}")
```

이 코드는 간단한 AI 기반의 위협 메일 차단 서비스를 구현한 예제이다. Python의 `scikit-learn` 라이브러리를 사용하여 나이브 베이즈 분류기를 통해 이메일이 위협적인지 여부를 판별한다. 이 예제는 이메일 텍스트 데이터를 벡터화하고, 학습된 모델을 통해 새로운 이메일을 분류하는 과정을 보여준다.