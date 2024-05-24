// middleware/logger.js
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');
const moment = require('moment-timezone');
const os = require('os');

// 호스트네임을 위한 커스텀 토큰 추가
morgan.token('hostname', () => os.hostname());

// 수정된 로그 디렉토리 및 파일 설정
const logDirectory = '/f1/logs';
const logFile = `${logDirectory}/access.log`;

// 로그 디렉토리가 없으면 생성
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

// 로그 스트림 생성
const accessLogStream = fs.createWriteStream(logFile, { flags: 'a' });

// IPv4 주소만 추출하는 커스텀 토큰
morgan.token('remote-addr', (req) => {
  return req.ip.replace(/^.*:/, '');
});

// 한국 시간대의 날짜 및 시간을 표시하는 커스텀 토큰
morgan.token('date', () => {
  return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
});

// morgan 로거 설정
const logger = morgan(
  ':date | :hostname | :remote-addr | :method :url HTTP/:http-version | :status | :response-time ms | :user-agent',
  {
    stream: accessLogStream,
    skip: function (req, res) {
      // 루트 경로('/')에 대한 GET 요청만 로그를 남깁니다.
      return !(req.method === 'GET' && req.url === '/');
    }
  }
);

module.exports = logger;
