### 보이스피싱 탐지 서비스 예제 (C#)

최근 KT AI 보이스피싱 탐지 서비스가 90.3%의 탐지 정확도를 달성하며 금융권에 적용되고 있다. 이를 바탕으로 C#을 사용하여 간단한 보이스피싱 탐지 모델을 구현하는 예제를 작성해 보겠다. 이 예제에서는 머신러닝 라이브러리인 ML.NET을 활용한다.

#### 필요 라이브러리 설치

먼저, ML.NET을 사용하기 위해 NuGet 패키지를 설치해야 한다. Visual Studio의 NuGet 패키지 관리자에서 다음 명령어를 실행하여 설치할 수 있다.

```
Install-Package Microsoft.ML
```

#### 코드 예제

아래 코드는 간단한 텍스트 기반 보이스피싱 탐지 모델을 구현한 예제이다. 이 모델은 입력된 텍스트가 보이스피싱인지 아닌지를 판별한다.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.ML;
using Microsoft.ML.Data;

namespace VoicePhishingDetection
{
    class Program
    {
        public class MessageData
        {
            [LoadColumn(0)]
            public string Message;

            [LoadColumn(1)]
            public bool IsPhishing;
        }

        public class Prediction
        {
            [ColumnName("PredictedLabel")]
            public bool IsPhishing;
        }

        static void Main(string[] args)
        {
            // 1. MLContext 생성
            var context = new MLContext();

            // 2. 데이터 로드
            var data = context.Data.LoadFromTextFile<MessageData>("data.csv", separatorChar: ',', hasHeader: true);

            // 3. 데이터 전처리 및 학습 파이프라인 구축
            var pipeline = context.Transforms.Text.FeaturizeText("Features", nameof(MessageData.Message))
                .Append(context.BinaryClassification.Trainers.SdcaLogisticRegression(labelColumnName: nameof(MessageData.IsPhishing), maximumNumberOfIterations: 100));

            // 4. 모델 학습
            var model = pipeline.Fit(data);

            // 5. 예측
            var sampleMessage = new MessageData { Message = "이상한 전화번호로 연락을 받았습니다." };
            var predictionEngine = context.Model.CreatePredictionEngine<MessageData, Prediction>(model);
            var result = predictionEngine.Predict(sampleMessage);

            // 6. 결과 출력
            Console.WriteLine($"메시지: {sampleMessage.Message}");
            Console.WriteLine($"보이스피싱 여부: {(result.IsPhishing ? "예" : "아니오")}");
        }
    }
}
```

#### 코드 설명

1. **데이터 클래스**: `MessageData` 클래스는 메시지와 보이스피싱 여부를 담고 있다.
2. **예측 클래스**: `Prediction` 클래스는 예측 결과를 담고 있다.
3. **MLContext 생성**: ML.NET의 컨텍스트를 생성하여 머신러닝 작업을 수행할 수 있게 한다.
4. **데이터 로드**: CSV 파일에서 데이터를 로드한다.
5. **모델 파이프라인 생성**: 텍스트 데이터를 피처로 변환하고, 이진 분류 모델을 학습한다.
6. **예측 및 출력**: 샘플 메시지에 대한 예측 결과를 출력한다.

이 코드는 기본적인 보이스피싱 탐지 모델을 구축하는 데 도움이 될 수 있으며, 실제 데이터와 함께 사용할 경우 더욱 효과적이다.