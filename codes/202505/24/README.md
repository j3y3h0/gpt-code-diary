이번 뉴스 중에서 "중연관 해커그룹, 전세계 2천여 시스템 은밀히 통제"와 관련하여, C#을 사용하여 간단한 보안 모니터링 도구를 만들어 보겠다. 이 도구는 특정 IP 주소에 대한 포트 스캔을 수행하여 열린 포트를 확인하고, 이를 통해 시스템의 보안 상태를 점검할 수 있도록 한다.

아래는 C#을 사용한 포트 스캐너 예제 코드이다.

```csharp
using System;
using System.Net.Sockets;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        string ipAddress = "192.168.1.1"; // 검사할 IP 주소
        int startPort = 1; // 시작 포트
        int endPort = 65535; // 끝 포트

        Console.WriteLine($"IP 주소 {ipAddress}의 열린 포트를 검색 중입니다...");

        for (int port = startPort; port <= endPort; port++)
        {
            if (await IsPortOpen(ipAddress, port))
            {
                Console.WriteLine($"열린 포트 발견: {port}");
            }
        }

        Console.WriteLine("포트 스캔이 완료되었습니다.");
    }

    static async Task<bool> IsPortOpen(string ipAddress, int port)
    {
        try
        {
            using (TcpClient client = new TcpClient())
            {
                var task = client.ConnectAsync(ipAddress, port);
                var result = await Task.WhenAny(task, Task.Delay(1000));
                return result == task && client.Connected;
            }
        }
        catch
        {
            return false;
        }
    }
}
```

이 코드는 주어진 IP 주소와 포트 범위에 대해 비동기적으로 연결을 시도하여 열린 포트를 확인한다. `TcpClient`를 사용하여 각 포트에 연결을 시도하고, 연결이 성공하면 열린 포트로 간주하여 결과를 출력한다. 이와 같은 도구를 통해 시스템의 보안 점검을 수행할 수 있으며, 해킹 공격으로부터 시스템을 보호하는 데 도움이 될 수 있다.