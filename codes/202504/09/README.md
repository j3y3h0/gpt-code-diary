최근 포스코DX가 영상인식 AI 기술을 활용해 로드킬 예방에 나선 소식이 주목받고 있다. 이에 따라, 영상 인식을 통해 차량과 동물의 충돌을 감지하는 간단한 Python 코드를 작성해 보겠다. 이 코드는 OpenCV와 TensorFlow를 활용하여 이미지에서 객체를 감지하는 기능을 포함한다.

```python
import cv2
import numpy as np
import tensorflow as tf

# 사전 훈련된 COCO 모델 로드
model = tf.saved_model.load('ssd_mobilenet_v2_fpnlite_320x320/saved_model')

# 객체 감지 함수
def detect_objects(image):
    input_tensor = tf.convert_to_tensor(image)
    input_tensor = input_tensor[tf.newaxis, ...]

    detections = model(input_tensor)
    return detections

# 이미지 로드 및 전처리
image_path = 'road_image.jpg'  # 로드킬이 발생할 수 있는 도로 이미지 경로
image = cv2.imread(image_path)
image_rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)

# 객체 감지 실행
detections = detect_objects(image_rgb)

# 감지된 객체 그리기
for i in range(int(detections.pop('num_detections'))):
    box = detections['detection_boxes'][0][i].numpy()
    class_id = int(detections['detection_classes'][0][i].numpy())
    score = detections['detection_scores'][0][i].numpy()

    # 신뢰도가 0.5 이상인 경우에만 표시
    if score > 0.5:
        h, w, _ = image.shape
        (y_min, x_min, y_max, x_max) = (box * np.array([h, w, h, w])).astype(int)
        cv2.rectangle(image, (x_min, y_min), (x_max, y_max), (0, 255, 0), 2)
        cv2.putText(image, f'Class: {class_id}, Score: {score:.2f}', (x_min, y_min - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (255, 0, 0), 2)

# 결과 이미지 출력
cv2.imshow('Detected Objects', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

이 코드는 로드킬 예방을 위한 영상 인식 시스템의 기본적인 구조를 보여준다. 주어진 도로 이미지에서 차량 및 동물과 같은 객체를 감지하고, 신뢰도가 높은 객체에 대해 경계 상자와 레이블을 그린다. OpenCV를 사용하여 이미지를 처리하고 시각화하며, TensorFlow를 통해 사전 훈련된 모델을 활용하여 객체 감지를 수행한다. 이러한 기술은 로드킬 예방 시스템의 기초로 활용될 수 있다.