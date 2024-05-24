// components/ServerStatusChecker.js
import React from 'react';

const ServerStatusChecker = ({ styles }) => {
  const checkServerStatus = async () => {
    try {
      const response = await fetch('/api/checkServerStatus');
      const message = await response.text();
      alert(message);
    } catch (error) {
      console.error('Error checking server status:', error);
      alert('서버 상태 확인 중 오류가 발생했습니다.');
    }
  };

  return (
    <button className={styles.status_check_btn} onClick={checkServerStatus}>
      Check server status
    </button>
  );
};

export default ServerStatusChecker;
