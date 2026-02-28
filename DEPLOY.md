# Deploy portfolio to GitHub Pages

Your portfolio is set up to run at **https://monming.github.io/richmondmingiportfolio/**.

## One-time setup

1. **Create the repo on GitHub** (if you haven’t already):
   - Repo name: `richmondmingiportfolio`
   - Owner: `monming`
   - Push your local code to it.

2. **Enable GitHub Pages**:
   - Open the repo → **Settings** → **Pages**.
   - Under **Source**, choose **Deploy from a branch**.
   - **Branch**: `gh-pages` (create it if needed).
   - **Folder**: `/ (root)`.
   - Save.

## Deploy (update the live site)

From the project root, run:

```bash
npm run deploy
```

This will:

1. Build the app with base href `/richmondmingiportfolio/`.
2. Publish the `www` folder to the `gh-pages` branch via `gh-pages`.

After a minute or two, the site will be at:

**https://monming.github.io/richmondmingiportfolio/**

## Notes

- The first time you run `npm run deploy`, the `gh-pages` package will be used via `npx` (no global install).
- To only build for GitHub Pages (without deploying), run: `npm run build:github`.
- Local dev is unchanged: `npm start` still uses base `/`.
