이번 뉴스에서 반도체 산업의 성장이 언급된 것을 바탕으로, C#을 사용하여 반도체 출하량 데이터를 시각화하는 간단한 예제 코드를 작성해 보겠다. 이 코드는 `OxyPlot`이라는 라이브러리를 활용하여 데이터를 그래프로 나타내는 기능을 구현한다.

### C# 코드 예제: 반도체 출하량 시각화

```csharp
using System;
using System.Collections.Generic;
using OxyPlot;
using OxyPlot.Series;
using OxyPlot.Wpf;

namespace SemiconductorExportVisualization
{
    class Program
    {
        static void Main(string[] args)
        {
            var data = new Dictionary<string, double>
            {
                { "2021년 5월", 120 },
                { "2022년 5월", 130 },
                { "2023년 5월", 138 }
            };

            var plotModel = new PlotModel { Title = "반도체 출하량 (억 달러)" };
            var barSeries = new ColumnSeries { Title = "출하량" };

            foreach (var entry in data)
            {
                barSeries.Items.Add(new ColumnItem(entry.Value));
            }

            plotModel.Series.Add(barSeries);
            plotModel.Axes.Add(new OxyPlot.Axes.CategoryAxis { Position = OxyPlot.Axes.AxisPosition.Bottom, Key = "Months", ItemsSource = new List<string>(data.Keys) });
            plotModel.Axes.Add(new OxyPlot.Axes.LinearAxis { Position = OxyPlot.Axes.AxisPosition.Left, Title = "억 달러" });

            var plotView = new PlotView
            {
                Model = plotModel
            };

            var window = new System.Windows.Window
            {
                Title = "반도체 출하량 시각화",
                Content = plotView,
                Width = 800,
                Height = 600
            };

            window.Show();
            System.Windows.Application app = new System.Windows.Application();
            app.Run(window);
        }
    }
}
```

### 코드 설명
- 이 코드는 `OxyPlot` 라이브러리를 사용하여 반도체 출하량 데이터를 시각화한다.
- `Dictionary`를 사용하여 각 년도의 출하량 데이터를 저장하고, 이를 기반으로 막대그래프를 생성한다.
- `PlotModel`과 `ColumnSeries`를 사용하여 그래프를 구성하고, X축과 Y축을 설정한다.
- 마지막으로, `Window`를 생성하여 그래프를 시각적으로 표시한다.

### 실행 방법
1. Visual Studio에서 새로운 WPF 애플리케이션 프로젝트를 생성한다.
2. NuGet 패키지 관리자를 통해 `OxyPlot` 및 `OxyPlot.Wpf`를 설치한다.
3. 위의 코드를 `MainWindow.xaml.cs` 파일에 붙여넣고 실행하면 반도체 출하량 그래프를 확인할 수 있다.

이와 같은 방식으로 반도체 산업의 데이터를 시각화함으로써, 데이터의 흐름과 변화를 쉽게 이해할 수 있게 된다.