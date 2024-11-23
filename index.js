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

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

async function saveRandomCodeDiary() {
  try {
    // const NEWS_API = "https://namu.news/api/sections/%40news/?page=1&limit=8"; // 종합
    const NEWS_API =
      "https://namu.news/api/categories/technology/?page=1&limit=8"; // IT/과학

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

    console.log("assistantInfo :", assistantInfo);

    const ORDER = `
  You are a programming code generator that creates useful and straightforward code examples daily. Based on the latest news, choose one topic and write a sample code related to it, focusing on relevant libraries or algorithms.

  ${assistantInfo}

  1. Randomly select one of the following programming languages: C#, Python, JavaScript, or Java.  
  2. The code must be practical, demonstrate a specific functionality, and use libraries or algorithms commonly applied in the industry.  
  3. Write the following content in Korean:  
    - **title**: A brief title explaining the purpose and functionality of the code.  
    - **language**: The programming language used.  
    - **content**: The entire code wrapped in proper Markdown code blocks with correct syntax highlighting for the chosen language.  
  4. Ensure all outputs are formatted precisely according to Markdown syntax.  
  5. Omit the initial \`\`\`markdown and ending \`\`\` outputs.  
  6. Use formal Korean writing, including expressions like "~이다."  
  `;

    const contentGpt = [{ role: "user", content: ORDER }];

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

await saveRandomCodeDiary();

schedule.scheduleJob(
  "saveRandomCodeDiary",
  "0 30 9 * * *",
  saveRandomCodeDiary
);

console.log("saveRandomCodeDiary started");
