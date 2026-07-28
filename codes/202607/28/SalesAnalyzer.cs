using System.Collections.Generic;
using System.Linq;

namespace SalesAnalysisApp
{
    /// <summary>
    /// 판매 데이터를 분석하는 유틸리티 클래스입니다.
    /// </summary>
    public static class SalesAnalyzer
    {
        /// <summary>
        /// 주어진 판매 목록에서 제품 ID별 총 판매액을 계산합니다.
        /// </summary>
        /// <param name="sales">분석할 판매 목록입니다.</param>
        /// <returns>제품 ID와 해당 제품의 총 판매액을 포함하는 딕셔너리입니다.</returns>
        public static Dictionary<string, decimal> CalculateTotalSalesPerProduct(IEnumerable<Sale> sales)
        {
            // 각 제품 ID별로 그룹화하고, 각 그룹의 총 판매액 (수량 * 단가)을 합산합니다.
            return sales.GroupBy(sale => sale.ProductId)
                        .ToDictionary(
                            group => group.Key,
                            group => group.Sum(sale => sale.Quantity * sale.PricePerUnit)
                        );
        }

        /// <summary>
        /// (확장성 고려) 특정 기간 동안의 총 판매액을 계산하는 메서드입니다.
        /// 현재 프로젝트에서는 사용되지 않습니다.
        /// </summary>
        /// <param name="sales">분석할 판매 목록입니다.</param>
        /// <param name="startDate">시작 날짜입니다.</param>
        /// <param name="endDate">종료 날짜입니다.</param>
        /// <returns>해당 기간 동안의 총 판매액입니다.</returns>
        public static decimal CalculateTotalSalesInPeriod(IEnumerable<Sale> sales, System.DateTime startDate, System.DateTime endDate)
        {
            return sales.Where(sale => sale.SaleDate >= startDate && sale.SaleDate <= endDate)
                        .Sum(sale => sale.Quantity * sale.PricePerUnit);
        }
    }
}
