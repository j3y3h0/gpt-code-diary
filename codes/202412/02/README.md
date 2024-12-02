**title**: AI를 활용한 업무 협업 도구 만들기  

**language**: Python  

**content**:  
```python
import random

class Task:
    def __init__(self, name, assigned_to, status='Pending'):
        self.name = name
        self.assigned_to = assigned_to
        self.status = status

    def complete_task(self):
        self.status = 'Completed'
        print(f"Task '{self.name}' has been marked as completed.")

class Team:
    def __init__(self):
        self.members = []
        self.tasks = []

    def add_member(self, member):
        self.members.append(member)

    def assign_task(self, task_name):
        if not self.members:
            print("팀원이 없습니다.")
            return
        assigned_member = random.choice(self.members)
        new_task = Task(task_name, assigned_member)
        self.tasks.append(new_task)
        print(f"Task '{task_name}' has been assigned to {assigned_member}.")

    def show_tasks(self):
        for task in self.tasks:
            print(f"Task: {task.name}, Assigned to: {task.assigned_to}, Status: {task.status}")

# 사용 예시
team = Team()
team.add_member("김철수")
team.add_member("이영희")
team.add_member("박민수")

team.assign_task("프로젝트 기획")
team.assign_task("디자인 시안 작성")
team.show_tasks()

# 특정 작업 완료
if team.tasks:
    team.tasks[0].complete_task()
    team.show_tasks()
```  

이 코드는 간단한 업무 협업 도구를 구현한 것으로, 팀원에게 작업을 할당하고 작업의 상태를 관리하는 기능을 가진다. 랜덤으로 팀원을 선택하여 작업을 할당하는 방식이므로, 실제 협업 상황에서 유용할 수 있다.