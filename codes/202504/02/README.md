최근 뉴스 중 "인공태양" 핵융합에너지 상용화에 대한 내용이 주목받고 있다. 이와 관련하여, 특정 데이터를 시각화하는 예제 코드를 작성해 보겠다. 여기서는 JavaScript와 D3.js 라이브러리를 사용하여 핵융합 연구의 발전을 시간에 따라 시각화하는 간단한 차트를 만들어 볼 것이다.

```javascript
// D3.js 라이브러리 불러오기
<script src="https://d3js.org/d3.v7.min.js"></script>

<script>
// 데이터: 핵융합 연구의 주요 이정표
const data = [
    { year: 2025, milestone: "첫 번째 상용형 핵융합 반응기 운전" },
    { year: 2030, milestone: "상용화 가능성 검토" },
    { year: 2035, milestone: "한국형 혁신 핵융합로 운전 목표" },
    { year: 2040, milestone: "핵융합 에너지 상용화" },
];

// SVG 요소 생성
const svgWidth = 600;
const svgHeight = 400;
const svg = d3.select("body")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// 스케일 설정
const xScale = d3.scaleBand()
    .domain(data.map(d => d.year))
    .range([0, svgWidth])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, data.length])
    .range([svgHeight, 0]);

// 바 그래프 생성
svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.year))
    .attr("y", (d, i) => yScale(i + 1))
    .attr("width", xScale.bandwidth())
    .attr("height", (d, i) => svgHeight - yScale(i + 1))
    .attr("fill", "steelblue");

// 텍스트 추가
svg.selectAll("text")
    .data(data)
    .enter()
    .append("text")
    .attr("x", d => xScale(d.year) + xScale.bandwidth() / 2)
    .attr("y", (d, i) => yScale(i + 1) - 5)
    .attr("text-anchor", "middle")
    .text(d => d.milestone);
</script>
```

위 코드는 D3.js를 사용하여 핵융합 연구의 주요 이정표를 시각적으로 표현하는 바 그래프를 생성하는 예제이다. 이와 같은 데이터 시각화는 연구 결과를 이해하고 전달하는 데 유용하다. 각 바는 특정 연도에 이루어질 중요한 사건을 나타내며, 연구의 발전 과정을 한눈에 볼 수 있도록 돕는다.