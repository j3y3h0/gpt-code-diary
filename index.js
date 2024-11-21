import path from "path";
import fs from "fs";
import axios from "axios";
import dotenv from "dotenv";
import winston, { createLogger, transports } from "winston";
import OpenAIApi from "openai";
import { exec } from "child_process";
import schedule from "node-schedule";

dotenv.config();

//#region Middleware
const { combine, timestamp, printf } = winston.format;
const logDir = `${process.cwd()}/logs`;

/** 현재날짜 yyyyMMdd */
function getyyyyMMdd() {
  const DATE_OPTION = { timeZone: "Asia/Seoul" };
  const nowDate = new Date().toLocaleString("en-US", DATE_OPTION);
  const year = new Date(nowDate).getFullYear();
  const month = String(new Date(nowDate).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(nowDate).getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}

const generateFileName = () => {
  const today = getyyyyMMdd();
  return `${today}.log`;
};

/** 날짜 로그레벨 메세지 */
const logFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
  transports: [
    new transports.File({ filename: generateFileName(), dirname: logDir }),
  ],
});

//#endregion

// const NEWS_API = "https://namu.news/api/sections/%40news/?page=1&limit=8"; // 종합
const NEWS_API = "https://namu.news/api/categories/technology/?page=1&limit=8"; // IT/과학

const responseApi = await axios.get(NEWS_API);
const datas = responseApi.data;
const newsList = datas.results;
const assistantInfo = newsList
  .map((news, index) => {
    const title = `${news.title}\n`;
    const sub_title = news.sub_title ? `- ${news.sub_title}\n\n` : "\n";
    // const category = news.category.name;

    return `${index + 1}. ${title}${sub_title}`;
  })
  .join(""); // 배열을 하나의 문자열로 병합

// console.log("assistantInfo :", assistantInfo);

const ORDER = `
  당신은 매일 유용하고 간단한 코드 예제를 생성하는 프로그래밍 코드 생성기이다.
  다음 뉴스들을 참고 후 랜덤하게 하나를 골라서 이와 관련된 간단한 알고리즘이나 관련된 기능의 프로그래밍 코드를 짧게 작성하라.

  ${assistantInfo}

  1. 프로그래밍 언어는 C#, Python, JavaScript, Java 중 하나를 랜덤으로 선택한다.
  2. 코드는 간단하면서도 실용적이어야 하며, 특정 기능을 설명하거나 문제를 해결하는 코드이어야 한다.
  3. 다음 항목을 포함하도록 내용을 작성하라:
   - **title** 코드의 목적과 기능을 간단히 설명하는 제목.
   - **language** 프로그래밍 언어 종류.
   - **content** 코드 전체를 포함하며, 올바른 Markdown 코드 블록으로 감싼다. (언어에 따라 적절한 하이라이팅 적용)
  4. 모든 출력을 정확히 Markdown 형식에 맞게 작성하라.
  5. 처음의 \`\`\`markdown, \`\`\` 출력은 생략한다.
  6. ~이다 와 같은 문어체를 사용한다.
`;

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

async function saveRandomCodeDiary() {
  try {
    const contentGpt = [
      // { role: "assistant", content: ASSISTANT },
      { role: "user", content: ORDER },
    ];

    // GPT 응답
    const responseGpt = await openai.chat.completions.create({
      messages: contentGpt,
      model: "gpt-4o",
      temperature: 0.7,
    });

    console.log("responseGpt: ", responseGpt);
    console.log("choices: ", responseGpt.choices);
    const resultMessage = responseGpt.choices[0].message.content;

    const DATE_OPTION = { timeZone: "Asia/Seoul" };
    const nowDate = new Date().toLocaleString("en-US", DATE_OPTION);
    const year = new Date(nowDate).getFullYear();
    const month = String(new Date(nowDate).getMonth() + 1).padStart(2, "0");
    const day = String(new Date(nowDate).getDate()).padStart(2, "0");
    const hour = String(new Date(nowDate).getHours()).padStart(2, "0");
    const minutes = String(new Date(nowDate).getMinutes()).padStart(2, "0");

    const currentTime = `${year}${month}${day}${hour}${minutes}`;

    // 저장 경로와 파일 이름 설정
    const fileName = `README.md`;
    const currentSaveDir = `${process.cwd()}/codes/${year}${month}/${day}`;
    const filePath = path.join(currentSaveDir, fileName);

    // 디렉토리 생성 (없으면 생성)
    if (!fs.existsSync(currentSaveDir)) {
      fs.mkdirSync(currentSaveDir, { recursive: true }); // 중간 경로가 없더라도 자동으로 생성
    }

    // 파일 쓰기
    fs.writeFileSync(filePath, resultMessage, "utf-8");

    const batFilePath = `${process.cwd()}/push.bat`;
    // .bat 파일 실행
    exec(batFilePath, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        logger.error(`exec error: ${error}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        logger.error(`stderr: ${error}`);
        return;
      }

      // 실행 결과 출력
      console.log(`stdout: ${stdout}`);
      logger.info(`stdout: ${stdout}`);
    });
  } catch (error) {
    console.log("saveRandomCodeDiary ERROR: ", error);
    logger.error(`saveRandomCodeDiary: ${error}`);
  } finally {
  }
}

// await saveRandomCodeDiary();

schedule.scheduleJob(
  "saveRandomCodeDiary",
  "0 30 9 * * *",
  saveRandomCodeDiary
);

console.log("saveRandomCodeDiary started");
