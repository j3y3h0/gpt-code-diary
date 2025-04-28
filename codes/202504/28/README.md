최근 SK텔레콤의 유심 교체 온라인 예약 시스템에 대한 소식이 주목받고 있다. 이에 따라, C#을 사용하여 사용자로부터 정보를 입력받아 예약 정보를 처리하는 간단한 콘솔 애플리케이션 예제를 작성해 보았다. 이 예제에서는 사용자 인증을 위한 간단한 로직과, 예약 정보를 저장하는 기능을 포함하고 있다.

```csharp
using System;
using System.Collections.Generic;

class Program
{
    // 예약 정보를 저장할 Dictionary
    static Dictionary<string, string> reservations = new Dictionary<string, string>();

    static void Main(string[] args)
    {
        Console.WriteLine("유심 교체 온라인 예약 시스템에 오신 것을 환영합니다.");
        
        // 사용자 인증
        Console.Write("사용자 ID를 입력하세요: ");
        string userId = Console.ReadLine();
        
        if (AuthenticateUser(userId))
        {
            Console.WriteLine("인증 성공!");
            // 예약 정보 입력
            Console.Write("교체 희망 매장을 입력하세요: ");
            string store = Console.ReadLine();
            Console.Write("예약 날짜를 입력하세요 (YYYY-MM-DD): ");
            string date = Console.ReadLine();

            // 예약 저장
            SaveReservation(userId, store, date);
            Console.WriteLine("예약이 완료되었습니다.");
        }
        else
        {
            Console.WriteLine("인증 실패. 프로그램을 종료합니다.");
        }
    }

    // 사용자 인증 메서드
    static bool AuthenticateUser(string userId)
    {
        // 간단한 인증 로직 (실제 구현에서는 데이터베이스와 연동)
        return !string.IsNullOrEmpty(userId);
    }

    // 예약 저장 메서드
    static void SaveReservation(string userId, string store, string date)
    {
        reservations[userId] = $"매장: {store}, 날짜: {date}";
    }
}
```

이 코드는 사용자로부터 ID와 예약 정보를 입력받아, 간단한 인증 후 예약을 저장하는 기능을 제공한다. 실제 애플리케이션에서는 데이터베이스 저장 및 더 복잡한 인증 메커니즘이 필요할 수 있다.