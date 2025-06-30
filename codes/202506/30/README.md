최근 KT엠모바일이 도입한 음성기반 AI 상담 서비스 '엠봇'에 착안하여, Python을 사용한 간단한 음성 인식 및 응답 기능을 구현하는 코드를 작성해 보았다. 이 코드는 `speech_recognition` 및 `gTTS` (Google Text-to-Speech) 라이브러리를 활용하여 음성을 텍스트로 변환하고, 텍스트를 음성으로 변환하여 응답하는 기능을 포함하고 있다.

먼저, 필요한 라이브러리를 설치해야 한다. 아래 명령어를 사용하여 설치할 수 있다.

```
pip install SpeechRecognition gTTS playsound
```

다음은 음성 인식 및 응답 기능을 구현한 코드이다.

```python
import speech_recognition as sr
from gtts import gTTS
import playsound
import os

# 음성을 텍스트로 변환하는 함수
def recognize_speech_from_mic():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        print("음성을 말해주십시오...")
        audio = recognizer.listen(source)

        try:
            text = recognizer.recognize_google(audio, language='ko-KR')
            print(f"인식된 텍스트: {text}")
            return text
        except sr.UnknownValueError:
            print("음성을 인식할 수 없습니다.")
            return None
        except sr.RequestError:
            print("음성 인식 서비스에 접근할 수 없습니다.")
            return None

# 텍스트를 음성으로 변환하는 함수
def speak_text(text):
    tts = gTTS(text=text, lang='ko')
    filename = "response.mp3"
    tts.save(filename)
    playsound.playsound(filename)
    os.remove(filename)

# 메인 함수
if __name__ == "__main__":
    recognized_text = recognize_speech_from_mic()
    if recognized_text:
        response_text = f"당신이 말한 내용은 '{recognized_text}'입니다."
        speak_text(response_text)
```

위 코드를 실행하면 사용자가 마이크에 대고 말을 하면, 해당 음성이 텍스트로 변환되고, 변환된 텍스트가 음성으로 재생된다. 이러한 기능은 고객 상담 시스템이나 음성 비서 개발에 유용하게 활용될 수 있다. 추가적으로, 더 복잡한 대화 흐름을 처리하도록 코드를 확장할 수 있다.