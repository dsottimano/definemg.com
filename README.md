# Lanza site

Your website. This repository holds **your content** — the code lives in the
[`lanza-site`](https://www.npmjs.com/package/lanza-site) npm package, which
Cloudflare installs when it builds the site.

```
content/   your posts and pages (plain markdown + HTML)
data/      your settings: languages, SEO, menu, appearance, content model
public/    your uploaded images
```

Edit everything at **`/admin`** on your live site, or ask an AI agent to do it.

## Updating

Your site is pinned to one version of `lanza-site` in `package.json`. Nothing
changes until you choose to update — bump that version and Cloudflare rebuilds.
Every published version stays available, so an update can always be reverted.

## Running it locally

```sh
npm install
npm run dev
```
