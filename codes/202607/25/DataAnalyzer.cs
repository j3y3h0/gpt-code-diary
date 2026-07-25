// DataAnalyzer.cs
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataAnalysisAndVisualization
{
    /// <summary>
    /// 센서 데이터를 분석하는 클래스입니다.
    /// 평균, 최대값, 최소값 등을 계산하는 기능을 제공합니다.
    /// </summary>
    public class DataAnalyzer
    {
        /// <summary>
        /// 주어진 센서 데이터 목록의 평균값을 계산합니다.
        /// </summary>
        /// <param name="data">분석할 센서 데이터 목록입니다.</param>
        /// <returns>데이터의 평균값입니다.</returns>
        public double CalculateAverage(List<SensorData> data)
        {
            if (data == null || !data.Any())
            {
                Console.WriteLine("경고: 분석할 데이터가 없습니다.");
                return 0.0;
            }
            return data.Average(sd => sd.Value);
        }

        /// <summary>
        /// 주어진 센서 데이터 목록에서 최대값을 찾습니다.
        /// </summary>
        /// <param name="data">분석할 센서 데이터 목록입니다.</param>
        /// <returns>데이터의 최대값입니다.</returns>
        public double FindMaxValue(List<SensorData> data)
        {
            if (data == null || !data.Any())
            {
                Console.WriteLine("경고: 분석할 데이터가 없습니다.");
                return 0.0;
            }
            return data.Max(sd => sd.Value);
        }

        /// <summary>
        /// 주어진 센서 데이터 목록에서 최소값을 찾습니다.
        /// </summary>
        /// <param name="data">분석할 센서 데이터 목록입니다.</param>
        /// <returns>데이터의 최소값입니다.</returns>
        public double FindMinValue(List<SensorData> data)
        {
            if (data == null || !data.Any())
            {
                Console.WriteLine("경고: 분석할 데이터가 없습니다.");
                return 0.0;
            }
            return data.Min(sd => sd.Value);
        }
    }
}
