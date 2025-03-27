최근 SK텔레콤이 AI를 활용한 ESG 경영 비전을 제시한 것과 관련하여, Python을 사용하여 기업의 ESG 데이터를 분석하는 간단한 예제를 만들어 보겠다. 이 예제에서는 `pandas`와 `matplotlib` 라이브러리를 활용하여 ESG 점수를 시각화하는 기능을 구현할 것이다.

```python
import pandas as pd
import matplotlib.pyplot as plt

# ESG 데이터 샘플 생성
data = {
    '기업': ['기업 A', '기업 B', '기업 C', '기업 D'],
    '환경 점수': [76, 85, 90, 70],
    '사회 점수': [80, 78, 88, 75],
    '지배구조 점수': [85, 82, 87, 80]
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# ESG 점수의 평균 계산
df['평균 점수'] = df[['환경 점수', '사회 점수', '지배구조 점수']].mean(axis=1)

# 결과 시각화
plt.figure(figsize=(10, 6))
plt.bar(df['기업'], df['평균 점수'], color='skyblue')
plt.title('기업별 평균 ESG 점수')
plt.xlabel('기업')
plt.ylabel('평균 ESG 점수')
plt.ylim(0, 100)
plt.axhline(y=75, color='r', linestyle='--', label='기준선 (75점)')
plt.legend()
plt.grid(axis='y')

# 그래프 출력
plt.show()
```

이 코드는 기업별로 환경, 사회, 지배구조에 대한 점수를 입력받아 평균 ESG 점수를 계산하고, 이를 바 그래프 형태로 시각화하는 기능을 제공한다. 이와 같은 분석 도구는 기업이 ESG 경영을 강화하는 데 도움을 줄 수 있다.