# Contributing to Business Formation Assistant

Thank you for your interest in contributing! This guide will help you get started with development.

## Development Setup

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Cloudflare account (for backend features)

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd business-formation-assistant
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/
├── App.tsx                     # Main application entry
├── components/
│   ├── BusinessWizard.tsx      # Main wizard orchestrator
│   ├── GlassComponents.tsx     # Glassmorphism UI components
│   ├── ProgressStepper.tsx     # Progress indicator
│   └── steps/                  # Individual wizard steps
│       ├── ConceptStep.tsx
│       ├── NameSelectionStep.tsx
│       ├── EntityTypeStep.tsx
│       ├── RegistrationStep.tsx
│       ├── EINTaxStep.tsx
│       ├── ComplianceStep.tsx
│       ├── AccountingStep.tsx
│       ├── FinancingStep.tsx
│       ├── MarketingStep.tsx
│       ├── WebDesignStep.tsx
│       └── CalendarStep.tsx
├── utils/
│   └── api.ts                  # API utilities
├── functions/                  # Cloudflare Workers Functions
│   ├── _middleware.ts          # Global middleware
│   └── api/
│       └── business.ts         # Business data API
├── styles/
│   └── globals.css             # Global styles
└── schema.sql                  # Database schema
```

## Development Guidelines

### Code Style

- Use TypeScript for all new files
- Follow existing code formatting
- Use meaningful variable and function names
- Add comments for complex logic

### Component Guidelines

1. **Create reusable components**
   - Keep components focused and single-purpose
   - Use props for customization
   - Export types/interfaces

2. **State management**
   - Use React hooks (useState, useEffect)
   - Keep state as local as possible
   - Lift state up when needed for sharing

3. **Styling**
   - Use Tailwind CSS classes
   - Follow the glassmorphism design system
   - Maintain consistent spacing and colors
   - Use the color scheme: cyan, purple, slate backgrounds with red-orange accents

### Adding New Steps

To add a new step to the wizard:

1. **Create step component**
   ```bash
   # Create in components/steps/
   touch components/steps/YourNewStep.tsx
   ```

2. **Implement step component**
   ```typescript
   import { GlassCard } from '../GlassComponents';
   
   interface YourNewStepProps {
     onNext: (data: any) => void;
     onPrev: () => void;
     initialData?: any;
   }
   
   export function YourNewStep({ onNext, onPrev, initialData }: YourNewStepProps) {
     // Your implementation
     return (
       <GlassCard>
         {/* Your step content */}
       </GlassCard>
     );
   }
   ```

3. **Add to BusinessWizard.tsx**
   ```typescript
   import { YourNewStep } from './steps/YourNewStep';
   
   // Add to steps array
   const steps = [
     // ... existing steps
     { id: 12, title: 'Your New Step', component: YourNewStep }
   ];
   ```

### Working with Cloudflare Backend

#### Local Development

1. **Set up Cloudflare resources**
   ```bash
   # On macOS/Linux
   chmod +x scripts/setup-cloudflare.sh
   ./scripts/setup-cloudflare.sh
   
   # On Windows
   scripts\setup-cloudflare.bat
   ```

2. **Test locally with Wrangler**
   ```bash
   npm run build
   npm run cf:dev
   ```

#### Creating API Endpoints

Create new endpoints in `/functions/api/`:

```typescript
// functions/api/your-endpoint.ts
export async function onRequestGet(context) {
  const { request, env } = context;
  // Your logic here
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
```

#### Database Queries

Use D1 for database operations:

```typescript
// In your function
const result = await env.DB.prepare(
  'SELECT * FROM businesses WHERE id = ?'
).bind(id).first();
```

### Testing

#### Manual Testing

1. Test each wizard step individually
2. Test navigation (next/previous)
3. Test form validation
4. Test data persistence
5. Test responsiveness (mobile/desktop)

#### Testing Checklist

- [ ] All form fields validate correctly
- [ ] Data persists between steps
- [ ] Calendar export works
- [ ] UI is responsive
- [ ] No console errors
- [ ] Glassmorphism effects render properly
- [ ] API endpoints return expected data

## Submitting Changes

### Commit Messages

Use clear, descriptive commit messages:

```
feat: Add financing options to wizard
fix: Correct calendar date formatting
docs: Update deployment instructions
style: Improve glassmorphism card shadows
refactor: Simplify form validation logic
```

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Test thoroughly

3. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: Add your feature description"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create Pull Request**
   - Provide a clear description
   - Reference any related issues
   - Include screenshots for UI changes

### PR Checklist

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] Documentation is updated
- [ ] No console warnings or errors
- [ ] Responsive design maintained
- [ ] Works in Chrome, Firefox, Safari

## Design System

### Colors

- **Background**: Dark gradients (cyan, purple, slate)
- **Accents**: Red-orange (#f97316, #ea580c)
- **Glass Cards**: White with transparency and blur
- **Text**: White for headings, gray for body

### Typography

- Use default typography from `globals.css`
- Don't add font-size/weight classes unless necessary
- Maintain hierarchy (h1 → h2 → h3 → p)

### Components

Use components from `GlassComponents.tsx`:
- `GlassCard`: Main container
- `GlassButton`: Buttons
- `GlassInput`: Input fields
- `GlassSelect`: Select dropdowns
- `GlassTextarea`: Text areas

## Common Tasks

### Add a new UI component

1. Create in `/components/ui/` or add to `GlassComponents.tsx`
2. Export from the component file
3. Import where needed

### Update database schema

1. Modify `schema.sql`
2. Create migration (if needed)
3. Test locally:
   ```bash
   wrangler d1 execute business_formation_db --local --file=./schema.sql
   ```

### Add environment variable

1. Add to `.env.example`
2. Document in README.md
3. Use with `import.meta.env.VITE_YOUR_VAR`

## Getting Help

- Check existing issues
- Review documentation
- Ask questions in discussions

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing! 🎉**
