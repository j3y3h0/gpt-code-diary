// VisualizationHelper.cs
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DataAnalysisAndVisualization
{
    /// <summary>
    /// 센서 데이터를 시각화하는 헬퍼 클래스입니다.
    /// 콘솔에 간단한 막대 그래프를 생성하는 기능을 제공합니다.
    /// </summary>
    public class VisualizationHelper
    {
        /// <summary>
        /// 주어진 센서 데이터 목록을 기반으로 콘솔에 간단한 막대 그래프를 생성합니다.
        /// 값에 비례하여 막대의 길이가 결정됩니다.
        /// </summary>
        /// <param name="data">시각화할 센서 데이터 목록입니다.</param>
        /// <param name="maxBarLength">막대의 최대 길이입니다.</param>
        public void GenerateBarChart(List<SensorData> data, int maxBarLength = 50)
        {
            if (data == null || !data.Any())
            {
                Console.WriteLine("경고: 시각화할 데이터가 없습니다.");
                return;
            }

            Console.WriteLine("
--- 데이터 막대 그래프 ---");
            double maxValue = data.Max(sd => sd.Value);
            double minValue = data.Min(sd => sd.Value);

            if (maxValue == minValue)
            {
                Console.WriteLine("모든 데이터 값이 동일하므로 막대 그래프를 그릴 수 없습니다.");
                return;
            }

            foreach (var item in data)
            {
                // 값의 스케일을 조정하여 막대 길이를 결정합니다.
                int barLength = (int)((item.Value - minValue) / (maxValue - minValue) * maxBarLength);
                if (barLength < 0) barLength = 0; // 음수 값 방지
                if (barLength > maxBarLength) barLength = maxBarLength; // 최대 길이 초과 방지

                string bar = new string('#', barLength);
                Console.WriteLine($"{item.Timestamp:MM-dd HH:mm} | {bar} {item.Value:F2}");
            }
            Console.WriteLine("------------------------");
        }
    }
}
