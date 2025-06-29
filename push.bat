@echo off
setlocal enabledelayedexpansion
:: 현재 디렉토리에서 변경 사항을 커밋하고 푸시하는 스크립트

:: Git 상태 확인
:: git status

:: 변경된 파일을 스테이징
git add .

:: PowerShell로 날짜 및 시간 구하기 (yyyyMMddHHmm)
for /f %%i in ('powershell -Command "Get-Date -Format yyyyMMddHHmm"') do set commitMessage=%%i

:: 커밋 메시지 확인
:: echo commitMessage: !commitMessage!

:: 커밋
git commit -m "Save: !commitMessage!"

:: 푸시
git push

:: 작업 완료 메시지
echo Commit and push complete.
:: pause