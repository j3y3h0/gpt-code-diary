@echo off
:: 현재 디렉토리에서 변경 사항을 커밋하고 푸시하는 스크립트

:: Git 상태 확인
:: git status

:: 변경된 파일을 스테이징
git add .

:: 현재 날짜 및 시간 구하기 (yyyyMMddHHmm 형식)
for /f "tokens=2 delims==" %%I in ('"wmic OS Get localdatetime /value"') do set datetime=%%I
set year=%datetime:~0,4%
set month=%datetime:~4,2%
set day=%datetime:~6,2%
set hour=%datetime:~8,2%
set minute=%datetime:~10,2%

:: 커밋 메시지 생성 (yyyyMMddHHmm 형식)
set commitMessage=%year%%month%%day%%hour%%minute%

:: 커밋
git commit -m "Save: %commitMessage%"

:: 푸시
git push

:: 작업 완료 메시지
echo Commit and push complete.
