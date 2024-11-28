import path from "path";
import fs from "fs";
import axios from "axios";
import { exec } from "child_process";
import { openai } from "./index.js";
import logger from "./logger.js";

// 1. 뉴스 데이터 가져오기
export async function fetchNews(apiUrl) {
  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
}

// 2. 뉴스 데이터를 문자열로 변환
export function formatNewsList(newsList) {
  return newsList
    .map((news, index) => {
      const title = `${news.title}\n`;
      const subTitle = news.sub_title ? `- ${news.sub_title}\n\n` : "\n";
      return `${index + 1}. ${title}${subTitle}`;
    })
    .join("");
}

// 3. OpenAI ChatGPT로 요청 보내기
export async function generateCodeWithGpt(newsContent) {
  const ORDER = `
  You are a programming code generator that creates useful and straightforward code examples daily. Based on the latest news, choose one topic and write a sample code related to it, focusing on relevant libraries or algorithms.
  
  ${newsContent}
  
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

  try {
    const response = await openai.chat.completions.create({
      messages: [{ role: "user", content: ORDER }],
      // model: "gpt-4o",
      model: "gpt-4o-mini",
      temperature: 0.7,
    });

    // null은 replacer를 지정 X, 들여쓰기 2
    logger.info(`generateCodeWithGpt: ${JSON.stringify(response, null, 2)}`);

    return response.choices[0].message.content;
  } catch (error) {
    console.error("Error generating code with GPT:", error);
    throw error;
  }
}

// 4. 파일 저장 경로 생성
export function createSavePath() {
  const DATE_OPTION = { timeZone: "Asia/Seoul" };
  const nowDate = new Date().toLocaleString("en-US", DATE_OPTION);
  const year = new Date(nowDate).getFullYear();
  const month = String(new Date(nowDate).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(nowDate).getDate()).padStart(2, "0");

  const saveDir = `${process.cwd()}/codes/${year}${month}/${day}`;
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
  }
  return path.join(saveDir, "README.md");
}

// 5. 파일 쓰기
export function saveToFile(filePath, content) {
  try {
    fs.writeFileSync(filePath, content, "utf-8");
  } catch (error) {
    console.error("Error saving file:", error);
    throw error;
  }
}

// 6. 배치 스크립트 실행
export function runBatchScript(batchFilePath) {
  exec(batchFilePath, (error, stdout, stderr) => {
    if (error) {
      logger.info(`Batch script error: ${error}`);
      console.error(`Batch script error: ${error}`);
      return;
    }
    if (stderr) {
      logger.info(`Batch script stderr: ${stderr}`);
      console.error(`Batch script stderr: ${stderr}`);
      return;
    }
    logger.info(`Batch script stdout: ${stdout}`);
    console.log(`Batch script stdout: ${stdout}`);
  });
}

/** 현재날짜 yyyyMMdd */
export function getyyyyMMdd() {
  const DATE_OPTION = { timeZone: "Asia/Seoul" };
  const nowDate = new Date().toLocaleString("en-US", DATE_OPTION);
  const year = new Date(nowDate).getFullYear();
  const month = String(new Date(nowDate).getMonth() + 1).padStart(2, "0");
  const day = String(new Date(nowDate).getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}
