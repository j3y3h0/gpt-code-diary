최근 뉴스 중에서 "질병청 'mRNA 백신 개발' 지원사업"에 대한 내용을 바탕으로, mRNA 백신의 유전자 서열을 분석하는 간단한 파이썬 코드를 작성해보겠다. 이 코드는 Biopython 라이브러리를 사용하여 DNA 또는 RNA 서열을 입력받아 GC 함량을 계산하는 기능을 제공한다. GC 함량은 유전자 서열의 안정성을 결정짓는 중요한 요소 중 하나이다.

```python
from Bio.Seq import Seq

def calculate_gc_content(sequence):
    """주어진 서열의 GC 함량을 계산하는 함수"""
    seq = Seq(sequence)
    gc_count = seq.count("G") + seq.count("C")
    total_count = len(seq)
    
    if total_count == 0:
        return 0.0
    
    gc_content = (gc_count / total_count) * 100
    return gc_content

# 예시 서열
sequence = "AGCTAGCCTAGGCTAAGCTAGCTAGCTAGCTAGC"
gc_content = calculate_gc_content(sequence)

print(f"서열: {sequence}")
print(f"GC 함량: {gc_content:.2f}%")
```

위 코드는 Biopython의 `Seq` 클래스를 사용하여 주어진 유전자 서열에서 G와 C의 개수를 세고, 이를 전체 서열 길이로 나누어 GC 함량을 백분율로 계산한다. 이 코드를 통해 생명과학 연구자들은 mRNA 백신 개발 과정에서 서열의 안정성을 평가할 수 있는 유용한 도구를 갖추게 된다.