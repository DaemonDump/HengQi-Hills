$ErrorActionPreference = "Stop"

$projectDir = $PSScriptRoot
$pkg = Join-Path $projectDir "package.json"

if (-not (Test-Path $pkg)) {
  Write-Host "[ERROR] Cannot find package.json:" -ForegroundColor Red
  Write-Host "        $pkg"
  Read-Host "Press Enter to exit"
  exit 1
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host "[ERROR] npm not found in PATH." -ForegroundColor Red
  Write-Host "Install Node.js (LTS) and reopen PowerShell, then try again."
  Read-Host "Press Enter to exit"
  exit 1
}

Start-Process -FilePath "cmd.exe" -ArgumentList "/k", "cd /d `"$projectDir`" && npm install && npm run dev" -WindowStyle Normal
Start-Sleep -Seconds 2
Start-Process "http://localhost:3000"
