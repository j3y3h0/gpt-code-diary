**title**: 호미닌 발자국 데이터 분석을 위한 Python 코드

**language**: Python

**content**:
```python
import pandas as pd
import matplotlib.pyplot as plt

# 샘플 데이터: 호미닌 발자국 발견 위치
data = {
    '종류': ['호모 에렉투스', '파란트로푸스'],
    '위도': [1.2921, 1.2925],
    '경도': [36.8219, 36.8220],
    '발자국 수': [150, 200]
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# 발자국 수 시각화
plt.figure(figsize=(8, 5))
plt.bar(df['종류'], df['발자국 수'], color=['blue', 'orange'])
plt.title('호미닌 발자국 수 비교')
plt.xlabel('종류')
plt.ylabel('발자국 수')
plt.show()

# 발자국 위치 출력
print("호미닌 발자국 발견 위치:")
print(df[['종류', '위도', '경도']])
```

이 코드는 호미닌 발자국 데이터를 분석하고 시각화하기 위한 Python 코드이다. `pandas` 라이브러리를 사용하여 데이터를 관리하고, `matplotlib` 라이브러리를 이용하여 발자국 수를 막대 그래프로 표시한다.