# Cloudflare Deployment Guide

Complete guide for deploying the Business Formation Assistant to Cloudflare Pages with backend integration.

## Quick Start

### 1. Initial Deployment (Frontend Only)

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

Or use automatic GitHub integration (recommended):

1. Push code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → Workers & Pages
3. Click "Create application" → "Pages" → "Connect to Git"
4. Select your repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite
6. Click "Save and Deploy"

---

## Backend Integration Setup

### Step 1: Create D1 Database

```bash
# Create a new D1 database
wrangler d1 create business_formation_db

# Copy the database ID from output and update wrangler.toml
# Example output:
# [[d1_databases]]
# binding = "DB"
# database_name = "business_formation_db"
# database_id = "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
```

Update `wrangler.toml` with your database ID:

```toml
[[d1_databases]]
binding = "DB"
database_name = "business_formation_db"
database_id = "your-actual-database-id-here"  # Replace with your ID
```

### Step 2: Initialize Database Schema

```bash
# Run the schema file to create tables
wrangler d1 execute business_formation_db --file=./schema.sql

# Verify tables were created
wrangler d1 execute business_formation_db --command="SELECT name FROM sqlite_master WHERE type='table'"
```

### Step 3: Create KV Namespace

```bash
# Create KV namespace for caching
wrangler kv:namespace create "BUSINESS_DATA"

# For preview environment
wrangler kv:namespace create "BUSINESS_DATA" --preview

# Copy the namespace IDs and update wrangler.toml
```

Update `wrangler.toml`:

```toml
[[kv_namespaces]]
binding = "BUSINESS_DATA"
id = "your-kv-namespace-id"
preview_id = "your-preview-namespace-id"
```

### Step 4: Create R2 Bucket (Optional - for document storage)

```bash
# Create R2 bucket
wrangler r2 bucket create business-documents

# Update wrangler.toml
```

Update `wrangler.toml`:

```toml
[[r2_buckets]]
binding = "DOCUMENTS"
bucket_name = "business-documents"
```

### Step 5: Configure Cloudflare Pages

After setting up D1, KV, and R2:

1. Go to your Cloudflare Pages project
2. Navigate to Settings → Functions
3. Add the following bindings:
   - **D1 Database**: Select `business_formation_db`
   - **KV Namespace**: Select `BUSINESS_DATA`
   - **R2 Bucket**: Select `business-documents` (if using)

### Step 6: Deploy with Backend

```bash
# Build and deploy
npm run build
npm run deploy

# Or let GitHub Actions handle it automatically
git push origin main
```

---

## Testing Locally

### Test Frontend Only

```bash
npm run dev
```

### Test with Cloudflare Workers

```bash
# Build first
npm run build

# Run with Cloudflare's local development
npm run cf:dev
```

### Test D1 Database Locally

```bash
# Create local database for testing
wrangler d1 execute business_formation_db --local --file=./schema.sql

# Query local database
wrangler d1 execute business_formation_db --local --command="SELECT * FROM businesses"
```

---

## Environment Variables

Create `.dev.vars` for local development (DO NOT commit this file):

```env
# Add any sensitive values here for local development
# These won't be deployed
API_KEY=your-test-api-key
```

For production secrets:

```bash
# Set production secrets
wrangler pages secret put API_KEY
# Enter your secret value when prompted
```

---

## API Endpoints

After deployment, your API will be available at:

```
https://your-project.pages.dev/api/business
```

### Example: Save Business Data

```javascript
// POST /api/business
const response = await fetch('https://your-project.pages.dev/api/business', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    businessName: 'My Awesome Startup',
    entityType: 'LLC',
    state: 'CA',
    industry: 'Technology'
  })
});

const result = await response.json();
console.log(result);
```

### Example: Retrieve Business Data

```javascript
// GET /api/business?name=My%20Awesome%20Startup
const response = await fetch(
  'https://your-project.pages.dev/api/business?name=My%20Awesome%20Startup'
);

const result = await response.json();
console.log(result);
```

---

## Integrating Backend into Frontend

Update your React components to use the API:

```typescript
// Example: components/BusinessWizard.tsx
const saveBusiness = async (data: BusinessData) => {
  try {
    const response = await fetch('/api/business', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    
    const result = await response.json();
    
    if (result.success) {
      console.log('Business saved!', result);
    }
  } catch (error) {
    console.error('Error saving business:', error);
  }
};
```

---

## Database Operations

### Insert Data

```bash
wrangler d1 execute business_formation_db --command="
  INSERT INTO businesses (business_name, entity_type, state) 
  VALUES ('Test Business', 'LLC', 'CA')
"
```

