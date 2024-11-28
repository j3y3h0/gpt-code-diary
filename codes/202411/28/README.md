**title**: AI 비서 개발을 위한 간단한 챗봇 구현

**language**: Python

**content**:

```python
import random

class SimpleChatbot:
    def __init__(self):
        self.greetings = ["안녕하세요!", "반갑습니다!", "오늘도 좋은 하루입니다!"]
        self.farewells = ["안녕히 가세요!", "다음에 또 봐요!", "좋은 하루 되세요!"]
        self.default_responses = ["죄송합니다, 잘 이해하지 못했습니다.", "다시 말씀해 주시겠어요?", "더 구체적으로 말씀해 주시겠어요?"]

    def get_greeting(self):
        return random.choice(self.greetings)

    def get_farewell(self):
        return random.choice(self.farewells)

    def respond(self, user_input):
        if "안녕" in user_input:
            return self.get_greeting()
        elif "잘 가" in user_input:
            return self.get_farewell()
        else:
            return random.choice(self.default_responses)

def main():
    bot = SimpleChatbot()
    print("챗봇을 시작합니다. '잘 가'라고 입력하면 종료됩니다.")
    while True:
        user_input = input("당신: ")
        if "잘 가" in user_input:
            print("챗봇: " + bot.get_farewell())
            break
        else:
            print("챗봇: " + bot.respond(user_input))

if __name__ == "__main__":
    main()
```
