// pages/api/server-status.js
import osUtils from 'os-utils';

export default function handler(req, res) {
  osUtils.cpuUsage((cpuPercent) => {
    const memoryUsage = ((osUtils.totalmem() - osUtils.freemem()) / osUtils.totalmem()) * 100;
    const cpuUsage = cpuPercent * 100;

    res.status(200).json({
      cpuUsage: cpuUsage.toFixed(2),
      memoryUsage: memoryUsage.toFixed(2),
    });
  });
}
