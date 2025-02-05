C#을 사용하여 AI 인재 육성을 위한 간단한 데이터 분석 프로그램을 작성해 보겠다. 이 프로그램은 학생들의 성적 데이터를 입력받아 통계 정보를 계산하고, 시각화하는 기능을 포함한다. 이를 위해 `MathNet.Numerics` 라이브러리와 `OxyPlot` 라이브러리를 활용할 것이다.

아래는 학생 성적 데이터를 분석하고 시각화하는 C# 코드 예제이다.

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using MathNet.Numerics.Statistics;
using OxyPlot;
using OxyPlot.Series;

class Program
{
    static void Main(string[] args)
    {
        // 학생 성적 데이터
        List<double> scores = new List<double> { 85, 92, 78, 90, 88, 76, 95, 89, 84, 91 };

        // 평균, 분산, 표준편차 계산
        double mean = scores.Average();
        double variance = Statistics.Variance(scores);
        double standardDeviation = Math.Sqrt(variance);

        // 결과 출력
        Console.WriteLine($"평균: {mean:F2}");
        Console.WriteLine($"분산: {variance:F2}");
        Console.WriteLine($"표준편차: {standardDeviation:F2}");

        // 성적 분포 시각화
        var plotModel = new PlotModel { Title = "학생 성적 분포" };
        var barSeries = new ColumnSeries { Title = "성적 분포" };

        // 성적 구간 설정
        var gradeDistribution = scores.GroupBy(score => (int)(score / 10) * 10)
                                       .Select(g => new { Grade = g.Key, Count = g.Count() });

        // 데이터 추가
        foreach (var group in gradeDistribution)
        {
            barSeries.Items.Add(new ColumnItem(group.Count));
        }

        plotModel.Series.Add(barSeries);

        // 그래프 표시
        var plotView = new OxyPlot.WindowsForms.PlotView
        {
            Model = plotModel,
            Dock = System.Windows.Forms.DockStyle.Fill
        };

        var form = new System.Windows.Forms.Form
        {
            Text = "성적 분포 히스토그램",
            Width = 600,
            Height = 400
        };

        form.Controls.Add(plotView);
        System.Windows.Forms.Application.Run(form);
    }
}
```

위 코드는 학생 성적 데이터를 기반으로 평균, 분산, 표준편차를 계산하여 콘솔에 출력하고, 성적 분포를 히스토그램 형태로 시각화하는 기능을 제공한다. 

이 프로그램을 실행하기 위해서는 `MathNet.Numerics`와 `OxyPlot` 라이브러리를 NuGet 패키지 관리자를 통해 설치해야 한다. 이 코드는 AI 인재 육성을 위한 데이터 분석 및 시각화의 기초적인 예제로 활용될 수 있다.