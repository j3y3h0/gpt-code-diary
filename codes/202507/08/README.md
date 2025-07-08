최근 뉴스 중 "CJ메조미디어, LG유플러스와 손잡고 FAST 시장 공략"에 관련하여, C#을 사용하여 FAST(Free Ad-Supported Streaming TV) 서비스를 위한 간단한 스트리밍 서버를 구현하는 예제를 작성하였다. 이 예제에서는 ASP.NET Core를 사용하여 RESTful API를 생성하고, 클라이언트가 요청한 비디오의 메타데이터를 제공하는 기능을 보여준다.

```csharp
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using System.Collections.Generic;

namespace FastStreamingService
{
    public class Video
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Url { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class VideosController : ControllerBase
    {
        private static readonly List<Video> Videos = new List<Video>
        {
            new Video { Id = 1, Title = "게임 하이라이트", Url = "http://example.com/video1" },
            new Video { Id = 2, Title = "이스포츠 토너먼트", Url = "http://example.com/video2" },
            new Video { Id = 3, Title = "게임 리뷰", Url = "http://example.com/video3" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Video>> GetVideos()
        {
            return Ok(Videos);
        }

        [HttpGet("{id}")]
        public ActionResult<Video> GetVideo(int id)
        {
            var video = Videos.Find(v => v.Id == id);
            if (video == null)
            {
                return NotFound();
            }

            return Ok(video);
        }
    }

    public class Startup
    {
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }

    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
```

이 코드는 간단한 비디오 스트리밍 API를 구현하여, 사용자가 비디오 목록을 요청하거나 특정 비디오의 정보를 요청할 수 있도록 해준다. 이 예제를 통해 FAST 시장에서의 콘텐츠 제공 방식에 대한 기본적인 이해를 도울 수 있다. ASP.NET Core의 RESTful API를 활용하여 쉽게 스케일링할 수 있는 구조를 제공하며, 다양한 클라이언트와의 연동이 가능하다.