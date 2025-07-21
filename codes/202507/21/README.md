최근 뉴스 중 "내 물건은 얼마?…당근, AI로 중고품 가격 찾기 도입"이라는 주제를 바탕으로 중고품 가격 예측을 위한 간단한 AI 모델을 구현하는 파이썬 코드를 작성해 보겠다. 이 코드는 `pandas`, `scikit-learn`, `numpy` 라이브러리를 사용하여 데이터 전처리와 모델 학습을 진행한다.

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

# 예시 데이터 생성
data = {
    '상품명': ['가전제품', '가전제품', '의류', '가전제품', '의류', '가전제품', '의류'],
    '상태': ['새상품', '중고', '새상품', '중고', '새상품', '중고', '중고'],
    '나이': [1, 2, 0, 3, 1, 4, 2],
    '가격': [300000, 150000, 50000, 100000, 60000, 120000, 80000]
}

df = pd.DataFrame(data)

# 카테고리형 변수 인코딩
df['상태'] = df['상태'].map({'새상품': 1, '중고': 0})

# 독립변수와 종속변수 설정
X = df[['상태', '나이']]
y = df['가격']

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 랜덤 포레스트 모델 학습
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# 예측
predictions = model.predict(X_test)

# 모델 평가
mse = mean_squared_error(y_test, predictions)
print(f'평균제곱오차: {mse}')

# 새로운 데이터 예측
new_item = pd.DataFrame({'상태': [1], '나이': [0]})  # 새상품, 0세
predicted_price = model.predict(new_item)
print(f'예상 가격: {predicted_price[0]} 원')
```

위 코드는 중고품의 상태와 나이를 기반으로 가격을 예측하는 랜덤 포레스트 모델을 구현한 것이다. 데이터프레임을 생성한 후, 상태와 나이를 독립 변수로 설정하고, 가격을 종속 변수로 설정하여 모델을 학습한다. 이후 새로운 중고품의 가격을 예측하는 기능도 포함되어 있다.