C#을 이용하여 AI 챗봇을 만드는 간단한 예제를 소개하겠다. 이 예제는 Microsoft의 Bot Framework를 사용하여 기본적인 챗봇 기능을 구현한다. 챗봇은 사용자로부터 입력을 받아 간단한 응답을 제공한다.

### C# 챗봇 예제 코드

```csharp
using System;
using System.Threading.Tasks;
using Microsoft.Bot.Builder;
using Microsoft.Bot.Builder.Integration.AspNet.Core;
using Microsoft.Bot.Schema;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace SimpleChatBot
{
    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers().AddNewtonsoftJson();
            services.AddBot<Bot>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public class Bot : ActivityHandler
    {
        protected override async Task OnMessageActivityAsync(ITurnContext<IMessageActivity> turnContext, CancellationToken cancellationToken)
        {
            var userMessage = turnContext.Activity.Text.ToLower();
            string replyMessage;

            if (userMessage.Contains("안녕"))
            {
                replyMessage = "안녕하세요! 어떻게 도와드릴까요?";
            }
            else if (userMessage.Contains("날씨"))
            {
                replyMessage = "현재 날씨는 맑습니다.";
            }
            else
            {
                replyMessage = "죄송하지만, 그에 대한 정보는 없습니다.";
            }

            await turnContext.SendActivityAsync(MessageFactory.Text(replyMessage), cancellationToken);
        }
    }
}
```

### 설명
1. **Bot Framework**: 이 코드는 Microsoft의 Bot Framework를 사용하여 기본적인 챗봇을 구현한다.
2. **Startup 클래스**: `ConfigureServices` 메서드에서 Bot 서비스를 등록하며, `Configure` 메서드에서 HTTP 요청을 처리하는 파이프라인을 설정한다.
3. **Bot 클래스**: `ActivityHandler`를 상속하여 사용자의 메시지에 대한 응답을 처리한다. 사용자가 입력한 메시지에 따라 다른 응답을 제공한다.

### 실행 방법
이 코드를 실행하려면 .NET SDK와 Bot Framework SDK를 설치해야 하며, ASP.NET Core 웹 애플리케이션으로 프로젝트를 생성한 후 위의 코드를 추가해야 한다. 그리고 이 챗봇을 Azure Bot Service에 배포할 수 있다.

이 예제는 AI 챗봇의 기본적인 동작을 보여주며, 실제 어플리케이션에서는 더 복잡한 로직과 외부 API 통합을 통해 기능을 확장할 수 있다.