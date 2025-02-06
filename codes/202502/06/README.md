최근 뉴스에서 원자로에서 우주 속 암흑물질을 찾기 위한 연구에 대한 소식이 주목받고 있다. 이를 바탕으로, 암흑물질 탐색을 위한 간단한 신호 분석 프로그램을 파이썬으로 구현해 보겠다. 여기서는 NumPy와 Matplotlib 라이브러리를 사용하여 신호를 생성하고 분석하는 예제를 보여준다.

```python
import numpy as np
import matplotlib.pyplot as plt

# 신호 생성 함수
def generate_signal(frequency, duration, sampling_rate):
    t = np.linspace(0, duration, int(sampling_rate * duration), endpoint=False)
    signal = np.sin(2 * np.pi * frequency * t) + np.random.normal(0, 0.5, t.shape)  # 노이즈 포함
    return t, signal

# 신호 분석 함수
def analyze_signal(signal, sampling_rate):
    fft_result = np.fft.fft(signal)
    frequencies = np.fft.fftfreq(len(signal), 1/sampling_rate)
    return frequencies, np.abs(fft_result)

# 파라미터 설정
frequency = 5  # 주파수 (Hz)
duration = 2   # 지속 시간 (초)
sampling_rate = 100  # 샘플링 주파수 (Hz)

# 신호 생성
time, signal = generate_signal(frequency, duration, sampling_rate)

# 신호 분석
frequencies, magnitude = analyze_signal(signal, sampling_rate)

# 결과 시각화
plt.figure(figsize=(12, 6))

# 원신호 시각화
plt.subplot(2, 1, 1)
plt.plot(time, signal)
plt.title('신호')
plt.xlabel('시간 (초)')
plt.ylabel('진폭')

# FFT 결과 시각화
plt.subplot(2, 1, 2)
plt.plot(frequencies[:len(frequencies)//2], magnitude[:len(magnitude)//2])
plt.title('주파수 스펙트럼')
plt.xlabel('주파수 (Hz)')
plt.ylabel('크기')

plt.tight_layout()
plt.show()
```

위 코드는 특정 주파수의 신호를 생성하고, 그 신호에 대한 푸리에 변환을 수행하여 주파수 스펙트럼을 시각화하는 기능을 가지고 있다. 이와 같은 신호 분석 방법은 암흑물질 탐색과 같은 물리적 실험에서 미세한 신호를 발견하는 데 유용하게 사용될 수 있다.