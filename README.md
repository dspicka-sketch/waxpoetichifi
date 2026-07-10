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

## Share with the team

### 1. Push to GitHub (for developers)

Create a new private repo at [github.com/new](https://github.com/new) named `waxpoetichifi`, then run:

```bash
cd /Users/spickafamily/Projects/waxpoetichifi
git remote add origin git@github.com:YOUR_ORG/waxpoetichifi.git
git push -u origin main
```

Invite teammates via **GitHub → Settings → Collaborators**.

Teammates run locally:

```bash
git clone git@github.com:YOUR_ORG/waxpoetichifi.git
cd waxpoetichifi
npm install
npm run dev
```

> The 371 MB `.wpress` backup stays local in `exports/` (gitignored). Share separately if needed.

### 2. Deploy preview URL (for reviewers)

1. Go to [vercel.com/new](https://vercel.com/new)
2. Import the GitHub repo
3. Click **Deploy** (defaults work for Next.js)
4. Share the `*.vercel.app` URL with the team

Optional: add a custom domain later under **Vercel → Settings → Domains**.

### 3. Quick temporary link

```bash
npx localtunnel --port 3002
```

Shares your local dev server for a few hours without deploying.
