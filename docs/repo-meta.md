# GitHub Repo Metadata (copy-paste reference)

Everything you need to fill in the repo's **About** panel and make LogoGrid discoverable. Edit the **About** section (gear icon, top-right of the repo home) or use the `gh` commands below.

## Description (the one-liner under the repo name)

```
Free, open-source logo background tester. Drop in your logo and instantly see how it survives on 20 real-world backgrounds: light, dark, brand colors, gradients and busy photos. 100% in your browser, nothing uploaded. Single HTML file, zero dependencies.
```

## Website

```
https://<your-username>.github.io/logogrid/
```

## Topics (GitHub search tags, up to 20)

```
logo
logo-design
branding
design-tools
design
logo-generator
background-removal
color-palette
contrast-checker
accessibility
frontend
vanilla-javascript
html
css
no-dependencies
static-site
web-tools
privacy-first
open-source
hacktoberfest
```

> Keep `hacktoberfest` only if you want to opt into Hacktoberfest. Otherwise remove it.

## One-shot setup with the GitHub CLI

```bash
gh repo edit <your-username>/logogrid \
  --description "Free, open-source logo background tester. Drop in your logo and instantly see how it survives on 20 real-world backgrounds: light, dark, brand colors, gradients and busy photos. 100% in your browser, nothing uploaded. Single HTML file, zero dependencies." \
  --homepage "https://<your-username>.github.io/logogrid/" \
  --add-topic logo,logo-design,branding,design-tools,design,logo-generator,background-removal,color-palette,contrast-checker,accessibility,frontend,vanilla-javascript,html,css,no-dependencies,static-site,web-tools,privacy-first,open-source
```

## Suggested social preview image

Upload a `1280x640` PNG under **Settings → Social preview** (and save the same file as `docs/og-image.png` so the Open Graph tags in `index.html` resolve). A good shot: the 20-background grid with the demo logo, on the cream theme.
