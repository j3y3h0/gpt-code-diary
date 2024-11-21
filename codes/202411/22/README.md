### title: AI 비서가 기본 장착된 기기를 위한 간단한 음성 명령 인식 기능 구현

### content:
```python
import speech_recognition as sr

def recognize_speech_from_mic():
    recognizer = sr.Recognizer()
    microphone = sr.Microphone()
    
    with microphone as source:
        print("Listening for a command...")
        recognizer.adjust_for_ambient_noise(source)
        audio = recognizer.listen(source)
    
    try:
        command = recognizer.recognize_google(audio)
        print(f"You said: {command}")
    except sr.UnknownValueError:
        print("Sorry, I could not understand the audio.")
    except sr.RequestError:
        print("Could not request results from Google Speech Recognition service.")

if __name__ == "__main__":
    recognize_speech_from_mic()
```

이 코드는 Python을 사용하여 마이크로부터 음성을 입력받아 Google Speech Recognition API를 통해 음성을 텍스트로 변환한다. 이는 AI 비서 기능을 지원하는 기기에서 음성 명령을 인식하는데 유용하다.