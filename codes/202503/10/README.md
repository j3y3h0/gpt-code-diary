## 친환경 과산화수소 생산 촉매 개발을 위한 데이터 시각화

최근 KIST에서 개발한 친환경 과산화수소 생산 촉매의 성능을 분석하고 시각화하기 위해, JavaScript와 D3.js 라이브러리를 활용한 간단한 코드 예제를 작성하였다. 이 코드는 실험 데이터를 기반으로 한 그래프를 생성하여 촉매의 효율성을 시각적으로 표현하는 데 유용하다.

### 코드 예제

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>과산화수소 생산 촉매 효율성 시각화</title>
    <script src="https://d3js.org/d3.v7.min.js"></script>
    <style>
        .bar {
            fill: steelblue;
        }
        .bar:hover {
            fill: orange;
        }
        .axis--x path {
            display: none;
        }
    </style>
</head>
<body>
    <h1>과산화수소 생산 촉매 효율성</h1>
    <svg width="600" height="400"></svg>

    <script>
        const data = [
            { 효율성: '촉매 A', 값: 80 },
            { 효율성: '촉매 B', 값: 55 },
            { 효율성: '촉매 C', 값: 90 },
            { 효율성: '촉매 D', 값: 70 },
            { 효율성: '촉매 E', 값: 85 }
        ];

        const svg = d3.select("svg"),
              margin = { top: 20, right: 30, bottom: 40, left: 40 },
              width = +svg.attr("width") - margin.left - margin.right,
              height = +svg.attr("height") - margin.top - margin.bottom,
              g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        const x = d3.scaleBand()
            .domain(data.map(d => d.효율성))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.값)])
            .nice()
            .range([height, 0]);

        g.append("g")
            .selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.효율성))
            .attr("y", d => y(d.값))
            .attr("width", x.bandwidth())
            .attr("height", d => height - y(d.값));

        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", `translate(0,${height})`)
            .call(d3.axisBottom(x));

        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y));
    </script>
</body>
</html>
```

### 설명
이 코드는 D3.js를 사용하여 실험 데이터를 기반으로 바 차트를 생성한다. 각 바는 다른 촉매의 효율성을 나타내며, 그래프를 통해 시각적으로 비교할 수 있다. 이를 통해 연구자들은 각 촉매의 성능을 쉽게 분석하고 이해할 수 있으며, 향후 연구 개발에 시사점을 제공할 수 있다.