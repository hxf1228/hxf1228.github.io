# 本地预览：hugo server，改文件即时刷新，浏览器打开 http://localhost:1313
# 需要 Hugo 0.169.0（或同大版本）在 %LOCALAPPDATA%\hugo-tools\hugo.exe
$hugo = Join-Path $env:LOCALAPPDATA 'hugo-tools\hugo.exe'
if (-not (Test-Path $hugo)) {
    Write-Host "找不到 $hugo" -ForegroundColor Red
    Write-Host "下载地址：https://github.com/gohugoio/hugo/releases/tag/v0.169.0" -ForegroundColor Yellow
    Write-Host "解压后把 hugo.exe 放到 $env:LOCALAPPDATA\hugo-tools\" -ForegroundColor Yellow
    exit 1
}
& $hugo server --port 1313 --disableFastRender @args