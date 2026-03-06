# NextGenIoT - Crop Health AI

## Overview
A full-stack web application for AI-powered crop disease detection and management. Farmers can upload photos of affected crop leaves to get instant diagnostics, treatment recommendations, and locate the nearest agricultural supplier.

## Architecture

### Stack
- **Frontend**: React 18 + TypeScript + Vite + Tailwind CSS v4
- **Backend**: Node.js + Express + TypeScript (tsx for dev)
- **Database**: PostgreSQL with Drizzle ORM
- **ML Service**: Python Flask (optional, for crop recommendations)
- **UI Components**: Shadcn/ui + Radix UI

### Project Structure
```
NextGenIoT/
├── client/           # React frontend (Vite root)
│   ├── src/
│   │   ├── pages/    # Home, History, Recommendations, NotFound
│   │   ├── components/ # Layout, ImageUploader, ScanResult, UI
│   │   ├── hooks/    # use-scans, use-toast, use-mobile
│   │   └── lib/      # queryClient, utils
│   └── index.html
├── server/           # Express backend
│   ├── index.ts      # Entry point, serves on port 5000
│   ├── routes.ts     # API routes
│   ├── db.ts         # Drizzle + PostgreSQL
│   ├── vite.ts       # Vite dev middleware
│   ├── static.ts     # Production static serving
│   └── ml/app.py     # Flask ML service (optional)
├── shared/           # Shared types
│   ├── schema.ts     # Drizzle schema + Zod types
│   └── routes.ts     # API route definitions
├── package.json
├── vite.config.ts
├── tsconfig.json
├── postcss.config.js # autoprefixer only (no tailwindcss - handled by @tailwindcss/vite)
└── drizzle.config.ts
```

## Key Features
1. **Crop Disease Detection**: Upload leaf photos → AI identifies disease + treatment + supplier
2. **Scan History**: PostgreSQL-backed history of all scans
3. **Smart Crop Recommendation**: Form-based NPK/pH soil analysis → crop suggestions (integrates with ML service if available, falls back gracefully)
4. **Multi-language output**: English, Hindi (हिन्दी), Telugu (తెలుగు)
5. **Location awareness**: GPS coordinates for supplier proximity

## API Endpoints
- `GET /api/scans` - List all scans
- `GET /api/scans/:id` - Get single scan
- `POST /api/scans` - Create new scan (image analysis)
- `POST /api/recommend` - Get crop recommendations

## Development Setup
- Single workflow: `cd NextGenIoT && npm run dev` → runs Express + Vite on port 5000
- Express serves API routes + Vite middleware for React app
- PostgreSQL via `DATABASE_URL` environment variable

## Important Notes
- Tailwind CSS v4 via `@tailwindcss/vite` plugin (NOT PostCSS)
- postcss.config.js only has `autoprefixer` (Tailwind v4 doesn't use PostCSS)
- CSS uses `@import "tailwindcss"` and `@theme inline` for v4 syntax
- Custom utilities defined via `@utility` in index.css
- ML service (Flask) at port 5001 is optional - recommendation endpoint has fallback data
- Vite HMR uses `hmr.clientPort: 443` for Replit proxy compatibility
