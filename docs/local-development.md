# Local development

Run `npm run dev` from the project root. It starts `app.js` with Node's file watcher, so changes to the backend and its imported modules restart the server automatically. Use a current Node release that supports `node --watch` (Node 22 or newer).

`npm start` runs the server without watching files and is intended for hosting. Restart that process after deploying backend changes. Updating frontend files alone does not reload API routes in an already running Node process.

If a new page reports `API route not found`, confirm that the process serving the port belongs to this checkout and restart it. For Weekly Test, `GET /api/weekly-tests` should return `success: true` and a `tests` array.
