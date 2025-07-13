최근 삼성의 XR 헤드셋 출시 소식에 착안하여, JavaScript를 사용하여 XR 환경에서 사용자 인터페이스(UI)를 만들 수 있는 간단한 예제를 작성해 보았다. 이 코드는 Three.js 라이브러리를 사용하여 3D 객체를 화면에 렌더링하는 기본적인 기능을 보여준다.

### XR 환경에서 3D 객체 렌더링 예제

```javascript
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>XR 환경에서 3D 객체 렌더링</title>
    <style>
        body { margin: 0; }
        canvas { display: block; }
    </style>
</head>
<body>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // 장면, 카메라 및 렌더러 초기화
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        // 큐브 생성
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 카메라 위치 설정
        camera.position.z = 5;

        // 애니메이션 루프
        function animate() {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        }
        animate();

        // 창 크기 변경 시 렌더러 크기 조정
        window.addEventListener('resize', () => {
            const width = window.innerWidth;
            const height = window.innerHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        });
    </script>
</body>
</html>
```

이 코드는 Three.js 라이브러리를 사용하여 3D 큐브를 생성하고 애니메이션을 적용하는 기능을 포함하고 있다. 사용자는 웹 브라우저에서 이 코드를 실행하면, 간단한 XR 환경을 경험할 수 있다. 이 예제는 XR 기기에서 어떻게 3D 콘텐츠를 렌더링할 수 있는지를 보여주는 기초적인 입문 사례이다.