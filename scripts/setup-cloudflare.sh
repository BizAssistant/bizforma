#!/bin/bash

# Cloudflare Setup Script
# This script helps you set up Cloudflare backend services

set -e

echo "🚀 Business Formation Assistant - Cloudflare Setup"
echo "=================================================="
echo ""

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "❌ Wrangler CLI not found!"
    echo "📦 Installing Wrangler..."
    npm install -g wrangler
fi

echo "✅ Wrangler CLI installed"
echo ""

# Login to Cloudflare
echo "🔐 Logging in to Cloudflare..."
wrangler login

echo ""
echo "📊 Creating D1 Database..."
echo "Running: wrangler d1 create business_formation_db"
wrangler d1 create business_formation_db

echo ""
echo "⚠️  IMPORTANT: Copy the database configuration above and update wrangler.toml"
echo "   Look for [[d1_databases]] section and replace the database_id"
echo ""
read -p "Press Enter after updating wrangler.toml..."

echo ""
echo "📋 Initializing database schema..."
wrangler d1 execute business_formation_db --file=./schema.sql

echo ""
echo "🗄️  Creating KV Namespace..."
echo "Running: wrangler kv:namespace create BUSINESS_DATA"
wrangler kv:namespace create "BUSINESS_DATA"

echo ""
echo "🗄️  Creating KV Namespace (Preview)..."
wrangler kv:namespace create "BUSINESS_DATA" --preview

echo ""
echo "⚠️  IMPORTANT: Copy the KV namespace IDs above and update wrangler.toml"
echo "   Look for [[kv_namespaces]] section and replace the id and preview_id"
echo ""
read -p "Press Enter after updating wrangler.toml..."

echo ""
read -p "Do you want to create an R2 bucket for document storage? (y/n) " -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "📦 Creating R2 bucket..."
    wrangler r2 bucket create business-documents
    echo ""
    echo "⚠️  IMPORTANT: Uncomment the R2 bucket section in wrangler.toml"
fi

echo ""
echo "✅ Cloudflare setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Review and verify wrangler.toml has all the correct IDs"
echo "   2. Build your project: npm run build"
echo "   3. Deploy to Cloudflare Pages: npm run deploy"
echo "   4. Or push to GitHub for automatic deployment"
echo ""
echo "📚 For more details, see DEPLOYMENT.md"
echo ""
