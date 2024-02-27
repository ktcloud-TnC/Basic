require('dotenv').config();
const WAS_SERVER_IP = process.env.WAS_SERVER_IP || '172.25.1.177'; // was 서버 IP 주소

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fs = require('fs'); // fs 모듈 전체를 불러옴
const morgan = require('morgan');
const express = require('express');
const moment = require('moment-timezone'); // moment-timezone 라이브러리 사용
const os = require('os');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { exec } = require('child_process');
const path = require('path'); // path 모듈 추가
const app = express();
const ECHO_SERVER_URL = `http://${WAS_SERVER_IP}`;
const ECHO_HEALTH_ENDPOINT = `${ECHO_SERVER_URL}/healthCheck`;
const DB_CHECK_ENDPOINT = `${ECHO_SERVER_URL}/dbCheck`;
const osUtils = require('node-os-utils');
const logDirectory = '/f1/logs';
const logFile = `${logDirectory}/access.log`;
const naslogDirectory = '/n1/logs/all';


const wsProxy = createProxyMiddleware('/api/ws', {
    target: ECHO_SERVER_URL,
    ws: true,
    logLevel: 'debug',
    changeOrigin: true,
    pathRewrite: {
        '^/api/ws': '/api/ws'
    }
});

app.use(wsProxy);

// 로그 디렉토리 생성 함수
function ensureLogDirectoryExists(directory) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }
}

// 로그 파일 생성 함수
function ensureLogFileExists(filePath) {
    if (!fs.existsSync(filePath)) {
        const fd = fs.openSync(filePath, 'w');
        fs.closeSync(fd);
    }
}

// 로그 디렉토리 및 파일 생성
ensureLogDirectoryExists(logDirectory);
ensureLogFileExists(logFile);


// 로그 파일 스트림 생성
const accessLogStream = fs.createWriteStream(logFile, { flags: 'a' });

// IPv6 형식에서 IPv4 주소만 추출
morgan.token('remote-addr', function(req, res) {
    var ip = req.ip || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress;
    return ip.replace(/^.*:/, ''); 
  });

// 날짜 및 시간 형식을 한국 시간으로 설정하는 함수
morgan.token('date', (req, res) => {
    return moment().tz('Asia/Seoul').format('YYYY-MM-DD HH:mm:ss');
});

// morgan 로그 설정
const morganMiddleware = morgan((tokens, req, res) => {
    return [
        tokens.date(req, res), // 날짜 및 시간
        os.hostname(), // 서버 호스트네임
        tokens.url(req, res), // 요청 URL
        tokens.method(req, res), // HTTP 메소드
        tokens.status(req, res), // HTTP 상태 코드
        tokens['remote-addr'](req, res), // 원격 주소 (IP)
        tokens['user-agent'](req, res) // 사용자 에이전트
    ].join(' | ');
}, { stream: accessLogStream });

