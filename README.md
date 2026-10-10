# Sri Badagu Mahaganapati & Mahalingeshwara Temple

Responsive temple website for Alangar, Moodbidri, with English, Kannada, and Hindi content, temple timings and seva details, and automatically rotating temple and visitor photo galleries.

## Run locally

Open `index.html` in a browser. The site is static and does not require a build step.

## Deploy

GitHub Actions deploys the site to GitHub Pages whenever changes are pushed to `main`. The workflow publishes the static landing page, stylesheets, scripts, SEO files (`robots.txt` and `sitemap.xml`), and `assets/` directory.

Website name: Sri Mahalingeshwara Temple Alangar

## Project files

- `index.html`: page content, translations, and site metadata
- `responsive.css`, `temple-theme.css`: responsive layout and theme
- `temple-gallery.js`: temple and visitor photo galleries, timings, and seva details
- `robots.txt`, `sitemap.xml`: search crawler access and sitemap discovery
- `temple-interactions.js`, `temple-media.js`, `tradition-copy.js`: interactions and media content
- `assets/`: temple photographs and logo
