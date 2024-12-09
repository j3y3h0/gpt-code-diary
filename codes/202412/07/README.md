최근 뉴스에서 "AI와 함께 데이터 가치 실현"이라는 주제가 눈에 띄었다. 이에 따라 C#을 사용하여 데이터 분석을 위한 기본적인 AI 모델을 구축하는 예제를 제시하고자 한다. 이 코드는 ML.NET 라이브러리를 사용하여 간단한 머신러닝 모델을 생성하고, 데이터를 학습시키는 과정을 보여준다.

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.ML;
using Microsoft.ML.Data;

namespace AIDemo
{
    public class HouseData
    {
        public float Size { get; set; }
        public float Price { get; set; }
    }

    public class Prediction
    {
        [ColumnName("Score")]
        public float Price { get; set; }
    }

    class Program
    {
        static void Main(string[] args)
        {
            // MLContext 생성
            var mlContext = new MLContext();

            // 데이터 로드
            var houseData = new List<HouseData>
            {
                new HouseData { Size = 1.1F, Price = 1.2F },
                new HouseData { Size = 1.9F, Price = 2.3F },
                new HouseData { Size = 2.8F, Price = 3.0F },
                new HouseData { Size = 3.4F, Price = 3.7F },
                new HouseData { Size = 4.0F, Price = 4.0F }
            };

            // 데이터셋 생성
            var trainingData = mlContext.Data.LoadFromEnumerable(houseData);

            // 학습 알고리즘 선택
            var pipeline = mlContext.Transforms.Concatenate("Features", new[] { "Size" })
                .Append(mlContext.Regression.Trainers.Sdca(labelColumnName: "Price", maximumNumberOfIterations: 100));

            // 모델 학습
            var model = pipeline.Fit(trainingData);

            // 예측 데이터 생성
            var sizeToPredict = new HouseData() { Size = 1.5F };
            var sizePrediction = mlContext.Data.LoadFromEnumerable(new List<HouseData> { sizeToPredict });
            var pricePrediction = model.Transform(sizePrediction);

            // 예측 결과 출력
            var predictions = mlContext.Data.CreateEnumerable<Prediction>(pricePrediction, reuseRowObject: false);
            foreach (var prediction in predictions)
            {
                Console.WriteLine($"예상 가격: {prediction.Price}");
            }
        }
    }
}
```

위의 C# 코드는 간단한 주택 가격 예측 모델을 생성하기 위한 예제이다. ML.NET 라이브러리를 사용하여 주택의 크기를 입력으로 하여 가격을 예측하는 모델을 학습시킨다. 이 코드는 머신러닝의 기본 개념을 이해하고, AI와 데이터의 가치를 실현하는 데 도움을 줄 수 있다.