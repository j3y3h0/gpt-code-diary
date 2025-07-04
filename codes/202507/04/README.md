최근 디지털 성범죄 신고의 폭증에 대한 뉴스와 관련하여, 사용자들이 신고할 수 있는 플랫폼을 구현하는 간단한 Python 코드를 작성해 보겠다. 이 코드에서는 Flask 웹 프레임워크와 SQLite 데이터베이스를 사용하여 신고 접수를 처리하는 웹 애플리케이션을 만든다.

### 필요 라이브러리 설치
먼저, Flask와 SQLite를 사용하기 위해 필요한 라이브러리를 설치해야 한다. 다음 명령어를 사용하여 설치할 수 있다.

```bash
pip install Flask Flask-SQLAlchemy
```

### Flask 웹 애플리케이션 코드
아래는 신고 접수를 위한 간단한 Flask 애플리케이션의 코드이다.

```python
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///reports.db'
db = SQLAlchemy(app)

class Report(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(200), nullable=False)

    def __repr__(self):
        return f'<Report {self.id}>'

@app.route('/report', methods=['POST'])
def report():
    data = request.get_json()
    if not data or 'description' not in data:
        return jsonify({'message': '신고 내용을 입력하세요.'}), 400

    new_report = Report(description=data['description'])
    db.session.add(new_report)
    db.session.commit()
    
    return jsonify({'message': '신고가 접수되었습니다.'}), 201

@app.route('/reports', methods=['GET'])
def get_reports():
    reports = Report.query.all()
    return jsonify([{'id': report.id, 'description': report.description} for report in reports]), 200

if __name__ == '__main__':
    db.create_all()  # 데이터베이스 초기화
    app.run(debug=True)
```

### 코드 설명
1. **Flask와 SQLAlchemy 설정**: Flask 웹 프레임워크와 SQLite 데이터베이스를 설정한다.
2. **Report 모델**: 신고 내용을 저장할 `Report` 클래스를 정의한다. 이 클래스는 신고 ID와 설명을 포함한다.
3. **신고 접수 엔드포인트**: POST 요청을 통해 신고 내용을 접수하는 `/report` 경로를 설정한다. 사용자로부터 JSON 형식의 데이터를 받아 신고를 데이터베이스에 저장한다.
4. **신고 조회 엔드포인트**: GET 요청을 통해 모든 신고를 조회하는 `/reports` 경로를 설정한다. 데이터베이스에 저장된 모든 신고의 리스트를 반환한다.
5. **애플리케이션 실행**: 웹 애플리케이션을 실행하고, 데이터베이스를 초기화하는 부분이 포함되어 있다.

이 애플리케이션을 통해 사용자는 디지털 성범죄 신고를 손쉽게 접수할 수 있으며, 신고 내용을 조회할 수 있다.