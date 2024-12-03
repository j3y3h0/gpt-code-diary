import dotenv from "dotenv";
import OpenAIApi from "openai";
import schedule from "node-schedule";
import logger from "./logger.js";
import * as utils from "./utils.js";

dotenv.config();

export const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

async function saveRandomCodeDiary() {
  try {
    const NEWS_API =
      "https://namu.news/api/categories/technology/ranked?page=1&limit=9"; // IT/과학

    // 1. 뉴스 데이터 가져오기
    const newsList = await utils.fetchNews(NEWS_API);

    // 2. 뉴스 데이터 포맷팅
    const newsContent = utils.formatNewsList(newsList);

    logger.info(`newsContent: \n ${newsContent}`);

    // 3. GPT를 통한 코드 다이어리 생성
    const generatedCode = await utils.generateCodeWithGpt(newsContent);

    // 4. 저장 경로 생성 및 파일로 저장
    const filePath = utils.createSavePath();
    utils.saveToFile(filePath, generatedCode);

    // 5. BAT 파일 실행, 깃허브 커밋 푸시
    const batchFilePath = `${process.cwd()}/push.bat`;
    utils.runBatchScript(batchFilePath);
  } catch (error) {
    console.log("saveRandomCodeDiary ERROR: ", error);
    logger.error(`saveRandomCodeDiary: ${error}`);
  } finally {
  }
}

//await saveRandomCodeDiary();

schedule.scheduleJob(
  "saveRandomCodeDiary",
  "0 30 9 * * *", // 매일 09:30
  saveRandomCodeDiary
);

console.log("saveRandomCodeDiary started");
