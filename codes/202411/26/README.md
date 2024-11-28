**title**: 파이썬을 사용하여 붕어빵 지도 데이터 분석 및 시각화

**language**: Python

**content**:
```python
import pandas as pd
import folium

# 붕어빵 지도 데이터 불러오기
data = {
    '상호명': ['붕어빵집1', '붕어빵집2', '붕어빵집3'],
    '위도': [37.5665, 37.5651, 37.5649],
    '경도': [126.9780, 126.9775, 126.9790],
    '리뷰': ['팥을 많이 넣어 주세요', '맛있어요', '조금 비싸요']
}

df = pd.DataFrame(data)

# 지도 생성 (서울 중심)
map = folium.Map(location=[37.5665, 126.9780], zoom_start=14)

# 데이터프레임을 이용한 마커 추가
for index, row in df.iterrows():
    folium.Marker(
        location=[row['위도'], row['경도']],
        popup=f"{row['상호명']}: {row['리뷰']}",
        icon=folium.Icon(color='red', icon='info-sign')
    ).add_to(map)

# 지도를 HTML 파일로 저장
map.save('붕어빵_지도.html')

print("붕어빵 지도 생성 완료: '붕어빵_지도.html' 파일을 확인하세요.")
```
