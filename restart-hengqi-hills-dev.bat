@echo off
setlocal EnableExtensions

set "PROJECT_DIR=%~dp0"

if not exist "%PROJECT_DIR%\package.json" (
  echo [ERROR] Cannot find package.json:
  echo         %PROJECT_DIR%\package.json
  echo.
  pause
  exit /b 1
)

where npm >nul 2>nul
if errorlevel 1 (
  echo [ERROR] npm not found in PATH.
  echo Install Node.js (LTS) and reopen this window, then try again.
  echo.
  pause
  exit /b 1
)

echo Stopping dev servers on ports 3000-3010...
for /L %%P in (3000,1,3010) do (
  for /f "tokens=5" %%A in ('netstat -ano ^| findstr /R /C:":%%P .*LISTENING"') do (
    taskkill /F /PID %%A >nul 2>nul
  )
)

echo Starting HengQi Hills dev server...
start "HengQi Hills - Dev" cmd /k "cd /d \"%PROJECT_DIR%\" && npm run dev"

timeout /t 2 >nul
start "" "http://localhost:3000"
