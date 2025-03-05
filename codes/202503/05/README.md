최근 포스코DX가 산업현장에 특화된 '피지컬 AI'를 적용 추진한다는 뉴스에 착안하여, 산업 현장에서 물체 인식을 통해 작업 환경을 개선하는 간단한 파이썬 코드를 작성해 보았다. 이 코드는 OpenCV와 TensorFlow 라이브러리를 사용하여 이미지에서 객체를 인식하는 기능을 구현한다.

```python
import cv2
import numpy as np
import tensorflow as tf

# 사전 훈련된 COCO 데이터셋을 사용하는 YOLOv3 모델 로드
model = tf.saved_model.load('yolov3_model_path')

# 이미지 파일 경로
image_path = 'industrial_scene.jpg'

# 이미지 읽기
image = cv2.imread(image_path)
height, width, _ = image.shape

# 이미지 전처리
input_image = cv2.resize(image, (416, 416))
input_image = input_image / 255.0
input_image = np.expand_dims(input_image, axis=0)

# 객체 탐지
detections = model(input_image)

# 탐지 결과 후처리
for detection in detections:
    boxes, scores, classes, nums = detection['boxes'], detection['scores'], detection['classes'], detection['num_detections']

# 탐지된 객체 시각화
for i in range(int(nums[0])):
    if scores[0][i] > 0.5:  # 신뢰도 기준 설정
        box = boxes[0][i].numpy()
        class_id = int(classes[0][i].numpy())

        # 객체의 경계 상자 그리기
        cv2.rectangle(image, (int(box[0]), int(box[1])), (int(box[2]), int(box[3])), (0, 255, 0), 2)
        cv2.putText(image, f'Class: {class_id}, Score: {scores[0][i]:.2f}', 
                    (int(box[0]), int(box[1]) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

# 결과 이미지 저장
cv2.imwrite('detected_image.jpg', image)

# 결과 이미지 표시
cv2.imshow('Detected Objects', image)
cv2.waitKey(0)
cv2.destroyAllWindows()
```

이 코드는 산업 현장에서 촬영한 이미지를 입력으로 받아, 해당 이미지에서 물체를 인식하고 그 결과를 이미지에 시각화하여 저장하는 기능을 수행한다. 이와 같은 AI 기술은 작업 환경의 안전성을 높이고, 효율성을 개선하는 데 기여할 수 있다.