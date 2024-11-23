import winston, { createLogger, transports } from "winston";
import * as utils from "./utils.js";

const { combine, timestamp, printf } = winston.format;
const logDir = `${process.cwd()}/logs`;

const generateFileName = () => {
  const today = utils.getyyyyMMdd();
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

export default logger;
