# gpt-code-diary

매일 최신 IT/과학 뉴스 데이터를 기반으로 GPT 모델을 활용해 유용한 코드 다이어리를 자동 생성하고, 이를 깃허브 레포지토리에 자동으로 커밋 및 푸시하는 자동화된 Node.js 기반 코드

이 프로젝트는 IT 뉴스와 GPT를 결합하여 프로그래밍 학습 또는 참고용으로 활용할 수 있는 코드 샘플을 제공한다.

## 준비물

1. **Node.js**: v20.10.0 이상
2. **OpenAI API Key**: 유료 토큰 결제 및 API KEY
3. **BAT 스크립트 (push.bat)**: 깃허브 커밋 및 푸시를 위한 스크립트. Windows OS 환경
4. 24시간 켜놓을 수 있는 컴퓨터 (한달 전기료 몇천원밖에 안나옴) or 클라우드 서버(AWS, NCP 등)

### 환경변수 설정 (`.env` 파일 예시):

```
OPENAI_API_KEY=your_openai_api_key
```

### 기능

1. **IT/과학 뉴스 데이터 수집**
   매일 오전 9시 30분에 설정한 분야의 최신 뉴스를 가져온다.
2. **뉴스 데이터 포맷팅**
   수집한 뉴스를 GPT 모델에 적합한 형식으로 변환한다.
3. **GPT 기반 코드 다이어리 생성**
   OpenAI의 GPT 모델을 사용하여 뉴스 주제에 맞는 코드 샘플을 생성한다.
4. **코드 파일 저장**
   생성된 코드를 지정된 경로에 파일로 저장한다.
5. **깃허브 커밋 및 푸시**
   생성된 파일은 로컬에서 자동으로 커밋 및 푸시되어 깃허브 레포지토리에 업데이트된다.

### 명령어

```bash
# 설치
git clone https://github.com/j3y3h0/gpt-code-diary.git

# 패키지 설치
npm install

# 수동 시작
npm run dev

# 백그라운드에서 계속 실행하게 해주는 forever 설치
npm install forever -g

# 백그라운드 시작
forever start index.js

# 백그라운드 중지
forever stop index.js

# 재시작
forever restart index.js

# 프로세스 조회
forever list
```
