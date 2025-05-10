이번 뉴스에서는 넷플릭스의 요금 인상과 관련된 내용이 언급되었다. 이에 따라, 넷플릭스의 다양한 요금제를 관리하는 프로그램을 작성해 보겠다. 이 코드는 Python을 사용하여 요금제를 객체 지향적으로 관리하는 예제이다.

```python
class Membership:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __str__(self):
        return f"{self.name} 요금제: {self.price}원"

class Netflix:
    def __init__(self):
        self.memberships = []

    def add_membership(self, membership):
        self.memberships.append(membership)

    def display_memberships(self):
        print("현재 이용 가능한 넷플릭스 요금제:")
        for membership in self.memberships:
            print(membership)

# 넷플릭스 인스턴스 생성
netflix = Netflix()

# 요금제 추가
standard_plan = Membership("광고형 스탠다드", 7000)
partner_membership = Membership("네넷 멤버십", 4900)

netflix.add_membership(standard_plan)
netflix.add_membership(partner_membership)

# 요금제 출력
netflix.display_memberships()
```

이 코드는 `Membership` 클래스를 정의하여 각 요금제를 객체로 표현하고, `Netflix` 클래스를 통해 요금제를 관리하는 기능을 제공한다. 사용자는 요금제를 추가하고 현재 이용 가능한 요금제를 출력할 수 있다. 이와 같은 방식으로 넷플릭스의 다양한 요금제를 효과적으로 관리할 수 있다.