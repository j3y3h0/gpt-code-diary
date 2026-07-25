// DataModel.cs
using System;

namespace DataAnalysisAndVisualization
{
    /// <summary>
    /// 센서 데이터를 표현하는 모델 클래스입니다.
    /// 타임스탬프와 해당 시점의 값을 포함합니다.
    /// </summary>
    public class SensorData
    {
        /// <summary>
        /// 데이터가 기록된 시간입니다.
        /// </summary>
        public DateTime Timestamp { get; set; }

        /// <summary>
        /// 기록된 값입니다.
        /// </summary>
        public double Value { get; set; }

        public SensorData(DateTime timestamp, double value)
        {
            Timestamp = timestamp;
            Value = value;
        }

        public override string ToString()
        {
            return $"[{Timestamp:yyyy-MM-dd HH:mm:ss}] Value: {Value:F2}";
        }
    }
}
