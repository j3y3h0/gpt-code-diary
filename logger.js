import winston, { createLogger, transports } from "winston";

const { combine, timestamp, printf } = winston.format;

class Logger {
  constructor() {
    this.logDir = `${process.cwd()}/logs`;
    this.logger = this.createLoggerInstance();
  }

  // 로그 파일 이름 생성
  generateFileName() {
    const DATE_OPTION = { timeZone: "Asia/Seoul" };
    const nowDate = new Date().toLocaleString("en-US", DATE_OPTION);
    const year = new Date(nowDate).getFullYear();
    const month = String(new Date(nowDate).getMonth() + 1).padStart(2, "0");
    const day = String(new Date(nowDate).getDate()).padStart(2, "0");
    return `${year}${month}${day}.log`;
  }

  // 로그 형식 정의
  getLogFormat() {
    return printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`;
    });
  }

  // Logger 인스턴스 생성
  createLoggerInstance() {
    return createLogger({
      level: "info", // 로그 레벨 설정
      format: combine(
        timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // 타임스탬프 추가
        this.getLogFormat() // 커스텀 포맷 사용
      ),
      transports: [
        new transports.File({
          filename: this.generateFileName(), // 파일 이름 생성
          dirname: this.logDir, // 로그 디렉터리 설정
        }),
      ],
    });
  }

  // 로그 기록 함수
  log(level, message) {
    this.logger.log({ level, message });
  }

  // info 로그 기록 함수
  info(message) {
    this.log("info", message);
  }

  // error 로그 기록 함수
  error(message) {
    this.log("error", message);
  }

  // warn 로그 기록 함수
  warn(message) {
    this.log("warn", message);
  }
}

// Logger 클래스 인스턴스를 생성해서 내보냄
export default new Logger();
