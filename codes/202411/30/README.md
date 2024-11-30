- **title**: 두 호미닌 발자국 데이터 시각화를 위한 Python 코드  
- **language**: Python  
- **content**: 
```python
import matplotlib.pyplot as plt
import numpy as np

# 두 호미닌 발자국의 가상의 데이터 생성
hominin_types = ['호모 에렉투스', '파란트로푸스']
footprint_sizes = [23, 20]  # 발자국 크기 (cm)
locations = ['케냐 호숫가'] * 2  # 위치

# 데이터 시각화를 위한 막대 그래프 생성
x = np.arange(len(hominin_types))  # x 위치 설정
width = 0.35  # 막대의 너비

fig, ax = plt.subplots()
bars = ax.bar(x - width/2, footprint_sizes, width, label='발자국 크기 (cm)', color=['blue', 'green'])

# 그래프에 레이블 및 제목 추가
ax.set_ylabel('발자국 크기 (cm)')
ax.set_title('두 호미닌 발자국 크기 비교')
ax.set_xticks(x)
ax.set_xticklabels(hominin_types)
ax.legend()

# 막대 위에 값 표시
for bar in bars:
    yval = bar.get_height()
    ax.text(bar.get_x() + bar.get_width()/2, yval, round(yval, 2), ha='center', va='bottom')

# 그래프 출력
plt.show()
```