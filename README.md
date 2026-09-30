# Vesco Intelligence (VI) Internal — V66

## V66 — consolidated application stability fix

This release consolidates the current application/navigation/photo/modal regressions into one controlled build.

### Fixed in V66
- **Library:** explicitly re-renders whenever the Library page opens, so records do not disappear after direct navigation.
- **Discover:** uses the same application store as Library and refreshes when application data changes.
- **Edit photos:** uses native iPhone controls for **Take photo** and **Choose photos**. Photos can be added repeatedly up to 10, previewed, captioned, removed and saved to the same application.
- **Customer View:** moved above the sticky header with safe-area spacing; application headings are no longer hidden behind the VI header.
- **QR Code:** modal now sits above the header. QR generation has a library path plus an online image fallback and always exposes the application URL.
- **Header controls:** theme and Backup/Export are anchored to the bottom of the header, below the iPhone status/safe-area region. The header no longer uses backdrop blur, so the VI logo is not blurred.
- **Application save:** refreshes Library, Discover and Visualiser immediately.

### Fresh repository upload
Upload the contents of this package directly into the **root** of the `main` branch. Do not place the files in a subfolder.

Expected root files: `index.html`, `vi-v66.html`, `manifest.json`, `app.js`, `core.js`, `style.css`, `404.html`, `README.md` plus the image/icon assets.

Enable GitHub Pages with **Settings → Pages → Deploy from a branch → main → /(root)**.

### Verification sequence
1. Open the GitHub Pages URL in Safari.
2. Click **Library** directly and verify existing application records are visible.
3. Open an application → **Edit record** → **Take photo** or **Choose photos** → verify the photo preview → **Save Record** → reopen the application.
4. Open **Customer View** and verify the title is fully visible.
5. Open **QR Code** and verify the QR/link modal.
6. Toggle light/dark and verify the controls remain below the status area.
7. Open **Discover** and verify the same application appears in the reels feed.


### Important stability correction
The application-save path now treats localStorage as the source of truth and isolates UI refresh errors, so a visualiser/rendering fault cannot make a successfully stored application appear unsaved.
