### 우주 관련 데이터 시각화 프로그램

최근 발표된 우주산업에 대한 내용에 영감을 받아, Java를 사용하여 우주 관련 데이터 시각화를 위한 간단한 프로그램을 작성해보았다. 이 프로그램은 JFreeChart 라이브러리를 활용하여 우주 임무에 대한 데이터를 시각적으로 표현한다.

#### 코드 예제

```java
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel;
import org.jfree.chart.JFreeChart;
import org.jfree.data.category.DefaultCategoryDataset;

import javax.swing.*;
import java.awt.*;

public class SpaceMissionChart extends JFrame {

    public SpaceMissionChart(String title) {
        super(title);
        DefaultCategoryDataset dataset = createDataset();
        JFreeChart chart = createChart(dataset);
        ChartPanel chartPanel = new ChartPanel(chart);
        chartPanel.setPreferredSize(new Dimension(800, 600));
        setContentPane(chartPanel);
    }

    private DefaultCategoryDataset createDataset() {
        DefaultCategoryDataset dataset = new DefaultCategoryDataset();
        dataset.addValue(10, "임무 성공", "2020");
        dataset.addValue(15, "임무 성공", "2021");
        dataset.addValue(20, "임무 성공", "2022");
        dataset.addValue(5, "임무 실패", "2020");
        dataset.addValue(3, "임무 실패", "2021");
        dataset.addValue(1, "임무 실패", "2022");
        return dataset;
    }

    private JFreeChart createChart(DefaultCategoryDataset dataset) {
        return ChartFactory.createBarChart(
                "우주 임무 성공 및 실패 통계",
                "연도",
                "수치",
                dataset
        );
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            SpaceMissionChart example = new SpaceMissionChart("우주 임무 통계");
            example.setSize(800, 600);
            example.setLocationRelativeTo(null);
            example.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
            example.setVisible(true);
        });
    }
}
```

#### 설명

이 프로그램은 `JFreeChart` 라이브러리를 사용하여 우주 임무의 성공과 실패를 연도별로 시각화한다. 

1. `createDataset()` 메서드는 데이터셋을 생성하여 각각의 연도에 따른 임무 성공과 실패 수치를 추가한다.
2. `createChart()` 메서드는 생성된 데이터셋을 바탕으로 막대 그래프를 생성한다.
3. `main()` 메서드는 GUI를 초기화하고 화면에 차트를 표시한다.

이 코드 예제를 통해 우주 관련 데이터의 시각화 방법을 배우고, 실질적인 프로그래밍 기술을 익힐 수 있다.