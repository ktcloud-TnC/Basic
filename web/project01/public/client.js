function connectWebSocket() {
    const wsProtocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${wsProtocol}//${window.location.hostname}:${window.location.port}/api/ws`;
    const ws = new WebSocket(wsUrl);

    ws.onopen = function() {
        console.log('WebSocket 연결 성공');
    };

    ws.onerror = function(error) {
        console.error('WebSocket 연결 오류:', error);
        setTimeout(connectWebSocket, 3000); // 3초 후 재연결 시도
    };

    ws.onmessage = function(event) {
        const logData = event.data;
        document.getElementById('wasLogData').innerText = logData;
    };

    ws.onclose = function() {
        console.log('WebSocket 연결 끊김, 재연결 시도');
        setTimeout(connectWebSocket, 3000); // 3초 후 재연결 시도
    };
}

document.addEventListener('DOMContentLoaded', connectWebSocket);
