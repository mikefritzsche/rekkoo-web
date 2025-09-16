# CLAUDE.md - Web Application

This file provides guidance to Claude Code (claude.ai/code) when working with the Rekkoo web application.

## 🔒 SECURITY NOTICE - CRITICAL

**NEVER include sensitive information in files that will be committed to git:**
- API keys or secrets
- Database credentials
- Authentication tokens
- Private API endpoints
- User passwords or personal data
- Production server details

**Always use environment variables:**
```javascript
// ✅ CORRECT
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// ❌ WRONG - Never hardcode
const apiUrl = 'https://api.rekkoo.com/secret-key-123';
```

## Project Overview

This is the web version of the Rekkoo application, providing:
- Progressive Web App (PWA) functionality
- Responsive web interface
- Cross-platform compatibility
- Service worker for offline support

## Technology Stack

- **Framework**: Next.js / React (verify based on package.json)
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: Zustand / React Context
- **API Client**: Fetch / Axios
- **Build Tool**: Webpack / Vite

## Environment Configuration

### Required Environment Variables
```env
# Public variables (safe for client)
NEXT_PUBLIC_API_URL=
NEXT_PUBLIC_APP_URL=
NEXT_PUBLIC_GA_ID=

# Server-only variables (never expose)
DATABASE_URL=
JWT_SECRET=
STRIPE_SECRET_KEY=
```

### Development Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
web/
├── public/          # Static assets
├── src/            # Source code
│   ├── components/ # React components
│   ├── pages/      # Page components
│   ├── hooks/      # Custom hooks
│   ├── utils/      # Utility functions
│   ├── styles/     # Global styles
│   └── services/   # API services
├── .env.example    # Environment template
└── package.json    # Dependencies
```

## Key Features

### PWA Configuration
- Service worker for offline functionality
- Web app manifest
- Push notifications
- Background sync

### Authentication
- JWT-based authentication
- OAuth providers integration
- Session management
- Secure token storage

### Performance Optimization
- Code splitting
- Lazy loading
- Image optimization
- Bundle size optimization

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow ESLint configuration
- Implement proper error boundaries
- Use semantic HTML

### Component Guidelines
```jsx
// Functional components with hooks
const Component = ({ prop }) => {
  const [state, setState] = useState();

  useEffect(() => {
    // Side effects
  }, []);

  return <div>{/* JSX */}</div>;
};
```

### API Integration
```javascript
// Use environment variables for API endpoints
const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/endpoint`, {
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  }
});
```

## Testing

```bash
# Run tests
npm test

# Run with coverage
npm run test:coverage

# E2E tests
npm run test:e2e
```

## Build & Deployment

### Production Build
```bash
# Build optimized version
npm run build

# Analyze bundle size
npm run analyze

# Run production locally
npm start
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Build passes without errors
- [ ] Tests passing
- [ ] Bundle size optimized
- [ ] SEO meta tags updated
- [ ] Security headers configured

## Common Issues & Solutions

### Build Failures
- Check Node version compatibility
- Clear node_modules and reinstall
- Verify environment variables

### Performance Issues
- Analyze bundle with webpack-bundle-analyzer
- Implement code splitting
- Optimize images and assets

### CORS Errors
- Verify API endpoint configuration
- Check allowed origins in backend
- Use proper proxy configuration

## Security Best Practices

1. **Never commit .env files**
2. **Sanitize user inputs**
3. **Use HTTPS everywhere**
4. **Implement CSP headers**
5. **Regular dependency updates**
6. **Secure cookie configuration**

## Accessibility

- WCAG 2.1 AA compliance
- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility

## Related Documentation

- Main mobile app: `/app/CLAUDE.md`
- Backend server: `/server/CLAUDE.md`
- AI service: `/ai-server/CLAUDE.md`
- Admin panel: `/admin/CLAUDE.md`