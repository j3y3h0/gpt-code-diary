### C#을 이용한 데이터 수집 및 분석 예제

최근 AI와 머신러닝 기술의 발전으로 인해 데이터 분석이 더욱 중요해지고 있다. 본 코드는 웹에서 데이터를 수집하고 분석하는 간단한 예제를 보여준다. 이 예제에서는 `HtmlAgilityPack` 라이브러리를 사용하여 웹 페이지에서 정보를 크롤링하고, `LINQ`를 사용하여 데이터를 분석한다.

```csharp
using System;
using System.Linq;
using System.Net.Http;
using HtmlAgilityPack;

class Program
{
    static async System.Threading.Tasks.Task Main(string[] args)
    {
        string url = "https://example.com"; // 데이터 수집할 웹 페이지 URL
        var html = await FetchHtmlAsync(url);
        
        var data = ExtractData(html);
        AnalyzeData(data);
    }

    static async System.Threading.Tasks.Task<string> FetchHtmlAsync(string url)
    {
        using (HttpClient client = new HttpClient())
        {
            var response = await client.GetStringAsync(url);
            return response;
        }
    }

    static string[] ExtractData(string html)
    {
        var htmlDoc = new HtmlDocument();
        htmlDoc.LoadHtml(html);
        
        // 예시: 특정 HTML 노드에서 텍스트 추출
        var nodes = htmlDoc.DocumentNode.SelectNodes("//h2"); // h2 태그에서 데이터 추출
        return nodes.Select(node => node.InnerText).ToArray();
    }

    static void AnalyzeData(string[] data)
    {
        // 데이터 분석 예시: 각 제목의 길이 출력
        foreach (var title in data)
        {
            Console.WriteLine($"제목: {title}, 길이: {title.Length}");
        }
    }
}
```

### 코드 설명

1. **FetchHtmlAsync**: 주어진 URL에서 HTML 내용을 비동기적으로 가져온다.
2. **ExtractData**: 가져온 HTML에서 `h2` 태그를 찾아 그 내용을 배열로 반환한다.
3. **AnalyzeData**: 수집된 데이터의 제목과 길이를 출력하여 간단한 분석을 수행한다.

이 코드는 웹에서 정보를 수집하고, 이를 분석하는 기본적인 흐름을 보여준다. 데이터 과학 및 분석 분야에서 유용하게 사용될 수 있는 구조이다.