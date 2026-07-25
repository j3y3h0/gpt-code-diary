# AI 기반 데이터 분석 및 시각화 프로젝트 (C#)

이 프로젝트는 C#을 이용하여 간단한 센서 데이터의 분석 및 콘솔 기반 시각화를 수행하는 예시 애플리케이션이다. AI 기반이라는 개념은 현재로서는 데이터 생성 로직에 무작위 값을 사용하고 있으나, 실제 시나리오에서는 머신러닝 모델의 예측 결과나 복잡한 패턴 분석 결과를 활용할 수 있다.

## 프로젝트 목표

*   C#을 활용한 데이터 모델 정의 및 데이터 생성.
*   데이터의 기본적인 통계 분석 (평균, 최대, 최소).
*   콘솔 환경에서 데이터를 시각적으로 표현 (막대 그래프).
*   모듈화된 코드 구조를 통해 각 기능의 역할을 명확히 한다.

## 코드 구조

프로젝트는 다음 파일들로 구성되어 있다:

*   **`DataModel.cs`**:
    *   `SensorData` 클래스를 정의한다. 이 클래스는 `Timestamp` (데이터가 기록된 시간)와 `Value` (기록된 값)를 포함하며, 센서 데이터를 표현하는 데 사용된다.
*   **`DataAnalyzer.cs`**:
    *   `DataAnalyzer` 클래스를 포함한다. 이 클래스는 `List<SensorData>`를 입력받아 데이터의 `CalculateAverage` (평균), `FindMaxValue` (최대값), `FindMinValue` (최소값)를 계산하는 메서드를 제공한다.
*   **`VisualizationHelper.cs`**:
    *   `VisualizationHelper` 클래스를 포함한다. 이 클래스는 `GenerateBarChart` 메서드를 통해 `List<SensorData>`를 기반으로 콘솔에 간단한 텍스트 기반 막대 그래프를 그리는 기능을 제공한다.
*   **`Program.cs`**:
    *   애플리케이션의 진입점이다.
    *   `GenerateSampleData` 메서드를 사용하여 임의의 `SensorData` 목록을 생성한다.
    *   `DataAnalyzer`를 사용하여 생성된 데이터의 통계 분석을 수행하고 결과를 출력한다.
    *   `VisualizationHelper`를 사용하여 데이터 막대 그래프를 콘솔에 시각화한다.

## 실행 방법

이 프로젝트는 .NET SDK가 설치된 환경에서 실행할 수 있다.

1.  **프로젝트 경로 이동**:
    ```bash
    cd C:\server\gpt-code-diary\codes\202607\25
    ```

2.  **프로젝트 빌드**:
    현재 디렉터리에 `.csproj` 파일이 없으므로, 먼저 `.csproj` 파일을 생성해야 한다.
    ```bash
    dotnet new console --output .
    ```
    이후 빌드를 진행한다:
    ```bash
    dotnet build
    ```

3.  **프로젝트 실행**:
    빌드가 성공적으로 완료되면 다음 명령어로 애플리케이션을 실행할 수 있다:
    ```bash
    dotnet run
    ```

위 단계를 따르면 프로그램이 실행되어 샘플 데이터 생성, 분석 결과 출력, 그리고 콘솔에 막대 그래프가 표시되는 것을 확인할 수 있다.
