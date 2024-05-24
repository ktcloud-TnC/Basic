// pages/api/install-stress-test.js
import { exec } from 'child_process';

export default function handler(req, res) {
    exec("stress-ng --version", (versionError, stdout, stderr) => {
        if (!versionError) {
            // 이미 설치되어 있음
            return res.status(200).send();
        }

        exec("sudo dnf -y install stress-ng", (installError, installStdout, installStderr) => {
            if (installError) {
                // 설치 중 오류 발생
                return res.status(500).send();
            }
            // 성공적으로 설치됨
            res.status(201).send();
        });
    });
}

