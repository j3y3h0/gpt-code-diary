최근 뉴스 중 '네이버클라우드, 무료 리눅스 배포판 '네빅스' 공개'에 관련하여, JavaScript를 사용하여 간단한 파일 업로드 기능을 구현하는 예제를 제공하고자 한다. 이 예제는 사용자가 파일을 선택하고, 선택된 파일을 서버에 업로드하는 기능을 포함한다. 이를 위해 `Express`와 `Multer` 라이브러리를 사용할 것이다.

### 파일 업로드 서버 예제

1. **필요한 라이브러리 설치**  
   아래 명령어를 통해 `Express`와 `Multer`를 설치해야 한다.
   ```bash
   npm install express multer
   ```

2. **서버 코드 작성**  
   다음 코드는 파일 업로드를 처리하는 기본적인 Express 서버를 설정하는 예제이다.
   ```javascript
   const express = require('express');
   const multer = require('multer');
   const path = require('path');

   const app = express();
   const port = 3000;

   // Multer 설정
   const storage = multer.diskStorage({
       destination: (req, file, cb) => {
           cb(null, 'uploads/');
       },
       filename: (req, file, cb) => {
           cb(null, Date.now() + path.extname(file.originalname)); // 파일 이름을 현재 시간으로 설정
       }
   });

   const upload = multer({ storage: storage });

   // 파일 업로드를 처리하는 POST 요청
   app.post('/upload', upload.single('file'), (req, res) => {
       res.send('파일 업로드 성공: ' + req.file.filename);
   });

   // 서버 시작
   app.listen(port, () => {
       console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
   });
   ```

3. **클라이언트 HTML 코드**  
   다음은 파일을 선택하고 업로드할 수 있는 간단한 HTML 폼이다.
   ```html
   <!DOCTYPE html>
   <html lang="ko">
   <head>
       <meta charset="UTF-8">
       <title>파일 업로드</title>
   </head>
   <body>
       <h1>파일 업로드</h1>
       <form action="http://localhost:3000/upload" method="POST" enctype="multipart/form-data">
           <input type="file" name="file">
           <button type="submit">업로드</button>
       </form>
   </body>
   </html>
   ```

이 코드는 사용자에게 파일 업로드 기능을 제공하며, 선택된 파일은 서버의 'uploads' 폴더에 저장된다. 이 예제를 통해 사용자는 간단하게 파일을 서버에 업로드할 수 있는 인터페이스를 경험할 수 있다.