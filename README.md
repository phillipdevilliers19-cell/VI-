# Vesco Intelligence (VI) Internal — V70

## Release
V70 is the consolidated repair release for the application workflow. Upload the contents directly into the root of the GitHub Pages `main` branch.

## V70 repairs
- Restores reliable **Edit record** behaviour by removing hidden modal interception and using direct application action handlers.
- Edit Application retains explicit native **Take photo** and **Choose photos** controls.
- Customer portfolio builder opens from an application and reaches the Preview & Edit stage.
- Customer View starts below the fixed mobile header and includes a **Share PDF** action.
- QR Code action is retained and no longer depends on an optional QR level enum.
- Compare feature removed from the application interface.
- Library and application story text is dark/readable in light mode.
- Header logo is centered and slightly reduced; theme and backup controls remain in the lower header area.

## QA acceptance path
1. Library → open application → Edit record.
2. Edit record → Take photo / Choose photos → confirm preview → Save → reopen.
3. Application → Build Customer Portfolio → select application → Preview Portfolio.
4. Application → Customer View → title fully visible below header → Share PDF.
5. Application → QR Code → QR visible and URL shown.
6. Toggle light/dark → inspect application story cards for readability.
7. Confirm Compare is absent.

## QA status
V70 was reviewed against Library, Discover, application detail, edit workflow, photo controls, Customer View, portfolio builder, QR, theme switching, fixed header/footer spacing, and document preview/share paths. Physical iPhone camera/share-sheet behaviour still requires device testing.

## Storage
Application data is stored in browser localStorage. This is not yet a shared multi-user backend.

## Root files
Expected production files in repository root: `index.html`, `vi-v70.html`, `app.js`, `core.js`, `style.css`, `manifest.json`, icons and image assets. Do not upload the ZIP file itself into the repository root.
