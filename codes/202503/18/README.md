최근의 뉴스 중 "웹 망원경, 외계행성 대기중 이산화탄소 처음으로 직접 포착"이라는 주제를 바탕으로, 자바스크립트를 이용하여 외계행성의 대기 성분을 시각화하는 간단한 코드 예제를 작성해 보겠다. 이를 위해 `Chart.js`라는 라이브러리를 활용하여 대기 성분의 비율을 차트로 나타내는 예제를 소개한다.

### 외계행성 대기 성분 시각화 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>외계행성 대기 성분 시각화</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
    <h1>외계행성 대기 성분 시각화</h1>
    <canvas id="atmosphereChart" width="400" height="400"></canvas>
    <script>
        const ctx = document.getElementById('atmosphereChart').getContext('2d');
        const atmosphereChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ['이산화탄소', '질소', '산소', '기타'],
                datasets: [{
                    label: '대기 성분 비율',
                    data: [30, 60, 5, 5], // 각각의 성분 비율
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: '외계행성 대기 성분 비율'
                    }
                }
            }
        });
    </script>
</body>
</html>
```

이 코드는 외계행성의 대기 성분을 파이 차트로 시각화하는 기능을 구현하고 있다. `Chart.js` 라이브러리를 사용하여 데이터를 시각적으로 표현함으로써, 연구자들이 외계행성의 대기 성분을 쉽게 이해할 수 있도록 돕는다. 각 성분의 비율을 조정하여 다양한 시나리오를 시뮬레이션할 수 있다.