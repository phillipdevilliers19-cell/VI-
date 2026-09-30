# Vesco Intelligence (VI) — V60

## Fresh GitHub Pages release
This is the V60 release prepared for a **new, clean GitHub repository**. It is deliberately **repository-name independent**: the app uses relative URLs instead of the old `/test/` path.

## Upload
Upload the **contents of this ZIP directly into the root of the `main` branch**. Do not upload the ZIP file itself and do not place the files inside another folder.

The repository root must contain at least:

- `index.html`
- `vi-v60.html`
- `manifest.json`
- `app.js`
- `core.js`
- `style.css`
- `404.html`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## First test — BEFORE adding Home Screen
Once GitHub Pages is enabled and the site is live, open the **exact GitHub Pages URL ending in `/vi-v60.html`**. For example, if the repository is named `vesco-intelligence`:

`https://phillipdevilliers19-cell.github.io/vesco-intelligence/vi-v60.html`

Confirm that this page visibly shows the V60 application. Only then use Safari → Share → Add to Home Screen from that exact page.

## Why this release is different
- No hard-coded `/test/` paths.
- The manifest uses relative `id`, `start_url`, and `scope`.
- The Home Screen entry point has a unique filename: `vi-v60.html`.
- The 404 fallback redirects to the same relative launch page.
- CSS and JavaScript references are V60-cache-busted.

## Data
Application data remains browser-local in this release. Use Backup / Restore when moving data between devices.
V60 deployment test
