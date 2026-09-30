# Vesco Intelligence (VI) Internal — V65

## V65 — Edit photos + mobile header controls

### Edit Application
- Open a saved application and choose **Edit record**.
- The edit form has an explicit **＋ Add photo / camera** button. It does not rely on tapping a hidden file-input label.
- On iPhone, tapping the button opens the camera/photo picker.
- Existing photos remain visible in the editor.
- Add up to 10 photos total, edit captions, remove individual photos, then **Save Record**.
- Saving writes the updated photo list back to the same application record.

### Mobile header
- The **light/dark theme** and **Backup / Export** controls are moved lower so they sit below the iPhone status/safe-area region.

### GitHub Pages
Upload the contents of this package directly into the root of the `main` branch. Do not put the files inside a folder.

Expected root files include `index.html`, `vi-v65.html`, `manifest.json`, `app.js`, `core.js`, `style.css`, `404.html`, `README.md` and the image/icon assets.

Enable Pages with **Settings → Pages → Deploy from a branch → main → /(root)**.

After deployment, open the normal Pages URL in Safari. In Library, open an application → **Edit record** → **＋ Add photo / camera** → take/select a photo → **Save Record** → reopen the application and confirm the photo remains.
