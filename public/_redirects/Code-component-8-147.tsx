# Cloudflare Pages Redirects Configuration
# https://developers.cloudflare.com/pages/platform/redirects/

# SPA fallback - serve index.html for all routes
# (except API routes and static files)
/api/* 200
/assets/* 200
/*.png 200
/*.jpg 200
/*.svg 200
/*.ico 200
/*.json 200
/*.txt 200
/*.xml 200
/* /index.html 200
