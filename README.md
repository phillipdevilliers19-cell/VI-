# Vesco Intelligence (VI) Internal — V64

## V64 application editing and photo release

This release adds photo management directly to **Edit Application**.

- Open any saved application and choose **Edit record**.
- Existing application photos are shown in the edit form.
- **＋ Add photo / camera** lets you take a new photo or select photos from the device.
- New photos are compressed using the same storage-safe process as the Add Application flow.
- Individual photos can be removed and captions can be edited before saving.
- Saving the record writes the updated photo list back to the same application record without changing its ID or existing non-photo data.
- The Discover feed continues to read directly from the Library application database.

## GitHub Pages

Upload the contents of this package directly into the root of the **main** branch. Do not place them inside another folder.

Expected root files include `index.html`, `vi-v64.html`, `manifest.json`, `app.js`, `core.js`, `style.css`, `404.html`, `README.md`, and the image/icon assets.

Enable GitHub Pages from **Settings → Pages → Deploy from a branch → main → /(root)**.

After the Pages deployment is green, open the normal Pages URL in Safari first. Check the Library, open a saved application, select **Edit record**, add a camera photo, save, and reopen the application to confirm the photo remains.
