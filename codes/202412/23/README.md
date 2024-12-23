C#을 사용하여 AI 비서 '에스터'의 기본 기능을 구현하는 간단한 예제를 소개한다. 이 코드는 사용자의 질문을 받아 간단한 답변을 제공하는 기능을 포함한다. 이를 위해 Microsoft의 `System.Speech` 네임스페이스를 사용하여 음성 인식 및 음성 합성 기능을 활용할 것이다.

```csharp
using System;
using System.Speech.Recognition;
using System.Speech.Synthesis;

class Program
{
    static void Main(string[] args)
    {
        SpeechRecognitionEngine recognizer = new SpeechRecognitionEngine();
        SpeechSynthesizer synthesizer = new SpeechSynthesizer();

        // 음성 인식할 문장 목록
        Choices commands = new Choices();
        commands.Add(new string[] { "안녕", "날씨는 어때?", "이름이 뭐야?" });

        // 문장 인식 문법 생성
        GrammarBuilder gb = new GrammarBuilder();
        gb.Append(commands);
        Grammar grammar = new Grammar(gb);

        // 음성 인식 이벤트 핸들러
        recognizer.LoadGrammar(grammar);
        recognizer.SpeechRecognized += new EventHandler<SpeechRecognizedEventArgs>(RecognizedSpeech);

        // 마이크 시작
        recognizer.SetInputToDefaultAudioDevice();
        recognizer.RecognizeAsync(RecognizeMode.Multiple);

        Console.WriteLine("음성 인식을 시작합니다. '종료'라고 말하면 프로그램이 종료됩니다.");
        while (true)
        {
            string exitCommand = Console.ReadLine();
            if (exitCommand.ToLower() == "종료")
            {
                break;
            }
        }

        recognizer.RecognizeAsyncStop();
    }

    // 인식된 음성에 대한 응답 처리
    private static void RecognizedSpeech(object sender, SpeechRecognizedEventArgs e)
    {
        SpeechSynthesizer synthesizer = new SpeechSynthesizer();

        switch (e.Result.Text)
        {
            case "안녕":
                synthesizer.Speak("안녕하세요! 무엇을 도와드릴까요?");
                break;
            case "날씨는 어때?":
                synthesizer.Speak("현재 날씨는 맑습니다.");
                break;
            case "이름이 뭐야?":
                synthesizer.Speak("저는 AI 비서 에스터입니다.");
                break;
            default:
                synthesizer.Speak("죄송합니다. 이해하지 못했습니다.");
                break;
        }
    }
}
```

위 코드는 C#을 이용한 간단한 AI 비서의 음성 인식 및 응답 시스템이다. 사용자가 특정 문장을 말하면, AI 비서는 미리 정의된 답변을 음성으로 제공한다. 이 예제를 통해 음성 인식 기술의 기본적인 활용 방법을 이해할 수 있다.