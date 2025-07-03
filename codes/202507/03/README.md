### AI 기반 추천 시스템 예제 (C#)

최근의 AI 기술 발전에 따라, 사용자 맞춤형 추천 시스템을 구현하는 것이 중요성이 커지고 있다. 다음은 C#을 사용하여 간단한 추천 시스템을 만드는 예제이다. 이 예제에서는 `ML.NET` 라이브러리를 사용하여 사용자의 행동 데이터를 기반으로 추천을 생성한다.

```csharp
using System;
using System.Collections.Generic;
using Microsoft.ML;
using Microsoft.ML.Data;

public class UserItem
{
    public float UserId { get; set; }
    public float ItemId { get; set; }
    public float Rating { get; set; }
}

public class Recommendation
{
    public float UserId { get; set; }
    public float ItemId { get; set; }
}

public class Prediction
{
    [ColumnName("Score")]
    public float Rating { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        // ML.NET 환경 설정
        var context = new MLContext();

        // 훈련 데이터 로드
        var data = new List<UserItem>
        {
            new UserItem { UserId = 1, ItemId = 1, Rating = 5 },
            new UserItem { UserId = 1, ItemId = 2, Rating = 4 },
            new UserItem { UserId = 2, ItemId = 1, Rating = 3 },
            new UserItem { UserId = 2, ItemId = 3, Rating = 4 },
            new UserItem { UserId = 3, ItemId = 2, Rating = 5 },
            new UserItem { UserId = 3, ItemId = 3, Rating = 3 }
        };

        var trainData = context.Data.LoadFromEnumerable(data);

        // 추천 시스템 모델 훈련
        var pipeline = context.Recommendation().Trainers.MatrixFactorization("UserId", "ItemId", "Rating");
        var model = pipeline.Fit(trainData);

        // 추천 요청
        var recommendations = new List<Recommendation>
        {
            new Recommendation { UserId = 1, ItemId = 0 }, // UserId 1에 대한 추천
            new Recommendation { UserId = 2, ItemId = 0 }  // UserId 2에 대한 추천
        };

        var recommendationData = context.Data.LoadFromEnumerable(recommendations);
        var predictedRatings = model.Transform(recommendationData);

        // 결과 출력
        var predictions = context.Data.CreateEnumerable<Prediction>(predictedRatings, reuseRowObject: false);
        foreach (var prediction in predictions)
        {
            Console.WriteLine($"추천 점수: {prediction.Rating}");
        }
    }
}
```

이 코드는 사용자의 행동 데이터를 기반으로 추천 점수를 예측하는 간단한 추천 시스템을 구현한다. `Matrix Factorization` 알고리즘을 사용하여 사용자와 아이템 간의 관계를 학습하고, 특정 사용자에 대한 추천 점수를 출력한다. ML.NET을 활용하여 머신러닝 모델을 손쉽게 구축할 수 있음을 보여준다.