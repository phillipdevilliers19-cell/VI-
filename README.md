# Vesco Intelligence (VI) — V61

## V61 UI + navigation repair
This release is for the clean GitHub Pages repository. It retains the V60 application library, scraper, OEM references, Visualiser and Admin functionality while repairing the global navigation and mobile header controls.

## Upload
Upload the **contents of this folder/ZIP directly into the root of the `main` branch**. Replace the existing files. Do not put them inside another folder.

The root should contain:

- `index.html`
- `vi-v61.html`
- `manifest.json`
- `app.js`
- `core.js`
- `style.css`
- `404.html`
- `README.md`
- `apple-touch-icon.png`
- `icon-192.png`
- `icon-512.png`

## What was repaired
- Bottom navigation now uses a single delegated click handler, so Home, Discover, Library, Scraper and More respond reliably.
- More-menu items use the same navigation system and close the menu after navigation.
- Header theme and Backup controls are positioned inside the fixed header safe area instead of floating against the iPhone status-bar region.
- The header no longer uses backdrop blur.
- The supplied Vesco Intelligence logo remains unchanged; it is rendered at a controlled size without filters or blur.
- CSS and JavaScript references are V61-cache-busted.
- Manifest, canonical launch file and 404 fallback all point to `vi-v61.html`.

## First test
After GitHub Pages finishes deploying, open the exact page ending in `/vi-v61.html`. For a repository named `vesco-intelligence`:

`https://phillipdevilliers19-cell.github.io/vesco-intelligence/vi-v61.html`

Test the bottom navigation, theme toggle and Backup button in Safari first. Only after these work should the page be added to the iPhone Home Screen.

## Data
Application data remains browser-local in this release. Use Backup / Restore when moving data between browsers or devices.
