#!/bin/bash

# .bash_profile에 Go 언어 환경 변수 설정 추가
echo -e "\n# Go 언어 환경 변수 설정" >> ~/.bash_profile
echo "export GOPATH=/root/go" >> ~/.bash_profile
echo "export GOROOT=/usr/local/go" >> ~/.bash_profile
echo "export GOBIN=\$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=\$PATH:\$GOPATH/bin" >> ~/.bash_profile
echo "export PATH=\$PATH:\$GOROOT/bin" >> ~/.bash_profile

# 변경사항 적용
source ~/.bash_profile

echo "환경 변수 설정이 적용되었습니다."