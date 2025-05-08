최근 KAIST에서 개발한 웨어러블 혈압 센서와 관련된 내용을 바탕으로, Python을 활용하여 혈압 데이터를 실시간으로 측정하고 기록하는 간단한 프로그램 예제를 작성하였다. 이 코드는 `random` 라이브러리를 사용하여 임의의 혈압 데이터를 생성하고, `matplotlib`을 활용하여 시각화하는 기능을 포함한다.

```python
import random
import matplotlib.pyplot as plt
from time import sleep

# 혈압 데이터를 저장할 리스트
blood_pressure_data = []

# 혈압 측정 함수
def measure_blood_pressure():
    # 수축기 혈압과 이완기 혈압을 랜덤으로 생성
    systolic = random.randint(90, 140)  # 수축기 혈압
    diastolic = random.randint(60, 90)   # 이완기 혈압
    return systolic, diastolic

# 데이터를 수집하고 시각화하는 메인 함수
def collect_and_plot_data(duration=60):
    start_time = 0
    while start_time < duration:
        systolic, diastolic = measure_blood_pressure()
        blood_pressure_data.append((systolic, diastolic))
        print(f"수축기 혈압: {systolic}, 이완기 혈압: {diastolic}")
        sleep(1)  # 1초 대기
        start_time += 1

    # 수집된 데이터 시각화
    plt.figure(figsize=(10, 5))
    plt.plot([bp[0] for bp in blood_pressure_data], label='수축기 혈압', color='red')
    plt.plot([bp[1] for bp in blood_pressure_data], label='이완기 혈압', color='blue')
    plt.title('혈압 측정 데이터')
    plt.xlabel('시간 (초)')
    plt.ylabel('혈압 (mmHg)')
    plt.legend()
    plt.grid()
    plt.show()

# 1분 동안 혈압 측정 데이터 수집 및 시각화
collect_and_plot_data(60)
```

이 코드는 1분 동안 임의의 혈압 수치를 측정하여 리스트에 저장하고, 측정이 완료된 후 수축기와 이완기 혈압을 시각적으로 표현한다. 이와 같은 프로그램은 웨어러블 장치와 결합하여 실시간 건강 모니터링 시스템에 활용될 수 있다.