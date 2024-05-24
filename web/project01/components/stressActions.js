// components/stressActions.js
import { useState, useEffect } from 'react';

export const useStressTestActions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) {
      alert(message);
    }
  }, [message]); // message 상태가 변경될 때마다 실행됩니다.

  const actionInProgress = () => {
    if (isLoading) {
      alert('다른 작업이 진행 중입니다. 잠시 후 다시 시도해주세요.');
      return true;
    }
    return false;
  };

  const installStressTool = async () => {
    if (actionInProgress()) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/install-stress-test', { method: 'POST' });
      if (response.status === 201) {
        setMessage('스트레스 테스트 도구가 성공적으로 설치되었습니다.');
      } else if (response.status === 200) {
        setMessage('스트레스 테스트 도구가 이미 설치되어 있습니다.');
      } else {
        throw new Error('Installation failed');
      }
    } catch (error) {
      setMessage('스트레스 테스트 도구 설치 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
};


  const startWebStressTest = async () => {
    if (actionInProgress()) return;
    setIsLoading(true);
    try {
      const response = await fetch('/api/start-stress-test', { method: 'POST' });
      if (response.ok) {
        setMessage('웹 서버 스트레스 테스트가 완료 되었습니다.');
      } else {
        setMessage('웹 서버 스트레스 테스트 시작에 실패했습니다.');
      }
    } catch (error) {
      setMessage('웹 서버 스트레스 테스트 시작 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return { installStressTool, startWebStressTest, isLoading };
};
