@echo off
chcp 65001
net session >nul 2>&1
if %errorLevel% == 0 (
    echo Administrator mode detected.
) else (
    echo Please run this script in administrator mode.
    REM 以管理员权限启动脚本 并保留工作目录
    powershell -Command "Start-Process 'wt.exe' -ArgumentList 'cmd /c cd /d \"%cd%\" && \"%~f0\"' -Verb runAs"
    exit
)

set NAPCAT_PATCH_PATH=%cd%\patchNapCat.js
set NAPCAT_LOAD_PATH=%cd%\loadNapCat.js
set NAPCAT_INJECT_PATH=%cd%\NapCatWinBootHook.dll
set NAPCAT_LAUNCHER_PATH=%cd%\NapCatWinBootMain.exe
set NAPCAT_MAIN_PATH=%cd%\napcat.mjs
:loop_read
for /f "tokens=2*" %%a in ('reg query "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\QQ" /v "UninstallString"') do (
    set RetString=%%b
    goto :napcat_boot
)

:napcat_boot
for %%a in (%RetString%) do (
    set "pathWithoutUninstall=%%~dpa"
)

SET QQPath=%pathWithoutUninstall%QQ.exe

REM 拿不到QQ路径则退出
if not exist "%QQpath%" (
    echo provided QQ path is invalid: %QQpath%
    pause
    exit /b
)
set NAPCAT_MAIN_PATH=%NAPCAT_MAIN_PATH:\=/%
echo (async () =^> {await import("file:///%NAPCAT_MAIN_PATH%")})() > %NAPCAT_LOAD_PATH%

"%NAPCAT_LAUNCHER_PATH%" "%QQPath%" "%NAPCAT_INJECT_PATH%"