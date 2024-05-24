import { useEffect, useState } from 'react';

function FetchWebLogContent() {
    const [logContent, setLogContent] = useState('');

    useEffect(() => {
        // 로그 내용을 불러오는 함수 정의
        const fetchLogContent = () => {
            fetch('/api/nas-logs')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("NAS와의 연결이 성공적으로 이루어지고 로그 내용이 준비되면, 해당 로그 내용이 불러와집니다.");
                    }
                    return response.text();
                })
                .then(data => {
                    // 첫 번째 요청에서는 상태를 설정하지만,
                    // 두 번째 요청에서는 기존 상태를 덮어쓰기합니다.
                    setLogContent(data);
                })
                .catch(error => {
                    let message = "NAS와의 연결이 성공적으로 이루어지고 로그 내용이 준비되면, 해당 로그 내용이 불러와집니다.";
                    if (error.message === "NAS에 정상적으로 연결되지 않아 로그 기록이 중단되었습니다.") {
                        message = error.message;
                    }
                    setLogContent(message);
                });
        };

        // 컴포넌트 마운트 시 첫 번째 요청 실행
        fetchLogContent();

        // 첫 번째 요청 이후 15초 후에 두 번째 요청 실행
        // 두 번째 요청에서는 기존 로그 내용을 새 내용으로 대체합니다.
        const timer = setTimeout(fetchLogContent, 15000);

        // 컴포넌트 언마운트 시 타이머 정리
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {logContent.split('\n').map((line, index) => (
                <div key={index}>{line}</div>
            ))}
        </div>
    );
}

export default FetchWebLogContent;
