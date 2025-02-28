최근 뉴스 중에서 "국제우주정거장은 너무 깨끗해서 문제…우주비행사 건강 위협"이라는 주제가 눈에 띈다. 이와 관련하여, 우주 환경에서의 미생물 샘플을 분석하는 Python 코드를 작성해 보았다. 이 코드는 자연 미생물 데이터를 수집하고, 이를 분석하기 위해 Pandas와 Matplotlib 라이브러리를 사용한다.

```python
import pandas as pd
import matplotlib.pyplot as plt

# 미생물 데이터 샘플 생성
data = {
    '미생물': ['미생물A', '미생물B', '미생물C', '미생물D'],
    '농도(개체/ml)': [120, 85, 60, 75]
}

# DataFrame 생성
df = pd.DataFrame(data)

# 미생물 농도 시각화
plt.figure(figsize=(10, 6))
plt.bar(df['미생물'], df['농도(개체/ml)'], color='skyblue')
plt.title('우주 환경 내 미생물 농도 분석')
plt.xlabel('미생물 종류')
plt.ylabel('농도 (개체/ml)')
plt.xticks(rotation=45)
plt.grid(axis='y')

# 그래프 표시
plt.tight_layout()
plt.show()
```

이 코드는 우주 환경에서 수집된 미생물 샘플의 농도를 시각화하며, 각 미생물의 농도를 바 그래프로 나타낸다. 이를 통해 연구자들은 어떤 미생물이 우주 환경에서 더 많이 존재하는지를 쉽게 파악할 수 있다. 이러한 정보는 우주비행사의 건강 관리 및 우주 환경의 생물학적 다양성 연구에 기여할 수 있다.