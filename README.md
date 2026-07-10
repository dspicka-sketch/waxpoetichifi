# Wax Poetic Hi-Fi

Conversion-optimized site facelift for [waxpoetichifi.com](https://waxpoetichifi.com) — a curated vinyl listening room in Sebastopol, CA.

## Focus areas

- **Ticket sales** — event cards with urgency, featured events, sticky mobile CTA
- **Events calendar** — list + month calendar views
- **Membership** — tier comparison with clear CTAs to WordPress registration
- **Donations** — impact tiers and donation form
- **Private rentals** — packages, use cases, inquiry form

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Set environment variables for production integrations:

```env
NEXT_PUBLIC_DONATE_URL=https://your-payment-processor.com/donate
```

Membership and ticket CTAs currently link to the existing WordPress site for Paid Member Subscriptions and WooCommerce checkout.

## Assets

- `public/media/` — images from WordPress export
- `exports/` — WordPress XML + `.wpress` backup

## Deploy

```bash
npm run build
npm start
```

Compatible with Vercel, Netlify, or any Node.js host.
