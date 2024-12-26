KT가 국가 양자 테스트베드를 위한 통합 관제 플랫폼을 구축하는 내용에 착안하여, 양자 컴퓨터 시뮬레이션을 위한 Python 코드 예제를 제공하고자 한다. 이 코드는 Qiskit 라이브러리를 사용하여 간단한 양자 회로를 생성하고 측정하는 기능을 구현한다.

```python
# 필요한 라이브러리 임포트
from qiskit import QuantumCircuit, Aer, execute

# 양자 회로 생성
def create_quantum_circuit():
    circuit = QuantumCircuit(2, 2)  # 2 큐비트와 2 클래식 비트의 회로
    circuit.h(0)                    # 첫 번째 큐비트에 Hadamard 게이트 적용
    circuit.cx(0, 1)                # 첫 번째 큐비트에서 두 번째 큐비트로 CNOT 게이트 적용
    circuit.measure([0, 1], [0, 1]) # 큐비트를 측정하여 클래식 비트에 저장
    return circuit

# 양자 회로 실행
def run_quantum_circuit(circuit):
    simulator = Aer.get_backend('qasm_simulator')  # QASM 시뮬레이터 선택
    job = execute(circuit, simulator, shots=1024)   # 회로를 1024회 실행
    result = job.result()                             # 결과를 가져옴
    counts = result.get_counts(circuit)              # 측정 결과 횟수 반환
    return counts

# 메인 함수
if __name__ == '__main__':
    quantum_circuit = create_quantum_circuit()      # 양자 회로 생성
    results = run_quantum_circuit(quantum_circuit)   # 회로 실행
    print("측정 결과:", results)                       # 결과 출력
```

위 코드는 Qiskit 라이브러리를 활용하여 간단한 양자 회로를 구성하고 실행하는 방법을 보여준다. 이 회로는 2개의 큐비트를 사용하여 Bell 상태를 생성하고, 측정 결과를 출력한다. 양자 컴퓨터 기술과 관련된 연구 및 개발에 유용할 수 있는 기초적인 코드 예시이다.