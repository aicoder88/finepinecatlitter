# CLAUDE.md - Fine Pine Cat Litter

## Project Overview

Fine Pine Cat Litter is a satellite site for Purrify (purrify.ca), featuring a rustic, craftsman-themed marketing site promoting pine-based cat litter alternatives with storytelling and narrative content.

- **URL**: finepinecatlitter.com
- **Purpose**: SEO satellite site driving traffic to Purrify products
- **Personality**: The Cabin Craftsman (rustic, authentic, narrative-driven)

## Tech Stack

- **Framework:** Next.js 15 with App Router (deployed on Vercel)
- **React:** 19.2.3
- **TypeScript:** 5.x with strict mode
- **Styling:** CSS Modules
- **Fonts:** Playfair Display (display), Lora (body) - serif-focused

## Commands

```bash
pnpm install     # Install dependencies
pnpm dev         # Start development server (localhost:3000)
pnpm build       # Production build
pnpm start       # Start production server
pnpm lint        # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── [pages]/            # Content pages
├── components/
│   ├── layout/             # Header, Footer
│   └── ui/                 # Reusable UI components
└── styles/                 # CSS Modules and global styles
public/
├── images/                 # Static images
└── fonts/                  # Self-hosted fonts (if any)
```

## Design Philosophy

### Visual Style
- Warm, rustic aesthetic with wood textures
- Earthy color palette (pine green, cedar brown, warm cream)
- Generous whitespace and breathing room
- Serif typography for storytelling feel

### Content Approach
- Narrative-driven, story-focused content
- Craft and tradition emphasis
- Natural, honest tone (folksy but not corny)
- Product recommendations as stories, not spec sheets

## Deployment

### Vercel Deployment

Next.js 15 is optimized for Vercel with zero-configuration deployment:

1. **Push to GitHub:** Changes trigger automatic deployment
2. **Build command:** `pnpm build` (auto-detected)
3. **Output:** Optimized static and serverless functions
4. **Framework preset:** Next.js (auto-detected)

### Deployment Architecture

- **Static pages:** Pre-rendered at build time, served from Vercel's Edge Network
- **API routes:** Deployed as serverless functions (if any)
- **Image optimization:** Automatic via Next.js Image component
- **Fonts:** Self-hosted for performance and privacy

### Configuration Files

- `next.config.mjs` - Next.js configuration
- `.gitignore` - Excludes `.vercel/` build artifacts

Site URL: https://finepinecatlitter.com
