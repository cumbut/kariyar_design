# Kariyar website (Next.js)

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000.

## Deploy
Push to GitHub and import the repo on vercel.com (zero config), or run `npm run build && npm start` on any Node host.

## Structure
- `app/layout.jsx` — HTML shell, metadata, global CSS
- `app/page.jsx` — loads the site client-side
- `components/KariyarApp.jsx` — nav, language switch, home / #contact routing
- `components/Ks*.jsx` — page sections
- `public/story/` — hero story video (static embed, loaded in an iframe)
- `styles/` — site styles and design tokens
- `lib/vendor/ds_bundle.js` — design-system components (GradientButton etc.)
