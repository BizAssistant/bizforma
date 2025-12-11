@echo off
REM Cloudflare Setup Script for Windows
REM This script helps you set up Cloudflare backend services

echo.
echo ================================================== 
echo Business Formation Assistant - Cloudflare Setup
echo ==================================================
echo.

REM Check if wrangler is installed
where wrangler >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Wrangler CLI not found!
    echo Installing Wrangler...
    call npm install -g wrangler
)

echo Wrangler CLI installed
echo.

REM Login to Cloudflare
echo Logging in to Cloudflare...
call wrangler login

echo.
echo Creating D1 Database...
echo Running: wrangler d1 create business_formation_db
call wrangler d1 create business_formation_db

echo.
echo IMPORTANT: Copy the database configuration above and update wrangler.toml
echo    Look for [[d1_databases]] section and replace the database_id
echo.
pause

echo.
echo Initializing database schema...
call wrangler d1 execute business_formation_db --file=./schema.sql

echo.
echo Creating KV Namespace...
echo Running: wrangler kv:namespace create BUSINESS_DATA
call wrangler kv:namespace create "BUSINESS_DATA"

echo.
echo Creating KV Namespace (Preview)...
call wrangler kv:namespace create "BUSINESS_DATA" --preview

echo.
echo IMPORTANT: Copy the KV namespace IDs above and update wrangler.toml
echo    Look for [[kv_namespaces]] section and replace the id and preview_id
echo.
pause

echo.
set /p r2=Do you want to create an R2 bucket for document storage? (y/n) 
if /i "%r2%"=="y" (
    echo Creating R2 bucket...
    call wrangler r2 bucket create business-documents
    echo.
    echo IMPORTANT: Uncomment the R2 bucket section in wrangler.toml
)

echo.
echo Cloudflare setup complete!
echo.
echo Next steps:
echo    1. Review and verify wrangler.toml has all the correct IDs
echo    2. Build your project: npm run build
echo    3. Deploy to Cloudflare Pages: npm run deploy
echo    4. Or push to GitHub for automatic deployment
echo.
echo For more details, see DEPLOYMENT.md
echo.
pause
