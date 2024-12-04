## AI 기반 뉴스 댓글 분석기

**language**: Python

**content**:
```python
import requests
from bs4 import BeautifulSoup
from textblob import TextBlob

# 네이버 뉴스 댓글 URL
url = 'https://news.naver.com/main/read.naver?mode=LSD&mid=sec&oid=001&aid=0011234567'  # 예시 URL

def fetch_comments(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # 댓글 추출 (HTML 구조에 따라 선택자 조정 필요)
    comments = soup.select('.u_cbox_contents')
    return [comment.get_text() for comment in comments]

def analyze_sentiment(comments):
    sentiment_results = {}
    for comment in comments:
        analysis = TextBlob(comment)
        sentiment_results[comment] = analysis.sentiment.polarity
    return sentiment_results

if __name__ == "__main__":
    comments = fetch_comments(url)
    sentiment_scores = analyze_sentiment(comments)
    
    for comment, score in sentiment_scores.items():
        print(f'댓글: {comment} | 감정 점수: {score:.2f}')
```

이 코드는 네이버 뉴스 댓글을 가져와서 감정 분석을 수행하는 기능을 가지고 있다. `requests` 라이브러리로 댓글을 추출하고, `BeautifulSoup`으로 HTML을 파싱하며, `TextBlob`을 이용해 댓글의 감정 점수를 계산한다.