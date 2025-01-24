이번 뉴스 중 삼성 갤럭시 S25의 사전판매와 관련된 내용을 바탕으로, C#을 사용하여 스마트폰의 사전판매 데이터를 관리하는 간단한 콘솔 애플리케이션을 작성해 보겠다. 이 애플리케이션은 사전판매 데이터를 추가하고, 조회하는 기능을 제공할 것이다.

```csharp
using System;
using System.Collections.Generic;

class Program
{
    public class PreOrder
    {
        public string Model { get; set; }
        public int Price { get; set; }
        public DateTime OrderDate { get; set; }
        
        public PreOrder(string model, int price, DateTime orderDate)
        {
            Model = model;
            Price = price;
            OrderDate = orderDate;
        }
        
        public override string ToString()
        {
            return $"모델: {Model}, 가격: {Price}원, 주문일: {OrderDate.ToShortDateString()}";
        }
    }
    
    static void Main(string[] args)
    {
        List<PreOrder> preOrders = new List<PreOrder>();
        
        while (true)
        {
            Console.WriteLine("사전판매 데이터 관리 시스템");
            Console.WriteLine("1. 사전판매 데이터 추가");
            Console.WriteLine("2. 사전판매 데이터 조회");
            Console.WriteLine("3. 종료");
            Console.Write("선택: ");
            string choice = Console.ReadLine();
            
            if (choice == "1")
            {
                Console.Write("모델명 입력: ");
                string model = Console.ReadLine();
                Console.Write("가격 입력: ");
                int price = int.Parse(Console.ReadLine());
                Console.Write("주문일 입력 (YYYY-MM-DD): ");
                DateTime orderDate = DateTime.Parse(Console.ReadLine());

                preOrders.Add(new PreOrder(model, price, orderDate));
                Console.WriteLine("사전판매 데이터가 추가되었습니다.");
            }
            else if (choice == "2")
            {
                Console.WriteLine("사전판매 데이터:");
                foreach (var order in preOrders)
                {
                    Console.WriteLine(order);
                }
            }
            else if (choice == "3")
            {
                break;
            }
            else
            {
                Console.WriteLine("잘못된 선택입니다. 다시 시도하세요.");
            }
        }
    }
}
```

위의 코드는 사용자가 갤럭시 S25와 같은 스마트폰 모델에 대한 사전판매 데이터를 추가하고 조회할 수 있는 콘솔 애플리케이션을 구성한다. 사용자는 모델명, 가격, 주문일을 입력하여 새로운 사전판매 데이터를 생성할 수 있으며, 입력된 데이터를 조회할 수 있는 기능도 포함되어 있다. 이와 같은 프로그램은 사전판매 관리를 효율적으로 도와줄 수 있다.