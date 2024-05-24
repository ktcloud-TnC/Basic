import React, { useEffect, useState, useRef } from 'react';
import DynamicHeightLogList from './DynamicHeightLogList';

const Fetch_was_LogContent = () => {
    const [logData, setLogData] = useState([]);
    const retryCount = useRef(0);
    const ws = useRef(null);
    const logsContainerRef = useRef(null); // 로그 데이터를 담는 컨테이너의 ref

    const connectWebSocket = () => {
        const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
        const wsUrl = `${wsProtocol}//${window.location.hostname}:${window.location.port}/api/ws`;
        ws.current = new WebSocket(wsUrl);

        const connectionTimeout = setTimeout(() => {
            if (ws.current.readyState !== WebSocket.OPEN) {
                console.log('WebSocket is not in OPEN state, closing connection...');
                ws.current.close();
            }
        }, 2000);

        ws.current.onopen = () => {
            console.log('WebSocket connection successful');
            clearTimeout(connectionTimeout);
            retryCount.current = 0;
            ws.current.send(JSON.stringify({ type: "INITIAL_DATA_REQUEST" }));
        };

        ws.current.onmessage = (event) => {
            // 웹소켓으로부터 받은 로그 데이터를 줄바꿈으로 분리
            const messages = event.data.split('\n').filter(message => message.trim() !== '');
            
            // 각 메시지에 대하여 중복 검사 및 추가
            messages.forEach((newMessage) => {
                setLogData(prev => {
                    // 이전 로그 데이터와 비교하여 중복 검사
                    if (!prev.find(prevMessage => prevMessage.message === newMessage)) {
                        return [...prev, { message: newMessage }]; // 중복되지 않는 새 메시지 추가
                    } else {
                        return prev; // 중복 메시지는 추가하지 않음
                    }
                });
            });
        };
        
        
        ws.current.onerror = (error) => {
            console.error('WebSocket connection error:', error);
        };

        ws.current.onclose = () => {
            console.log('WebSocket connection lost');
            if (retryCount.current < 3) { // 재시도 횟수를 3으로 제한
                console.log(`Attempt to reconnect in 2 seconds... [Attempt ${retryCount.current + 1}]`);
                retryCount.current += 1;
                setTimeout(connectWebSocket, 2000);
            }
        };
    };

    useEffect(() => {
        connectWebSocket();
        return () => {
            if (ws.current) ws.current.close();
            retryCount.current = 0;
        };
    }, []);

    useEffect(() => {
        if (logsContainerRef.current) {
            const observer = new MutationObserver(() => {
                // 자동 스크롤 로직 유지
                if (logsContainerRef.current.scrollHeight - logsContainerRef.current.clientHeight <= logsContainerRef.current.scrollTop + 1) {
                    logsContainerRef.current.scrollTop = logsContainerRef.current.scrollHeight - logsContainerRef.current.clientHeight;
                }
            });
        
            observer.observe(logsContainerRef.current, {
                childList: true,
                subtree: true,
            });
        
            return () => observer.disconnect();
        }
    }, []); // logsContainerRef가 변경될 때만 실행
    
    return (
        <div ref={logsContainerRef} style={{ width: '100%', height: '150px', overflow: 'auto' }}>
            <DynamicHeightLogList logs={logData} />
        </div>
    );
};

export default Fetch_was_LogContent;
