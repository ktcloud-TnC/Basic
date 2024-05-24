// components/ServerStatusBox.js
import React, { useEffect, useState } from 'react';
import styles from '../styles/Layout.module.css';

function ServerStatusBox({ serverType }) {
  const [serverStatus, setServerStatus] = useState({
    cpuUsage: 0,
    memoryUsage: 0,
    hostname: '', // 초기 상태에 hostname 추가
  });

  useEffect(() => {
    const endpoint = serverType === 'WEB' ? '/api/server-status' : '/api/was-server-status';
    async function fetchServerStatus() {
      const response = await fetch(endpoint);
      const data = await response.json();
      setServerStatus({
        cpuUsage: parseFloat(data.cpuUsage).toFixed(2),
        memoryUsage: parseFloat(data.memoryUsage).toFixed(2),
        hostname: data.hostname || '', // 응답에서 hostname을 설정
      });
    }

    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 5000);

    return () => clearInterval(interval);
  }, [serverType]);

  const cpuUsageClassName = `${styles.serverBoxP} ${serverStatus.cpuUsage >= 100 ? styles.cpuUsageHigh : ''}`;

  return (
    <>
      {/* WAS 서버인 경우 호스트 이름을 표시합니다. */}
      {serverType === 'WAS' && serverStatus.hostname && (
        <p className={styles.serverBoxP}>
          HostName: <span className={styles.hostnameHighlight}>{serverStatus.hostname}</span>
        </p>
      )}
      <p className={cpuUsageClassName}>CPU 사용량: {serverStatus.cpuUsage}%</p>
      <p className={styles.serverBoxP}>메모리 사용량: {serverStatus.memoryUsage}%</p>
    </>
  );
}

export default ServerStatusBox;
