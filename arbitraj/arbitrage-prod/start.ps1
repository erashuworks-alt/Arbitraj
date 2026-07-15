Write-Host "Starting Arbitrage Platform in Production Mode..."
C:\Users\aysea\AppData\Roaming\npm\pm2.cmd start ecosystem.config.js --env production
Write-Host "All microservices deployed and managed by PM2."
C:\Users\aysea\AppData\Roaming\npm\pm2.cmd list
