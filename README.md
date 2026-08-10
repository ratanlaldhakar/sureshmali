# Suresh Malli — Official Editorial PR & Sports Portfolio

An authentic, executive, high-authority Editorial PR Portfolio & Press Kit website for **Suresh Malli** — National-Level Yogasana Athlete, M.A. Yoga, B.P.Ed., and Founder of Amrit Yoga Center (Bhilwara, Rajasthan).

- **GitHub Repository**: [https://github.com/ratanlaldhakar/sureshmali.git](https://github.com/ratanlaldhakar/sureshmali.git)
- **Official Center Portal**: [https://amrityogacenter.in](https://amrityogacenter.in)

---

## 🌟 Key Features

- **Executive Editorial Design**: Deep slate charcoal (`#111827`), cream off-white background (`#F9FAFB`), and matte gold (`#C5A028`) accents.
- **Verified Championship Record**: Senior National Double Gold 2023, All India Inter-University Silver 2024, Khelo India 2025 selection, Lucknow University Pirie Memorial Gold Medal 2025, and 4x State Titles.
- **Dainik Bhaskar & Times of India Press Kit**: Interactive media grid featuring Dainik Bhaskar newspaper print clippings (11 Sep 2025 & 29 Dec 2024), Times of India feature, and high-res print scan lightbox modal.
- **Amrit Yoga Center Hub**: Direct integration with [amrityogacenter.in](https://amrityogacenter.in).
- **Advanced SEO**: Schema.org `Person` JSON-LD markup, OpenGraph social metadata, and semantic HTML5 heading structure.

---

## 🚀 Deployment Instructions

### Option 1: Vercel Hosting (Recommended for 1-Click Auto-Deploy)

1. Log in to your [Vercel Dashboard](https://vercel.com).
2. Click **"Add New..."** → **"Project"**.
3. Import the GitHub repository: `ratanlaldhakar/sureshmali`.
4. Keep framework preset as **"Other / Static HTML"**.
5. Click **"Deploy"**. Vercel will automatically detect `vercel.json` and host the site live in seconds.
6. Connect your custom domain under **Project Settings** → **Domains**.

---

### Option 2: VPS Hosting (Nginx / Linux Server)

#### Method A: Direct Nginx Deployment

1. Clone the repository on your VPS:
   ```bash
   git clone https://github.com/ratanlaldhakar/sureshmali.git /var/www/sureshmalli
   ```
2. Copy the included `nginx.conf` to your Nginx configuration directory:
   ```bash
   sudo cp /var/www/sureshmalli/nginx.conf /etc/nginx/sites-available/sureshmalli
   sudo ln -s /etc/nginx/sites-available/sureshmalli /etc/nginx/sites-enabled/
   ```
3. Test Nginx and reload:
   ```bash
   sudo nginx -t
   sudo systemctl reload nginx
   ```
4. Enable free SSL via Let's Encrypt Certbot:
   ```bash
   sudo certbot --nginx -d sureshmalli.com -d www.sureshmalli.com
   ```

#### Method B: Docker & Docker Compose on VPS

1. Clone repo and navigate to directory:
   ```bash
   git clone https://github.com/ratanlaldhakar/sureshmali.git
   cd sureshmali
   ```
2. Run 1-click Docker Compose:
   ```bash
   docker-compose up -d --build
   ```

---

## 📁 Project Structure

```
.
├── index.html                # Main single-page HTML layout
├── vercel.json               # Vercel deployment configuration
├── nginx.conf                # VPS Nginx server configuration
├── Dockerfile                # Docker container configuration
├── docker-compose.yml        # Docker Compose deployment configuration
├── README.md                 # Complete documentation
└── assets/
    ├── css/
    │   └── styles.css        # Editorial design system stylesheet
    ├── js/
    │   └── main.js           # Filter tabs, lightbox modal, smooth scroll
    └── images/
        ├── suresh-malli-portrait.jpg    # Authentic championship photo
        ├── bhaskar-scan-2025.jpg        # Bhilwara Bhaskar 11-09-2025 print scan
        ├── bhaskar-scan-2024.jpg        # Bhilwara Bhaskar 29-12-2024 print scan
        └── bhaskar-scan-2024-crop.jpg   # Focused news snippet crop
```

---

## 📄 License & Attribution

&copy; 2026 Suresh Malli & Amrit Yoga Center. All Rights Reserved.
