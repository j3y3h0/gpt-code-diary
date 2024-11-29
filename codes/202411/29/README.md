- **title**: AI 음성 번역 기능 구현 예제  
- **language**: Python  
- **content**: 
```python
import requests

def translate_voice(audio_file_path, target_language):
    url = "https://api.deepl.com/v2/translate"
    api_key = "YOUR_API_KEY"  # 여기에 DeepL API 키를 입력해야 합니다.
    
    # 음성 파일을 읽어와서 전송 준비
    with open(audio_file_path, 'rb') as audio_file:
        files = {'audio': audio_file}
        data = {
            'target_lang': target_language,
            'auth_key': api_key
        }
        
        # 요청 전송
        response = requests.post(url, files=files, data=data)
        
        if response.status_code == 200:
            return response.json()  # 번역 결과 반환
        else:
            return {"error": response.text}  # 오류 메시지 반환

# 사용 예시
translated_response = translate_voice("sample_audio.wav", "KO")  # 한국어로 번역
print(translated_response)
```
이 코드는 주어진 음성 파일을 특정 언어로 번역하는 기능을 수행하는 예제이다. 사용자는 DeepL API를 활용하여 음성 파일을 번역할 수 있으며, API 키를 입력해야 정상적으로 작동한다.