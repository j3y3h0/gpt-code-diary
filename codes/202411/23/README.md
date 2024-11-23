<<<<<<< HEAD
**title**: 네이버 '히든 아카이브' 취향저격 핫플레이스 추천 시스템

**language**: Python

**content**:
```python
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# 샘플 데이터: 사용자가 저장한 핫플레이스 정보
data = {
    'place_id': [1, 2, 3, 4, 5],
    'description': [
        '서울의 유명 카페, 독특한 인테리어',
        '한적한 분위기의 카페, 좋은 커피',
        '현대적인 디자인의 레스토랑, 맛있는 음식',
        '조용한 도서관, 집중하기 좋은 장소',
        '편안한 분위기의 카페, 좋은 음악'
    ]
}

# 데이터프레임 생성
df = pd.DataFrame(data)

# TF-IDF 벡터화
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df['description'])

# 특정 사용자 검색어
user_query = "서울 카페 좋은 음악"

# 사용자 검색어를 벡터화
user_query_vec = vectorizer.transform([user_query])

# 코사인 유사도 계산
cosine_similarities = cosine_similarity(user_query_vec, tfidf_matrix).flatten()

# 유사도에 따라 정렬된 인덱스
related_docs_indices = cosine_similarities.argsort()[::-1]

# 상위 3개의 추천 핫플레이스 출력
top_n = 3
for i in range(top_n):
    index = related_docs_indices[i]
    print(f"추천 핫플레이스 {i+1}: {df.iloc[index]['description']}")
```

이 코드는 사용자가 입력한 검색어와 유사한 핫플레이스를 추천하기 위한 시스템이다. TF-IDF 벡터화 및 코사인 유사도를 사용하여 유사성을 계산하고, 가장 유사한 핫플레이스를 추천한다.
=======
### title
AI 비서 기능 활성화 여부 확인

### language
Python

### content
```python
class Phone:
    def __init__(self, model, ai_assistant_installed=False):
        self.model = model
        self.ai_assistant_installed = ai_assistant_installed

    def check_ai_assistant(self):
        if self.ai_assistant_installed:
            return f"{self.model}에 AI 비서가 설치되어 있습니다."
        else:
            return f"{self.model}에 AI 비서가 설치되어 있지 않습니다."

# 예시 갤럭시폰 객체 생성
galaxy_phone = Phone("Galaxy", ai_assistant_installed=True)

# AI 비서 설치 여부 확인
print(galaxy_phone.check_ai_assistant())
```
>>>>>>> a6e74eac03d2116905e6b646ce22ebaa07e2b32e
