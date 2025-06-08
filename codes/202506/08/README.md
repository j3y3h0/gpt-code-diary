최근 AI 도입과 관련된 보고서에 따라, 생산성 향상 및 운영비 절감을 위해 기업들이 AI를 활용하고 있는 상황이다. 이에 따라, 고객의 요구를 예측하는 간단한 AI 모델을 Python으로 구현해보겠다. 이 코드는 `scikit-learn` 라이브러리를 사용하여 고객의 구매 데이터를 기반으로 예측 모델을 만드는 예시이다.

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# 고객 데이터 로드 (예시 데이터)
data = {
    'age': [25, 34, 45, 23, 54, 31, 22, 43, 36, 29],
    'income': [50000, 64000, 58000, 52000, 79000, 72000, 48000, 53000, 60000, 61000],
    'purchase': [0, 1, 1, 0, 1, 1, 0, 1, 0, 1]  # 1: 구매, 0: 비구매
}

df = pd.DataFrame(data)

# 특징과 목표 변수 정의
X = df[['age', 'income']]
y = df['purchase']

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 모델 생성
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 예측
y_pred = model.predict(X_test)

# 정확도 평가
accuracy = accuracy_score(y_test, y_pred)
print(f"모델 정확도: {accuracy:.2f}")

# 새로운 고객 데이터 예측
new_customer = pd.DataFrame({'age': [30], 'income': [60000]})
prediction = model.predict(new_customer)
print("새로운 고객의 구매 예측:", "구매" if prediction[0] == 1 else "비구매")
```

이 코드는 기본적인 고객 구매 예측 모델을 생성하며, 실제 데이터에 따라 조정이 필요할 수 있다. `scikit-learn` 라이브러리는 머신러닝 모델을 구축할 때 널리 사용되는 도구이므로, AI 도입을 고려하는 기업들에게 유용할 것이다.