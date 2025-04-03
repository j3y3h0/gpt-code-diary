닌텐도 스위치 2의 출시와 관련하여, 게임의 가격 차별 문제를 해결하기 위한 간단한 가격 비교 웹 애플리케이션을 작성해 보겠다. 이 애플리케이션은 사용자가 일본, 한국, 해외의 가격을 입력하면, 가장 저렴한 가격을 찾아주는 기능을 포함한다. 이를 위해 JavaScript와 함께 jQuery 라이브러리를 사용할 것이다.

```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>가격 비교기</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body { font-family: Arial, sans-serif; }
        #result { margin-top: 20px; }
    </style>
</head>
<body>
    <h1>닌텐도 스위치 2 가격 비교기</h1>
    <label for="japanPrice">일본 가격 (원): </label>
    <input type="number" id="japanPrice" /><br>
    <label for="koreaPrice">한국 가격 (원): </label>
    <input type="number" id="koreaPrice" /><br>
    <label for="overseaPrice">해외 가격 (원): </label>
    <input type="number" id="overseaPrice" /><br>
    <button id="compareButton">가격 비교하기</button>
    
    <div id="result"></div>

    <script>
        $(document).ready(function() {
            $('#compareButton').click(function() {
                const japanPrice = parseInt($('#japanPrice').val());
                const koreaPrice = parseInt($('#koreaPrice').val());
                const overseaPrice = parseInt($('#overseaPrice').val());

                const prices = {
                    일본: japanPrice,
                    한국: koreaPrice,
                    해외: overseaPrice
                };

                const minPrice = Math.min(japanPrice, koreaPrice, overseaPrice);
                const cheapestRegion = Object.keys(prices).find(key => prices[key] === minPrice);

                $('#result').text(`${cheapestRegion}에서 가장 저렴한 가격: ${minPrice}원`);
            });
        });
    </script>
</body>
</html>
```

위 코드는 사용자가 세 가지 지역의 가격을 입력하면, 버튼을 클릭하여 가장 저렴한 가격과 해당 지역을 출력하는 웹 애플리케이션이다. jQuery를 사용하여 DOM 조작을 간편하게 처리하고, 가격 비교 로직을 통해 사용자가 직관적으로 가격을 비교할 수 있도록 하였다.