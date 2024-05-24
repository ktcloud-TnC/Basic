import fs from 'fs/promises';
import path from 'path';
import moment from 'moment-timezone';

const naslogDirectory = '/n1/logs/all'; // 예시: 절대 경로 직접 지정

async function getTodayLogPattern() {
  const today = moment().tz('Asia/Seoul').format('YYYYMMDD');
  return path.join(naslogDirectory, `all-access-${today}.log`);
}

export default async function handler(req, res) {
  const logPath = await getTodayLogPattern();

  try {
    const logContent = await fs.readFile(logPath, 'utf8');
    res.status(200).send(logContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.status(404).json({ message: 'The log file for today does not exist.' });
    } else {
      console.error('Error reading file:', error);
      res.status(500).send('Failed to read log file.');
    }
  }
}
