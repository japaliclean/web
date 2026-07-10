# 🧹 JAPALI | Premium Cleaning Solutions & Industrial Hygiene

Welcome to the **JAPALI** website repository. JAPALI engineers professional-grade cleaning systems, from advanced industrial-grade chemicals to heavy-duty machinery. This repository contains the source code for the official JAPALI showcase website.

---

## 💎 Project Overview

The JAPALI website is built using a custom **Brutalist-Glassmorphism** design system that blends retro industrial grid styling with sleek modern transparency effects. The website serves as a premium blueprint for JAPALI's high-performance products, custom hygiene systems, and sector-optimized solutions.

### 🌐 Key Features

1. **Brutalist & Glassmorphism Aesthetics**: Bold borders, solid flat offsets, high contrast, and smooth blurred backgrounds (`backdrop-filter`) that communicate stability and clarity.
2. **Dynamic Premium Slideshow**: Located in the "Smart Solutions" section on the Home page, showcasing high-resolution showcases using smooth cross-fades, autoplay controls, Ken Burns subtle zoom animations, and smart hover-pause interactivity.
3. **Optimized Product Catalog**: Rapid-loading grid structure for products (Chemicals, Tools, Machinery, Tissues & Paper) built with performance and readability in mind.
4. **Sector Blueprints**: Interactive solutions page optimized specifically for industrial manufacturing, hospitality, and healthcare environments.
5. **Fully Responsive Grid Layouts**: Adaptive layout system that scales elegantly from widescreen monitors down to mobile viewports.

---

## 📁 Project Architecture & Structure

Below is the organized directory layout of the JAPALI website:

```bash
japali/
├── index.html                  # Homepage (Hero, Categories, Slideshow, Solutions Promo)
├── products.html               # Product Catalogue (Chemicals, Tools, Machinery, Tissues)
├── solutions.html              # Custom Cleaning Blueprints (Hospitality, Healthcare, Manufacturing)
├── about.html                  # Who We Are (JAPALI brand vision, history, and standards)
├── contact.html                # Reach Us (Quote requests and feedback details)
├── sitemap.xml                 # Search Engine Optimization Sitemap
├── robots.txt                  # Crawl rules for SEO
└── assets/                     # Core assets folder
    ├── css/
    │   └── style.css           # Custom stylesheets & brutalist-glassmorphism token variables
    ├── js/
    │   └── main.js            # Interactivity scripts (navigation scroll, slideshow loop, parallax)
    └── images/
        ├── background pattern.png  # Blueprint grid background watermark
        ├── logo final.png          # High-resolution JAPALI Brand Logo
        ├── favicon/                # Cross-device Favicon and Apple touch icons
        │   ├── favicon.ico
        │   ├── favicon-16x16.png
        │   └── favicon-32x32.png
        └── slideshow/              # Structured folder for Homepage Slideshow
            ├── slide1.png          # Premium Products & Tools
            ├── slide2.png          # Advanced Cleaning Machinery
            └── slide3.png          # Eco-Friendly Cleaning Chemicals
```

---

## 🛠️ Tech Stack & Design Tokens

### Core Technologies
* **Structure**: HTML5 (Descriptive, semantic markup with optimized SEO tags)
* **Styling**: Vanilla CSS3 (Custom styling rules, transitions, and media queries)
* **Logic**: Vanilla ES6+ Javascript (Modern IntersectionObservers and interval events)

### CSS Variables (`assets/css/style.css`)
We use a cohesive theme color palette based on JAPALI's signature industrial colorways:

| Token Name | Value | Purpose |
| :--- | :--- | :--- |
| `--primary` | `#e05226` | Signature JAPALI Orange |
| `--primary-dark` | `#b8431f` | Hover States / Accents |
| `--bg-light` | `#f8fafc` | Clean Background Slate |
| `--text-dark` | `#1e293b` | High Contrast Typography |
| `--text-muted` | `#64748b` | Subheadings and Body text |
| `--glass-bg` | `rgba(255, 255, 255, 0.8)` | Translucent Glass Panels |
| `--brutalist-border` | `3px solid #1e293b` | Strong structural card frames |
| `--brutalist-shadow` | `6px 6px 0px #1e293b` | Shadow offsets for hover states |

---

## ⚡ Key Modules In Detail

### 1. The Solutions Slideshow
Implemented using CSS transitions and Javascript controls:
* **HTML Element**: Located inside the `split-grid` under the `Smart Solutions` section of `index.html`.
* **Transitions**: Smooth `opacity` fade with absolute placement overlay (`visibility: hidden` fallback for accessibility).
* **Ken Burns Effect**: Active slides scale by `1.02` dynamically using CSS keyframe/hover curves, preventing content jump while ensuring premium quality.
* **Autoplay & Smart Pausing**: Runs on a `5s` auto-increment. Pauses instantly when a user hovers to view details, and resumes automatically when they leave.

### 2. Header and Navigation scroll
* **Responsive Styling**: Sticky navbar transforms dynamically from transparent to a blur glass design with custom box shadow whenever the scroll-y threshold exceeds `50px`.
* **Mobile Toggle**: Includes a custom brutalist sandwich icon (`.menu-toggle`) that triggers slide-in navigation panels on mobile screens.

---

## 🚀 Local Development & Previewing

To preview the website locally with perfect performance, follow these instructions:

### Recommended Setup (Local Server)
Since modern web browsers block standard `file://` protocols from accessing local images and resources dynamically for security, it is highly recommended to run a static local web server.

1. **Using Node.js (`http-server`)**:
   If you have Node.js installed, open your terminal inside the project directory and run:
   ```bash
   npx http-server
   ```
   Open your browser and navigate to `http://localhost:8080`.

2. **Using Python**:
   If you have Python installed, run:
   ```bash
   python -m http.server 8000
   ```
   Open your browser and navigate to `http://localhost:8000`.

### Standard Preview
You can also open the `index.html` file directly in any modern browser by double-clicking the file in your file explorer.

---

## 🤝 Contact & Engineering Team
* **Email**: [japali.hyd@gmail.com](mailto:japali.hyd@gmail.com)
* **Phone**: [+91 63058 33369](tel:+917207667827)
* **Web Developer**: [Ithish Jonnes](https://wa.me/917207667827)
