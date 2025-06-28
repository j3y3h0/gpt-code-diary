이번 날씨 관련 뉴스 중 "다이빙으로 가장 큰 물보라를 일으키는 과학적 방법"에 대한 내용을 바탕으로, 수조에서 다이빙 시 물보라를 예측하는 간단한 시뮬레이션 코드를 작성해 보겠다. 이 코드는 JavaScript와 p5.js 라이브러리를 사용하여 시각적으로 물보라를 시뮬레이션할 수 있도록 구성할 것이다.

아래는 다이빙 시 물보라를 시뮬레이션하는 코드 예제이다.

```javascript
let splashParticles = [];

function setup() {
    createCanvas(800, 600);
    background(135, 206, 235); // 하늘색 배경
}

function draw() {
    background(135, 206, 235);
    for (let i = 0; i < splashParticles.length; i++) {
        splashParticles[i].update();
        splashParticles[i].show();
    }
    
    // 물보라가 너무 많아지지 않도록 제한
    if (splashParticles.length > 100) {
        splashParticles.splice(0, 10);
    }
}

function mousePressed() {
    // 다이빙 시 물보라 생성
    for (let i = 0; i < 50; i++) {
        splashParticles.push(new SplashParticle(mouseX, mouseY));
    }
}

class SplashParticle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = random(5, 15);
        this.speedY = random(-2, 2);
        this.alpha = 255;
    }

    update() {
        this.y += this.speedY;
        this.alpha -= 5; // 점점 투명해짐
    }

    show() {
        fill(255, 255, 255, this.alpha); // 흰색, 투명도 적용
        noStroke();
        ellipse(this.x, this.y, this.size);
    }
}
```

이 코드는 p5.js 라이브러리를 사용하여, 사용자가 마우스를 클릭할 때마다 물보라를 생성하는 간단한 시뮬레이션이다. 물보라 입자들은 클릭한 위치에서 시작하여 위로 튕기고 점점 사라진다. 이 코드는 다이빙과 물보라의 물리적 현상을 시각적으로 표현할 수 있는 예시가 된다.