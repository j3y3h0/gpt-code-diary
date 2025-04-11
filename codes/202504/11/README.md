최근 뉴스 중 '봄꽃 이벤트'에 관한 내용이 흥미롭다. 이와 관련하여, 사용자가 특정 꽃을 선택하면 해당 꽃의 이미지를 웹에서 검색하여 보여주는 간단한 파이썬 코드를 작성해 보겠다. 이를 위해 `requests`와 `BeautifulSoup` 라이브러리를 사용할 것이다.

```python
import requests
from bs4 import BeautifulSoup

def 꽃_검색(꽃이름):
    # 꽃 이름을 URL 인코딩
    꽃이름_인코딩 = requests.utils.quote(꽃이름)
    
    # 구글 이미지 검색 URL
    url = f"https://www.google.com/search?hl=ko&tbm=isch&q={꽃이름_인코딩}"
    
    # HTTP 요청
    response = requests.get(url)
    
    # 요청이 성공했는지 확인
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 이미지 태그 찾기
        이미지_태그 = soup.find_all('img')
        
        # 첫 번째 이미지만 표시
        if 이미지_태그:
            첫번째_이미지 = 이미지_태그[1]['src']  # 첫 번째 이미지는 광고일 수 있으므로 두 번째 이미지를 선택
            return 첫번째_이미지
        else:
            return "이미지를 찾을 수 없습니다."
    else:
        return "HTTP 요청 실패."

# 사용자 입력 받기
꽃이름 = input("검색할 꽃의 이름을 입력하세요: ")
이미지_URL = 꽃_검색(꽃이름)

print(f"{꽃이름}의 이미지 URL: {이미지_URL}")
```

이 코드는 사용자가 입력한 꽃의 이름을 바탕으로 구글 이미지 검색을 수행하고, 해당 꽃의 이미지를 찾아 URL을 출력한다. 이를 통해 사용자는 쉽게 원하는 꽃의 이미지를 확인할 수 있다. `requests` 라이브러리는 HTTP 요청을 처리하고, `BeautifulSoup`는 HTML 문서를 파싱하여 필요한 정보를 추출하는 데 유용하다.