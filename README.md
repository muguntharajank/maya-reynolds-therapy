# Dr. Maya Reynolds, PsyD – Therapist Website

Front-end-only marketing site built with Next.js (App Router), TypeScript, Tailwind CSS v4 and Lucide React. No backend.

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build check
```

## Structure
- `src/app` – layout (fonts, SEO metadata), page, global styles/theme
- `src/components` – one file per section
- `src/data/siteData.ts` – nav, services, FAQs, image paths and alt text
- `public/images` – therapist portrait and office photos

## Deploy (free)
Push to GitHub, then import the repo on https://vercel.com/new (Hobby plan). Framework preset: Next.js, no settings to change.

## Contact form backend
`src/app/api/contact/route.ts` validates the form (name, email, message), blocks bots (hidden honeypot field + rate limit)
and emails the message through Resend. Without the three environment variables it returns a friendly "not set up yet" error.

1. Create a free account at resend.com and create an API key.
2. Copy `.env.example` to `.env.local` and fill it in (never commit `.env.local`).
3. On Vercel: Project -> Settings -> Environment Variables -> add `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, then redeploy.
Until you verify your own domain in Resend, you can only send to the email address you signed up with, from `onboarding@resend.dev`.
