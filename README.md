# Thomas de Schulthess — portfolio

A static website for GitHub Pages. No build step, package installation, paid services or API keys are required.

## Preview

Open index.html in a browser, or serve this folder with `python -m http.server 8000` and open http://localhost:8000.

## Content

All nine CV projects are in script.js, including the highlighted items. The profile uses the requested aerospace engineering internship sentence. Education, subject results, skills, leadership, languages, citizenship and interests are in index.html.

The turbine and model wind tunnel use supplied photographs, the light aircraft project uses the supplied RAeS logo, and the About section includes the supplied portrait. Remaining project diagrams are explicitly labelled illustrations, not actual photographs or simulation outputs. There is no CV download yet: the supplied PDF contains application-specific highlighting and an unfinished profile sentence.

## Publish to GitHub Pages

1. Create a GitHub account and choose a username. Your free default site address will be https://USERNAME.github.io.
2. Create a **public** repository named exactly USERNAME.github.io (replace USERNAME with your actual username).
3. Upload index.html, styles.css, script.js and the assets folder to the root of that repository. Keep the images inside assets; do not upload the enclosing portfolio folder.
4. Open repository Settings → Pages. Under Build and deployment, choose Deploy from a branch, select main and / (root), then Save.
5. Wait for the deployment to finish. The Pages settings page will show the published address.

GitHub changes its interface occasionally; verify these steps against the official documentation when publishing. See https://docs.github.com/en/pages/quickstart.

A custom domain is optional and purchased separately. The default github.io address is enough to share on applications.

## Before publishing

Review the content and contact information. The current page includes your email address, phone number, LinkedIn and citizenship from the CV. Add your real project photographs and optionally a portrait. Add a clean, tailored PDF if you want a CV download.

## Editing

- Profile, education, skills, experience and contact: index.html
- Project titles, dates and full descriptions: projects array in script.js
- Colours, typography, responsive layouts: styles.css

The site uses system fonts with no external font requests. The project gallery needs JavaScript; all other sections are plain HTML. Project dialogs support Escape, keyboard focus and a close button. Motion respects reduced-motion settings. No analytics or cookies are added.
