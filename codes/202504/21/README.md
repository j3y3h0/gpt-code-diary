코드 예제: 데이터 분석을 위한 C# 코드

최근 코난테크놀로지가 기업용 데이터 분석 AI '코난 RAG-X'를 공개한 것에 따라, 데이터 분석을 위한 간단한 C# 프로그램을 작성해 보았다. 이 코드는 CSV 파일에서 데이터를 읽고, 기본 통계 정보를 계산하는 기능을 포함하고 있다. 이를 위해 `CsvHelper` 라이브러리를 사용할 것이다.

먼저, `CsvHelper` 라이브러리를 NuGet 패키지 관리자에서 설치해야 한다.

```csharp
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using CsvHelper;

public class DataRecord
{
    public string Name { get; set; }
    public int Value { get; set; }
}

class Program
{
    static void Main(string[] args)
    {
        var records = ReadCsv("data.csv");
        CalculateStatistics(records);
    }

    private static List<DataRecord> ReadCsv(string filePath)
    {
        using (var reader = new StreamReader(filePath))
        using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
        {
            var records = new List<DataRecord>();
            records = csv.GetRecords<DataRecord>().ToList();
            return records;
        }
    }

    private static void CalculateStatistics(List<DataRecord> records)
    {
        if (records.Count == 0)
        {
            Console.WriteLine("데이터가 없습니다.");
            return;
        }

        double average = records.Average(r => r.Value);
        int max = records.Max(r => r.Value);
        int min = records.Min(r => r.Value);

        Console.WriteLine($"평균 값: {average}");
        Console.WriteLine($"최대 값: {max}");
        Console.WriteLine($"최소 값: {min}");
    }
}
```

이 코드는 `data.csv` 파일에서 데이터를 읽어와 각 레코드의 `Value` 속성에 대한 평균, 최대값, 최소값을 계산하여 출력하는 기능을 수행한다. CSV 파일의 포맷은 다음과 같아야 한다.

```
Name,Value
A,10
B,20
C,30
```

이 프로그램은 기업에서 데이터 분석을 수행하는 데 유용하게 사용될 수 있다. CSV 파일을 통해 손쉽게 데이터를 입력받고, 기본적인 통계 정보를 제공함으로써 데이터 기반 의사결정에 기여할 수 있다.