using System;
using System.Text.Json.Serialization;

namespace SalesAnalysisApp
{
    /// <summary>
    /// 판매 정보를 나타내는 레코드입니다.
    /// JSON 파일에서 판매 데이터를 역직렬화하는 데 사용됩니다.
    /// </summary>
    public record Sale
    {
        [JsonPropertyName("productId")]
        public string ProductId { get; init; } = string.Empty;

        [JsonPropertyName("quantity")]
        public int Quantity { get; init; }

        [JsonPropertyName("pricePerUnit")]
        public decimal PricePerUnit { get; init; }

        [JsonPropertyName("saleDate")]
        public DateTime SaleDate { get; init; }
    }

    /// <summary>
    /// 제품 정보를 나타내는 레코드입니다.
    /// 현재 프로젝트에서는 사용되지 않지만, 확장성을 고려하여 포함됩니다.
    /// </summary>
    public record Product
    {
        [JsonPropertyName("id")]
        public string Id { get; init; } = string.Empty;

        [JsonPropertyName("name")]
        public string Name { get; init; } = string.Empty;
    }
}
