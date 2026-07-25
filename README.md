# Vijay R — Portfolio

Personal portfolio site for Vijay R, an aspiring Java developer, built with React, Vite, Tailwind CSS, Framer Motion, and AOS scroll animations.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Editing content

All personal content (name, bio, skills, projects, education, certifications, contact info) lives in a single file:

```
src/data/portfolioData.js
```

Update the values there and the whole site will reflect the change — no need to touch component markup.

## Replacing the resume / photo

- Resume PDF: `public/resume/Vijay-R-Resume.pdf` (linked from the "Download Resume" button)
- Profile photo: `src/assets/profile.png` (used in the Hero and About sections)
- Social preview image: `public/og-image.png`

## Structure

- `src/components/` — Preloader, Navbar, Hero, About, Skills, Projects, Education, Certifications, Contact, Footer
- `src/data/portfolioData.js` — single source of truth for all personal content
