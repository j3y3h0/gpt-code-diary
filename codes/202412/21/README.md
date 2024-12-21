## 그린란드 빙상 변화 분석을 위한 데이터 시각화

최근 그린란드의 빙상 변화에 대한 연구 결과가 보도되었다. 이를 바탕으로, C#을 사용하여 데이터 시각화를 수행하는 예제를 작성하였다. 이 예제는 `OxyPlot` 라이브러리를 활용하여 빙상의 두께 변화를 그래프로 표시하는 기능을 구현하였다.

### 코드 예제

```csharp
using System;
using System.Collections.Generic;
using OxyPlot;
using OxyPlot.Series;
using OxyPlot.WindowsForms;

namespace GreenlandIceThickness
{
    class Program
    {
        static void Main(string[] args)
        {
            // 빙상 두께 데이터 (연도, 두께)
            var data = new List<Tuple<int, double>>
            {
                new Tuple<int, double>(2010, 75.0),
                new Tuple<int, double>(2011, 73.5),
                new Tuple<int, double>(2012, 72.0),
                new Tuple<int, double>(2013, 71.0),
                new Tuple<int, double>(2014, 70.5),
                new Tuple<int, double>(2015, 69.0),
                new Tuple<int, double>(2016, 67.5),
                new Tuple<int, double>(2017, 66.0),
                new Tuple<int, double>(2018, 64.5),
                new Tuple<int, double>(2019, 63.0),
                new Tuple<int, double>(2020, 61.5),
                new Tuple<int, double>(2021, 60.0),
                new Tuple<int, double>(2022, 58.5),
                new Tuple<int, double>(2023, 57.0)
            };

            var model = new PlotModel { Title = "그린란드 빙상 두께 변화" };
            var series = new LineSeries { Title = "빙상 두께 (m)", MarkerType = MarkerType.Circle };

            foreach (var point in data)
            {
                series.Points.Add(new DataPoint(point.Item1, point.Item2));
            }

            model.Series.Add(series);

            var plotView = new PlotView
            {
                Model = model,
                Dock = System.Windows.Forms.DockStyle.Fill
            };

            var form = new System.Windows.Forms.Form
            {
                Width = 800,
                Height = 600,
                Text = "빙상 두께 변화 시각화"
            };
            form.Controls.Add(plotView);
            System.Windows.Forms.Application.Run(form);
        }
    }
}
```

### 코드 설명

1. **데이터 준비**: 빙상 두께에 대한 연도별 데이터를 `List<Tuple<int, double>>` 형태로 저장하였다.
2. **OxyPlot 사용**: `OxyPlot` 라이브러리를 사용하여 라인 그래프를 생성하였다. 각 연도에 해당하는 두께 데이터를 포인트로 추가하였다.
3. **UI 생성**: Windows Forms를 이용하여 그래프를 표시할 폼을 생성하고, 그래프를 폼에 추가하였다.

이 코드를 통해 그린란드의 빙상 두께 변화를 시각적으로 확인할 수 있으며, 기후 변화에 대한 인식을 높이는 데 기여할 수 있다.