### Query Data

```bash
wrangler d1 execute business_formation_db --command="
  SELECT * FROM businesses
"
```

### Update Data

```bash
wrangler d1 execute business_formation_db --command="
  UPDATE businesses 
  SET entity_type = 'S-Corp' 
  WHERE business_name = 'Test Business'
"
```

### Delete Data

```bash
wrangler d1 execute business_formation_db --command="
  DELETE FROM businesses 
  WHERE id = 1
"
```

---

## KV Operations

### Put Value

```bash
wrangler kv:key put --namespace-id=your-namespace-id "business:test" '{"name":"Test Business"}'
```

### Get Value

```bash
wrangler kv:key get --namespace-id=your-namespace-id "business:test"
```

### List Keys

```bash
wrangler kv:key list --namespace-id=your-namespace-id
```

### Delete Value

```bash
wrangler kv:key delete --namespace-id=your-namespace-id "business:test"
```

---

## Custom Domain

### Add Custom Domain

1. Go to your Pages project → Custom domains
2. Click "Set up a custom domain"
3. Enter your domain (e.g., `business-wizard.com`)
4. Follow DNS instructions:

For root domain:
```
Type: CNAME
Name: @
Content: your-project.pages.dev
```

For subdomain:
```
Type: CNAME
Name: www (or your subdomain)
Content: your-project.pages.dev
```

5. SSL certificate will be automatically provisioned

---

## Monitoring & Analytics

### View Logs

```bash
# View real-time logs
wrangler pages deployment tail

# View specific deployment
wrangler pages deployment tail <deployment-id>
```

### Analytics Dashboard

1. Go to your Pages project in Cloudflare Dashboard
2. Click "Analytics" tab
3. View:
   - Requests per day
   - Bandwidth usage
   - Response status codes
   - Geographic distribution

### Enable Web Analytics

1. Go to Web Analytics in Cloudflare Dashboard
2. Add your site
3. Copy the beacon script
4. Add to `index.html`:

```html
<script defer src='https://static.cloudflareinsights.com/beacon.min.js' 
        data-cf-beacon='{"token": "your-token-here"}'></script>
```

---

## Performance Optimization

### Enable Caching

Add caching headers in your Functions:

```typescript
return new Response(data, {
  headers: {
    'Cache-Control': 'public, max-age=3600',
    'CDN-Cache-Control': 'max-age=86400'
  }
});
```

### Image Optimization

Use Cloudflare Images:

1. Enable Cloudflare Images in dashboard
2. Use Cloudflare's image URLs with transformations
3. Or use R2 + Image Resizing

---

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Function Errors

Check logs:
```bash
wrangler pages deployment tail
```

### D1 Connection Issues

Verify bindings in dashboard:
- Pages project → Settings → Functions → D1 Database Bindings

### KV Not Working

Check namespace ID matches in:
- `wrangler.toml`
- Cloudflare Dashboard → Pages → Settings → Functions → KV Namespace Bindings

---

## Rollback Deployment

1. Go to Pages project → Deployments
2. Find previous successful deployment
3. Click "..." menu → "Rollback to this deployment"

---

## Cost Estimates

Cloudflare Free Tier includes:
- **Pages**: Unlimited requests
- **Workers**: 100,000 requests/day
- **D1**: 5 GB storage, 5 million reads/day
- **KV**: 100,000 reads/day, 1,000 writes/day
- **R2**: 10 GB storage/month

Most small to medium projects stay within free tier limits.

---

## Security Best Practices

1. **Never commit secrets**: Use `.dev.vars` locally and `wrangler pages secret` for production
2. **Validate input**: Always validate and sanitize user input in Functions
3. **Rate limiting**: Implement rate limiting on API endpoints
4. **CORS**: Configure appropriate CORS headers (already set in `_middleware.ts`)
5. **Authentication**: Add authentication before storing user data

---

## Next Steps

1. ✅ Deploy frontend to Cloudflare Pages
2. ⬜ Set up D1 database
3. ⬜ Configure KV namespace
4. ⬜ Implement data persistence in wizard
5. ⬜ Add user authentication (optional)
6. ⬜ Set up custom domain
7. ⬜ Enable analytics
8. ⬜ Add email notifications (using Workers + email service)

---

## Support Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [D1 Database Docs](https://developers.cloudflare.com/d1/)
- [KV Storage Docs](https://developers.cloudflare.com/kv/)
- [R2 Storage Docs](https://developers.cloudflare.com/r2/)
- [Cloudflare Community](https://community.cloudflare.com/)

---

**Happy Deploying! 🚀**
