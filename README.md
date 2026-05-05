# juan-carlos-medenilla

Juan Carlos' personal portfolio. Single-page site built with Vite + React + Tailwind CSS v4.

## Sections

Hero, About, Experience, Projects, Other Projects, Contact — wired via a sticky scroll-aware navbar with a dark/light theme toggle (persisted to `localStorage`).

## Develop

```bash
npm install
npm run dev      # start the Vite dev server (http://localhost:5173)
npm run build    # production build to ./dist
npm run preview  # serve the production build locally
```

## Editing content

All content lives inside the components in [src/components/](src/components/) — there is no CMS or data file. To customize:

- **Hero copy** → [src/components/Hero.jsx](src/components/Hero.jsx)
- **About text + skills list** → [src/components/About.jsx](src/components/About.jsx)
- **Experience entries** → `EXPERIENCES` array in [src/components/Experience.jsx](src/components/Experience.jsx)
- **Featured projects** → `PROJECTS` array in [src/components/Projects.jsx](src/components/Projects.jsx)
- **School / other projects** → `OTHER_PROJECTS` array in [src/components/OtherProjects.jsx](src/components/OtherProjects.jsx)
- **Contact email** → [src/components/Contact.jsx](src/components/Contact.jsx)
- **Social links** → `SOCIALS` array in [src/components/Footer.jsx](src/components/Footer.jsx)
- **Color tokens (light + dark)** → [src/index.css](src/index.css)
