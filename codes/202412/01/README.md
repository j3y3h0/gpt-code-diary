- **title**: 두 호미닌의 발자국 화석 데이터를 분석하는 Python 코드  
- **language**: Python  
- **content**: 
```python
import pandas as pd
import matplotlib.pyplot as plt

# 샘플 데이터: 발자국의 깊이와 너비
data = {
    'Hominin': ['Homo Erectus', 'Paranthropus'],
    'Footprint Depth (cm)': [25, 20],
    'Footprint Width (cm)': [10, 8]
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# 발자국의 깊이와 너비 시각화
plt.figure(figsize=(10, 5))
plt.bar(df['Hominin'], df['Footprint Depth (cm)'], color='blue', label='Depth')
plt.bar(df['Hominin'], df['Footprint Width (cm)'], color='orange', label='Width', alpha=0.7)

plt.title('Hominin Footprint Analysis')
plt.xlabel('Hominin Species')
plt.ylabel('Measurements (cm)')
plt.legend()
plt.grid(axis='y')

# 그래프 출력
plt.show()
```  

이 코드는 두 호미닌의 발자국 깊이와 너비를 비교하고 시각화하는 기능을 제공한다. `pandas` 라이브러리를 사용하여 데이터를 관리하고, `matplotlib` 라이브러리를 활용하여 시각화를 수행한다.