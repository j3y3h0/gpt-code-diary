## 차세대 전지 성능 향상을 위한 음극 소재 개발 관련 샘플 코드

최근 리튬 이온 이차전지를 대체할 수 있는 차세대 전지 개발에 대한 연구가 활발히 진행되고 있다. 이에 따라, 아연 친화성 수계 고분자 기반 음극 소재의 성능을 시뮬레이션하기 위한 간단한 Java 코드를 작성해 보았다. 이 코드는 전지의 전압과 용량을 계산하는 기능을 포함하고 있다.

```java
import java.util.Scanner;

public class BatterySimulation {

    private double voltage; // 전압
    private double capacity; // 용량

    public BatterySimulation(double voltage, double capacity) {
        this.voltage = voltage;
        this.capacity = capacity;
    }

    // 전지의 에너지 계산
    public double calculateEnergy() {
        return voltage * capacity; // 에너지 (Wh)
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("전압(V)을 입력하세요: ");
        double voltage = scanner.nextDouble();

        System.out.print("용량(Ah)을 입력하세요: ");
        double capacity = scanner.nextDouble();

        BatterySimulation battery = new BatterySimulation(voltage, capacity);
        double energy = battery.calculateEnergy();

        System.out.printf("전지의 에너지는 %.2f Wh입니다.%n", energy);
        scanner.close();
    }
}
```

### 코드 설명
1. `BatterySimulation` 클래스는 전압과 용량을 받아 전지의 에너지를 계산하는 기능을 가진다.
2. `calculateEnergy` 메서드는 전지의 에너지를 계산하여 반환한다.
3. `main` 메서드에서는 사용자로부터 전압과 용량을 입력받아 `BatterySimulation` 객체를 생성하고, 전지의 에너지를 출력한다.

이 코드는 차세대 전지 개발에 필요한 기초적인 시뮬레이션을 위해 활용될 수 있으며, 연구자들이 새로운 음극 소재의 성능을 예측하는 데 도움을 줄 수 있다.