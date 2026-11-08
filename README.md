# Sai Sri Infra Solutions

[![React](https://img.shields.io/badge/React-18.3-61dafb.svg?style=flat&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646cff.svg?style=flat&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8.svg?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-ff0055.svg?style=flat&logo=framer)](https://www.framer.com/motion/)
[![Deployed on Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg?style=flat&logo=vercel)](https://vercel.com/)

Official web application for **Sai Sri Infra Solutions**, architectural aluminium, ACP sheet fixing, structural front elevation glass works, office partitioning, and architectural louvers specialists established in 2017.

> **Motto:** *"Serve All to the BEST"*

---

## 🏗️ Architectural Specialisations

1. **Front Elevation ACP Fixing & Cladding**: Weatherproof exterior facades with premium PVDF-coated aluminium composite panels.
2. **Front Elevation Glass Fixing & Structural Glazing**: Certified toughened glass elevations with high-wind structural silicone jointing.
3. **Office Partitioning & Architectural Louvers**: Modular sound-dampened cabin partitions, cubicles, and aluminium ventilation louvers.

---

## ✨ Features

- **Cinematic Scroll Animations**: Smooth continuous scroll-linked fade-in to fade-out transitions powered by Framer Motion.
- **Interactive Project Estimator**: Live BOQ square-footage calculator for architectural facade and partition works.
- **High-Resolution Project Lightbox**: Full-screen modal viewer with touch gestures and thumbnail navigation.
- **Interactive Service Detail Modals**: Deep-dive specifications, scope checklists, and instant quotation triggers.
- **Business Referral Portal**: Fast-track lead submission with direct WhatsApp and hotline integration.
- **Full Responsive Design**: Pixel-perfect layout calibrated across mobile, tablet, laptop, and 4K desktop screens.
- **SEO & Social Share Ready**: Complete OpenGraph, Twitter Cards, Schema.org `GeneralContractor` structured data, sitemap, and robots.txt.
- **Zero-Flicker SPA Routing**: Configured with Vercel single-page rewrites and caching headers.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone https://github.com/mani8979/srisaiinfra.git
cd srisaiinfra

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Create production build
npm run build

# 5. Preview production build locally
npm run preview
```

---

## ⚡ Deployment on Vercel

This repository is pre-configured for one-click deployment to **[Vercel](https://vercel.com)**:

1. Import this repository `https://github.com/mani8979/srisaiinfra` in the Vercel dashboard.
2. Vercel automatically detects the **Vite** preset:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. `vercel.json` includes SPA routing rewrites and immutable HTTP asset caching headers.
4. Click **Deploy**!

---

## 📁 Project Structure

```
├── public/                 # Static assets, WebP project images, robots.txt, sitemap.xml
│   ├── logo/               # Vector & WebP company badges
│   └── projects/           # High-resolution architectural photography
├── src/
│   ├── assets/             # Internal bundled assets
│   ├── components/
│   │   ├── animation/      # ScrollFadeSection, ScrollReveal, StaggerContainer
│   │   ├── BackToTop.jsx   # Tactile back-to-top button
│   │   ├── Footer.jsx      # Multi-column semantic footer
│   │   ├── Navbar.jsx      # Sticky navigation with mobile drawer
│   │   ├── ProjectEstimator.jsx
│   │   ├── ProjectLightbox.jsx
│   │   ├── QuoteModal.jsx
│   │   ├── ServiceModal.jsx
│   │   └── WhatsAppFloat.jsx
│   ├── data/
│   │   └── companyData.js  # Project catalog, service specs, company metrics
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ClientsPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   ├── ReferralsPage.jsx
│   │   └── ServicesPage.jsx
│   ├── App.jsx             # React Router DOM v7 configuration & meta sync
│   ├── index.css           # Tailwind base styles, typography & micro-interactions
│   └── main.jsx
├── index.html              # HTML5 entry with Schema.org JSON-LD
├── package.json
├── tailwind.config.js
├── vercel.json             # Vercel deployment & caching configuration
└── vite.config.js
```

---

## 📞 Contact & Inquiries

- **Phone**: +91 82972 01888
- **WhatsApp**: [Chat with Sai Sri Infra](https://wa.me/918297201888)
- **Coverage**: Telangana, Andhra Pradesh & South India
- **Year of Establishment**: 2017
