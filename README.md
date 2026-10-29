# Thomas de Schulthess — portfolio

Static HTML/CSS/JavaScript portfolio for GitHub Pages. No build step or API keys.

## Publish or update

Upload index.html, styles.css, script.js, the entire assets folder and the entire downloads folder to the root of thomasdeschulthess.github.io. Preserve the two folder names and their contents. Commit the changes. GitHub Pages uses main / (root).

## Project content

Beam FEA and pipe-flow CFD have separate project cards, descriptions, figures and report links. Project details, group roles, supporting figures, resource links and the corrected materials results are in script.js. General biography and contact information are in index.html. Styling is in styles.css.

## Public supporting files

- Beam and pipe-flow reports: student identifiers, PDF annotations, private source links and author metadata removed from public copies. Original reports remain unchanged outside this website folder.
- Lifting-line code: original main program, supplied hshoe helper, airfoil data and usage notes. The original polar does not document its Reynolds number.
- Membrane coursework: sanitized live script, a code-only export and attribution/usage notes. Supplied teaching examples retain attribution.
- Turbine team presentation (PDF): participant names, presenter notes, comment text, contact details and collaboration author metadata removed. Embedded workbooks are also sanitized. This is credited as a team presentation.
- Aircraft group report and materials PDF: excluded.

The membrane mode image is a reference illustration from the supplied coursework, as stated in the expanded project view. The aircraft photograph has been AI-cleaned for glare. Supporting report figures are extracted without altering their data.

## Local preview

Open index.html directly, or run python -m http.server 8000 in this folder.
