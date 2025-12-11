# Cloudflare Pages Headers Configuration
# https://developers.cloudflare.com/pages/platform/headers/

# Security headers for all pages
/*
  X-Frame-Options: SAMEORIGIN
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()

# Cache static assets for 1 year
/assets/*
  Cache-Control: public, max-age=31536000, immutable

# Cache images
/*.png
  Cache-Control: public, max-age=31536000, immutable
/*.jpg
  Cache-Control: public, max-age=31536000, immutable
/*.jpeg
  Cache-Control: public, max-age=31536000, immutable
/*.svg
  Cache-Control: public, max-age=31536000, immutable
/*.webp
  Cache-Control: public, max-age=31536000, immutable
/*.gif
  Cache-Control: public, max-age=31536000, immutable

# Cache fonts
/*.woff
  Cache-Control: public, max-age=31536000, immutable
/*.woff2
  Cache-Control: public, max-age=31536000, immutable
/*.ttf
  Cache-Control: public, max-age=31536000, immutable
/*.otf
  Cache-Control: public, max-age=31536000, immutable

# Don't cache HTML files
/*.html
  Cache-Control: public, max-age=0, must-revalidate

# API responses - no caching
/api/*
  Cache-Control: no-store, no-cache, must-revalidate
  Content-Type: application/json
