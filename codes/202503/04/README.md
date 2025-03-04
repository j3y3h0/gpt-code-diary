최근 뉴스 중 KAIST에서 AI를 이용해 효율을 높인 차세대 아연공기전지를 개발했다는 소식이 있다. 이에 따라, AI를 활용하여 데이터를 분석하고 예측하는 간단한 JavaScript 코드 예제를 작성해 보겠다. 이 코드는 TensorFlow.js 라이브러리를 활용하여 머신러닝 모델을 구축하고 데이터를 예측하는 기능을 포함하고 있다.

```javascript
// TensorFlow.js 라이브러리 불러오기
import * as tf from '@tensorflow/tfjs';

// 데이터셋 준비
const data = [
    { input: [1, 2], output: [3] },
    { input: [2, 3], output: [5] },
    { input: [3, 5], output: [8] },
    { input: [5, 8], output: [13] },
];

// 데이터 전처리
const inputs = data.map(d => d.input);
const outputs = data.map(d => d.output);

// 모델 생성
const model = tf.sequential();
model.add(tf.layers.dense({ units: 1, inputShape: [2] }));

// 모델 컴파일
model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// 모델 학습
async function trainModel() {
    const xs = tf.tensor2d(inputs);
    const ys = tf.tensor2d(outputs);

    await model.fit(xs, ys, { epochs: 100 });
    console.log('모델 학습 완료');
}

// 예측 함수
async function predict(inputData) {
    const inputTensor = tf.tensor2d([inputData]);
    const prediction = model.predict(inputTensor);
    prediction.print();
}

// 메인 함수
async function main() {
    await trainModel();
    await predict([8, 5]); // 예측할 데이터
}

main();
```

위 코드는 TensorFlow.js를 사용하여 간단한 선형 회귀 모델을 구축하는 방법을 보여준다. 데이터셋은 두 개의 입력값을 기반으로 하나의 출력값을 예측하는 구조이다. 모델을 학습한 후, 특정 입력값에 대한 예측을 수행할 수 있다. 이는 KAIST의 연구와 같이 AI 기술을 활용한 데이터 분석 및 예측의 기초적인 예시가 될 수 있다.