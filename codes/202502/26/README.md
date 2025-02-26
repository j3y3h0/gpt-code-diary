구글코리아가 디지털 책임위원회를 운영하며 지속 가능한 생태계 조성을 목표로 하고 있다는 최근 소식에 착안하여, 자바스크립트로 환경 보호를 위한 간단한 웹 애플리케이션 예제를 작성해 보겠다. 이 애플리케이션은 사용자가 탄소 발자국을 계산할 수 있는 기능을 제공한다. 

아래는 `React` 라이브러리를 사용하여 구현한 예제 코드이다. 

```javascript
import React, { useState } from 'react';

const CarbonFootprintCalculator = () => {
    const [milesDriven, setMilesDriven] = useState(0);
    const [footprint, setFootprint] = useState(null);

    const calculateFootprint = () => {
        // 평균적으로 차량 1마일당 404g의 CO2가 발생한다고 가정
        const co2PerMile = 404; 
        const totalFootprint = milesDriven * co2PerMile;
        setFootprint(totalFootprint);
    };

    return (
        <div>
            <h1>탄소 발자국 계산기</h1>
            <label>
                주행 거리 (마일):
                <input 
                    type="number" 
                    value={milesDriven} 
                    onChange={(e) => setMilesDriven(e.target.value)} 
                />
            </label>
            <button onClick={calculateFootprint}>계산하기</button>
            {footprint !== null && (
                <h2>당신의 탄소 발자국: {footprint}g CO2</h2>
            )}
        </div>
    );
};

export default CarbonFootprintCalculator;
```

이 코드에서는 사용자가 입력한 주행 거리를 바탕으로 탄소 발자국을 계산하는 간단한 애플리케이션을 만들었다. 사용자가 입력한 마일 수에 따라 차량에서 발생하는 이산화탄소의 양을 계산하고, 결과를 출력하는 구조이다. `React`를 통해 사용자 인터페이스를 구성하고, `useState` 훅을 사용하여 상태 관리를 수행하였다. 

이러한 종류의 애플리케이션은 환경 문제에 대한 인식을 높이고, 지속 가능한 생태계를 위한 개인의 기여를 촉진하는 데 도움을 줄 수 있다.