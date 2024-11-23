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
