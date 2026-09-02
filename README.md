# 3 Patti Sky APK Guide

A high-performance, SEO-optimized static website providing a complete guide for Android users in Pakistan on the 3 Patti Sky APK.

## Features

- **Mobile-First Design:** Fully responsive layout built from small screens upward.
- **SEO Ready:** JSON-LD schemas for Article and FAQPage, optimized meta tags, canonical URL, Open Graph and Twitter Card support.
- **Zero Dependencies:** No Bootstrap, no jQuery, no external libraries. Pure HTML, CSS and vanilla JavaScript.
- **Accessibility:** WCAG-aligned color contrast, semantic HTML5, keyboard navigation support, descriptive ARIA labels, visible focus states and skip link.
- **Performance Optimized:** System fonts only, deferred JavaScript, minimal DOM complexity, no render-blocking resources, lazy image loading support.
- **FAQ Accordion:** Keyboard-accessible expand and collapse FAQ section.
- **Mobile Navigation:** Hamburger menu with ARIA state management for small screens.
- **Responsible Gaming:** Dedicated responsible gaming section with clear age notice and risk messaging.

## Project Structure

```
project/
├── index.html      Main article page
├── style.css       All styles (mobile-first)
├── script.js       Vanilla JS for nav, FAQ, scroll
├── robots.txt      Search engine crawl instructions
├── sitemap.xml     XML sitemap for search engines
└── README.md       This file
```

## Local Preview

No build tools required. To preview locally:

1. Download or clone this repository.
2. Open `index.html` in any modern web browser.

The project is fully static and works by simply opening the HTML file.

## Deployment on GitHub Pages

1. Create a new repository on GitHub.
2. Push all project files to the `main` branch.
3. Go to **Settings > Pages** in your repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and the root `/` folder.
6. Click **Save**. Your site will be live at `https://your-username.github.io/your-repo-name/`.

After deployment, update the canonical URL in `index.html` and the sitemap URL in `sitemap.xml` to match your live domain.

## Performance Optimization

- **System Fonts:** Uses the OS native font stack. No external font requests, no layout shift.
- **Deferred Script:** JavaScript is loaded with `defer` to prevent render blocking.
- **No External CSS:** All styles are in a single local CSS file.
- **Lazy Images:** Image elements use `loading="lazy"` and the script handles intersection-based loading.
- **Minimal JS:** The JavaScript file is under 5 KB and covers only essential interactions.

## SEO Features

- **Article Schema:** JSON-LD structured data for the main article including headline, datePublished and publisher.
- **FAQPage Schema:** Structured data covering all FAQ questions for potential rich results in search.
- **Meta Tags:** Title under 60 characters, meta description between 150 and 160 characters, robots indexing, canonical tag.
- **Open Graph and Twitter Card:** Social sharing metadata included.
- **Sitemap:** Pre-configured XML sitemap for crawler discovery.
- **Robots.txt:** Configured to allow full crawling with sitemap reference.

## Responsible Gaming Notice

This project includes a dedicated responsible gaming section in compliance with best practices for gaming-related content. The section includes age requirements, guidance on setting personal limits and information on recognising signs of problematic gaming. No guaranteed earning claims are made anywhere in the content.

## Content Notes

- All content is informational and educational.
- No fake statistics, testimonials, licenses or guarantees are included.
- Payment methods are described as subject to change and users are directed to verify current options in the app.
- The project does not make any claim that the platform is legally approved or that winnings are guaranteed.
