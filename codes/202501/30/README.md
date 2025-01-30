최근 뉴스 중에서 SKT AI 비서 '에스터'와 관련된 내용을 바탕으로, 구글 캘린더와 연동하여 일정 관리 기능을 구현하는 Python 코드를 작성해 보겠다. 이를 위해 `google-auth`와 `google-api-python-client` 라이브러리를 활용할 것이다. 이 코드는 사용자가 구글 캘린더에 일정을 추가할 수 있도록 도와준다.

먼저, 필요한 라이브러리를 설치해야 한다. 다음 명령어를 통해 설치할 수 있다.

```
pip install --upgrade google-auth google-auth-oauthlib google-auth-httplib2 google-api-python-client
```

이제 아래의 코드를 통해 구글 캘린더에 일정을 추가하는 예제를 보여주겠다.

```python
from __future__ import print_function
import datetime
import os.path
import google.auth
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

# 구글 캘린더 API를 사용하기 위한 인증 정보
SCOPES = ['https://www.googleapis.com/auth/calendar']

def main():
    creds = None
    # 토큰 파일이 존재하는 경우 로드
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    # 유효하지 않거나 존재하지 않는 경우 새로 로그인
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            flow = InstalledAppFlow.from_client_secrets_file(
                'credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        # 인증 정보를 저장
        with open('token.json', 'w') as token:
            token.write(creds.to_json())

    # 구글 캘린더 서비스 인스턴스 생성
    service = build('calendar', 'v3', credentials=creds)

    # 일정 추가를 위한 정보 설정
    event = {
        'summary': '회의',
        'location': '서울시 강남구',
        'description': '프로젝트 진행 상황 회의',
        'start': {
            'dateTime': '2023-10-25T10:00:00+09:00',  # 시작 시간
            'timeZone': 'Asia/Seoul',
        },
        'end': {
            'dateTime': '2023-10-25T11:00:00+09:00',  # 종료 시간
            'timeZone': 'Asia/Seoul',
        },
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'email', 'minutes': 10},
                {'method': 'popup', 'minutes': 10},
            ],
        },
    }

    # 일정 추가 요청
    event = service.events().insert(calendarId='primary', body=event).execute()
    print('일정이 추가되었습니다: %s' % (event.get('htmlLink')))

if __name__ == '__main__':
    main()
```

위 코드를 실행하기 위해서는 `credentials.json` 파일이 필요하다. 이 파일은 구글 클라우드 플랫폼에서 OAuth 2.0 클라이언트 ID를 생성하여 다운로드 받을 수 있다. 

코드의 주요 기능은 구글 캘린더 API를 사용하여 사용자가 입력한 일정 정보를 캘린더에 추가하는 것이다. 이를 통해 SKT AI 비서와 같은 외부 애플리케이션과의 연동이 가능해지며, 사용자에게 편리한 일정 관리 기능을 제공할 수 있다.