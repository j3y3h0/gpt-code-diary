이번 뉴스 중 "자폐 조기에 진단"과 관련하여, 사회적 상호작용을 분석하는 AI 기술에 대한 간단한 예제 코드를 작성해 보았다. 이 코드에서는 Python의 `scikit-learn` 라이브러리를 사용하여 간단한 분류 모델을 구축하고, 영유아의 사회적 상호작용 데이터를 기반으로 자폐 진단 예측을 수행하는 예를 보여준다.

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, accuracy_score

# 예제 데이터 생성 (임의의 데이터 사용)
data = {
    'social_interaction_score': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    'autism': [0, 0, 0, 1, 1, 1, 1, 1, 1, 1]  # 0: 비자폐, 1: 자폐
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# 특성과 레이블 분리
X = df[['social_interaction_score']]
y = df['autism']

# 데이터 분할 (훈련용 80%, 테스트용 20%)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 랜덤 포레스트 모델 생성
model = RandomForestClassifier(n_estimators=100, random_state=42)

# 모델 훈련
model.fit(X_train, y_train)

# 예측 수행
y_pred = model.predict(X_test)

# 결과 출력
print("정확도:", accuracy_score(y_test, y_pred))
print("분류 보고서:\n", classification_report(y_test, y_pred))
```

위 코드는 다음과 같은 기능을 수행한다:

1. 임의의 사회적 상호작용 점수와 자폐 진단 여부를 포함하는 데이터셋을 생성한다.
2. 데이터를 훈련 세트와 테스트 세트로 분할한다.
3. 랜덤 포레스트 분류기를 사용하여 모델을 훈련하고 예측을 수행한다.
4. 모델의 정확도와 분류 성능을 평가하여 결과를 출력한다.

이 예제는 자폐 조기 진단을 위한 데이터 분석 및 기계 학습의 기초적인 접근 방식을 보여준다. 실제 데이터셋을 사용할 경우, 더 많은 특성과 정교한 전처리가 필요할 것이다.