# Cyprian Ocharo - Developer Portfolio

A modern, responsive portfolio web application built with **Next.js 15 (App Router)**, **React 19**, **Tailwind CSS**, **Framer Motion**, and **Radix UI**.

---

## 🚀 How to Run the Project

### Prerequisites
- **Node.js**: v18.18+ (tested on Node v26)
- **Package Manager**: `npm` (v9+) or `yarn` / `pnpm`

### 1. Install Dependencies
```bash
npm install
```

### 2. Run in Development Mode
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
To generate an optimized static / SSR production build:
```bash
npm run build
```

### 4. Start Production Server
To preview or serve the built production application locally:
```bash
npm start
```

### 5. Linting
To check code quality and linting standards:
```bash
npm run lint
```

---

## 🛡️ Security Hardening Implemented

1. **HTTP Security Headers (`next.config.mjs`)**:
   - `X-Frame-Options: SAMEORIGIN` — Clickjacking protection.
   - `X-Content-Type-Options: nosniff` — Prevents MIME type sniffing.
   - `Referrer-Policy: strict-origin-when-cross-origin` — Protects referrer leakage.
   - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` — Enforces HTTPS.
   - `Permissions-Policy` — Restricts access to sensitive browser APIs (camera, mic, geolocation).
   - `poweredByHeader: false` — Hides `x-powered-by: Next.js` header to prevent server fingerprinting.
   - `reactStrictMode: true` — Enforces strict React runtime security and lifecycle checks.
   - `outputFileTracingRoot` — Restricts Next.js tracing boundary to the workspace root.

2. **External Link Hardening (Reverse Tabnabbing Prevention)**:
   - Added `rel="noopener noreferrer"` and `target="_blank"` across external social links (`components/Socials.jsx`) and project links (`app/work/page.jsx`) to eliminate `window.opener` security risks.

3. **Form Semantics & Submission Safety**:
   - Corrected input attributes in `app/contact/page.jsx` (`type="text"`, `type="tel"`) and added submission event handling (`e.preventDefault()`) to avoid accidental unhandled GET form submissions.

4. **Dependency Vulnerability Remediation**:
   - Patched critical prototype pollution in `swiper`, path traversal issues in `tar`, and ReDoS in `picomatch` via `npm audit fix`.

5. **Build & Tooling Configuration Cleanups**:
   - Removed conflicting `postcss.config.mjs` (avoiding Tailwind 3 / Tailwind 4 plugin collisions with `postcss.config.js`).
   - Cleaned improper nested configuration in `tailwind.config.js`.

---

## 📂 Project Architecture

```
├── app/
│   ├── api/
│   │   └── contact/route.js # Contact form API submission handler
│   ├── contact/page.jsx   # Interactive contact section, form state & channels
│   ├── resume/page.jsx    # Experience, education, skills & about me
│   ├── services/page.jsx  # Services showcase
│   ├── work/page.jsx      # Featured projects (SkolarTrak, DreamRoots, SafariTrak)
│   ├── robots.js          # Dynamic Next.js robots metadata route
│   ├── sitemap.js         # Dynamic Next.js sitemap generator
│   ├── globals.css        # Tailwind styling & animations
│   ├── layout.jsx         # Root layout with fonts, JSON-LD Schema & AI metadata
│   └── page.jsx           # Hero page with dynamic stats & introduction
├── components/
│   ├── ui/                # Accessible Radix UI primitives
│   ├── Header.jsx         # Global top navigation
│   ├── MobileNav.jsx      # Mobile navigation drawer
│   ├── Nav.jsx            # Desktop navigation
│   ├── PageTranstion.jsx  # Route change animation wrapper
│   ├── Photo.jsx          # Profile hero portrait with SVG animation
│   ├── Socials.jsx        # External social links
│   ├── Stairs.jsx         # Staggered staircase visual transition
│   ├── StairTransition.jsx# Root transition wrapper
│   └── Stats.jsx          # Metric counters (CountUp)
├── lib/
│   ├── resume-data.js     # Data layer for experience, education, skills
│   └── utils.js           # Class name merging utility (clsx + tailwind-merge)
├── public/
│   ├── google08c267d0f3ef212c.html # Google Search Console HTML verification file
│   ├── llms.txt           # Structured AI/LLM system overview & knowledge graph
│   ├── llms-full.txt      # Comprehensive technical knowledge graph for AI agents
│   ├── robots.txt         # Crawler policy for search engines & AI bots
│   ├── sitemap.xml        # Static sitemap fallback
│   └── assets/            # Project thumbnails, icons, and media
├── next.config.mjs        # Next.js config & security headers
├── tailwind.config.js     # Tailwind CSS theme configuration
└── package.json           # Project manifest & dependencies
```