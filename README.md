# Vesco Intelligence (VI) Internal — V63

## V63 application feed and photo-save release

This release fixes three application-library issues:

- **Discover now includes every application saved in the Library**, not only records with a stored photo.
- **Discover is a true vertical reels feed** with one application per snap/scroll position, full-height presentation on mobile, and tap-through to the application record. Applications without a photo get a clear VI placeholder until a photo is added.
- **Camera/photo saving is more resilient**: photos are converted to compressed JPEG data before storage, with an adaptive size target to avoid browser local-storage quota problems. Saved data is verified immediately after writing.
- **Library text contrast is darker in light mode** so application titles, descriptions and metadata are easier to read.

The existing localStorage application database is preserved. No existing application records are intentionally deleted by this release.

## GitHub Pages

Upload the contents of this package directly into the root of the `main` branch. Do not place the files inside another folder.

Expected root files include `index.html`, `vi-v63.html`, `manifest.json`, `app.js`, `core.js`, `style.css`, `404.html`, and the image/icon assets.

Enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

After the Pages deployment is green, open the normal Pages URL in Safari first. Then test `vi-v63.html` and only after that create/update the iPhone Home Screen app.
