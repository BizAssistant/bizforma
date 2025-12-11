# Business Formation Assistant

A comprehensive, interactive wizard that guides users through every step of starting a business - from initial concept development to final compliance setup.

## Features

- **11-Step Wizard**: Complete business formation process
- **Glassmorphism UI**: Modern, premium design aesthetic
- **Progress Tracking**: Visual progress through all stages
- **Data Collection**: Structured form inputs for business information
- **Educational Content**: Helpful guidance at each step
- **Calendar Export**: Downloadable compliance calendar
- **Responsive Design**: Works on desktop and mobile

## Stages Covered

1. Concept Development & Refinement
2. Business Name Selection
3. Entity Type Selection
4. Registration Process
5. EIN & Tax Setup
6. State & Department of Revenue Compliance
7. Accounting Software Selection
8. Taxation Overview
9. Financing & Funding Options
10. Marketing Strategy
11. Web Design & Domain Management
12. Compliance Calendar

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + Custom Components
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Cloudflare account (for deployment)

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploying to Cloudflare Pages

### Option 1: Automatic Deployment (Recommended)

1. **Connect to GitHub**:
   - Push your code to GitHub
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
   - Navigate to Workers & Pages → Create application → Pages
   - Connect your GitHub repository

2. **Configure Build Settings**:
   ```
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist
   ```

3. **Deploy**: Cloudflare will automatically build and deploy your site

### Option 2: Manual Deployment via CLI

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run deploy
```

### Option 3: Direct Deployment

```bash
# Build the project
npm run build

# Deploy using Wrangler
wrangler pages deploy dist
```

## Environment Variables

For future backend integration, create a `.env` file:

```env
# Cloudflare configuration will be added here
# VITE_API_URL=your-worker-url
# VITE_D1_DATABASE_ID=your-database-id
```

## Future Cloudflare Integration

This project is structured to easily integrate with Cloudflare's backend services:

### Cloudflare Workers
Add serverless functions for:
- Form validation and processing
- Email notifications
- API integrations (IRS, state registries)
- Document generation

### Cloudflare D1 (SQLite Database)
Store user data:
- Business information
- Progress tracking
- Form submissions
- Compliance schedules

### Cloudflare KV (Key-Value Store)
Cache and store:
- Session data
- User preferences
- Quick lookups

### Cloudflare R2 (Object Storage)
Store documents:
- Generated PDFs
- Uploaded documents
- Templates

### Example Worker Setup

Create `/functions/api/[[route]].ts` for API routes:

```typescript
export async function onRequest(context) {
  const { request, env } = context;
  
  // Access D1 database
  const db = env.DB;
  
  // Access KV namespace
  const cache = env.BUSINESS_DATA;
  
  // Your API logic here
  return new Response('Hello from Cloudflare Worker!');
}
```

## Project Structure

```
/
├── App.tsx                          # Main application component
├── components/
│   ├── BusinessWizard.tsx          # Main wizard controller
│   ├── GlassComponents.tsx         # Glassmorphism UI components
│   ├── ProgressStepper.tsx         # Progress tracking component
│   ├── steps/                      # Individual wizard steps
│   │   ├── ConceptStep.tsx
│   │   ├── NameSelectionStep.tsx
│   │   ├── EntityTypeStep.tsx
│   │   ├── RegistrationStep.tsx
│   │   ├── EINTaxStep.tsx
│   │   ├── ComplianceStep.tsx
│   │   ├── AccountingStep.tsx
│   │   ├── FinancingStep.tsx
│   │   ├── MarketingStep.tsx
│   │   ├── WebDesignStep.tsx
│   │   └── CalendarStep.tsx
│   └── ui/                         # Reusable UI components
├── styles/
│   └── globals.css                 # Global styles & Tailwind
├── src/
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML template
├── vite.config.ts                  # Vite configuration
├── wrangler.toml                   # Cloudflare configuration
└── package.json                    # Dependencies & scripts

```

## Development with Cloudflare

Test with Cloudflare's local development environment:

```bash
# Start local Cloudflare Pages development
npm run cf:dev
```

## Custom Domain

After deploying to Cloudflare Pages:

1. Go to your Pages project → Custom domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL certificate is automatically provisioned

## Performance Optimizations

- Code splitting with manual chunks
- Asset optimization through Vite
- Cloudflare's global CDN
- Automatic image optimization
- Brotli compression

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers

## Contributing

This is a personal project, but suggestions and improvements are welcome!

## License

MIT License - feel free to use this for your own projects

## Support

For issues or questions:
- Check Cloudflare Pages documentation
- Review Vite documentation
- Open an issue in the repository

---

**Built with ❤️ using React, Tailwind CSS, and Cloudflare Pages**
