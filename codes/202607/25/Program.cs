// Program.cs
using System;
using System.Collections.Generic;

namespace DataAnalysisAndVisualization
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.WriteLine("AI 기반 데이터 분석 및 시각화 프로젝트를 시작합니다.");

            // 1. 샘플 데이터 생성
            Console.WriteLine("
--- 샘플 센서 데이터 생성 ---");
            List<SensorData> sensorDataList = GenerateSampleData(20);
            foreach (var data in sensorDataList)
            {
                Console.WriteLine(data);
            }

            // 2. 데이터 분석
            Console.WriteLine("
--- 데이터 분석 결과 ---");
            DataAnalyzer analyzer = new DataAnalyzer();
            double average = analyzer.CalculateAverage(sensorDataList);
            double maxValue = analyzer.FindMaxValue(sensorDataList);
            double minValue = analyzer.FindMinValue(sensorDataList);

            Console.WriteLine($"평균 값: {average:F2}");
            Console.WriteLine($"최대 값: {maxValue:F2}");
            Console.WriteLine($"최소 값: {minValue:F2}");

            // 3. 데이터 시각화
            VisualizationHelper visualizer = new VisualizationHelper();
            visualizer.GenerateBarChart(sensorDataList);

            Console.WriteLine("
프로그램이 종료되었습니다.");
        }

        /// <summary>
        /// 테스트를 위한 샘플 센서 데이터를 생성합니다.
        /// </summary>
        /// <param name="count">생성할 데이터 포인트의 수입니다.</param>
        /// <returns>생성된 센서 데이터 목록입니다.</returns>
        static List<SensorData> GenerateSampleData(int count)
        {
            List<SensorData> sampleData = new List<SensorData>();
            Random rand = new Random();
            DateTime currentTimestamp = DateTime.Now.AddHours(-count);

            for (int i = 0; i < count; i++)
            {
                // 10.0에서 50.0 사이의 랜덤 값 생성
                double value = rand.NextDouble() * (50.0 - 10.0) + 10.0;
                sampleData.Add(new SensorData(currentTimestamp.AddHours(i), value));
            }
            return sampleData;
        }
    }
}
