# Petram Resort — San Patrik Landing Page

**Live URL:** https://invest.sanpatrik.co  
**GitHub:** https://github.com/creativecube-eu/san-patrik-petram  
**Vercel:** Auto-deploys on every push to main  

## Local development
```bash
npm install
cp .env.local.example .env.local
# Fill in values in .env.local
npm run dev
# → http://localhost:3000
```

## Deployment
```bash
git add .
git commit -m "your message"
git push
# → Live on Vercel in ~90 seconds. No manual steps.
```

## To update content only
Edit `/lib/content.ts` → commit → push → done

## Template
See `TEMPLATE-GUIDE.md` to create new San Patrik projects.

## GitHub Secrets required
Go to: GitHub repo → Settings → Secrets and variables → Actions

| Secret | Where to find it |
|---|---|
| `VERCEL_TOKEN` | vercel.com → Settings → Tokens → Create |
| `VERCEL_ORG_ID` | vercel.com → Settings → General → Team ID |
| `VERCEL_PROJECT_ID` | Vercel project → Settings → General → Project ID |
