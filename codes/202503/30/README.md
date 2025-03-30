최근 뉴스 중 "카메라에 힘주는 스마트폰 제조사들…전문 카메라 대체할까"라는 주제를 바탕으로, 이미지 처리와 관련된 간단한 파이썬 코드를 작성해 보겠다. 이 코드는 OpenCV 라이브러리를 사용하여 이미지를 불러오고, 간단한 필터를 적용하는 기능을 제공한다.

먼저, OpenCV 라이브러리를 설치해야 한다. 아래 명령어를 통해 설치할 수 있다.

```bash
pip install opencv-python
```

이제 아래의 코드를 통해 이미지를 불러오고, 그레이스케일로 변환한 후, 화면에 표시하는 기능을 구현할 수 있다.

```python
import cv2

# 이미지 경로 설정
image_path = 'your_image.jpg'  # 여기에 불러올 이미지 파일 경로를 입력하세요.

# 이미지 읽기
image = cv2.imread(image_path)

# 이미지가 정상적으로 읽혔는지 확인
if image is None:
    print("이미지를 불러올 수 없습니다. 경로를 확인하세요.")
else:
    # 이미지를 그레이스케일로 변환
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # 원본 이미지와 그레이스케일 이미지 표시
    cv2.imshow('Original Image', image)
    cv2.imshow('Grayscale Image', gray_image)

    # 키 입력 대기 후 모든 창 닫기
    cv2.waitKey(0)
    cv2.destroyAllWindows()
```

이 코드는 지정된 경로의 이미지를 불러와서 원본 이미지와 그레이스케일 변환된 이미지를 각각 창에 표시한다. 이처럼 OpenCV를 활용하면 스마트폰 카메라의 성능을 활용한 다양한 이미지 처리 기능을 손쉽게 구현할 수 있다.