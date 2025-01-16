코오롱베니트의 국내 제조업 디지털 전환 사업 추진과 관련하여, Java를 이용한 간단한 데이터 분석 프로그램을 작성해 보겠다. 이 프로그램은 제조업체의 생산 데이터를 분석하고, 트렌드를 시각화하는 기능을 포함한다. 이를 위해 Apache POI와 JFreeChart 라이브러리를 사용하겠다.

### 필요한 라이브러리
1. Apache POI: 엑셀 파일 읽기 및 쓰기
2. JFreeChart: 데이터 시각화

### Maven 의존성 추가
```xml
<dependencies>
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi</artifactId>
        <version>5.2.3</version>
    </dependency>
    <dependency>
        <groupId>org.apache.poi</groupId>
        <artifactId>poi-ooxml</artifactId>
        <version>5.2.3</version>
    </dependency>
    <dependency>
        <groupId>org.jfree</groupId>
        <artifactId>jfreechart</artifactId>
        <version>1.5.3</version>
    </dependency>
</dependencies>
```

### 코드 예제
```java
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.data.category.CategoryDataset;
import org.jfree.data.category.DefaultCategoryDataset;

import javax.swing.*;
import java.io.FileInputStream;
import java.io.IOException;

public class ManufacturingDataAnalyzer {

    public static void main(String[] args) {
        String excelFilePath = "생산데이터.xlsx"; // 엑셀 파일 경로
        DefaultCategoryDataset dataset = readExcelData(excelFilePath);
        createChart(dataset);
    }

    private static DefaultCategoryDataset readExcelData(String filePath) {
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();
        try (FileInputStream fis = new FileInputStream(filePath);
             Workbook workbook = new XSSFWorkbook(fis)) {

            Sheet sheet = workbook.getSheetAt(0);
            for (Row row : sheet) {
                Cell categoryCell = row.getCell(0);
                Cell valueCell = row.getCell(1);
                
                if (categoryCell != null && valueCell != null) {
                    dataset.addValue(valueCell.getNumericCellValue(), "생산량", categoryCell.getStringCellValue());
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return dataset;
    }

    private static void createChart(CategoryDataset dataset) {
        JFreeChart chart = ChartFactory.createBarChart(
                "제조업 생산량 분석",
                "제품",
                "생산량",
                dataset
        );

        ChartPanel chartPanel = new ChartPanel(chart);
        JFrame frame = new JFrame();
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.add(chartPanel);
        frame.pack();
        frame.setVisible(true);
    }
}
```

### 설명
이 프로그램은 엑셀 파일에서 제조업체의 생산 데이터를 읽어와서, 이를 바 차트로 시각화한다. 사용자는 엑셀 파일의 경로를 지정하고, 프로그램을 실행하면 생산량을 쉽게 분석할 수 있는 차트를 확인할 수 있다. 이러한 기능은 제조업 디지털 전환의 일환으로 데이터 기반 의사결정을 지원하는 데 유용하다.