최근 뉴스 중에서 "생성형 AI 이용자 보호 가이드라인 발표"와 관련하여, 간단한 Python 예제를 제공하고자 한다. 이 예제는 사용자의 입력을 안전하게 처리하는 방법을 보여주며, 기본적인 데이터 검증을 포함하고 있다.

다음은 사용자가 입력한 데이터를 검사하고, 유효한 경우에만 처리하는 간단한 코드이다.

```python
import re

def is_valid_email(email):
    """이메일 형식 검증 함수"""
    email_regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(email_regex, email) is not None

def main():
    user_email = input("이메일 주소를 입력하세요: ")
    
    if is_valid_email(user_email):
        print(f"입력하신 이메일: {user_email}는 유효한 형식입니다.")
    else:
        print("입력하신 이메일 형식이 유효하지 않습니다. 다시 시도해 주세요.")

if __name__ == "__main__":
    main()
```

위 코드는 사용자가 입력한 이메일 주소의 형식을 검증하는 기능을 수행한다. `is_valid_email` 함수는 정규 표현식을 사용하여 이메일 형식을 검사하며, 메인 함수에서는 사용자에게 이메일 주소를 입력받고 그 유효성을 확인하여 결과를 출력한다. 이와 같은 데이터 검증은 생성형 AI와 같은 시스템에서 사용자 정보를 안전하게 처리하는 데 필수적이다.