# LifeSaver Frontend

React with Vite and JavaScript. React Router connects the home page to `/`.
Axios is installed for future REST API calls.

## Run locally

Open a terminal in this folder:

~~~powershell
npm run dev
~~~

Open the local URL printed by Vite.

## Other commands

- `npm run build` creates the production files in `dist/`.
- `npm run preview` serves that production build locally.

## Source files

- `src/main.jsx`: starts React, enables BrowserRouter, and imports the CSS.
- `src/App.jsx`: renders the shared header and defines the `/` route.
- `src/components/Header.jsx`: displays the brand and links to the home page.
- `src/pages/Home.jsx`: displays the LifeSaver welcome page.
- `src/styles/index.css`: contains the plain CSS and mobile styling.
- `public/favicon.svg`: provides the browser tab icon.
- `index.html`: contains the React root element and page metadata.
- `vite.config.js`: enables the React plugin.
- `package.json`: records the scripts and dependencies.
- `package-lock.json`: records the exact installed dependency versions.
- `.npmrc`: keeps npm's cache inside this frontend folder.
- `.gitignore`: excludes dependencies, build files, cache, and local environment files.
