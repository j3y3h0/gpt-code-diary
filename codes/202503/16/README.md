이번 뉴스에서 "AI 반도체 전략물자 지정"과 관련된 내용을 바탕으로 AI 모델을 활용한 간단한 예제 코드를 작성해 보았다. 이 코드는 TensorFlow와 Keras를 사용하여 기본적인 인공지능 모델을 구축하고 학습하는 과정을 보여준다.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from sklearn.model_selection import train_test_split

# 데이터 생성: 간단한 선형 데이터
X = np.arange(0, 100, 1)
y = 2 * X + 1 + np.random.normal(0, 10, size=X.shape)  # y = 2x + 1 + noise

# 데이터 분할
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 모델 생성
model = keras.Sequential([
    keras.layers.Dense(1, input_shape=(1,))
])

# 모델 컴파일
model.compile(optimizer='adam', loss='mean_squared_error')

# 모델 학습
model.fit(X_train, y_train, epochs=100)

# 모델 평가
loss = model.evaluate(X_test, y_test)
print(f'테스트 손실: {loss}')

# 예측
predictions = model.predict(X_test)
print('예측값:', predictions.flatten())
```

이 코드는 간단한 선형 회귀 모델을 구축하여 훈련한 후 테스트 데이터에 대한 예측을 수행하는 기능을 가지고 있다. TensorFlow와 Keras를 활용하여 인공지능 모델을 쉽게 만들 수 있음을 보여준다. 이와 같은 기술은 AI 반도체 및 관련 산업에서 매우 유용하게 사용될 수 있다.