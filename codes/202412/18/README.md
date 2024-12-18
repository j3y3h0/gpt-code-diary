최근 뉴스 중 'AI 통화비서'와 관련하여, Java를 사용하여 간단한 통화 기록 관리 애플리케이션을 만들어 보겠다. 이 애플리케이션은 사용자가 통화 기록을 추가하고 조회할 수 있는 기능을 제공한다. 이를 위해 자바의 기본 자료구조와 함께 JSON 형식으로 데이터를 저장하기 위해 `Gson` 라이브러리를 사용할 것이다.

다음은 코드 예제이다.

```java
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class CallRecord {
    private String contactName;
    private String phoneNumber;
    private String dateTime;

    public CallRecord(String contactName, String phoneNumber, String dateTime) {
        this.contactName = contactName;
        this.phoneNumber = phoneNumber;
        this.dateTime = dateTime;
    }

    @Override
    public String toString() {
        return "Contact Name: " + contactName + ", Phone Number: " + phoneNumber + ", Date/Time: " + dateTime;
    }
}

public class CallRecordManager {
    private List<CallRecord> callRecords;
    private static final String FILE_NAME = "call_records.json";

    public CallRecordManager() {
        callRecords = new ArrayList<>();
        loadCallRecords();
    }

    public void addCallRecord(String contactName, String phoneNumber, String dateTime) {
        CallRecord record = new CallRecord(contactName, phoneNumber, dateTime);
        callRecords.add(record);
        saveCallRecords();
    }

    public void displayCallRecords() {
        for (CallRecord record : callRecords) {
            System.out.println(record);
        }
    }

    private void saveCallRecords() {
        Gson gson = new GsonBuilder().setPrettyPrinting().create();
        try (Writer writer = new FileWriter(FILE_NAME)) {
            gson.toJson(callRecords, writer);
        } catch (IOException e) {
            System.out.println("Error saving call records: " + e.getMessage());
        }
    }

    private void loadCallRecords() {
        Gson gson = new Gson();
        try (Reader reader = new FileReader(FILE_NAME)) {
            CallRecord[] records = gson.fromJson(reader, CallRecord[].class);
            if (records != null) {
                for (CallRecord record : records) {
                    callRecords.add(record);
                }
            }
        } catch (IOException e) {
            System.out.println("Error loading call records: " + e.getMessage());
        }
    }

    public static void main(String[] args) {
        CallRecordManager manager = new CallRecordManager();
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("1. 통화 기록 추가");
            System.out.println("2. 통화 기록 조회");
            System.out.println("3. 종료");
            System.out.print("선택: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // 버퍼 비우기

            if (choice == 1) {
                System.out.print("연락처 이름: ");
                String name = scanner.nextLine();
                System.out.print("전화번호: ");
                String number = scanner.nextLine();
                System.out.print("날짜 및 시간: ");
                String dateTime = scanner.nextLine();
                manager.addCallRecord(name, number, dateTime);
            } else if (choice == 2) {
                manager.displayCallRecords();
            } else if (choice == 3) {
                break;
            } else {
                System.out.println("잘못된 선택입니다.");
            }
        }
        scanner.close();
    }
}
```

위의 코드는 사용자가 통화 기록을 추가하고 조회할 수 있는 간단한 콘솔 애플리케이션이다. `Gson` 라이브러리를 사용하여 통화 기록을 JSON 파일로 저장하고 로드하는 기능을 포함하고 있다. 이 애플리케이션은 AI 통화비서와 같은 기능을 구현하는 기초가 될 수 있다.