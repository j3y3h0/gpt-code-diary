최근 SK플래닛이 OK 캐쉬백 앱을 전면 개편하였다는 소식에 착안하여, 사용자에게 포인트를 자동으로 계산해주는 간단한 Python 코드를 작성해보았다. 이 코드는 사용자로부터 지출 금액과 해당 지출에 따른 포인트 비율을 입력받아, 최종 포인트를 계산하여 출력하는 기능을 가진다.

```python
def calculate_cashback(spending, cashback_rate):
    """
    지출 금액과 캐쉬백 비율을 기반으로 캐쉬백 포인트를 계산하는 함수이다.

    :param spending: float, 사용자가 지출한 금액
    :param cashback_rate: float, 지출 금액에 대한 캐쉬백 비율 (예: 0.1은 10%)
    :return: float, 계산된 캐쉬백 포인트
    """
    cashback = spending * cashback_rate
    return cashback

def main():
    try:
        spending = float(input("지출 금액을 입력하세요: "))
        cashback_rate = float(input("캐쉬백 비율을 입력하세요 (예: 0.1은 10%): "))
        
        if spending < 0 or cashback_rate < 0:
            print("지출 금액과 캐쉬백 비율은 0 이상이어야 합니다.")
            return

        cashback = calculate_cashback(spending, cashback_rate)
        print(f"당신의 캐쉬백 포인트는: {cashback:.2f} 원입니다.")
    
    except ValueError:
        print("유효한 숫자를 입력하십시오.")

if __name__ == "__main__":
    main()
```

이 코드는 사용자가 입력한 지출 금액과 캐쉬백 비율을 바탕으로 최종적으로 받을 수 있는 캐쉬백 포인트를 계산하여 출력한다. 사용자 입력을 통해 실시간으로 포인트를 계산하는 기능은 OK 캐쉬백 앱의 유용성을 높이는 데 기여할 수 있다.