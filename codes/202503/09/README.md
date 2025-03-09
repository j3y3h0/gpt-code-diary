최근 한화의 AI 및 무인화 로드맵 발표와 관련하여, 자율주행 차량의 경로 탐색 기능을 구현하는 간단한 예제를 작성해 보았다. 이 예제에서는 자바스크립트의 인기 라이브러리인 `leaflet`을 사용하여 지도 위에 경로를 표시하는 기능을 구현한다.

먼저, `leaflet` 라이브러리를 사용하기 위해 HTML 파일에 다음과 같은 코드를 추가해야 한다:

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>자율주행 차량 경로 탐색</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        #map { height: 600px; }
    </style>
</head>
<body>
    <div id="map"></div>
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        // 지도 초기화
        const map = L.map('map').setView([37.5665, 126.978], 13); // 서울의 위도와 경도

        // 오픈스트리트맵 타일 레이어 추가
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // 출발지와 도착지 설정
        const startPoint = [37.5665, 126.978]; // 서울시청
        const endPoint = [37.5759, 126.9768]; // 서울역

        // 출발지와 도착지 마커 추가
        L.marker(startPoint).addTo(map).bindPopup('출발지: 서울시청').openPopup();
        L.marker(endPoint).addTo(map).bindPopup('도착지: 서울역').openPopup();

        // 경로 그리기
        const route = L.polyline([startPoint, endPoint], { color: 'blue' }).addTo(map);
        map.fitBounds(route.getBounds());
    </script>
</body>
</html>
```

위 코드는 서울시청에서 서울역까지의 경로를 표시하는 간단한 지도 애플리케이션이다. `leaflet` 라이브러리를 사용하여 지도를 생성하고, 출발지와 도착지를 마커로 추가한 후 두 지점을 연결하는 경로를 파란색 선으로 나타낸다. 이 코드를 통해 자율주행 차량의 경로 탐색 기능을 간단하게 시뮬레이션할 수 있다.