// 홈페이지 경로에만 morgan 미들웨어 적용
app.get('/', morganMiddleware, (req, res) => {
    // 홈페이지 제공 로직...
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 정적 파일 서비스 설정
app.use(express.static('public'));

// Echo 애플리케이션으로의 요청을 위한 프록시 설정
app.use('/api', createProxyMiddleware({ target: ECHO_SERVER_URL, changeOrigin: true }));

// 당일 날짜에 해당하는 로그 파일의 경로를 생성하는 함수
const getTodayLogPattern = () => {
    const today = moment().tz('Asia/Seoul').format('YYYYMMDD');
    return `${naslogDirectory}/all-access-${today}.log`;
};

// 웹 서버 로그 파일의 내용을 반환하는 엔드포인트
app.get('/logs', (req, res) => {
    const naslogPattern = getTodayLogPattern();

    // 파일 존재 여부 확인
    if (fs.existsSync(naslogPattern)) {
        // 파일이 존재하면 내용을 읽어서 반환
        fs.readFile(naslogPattern, 'utf8', (err, data) => {
            if (err) {
                console.error('파일 읽기 오류:', err);
                return res.status(500).send('로그 파일을 읽는 데 실패했습니다.');
            }
            res.send(data);
        });
    } else {
        // 파일이 존재하지 않으면 메시지 반환
        res.status(404).send('당일 로그 파일이 존재하지 않습니다.');
    }
});


// 호스트 네임을 반환
app.get('/hostname', (req, res) => {
    res.send({ hostname: os.hostname() });
  });

// 서버 상태 확인 함수 (WEB 서버 내 NODE.JS를 통해 작동)
app.get('/checkServerStatus', async (req, res) => {
    // fetch 함수가 로드되었는지 확인
    if (!fetch) {
        return res.send('서버 초기화 중입니다. 잠시 후 다시 시도해주세요.');
    }

    // WAS 서버와의 네트워크 연결 확인
    exec(`ping -c1 ${WAS_SERVER_IP}`, async(err, stdout, stderr) => {
        if (err) {
            return res.send('WAS 서버에 문제가 발생했습니다.');
        }

        try {
            // Echo 애플리케이션이 실행 중인지 확인
            const echoResponse = await fetch(ECHO_HEALTH_ENDPOINT);
            if (!echoResponse.ok) {
                return res.send('WAS 서버에 연결되었지만 Echo 애플리케이션이 비정상 작동중 입니다.');
            }

            // DB 서버와의 연결 상태 확인
            const dbResponse = await fetch(DB_CHECK_ENDPOINT);
            if (!dbResponse.ok) {
                return res.send('WAS 서버와 DB 서버 간의 연결에 문제가 있습니다.');
            }

            // 모든 서버 및 애플리케이션이 정상적으로 운영 중
            return res.send('애플리케이션이 정상적으로 실행 중입니다.');
        } catch (error) {
            // 예외 처리
            return res.send('WAS 서버에 연결되었지만 Echo 애플리케이션이 실행되지 않고 있습니다.');
        }
    });
});

// CPU 및 메모리 사용량을 반환하는 엔드포인트
app.get('/server-status', async (req, res) => {
    const cpu = osUtils.cpu;
    const cpuUsage = await cpu.usage();

    const memory = osUtils.mem;
    const memoryInfo = await memory.info();

    res.json({
        cpuUsage: cpuUsage,
        memoryUsage: memoryInfo.usedMemPercentage
    });
});

// 스트레스 테스트 도구를 설치하는 엔드포인트
app.post('/install-stress-test', (req, res) => {
    // EPEL 리포지토리 설치 및 stress 설치 명령 실행
    exec("sudo dnf install -y epel-release && sudo dnf install -y stress", (installError) => {
        if (installError) {
            console.error('stress 설치 중 오류 발생:', installError);
            return res.status(500).send('stress 설치 실패');
        }
        res.send('스트레스 테스트 도구가 설치되었습니다.');
    });
});
// 스트레스 테스트를 시작하는 엔드포인트
app.post('/start-stress-test', (req, res) => {
    // 스트레스 테스트 명령 실행
    exec("stress --cpu 1 --timeout 500", (error) => {
        if (error) {
            console.error('스트레스 테스트 실행 중 오류 발생:', error);
            return res.status(500).send('스트레스 테스트 시작 실패');
        }
        res.send('스트레스 테스트가 시작되었습니다.');
    });
});

// WAS 서버로 CPU 및 메모리 사용량을 반환하는 프록시 설정
app.use('/was-server-status', createProxyMiddleware({
    target: ECHO_SERVER_URL,
    changeOrigin: true
}));

// 상품 등록 요청을 위한 프록시 설정
app.use('/products/add', createProxyMiddleware({
    target: ECHO_SERVER_URL, // WAS 서버 주소
    changeOrigin: true,
}));

// 서버 시작
app.listen(80, () => {
    console.log('서버가 80번 포트에서 실행 중입니다.');
});
