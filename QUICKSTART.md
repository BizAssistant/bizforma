# Quick Start Guide

Get your Business Formation Assistant deployed to Cloudflare Pages in minutes!

## 🚀 Fast Track Deployment (No Backend)

If you just want to deploy the frontend without backend features:

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Deploy to Cloudflare Pages (one-time setup)
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

That's it! Your app is live. 🎉

---

## 🔧 Full Setup (With Backend)

For the complete experience with data persistence and backend features:

### Step 1: Initial Deployment

```bash
# Install dependencies
npm install

# Build the project
npm run build
```

### Step 2: Set Up Cloudflare Backend

**On Mac/Linux:**
```bash
chmod +x scripts/setup-cloudflare.sh
./scripts/setup-cloudflare.sh
```

**On Windows:**
```bash
scripts\setup-cloudflare.bat
```

This script will:
- Create a D1 database
- Set up KV namespace
- Initialize the database schema
- Configure wrangler.toml

### Step 3: Deploy

```bash
npm run deploy
```

Your app with full backend is now live! 🚀

---

## 📋 Alternative: GitHub Auto-Deploy

The easiest way to deploy and manage updates:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Click Workers & Pages → Create → Pages → Connect to Git
   - Select your repository
   - Build settings:
     - **Build command**: `npm run build`
     - **Build output**: `dist`
     - **Framework preset**: Vite

3. **Deploy**
   - Cloudflare will automatically build and deploy
   - Every push to `main` triggers a new deployment
   - Pull requests get preview deployments

---

## 🧪 Local Development

```bash
# Start development server
npm run dev

# Open browser
# http://localhost:3000
```

### Test with Cloudflare locally

```bash
# Build first
npm run build

# Run with Cloudflare Pages dev server
npm run cf:dev
```

---

## 📊 Set Up Backend Features (Optional)

After deploying, enable backend features:

### 1. Configure Bindings in Cloudflare Dashboard

Go to your Pages project → Settings → Functions

Add bindings for:
- **D1 Database**: `business_formation_db`
- **KV Namespace**: `BUSINESS_DATA`

### 2. Test Backend

Your API will be available at:
```
https://your-project.pages.dev/api/business
```

Test it:
```bash
curl https://your-project.pages.dev/api/business
```

---

## 🌐 Add Custom Domain

1. Go to your Pages project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain
4. Update DNS (CNAME to `your-project.pages.dev`)
5. Wait for SSL certificate (automatic)

---

## 🔑 Environment Variables

If you need environment variables:

```bash
# For local development
cp .env.example .env
# Edit .env with your values

# For production (via Wrangler)
wrangler pages secret put YOUR_SECRET_NAME
```

---

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run deploy` | Deploy to Cloudflare Pages |
| `npm run cf:dev` | Test with Cloudflare locally |
| `npm run db:init` | Initialize D1 database |
| `npm run logs` | View deployment logs |

---

## 🆘 Troubleshooting

### Build fails
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Wrangler not found
```bash
npm install -g wrangler
```

### Database errors
Make sure you've:
1. Created the D1 database
2. Updated `wrangler.toml` with the correct database ID
3. Run the schema: `npm run db:init`

### API not working
Check bindings in Cloudflare Dashboard:
- Pages project → Settings → Functions
- Ensure D1 and KV bindings are configured

---

## 📚 Next Steps

- [ ] Deploy to Cloudflare Pages
- [ ] Set up custom domain
- [ ] Configure backend (D1, KV)
- [ ] Enable analytics
- [ ] Add environment variables
- [ ] Set up CI/CD with GitHub

For detailed documentation, see:
- [README.md](./README.md) - Project overview
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Development guide

---

## 💡 Pro Tips

1. **Free SSL**: Cloudflare automatically provisions SSL certificates
2. **Global CDN**: Your app is served from 275+ cities worldwide
3. **Automatic scaling**: Handles any traffic volume
4. **Preview deployments**: Every PR gets a unique preview URL
5. **Rollback**: One-click rollback to any previous deployment

---

## 🎯 Common Use Cases

### Just want to deploy?
```bash
npm install && npm run build
wrangler pages deploy dist
```

### Want automatic deployments?
Push to GitHub and connect to Cloudflare Pages

### Need backend features?
Run the setup script: `./scripts/setup-cloudflare.sh`

### Want to test locally?
```bash
npm run dev
```

---

**Ready to launch! 🚀**

For help, check [DEPLOYMENT.md](./DEPLOYMENT.md) or create an issue.
