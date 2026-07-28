using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace SalesAnalysisApp
{
    public class Program
    {
        private const string SalesFilePath = "sales.json";

        public static async Task Main(string[] args)
        {
            Console.WriteLine("판매 데이터 분석을 시작합니다.");

            // 1. sales.json 파일 읽기
            List<Sale>? sales = await ReadSalesDataAsync(SalesFilePath);

            if (sales == null || sales.Count == 0)
            {
                Console.WriteLine($"오류: '{SalesFilePath}' 파일을 읽을 수 없거나 데이터가 비어 있습니다.");
                return;
            }

            Console.WriteLine($"총 {sales.Count} 건의 판매 데이터를 성공적으로 읽었습니다.");

            // 2. 판매 데이터 분석
            Dictionary<string, decimal> totalSalesPerProduct = SalesAnalyzer.CalculateTotalSalesPerProduct(sales);

            // 3. 분석 결과 출력
            Console.WriteLine("
--- 제품별 총 판매액 ---");
            foreach (var entry in totalSalesPerProduct)
            {
                Console.WriteLine($"- 제품 ID '{entry.Key}': {entry.Value:C} (원)"); // C는 현재 문화권의 통화 형식
            }

            Console.WriteLine("
판매 데이터 분석을 완료했습니다.");
        }

        /// <summary>
        /// 지정된 경로에서 판매 데이터를 비동기적으로 읽고 역직렬화합니다.
        /// </summary>
        /// <param name="filePath">판매 데이터 JSON 파일의 경로입니다.</param>
        /// <returns>역직렬화된 Sale 객체 목록입니다.</returns>
        private static async Task<List<Sale>?> ReadSalesDataAsync(string filePath)
        {
            try
            {
                // 파일이 존재하는지 확인합니다.
                if (!File.Exists(filePath))
                {
                    Console.WriteLine($"경고: '{filePath}' 파일을 찾을 수 없습니다. 샘플 파일을 생성합니다.");
                    // 파일이 없으면 샘플 파일을 생성하는 로직 (선택 사항)
                    // 이 프로젝트에서는 사용자가 파일을 직접 생성하는 것으로 가정합니다.
                    return null;
                }

                // 파일을 비동기적으로 읽습니다.
                using FileStream openStream = File.OpenRead(filePath);
                // System.Text.Json을 사용하여 JSON 데이터를 Sale 객체 목록으로 역직렬화합니다.
                return await JsonSerializer.DeserializeAsync<List<Sale>>(openStream, new JsonSerializerOptions { PropertyNameCaseInsensitive = true });
            }
            catch (JsonException ex)
            {
                Console.WriteLine($"JSON 역직렬화 오류: {ex.Message}");
                return null;
            }
            catch (IOException ex)
            {
                Console.WriteLine($"파일 읽기 오류: {ex.Message}");
                return null;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"알 수 없는 오류: {ex.Message}");
                return null;
            }
        }
    }
}
