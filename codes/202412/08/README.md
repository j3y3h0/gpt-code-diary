**title**: AI 기반 스팸 메시지 필터링 시스템  

**language**: Python  

**content**:  
```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score

# 데이터 로드
data = pd.read_csv('spam_data.csv')  # 스팸 데이터가 저장된 CSV 파일

# 데이터 준비
X = data['message']  # 메시지 컬럼
y = data['label']    # 레이블 (스팸 또는 정상)

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 텍스트 데이터를 벡터화
vectorizer = CountVectorizer()
X_train_vect = vectorizer.fit_transform(X_train)
X_test_vect = vectorizer.transform(X_test)

# 모델 학습
model = MultinomialNB()
model.fit(X_train_vect, y_train)

# 예측
y_pred = model.predict(X_test_vect)

# 정확도 평가
accuracy = accuracy_score(y_test, y_pred)
print(f'모델 정확도: {accuracy:.2f}')

# 새로운 메시지 예측
new_messages = ["무료로 아이폰을 드립니다!", "안녕하세요, 회의 일정 조정합니다."]
new_messages_vect = vectorizer.transform(new_messages)
predictions = model.predict(new_messages_vect)

for msg, pred in zip(new_messages, predictions):
    print(f'메시지: "{msg}" - 예측: {pred}')
```  

위 코드는 스팸 메시지를 필터링하기 위한 간단한 AI 모델을 구현한 것으로, 스팸 여부를 분류하는 기능을 제공한다. `pandas`, `scikit-learn`과 같은 라이브러리를 활용하여 데이터를 처리하고, Naive Bayes 알고리즘을 사용하여 모델을 학습시킨다.