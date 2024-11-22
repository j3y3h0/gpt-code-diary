### Title
AI 비서 활성화 여부 확인 기능

### Language
Python

### Content
```python
class PhoneSettings:
    def __init__(self):
        self.ai_assistant_enabled = False

    def enable_ai_assistant(self):
        self.ai_assistant_enabled = True
        print("AI 비서가 활성화되었습니다.")

    def disable_ai_assistant(self):
        self.ai_assistant_enabled = False
        print("AI 비서가 비활성화되었습니다.")

    def check_ai_assistant_status(self):
        if self.ai_assistant_enabled:
            print("AI 비서가 현재 활성화 상태입니다.")
        else:
            print("AI 비서가 현재 비활성화 상태입니다.")

# 사용 예제
user_phone = PhoneSettings()
user_phone.check_ai_assistant_status()  # AI 비서가 현재 비활성화 상태입니다.
user_phone.enable_ai_assistant()
user_phone.check_ai_assistant_status()  # AI 비서가 현재 활성화 상태입니다.
user_phone.disable_ai_assistant()
user_phone.check_ai_assistant_status()  # AI 비서가 현재 비활성화 상태입니다.
```