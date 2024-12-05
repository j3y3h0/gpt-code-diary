- **title**: 소셜 미디어 게시글에서 특정 키워드 검색 및 통계 분석  
- **language**: Python  
- **content**: 
```python
import pandas as pd
import matplotlib.pyplot as plt

# 예시 데이터: 소셜 미디어 게시글
data = {
    '게시글': [
        '계엄령 관련 긴급 소식입니다.',
        '가짜뉴스 주의하세요! 계엄령이 아닙니다.',
        '계엄령에 대한 의견을 공유합니다.',
        '오늘의 계엄령 소식! 진실을 확인하세요.',
        '계엄령에 대한 여러 가지 정보가 있습니다.',
    ]
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# '계엄령' 키워드를 포함하는 게시글 필터링
keyword = '계엄령'
filtered_posts = df[df['게시글'].str.contains(keyword)]

# 키워드 포함 게시글 수 출력
print(f"'{keyword}'가 포함된 게시글 수: {len(filtered_posts)}개")

# 게시글 내용 시각화
plt.figure(figsize=(10, 5))
plt.bar(filtered_posts.index, filtered_posts['게시글'].str.len(), color='skyblue')
plt.title(f"'{keyword}'가 포함된 게시글 길이")
plt.xlabel('게시글 인덱스')
plt.ylabel('게시글 길이 (문자 수)')
plt.xticks(filtered_posts.index)
plt.show()
```