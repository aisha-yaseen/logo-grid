<div align="center">

# LogoGrid: Test Your Logo on 20 Real-World Backgrounds Instantly

**A free, open-source, privacy-first logo background tester. Drop in your logo and see, in one glance, how it holds up on light, dark, brand-colored, gradient, and busy photographic backgrounds. 100% in your browser. Nothing is ever uploaded.**

[![License: MIT](https://img.shields.io/badge/License-MIT-734d98.svg)](LICENSE)
[![Made with Vanilla JS](https://img.shields.io/badge/Made%20with-Vanilla%20JS-f7df1e.svg)](#tech-stack)
[![No build step](https://img.shields.io/badge/Build-zero%20dependencies-3ddc84.svg)](#quick-start)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-a06fc9.svg)](CONTRIBUTING.md)
[![Single file](https://img.shields.io/badge/Single%20file-index.html-734d98.svg)](index.html)

[**🚀 Live Demo**](#live-demo) · [**✨ Features**](#features) · [**⚡ Quick Start**](#quick-start) · [**🤝 Contribute**](CONTRIBUTING.md) · [**❓ FAQ**](#faq)

</div>

---

## TL;DR

**LogoGrid is a single-file HTML tool that previews any logo across 20 real-world background scenarios at once**, so designers, founders, and brand teams catch contrast failures *before* the logo ships. It runs entirely client-side (your logo never leaves your device), removes the logo's background automatically, and can generate 20 shades of any single brand color to stress-test against. No sign-up. No install. No build step. Free forever under the MIT license.

> **Keywords:** logo background tester, logo contrast checker, logo on dark background, logo on light background, brand color tester, logo preview tool, logo mockup generator, test logo on backgrounds, free logo tool, open source design tool.

---

## Table of Contents

- [What Is LogoGrid?](#what-is-logogrid)
- [Why LogoGrid Exists (the problem it solves)](#why-logogrid-exists)
- [Live Demo](#live-demo)
- [Features](#features)
- [The 20 Background Scenarios](#the-20-background-scenarios)
- [Screenshots](#screenshots)
- [Quick Start](#quick-start)
- [Usage Guide](#usage-guide)
- [Deploy Your Own](#deploy-your-own)
- [Analytics Setup (optional)](#analytics-setup-optional)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [FAQ](#faq)
- [LogoGrid vs. Other Tools](#logogrid-vs-other-tools)
- [Who Is It For?](#who-is-it-for)
- [License](#license)
- [Credits](#credits)

---

## What Is LogoGrid?

**LogoGrid is a free, open-source logo background tester that renders your logo across 20 different background scenarios simultaneously.** Designers traditionally approve a logo on a clean white artboard, then it ships onto a dark hero section, a busy product photo, a yellow ad, or a 50%-gray button, and suddenly it's invisible or muddy. LogoGrid surfaces those failures instantly by showing every context side by side in a single grid.

In one sentence: **LogoGrid answers the question, "Will my logo actually survive in the real world?"**

It is a static HTML page (one file, `index.html`) with no backend, no accounts, and no tracking by default. Everything, including background removal and color-variant generation, happens locally in your browser using the HTML Canvas API.

---

## Why LogoGrid Exists

A logo rarely lives on white. It lives on:

- 🌑 **Dark mode UIs** and black OLED screens
- ☀️ **Light app surfaces** and printed paper
- 🎨 **Brand colors**: blue, red, green, purple, yellow, pink
- 🌈 **Gradients** on marketing banners and splash screens
- 📸 **Busy photos**: concrete, foliage, real-world textures
- ⚪ **The dreaded 50% gray**: where most logos die (too dark for the light version, too light for the dark one)

Checking each context manually is slow and easy to skip. **LogoGrid makes it a three-second, zero-friction check** so contrast problems get caught during design review instead of by your customers.

---

## Live Demo

> **▶️ Try it live:** _add your deployment URL here (e.g. `https://logogrid.prompts2products.com` or your GitHub Pages link)._

Or run it locally in 10 seconds. See [Quick Start](#quick-start). Because LogoGrid is a single self-contained `index.html`, you can also just **double-click the file** and it opens in your browser.

---

## Features

| Feature | What it does |
| --- | --- |
| 🖼️ **20 background scenarios** | See your logo on light, dark, brand, gradient, and photographic backgrounds at once. |
| ✂️ **Automatic background removal** | Knocks out the logo's backdrop with an edge flood-fill so it sits cleanly on every color, while preserving whites *inside* the logo. Toggle on/off anytime. |
| 🎯 **Single-color mode** | Enter any hex code and instantly generate **20 variants of that one color** (tints, shades, tones, and gradients) to test your logo against a specific brand color. |
| 🔍 **Click-to-zoom lightbox** | Inspect any tile full-screen; browse all scenarios with arrow keys. |
| 🎚️ **Live size, padding & fit controls** | Tune the logo's scale, clear-space, and contain/cover behavior across all tiles in real time. |
| 🌗 **Light & dark theme** | The whole UI flips, including ambient glow and shadows. |
| 🔒 **100% private & local** | No uploads, no accounts, no servers. Your unreleased brand never leaves your machine. |
| 📦 **Zero install, zero build** | One HTML file. Works offline once loaded. Drag-and-drop a PNG or SVG. |
| 📊 **Optional analytics** | Drop-in hooks for Google Analytics 4 and Microsoft Clarity (heatmaps), off until you add your own ID. |
| ♿ **Accessible & responsive** | Keyboard navigation, ARIA roles, reduced-motion support, and a mobile-first responsive layout. |

---

## The 20 Background Scenarios

LogoGrid ships with a deliberately brutal lineup, from boardroom-safe to torture test:

| # | Scenario | Why it matters |
| --- | --- | --- |
| 01 | Pure white | Print & light UI baseline |
| 02 | Off-white | Paper / cream surfaces |
| 03 | Light gray | Standard app surface |
| 04 | **Mid gray 50%** | The worst-case neutral where logos vanish |
| 05 | Charcoal | Dark UI |
| 06 | True black | OLED screens & print |
| 07 | Brand blue | Tech / SaaS |
| 08 | Brand red | Bold / alert |
| 09 | Brand green | Finance / eco |
| 10 | Brand purple | Creative |
| 11 | Sunny yellow | High-visibility / ads |
| 12 | Hot pink | Playful |
| 13 | Teal | Wellness |
| 14 | Navy | Corporate |
| 15 | Sunset gradient | Marketing |
| 16 | Ocean gradient | Hero banners |
| 17 | Aurora gradient | Splash screens |
| 18 | Checkerboard | Transparency check |
| 19 | Concrete texture | Real-world surface |
| 20 | Foliage texture | Busy photographic background |

---

## Screenshots

> _Add your own screenshots to a `docs/` folder and reference them here. Suggested shots:_

```
docs/
├── hero.png          # the landing hero with the fanned logo deck
├── grid-light.png    # the 20-background grid in light mode
├── grid-dark.png     # the grid in dark mode
└── single-color.png  # 20 variants of one brand color
```

```markdown
![LogoGrid hero](docs/hero.png)
![20 background grid](docs/grid-light.png)
```

---

## Quick Start

LogoGrid has **no dependencies and no build step**. Pick whichever is easiest:

### Option 1: Just open the file

```bash
git clone https://github.com/prompts2products/logogrid.git
cd logogrid
open index.html   # macOS  (use "start" on Windows, "xdg-open" on Linux)
```

### Option 2: Serve it locally (recommended for the web fonts)

```bash
git clone https://github.com/prompts2products/logogrid.git
cd logogrid
python3 -m http.server 4188
# then visit http://localhost:4188
```

That's it. There is nothing to compile, transpile, or install.

> 💡 The polished typography (Inter + JetBrains Mono) loads from Google Fonts. Offline, LogoGrid gracefully falls back to your system fonts.

---

## Usage Guide

1. **Drop in your logo.** Drag a PNG or SVG onto the page, or click **Upload**. Transparent PNGs and SVGs look best, but LogoGrid will auto-remove a solid background for you.
2. **Scan all 20 tiles.** Look for tiles where the logo disappears, muddies, or glows oddly. Those are your real-world failure points.
3. **Tune it.** Use the **Size** and **Padding** sliders and the **Contain / Cover** toggle to find the clear-space and scale that work everywhere.
4. **Test a brand color.** Type a hex code (e.g. `#734D98`) and hit **Generate 20 variants** to see your logo on 20 shades of that single color.
5. **Zoom in.** Click any tile to open the lightbox; use **← / →** to browse and **Esc** to close.
6. **Flip the theme.** Toggle light/dark with the ☀️ / 🌙 button.

Everything runs locally. **Your logo is never uploaded anywhere.**

---

## Deploy Your Own

Because it's a static file, LogoGrid deploys anywhere in seconds.

<details>
<summary><strong>GitHub Pages</strong></summary>

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set **Source** to your `main` branch, root folder.
4. Your tool is live at `https://<your-username>.github.io/logogrid/`.
</details>

<details>
<summary><strong>Netlify</strong></summary>

Drag the project folder onto [Netlify Drop](https://app.netlify.com/drop). Done. Or connect the repo; no build command needed (publish directory = root).
</details>

<details>
<summary><strong>Vercel / Cloudflare Pages</strong></summary>

Import the repo. Framework preset: **Other**. Build command: _none_. Output directory: root (`./`).
</details>

---

## Analytics Setup (optional)

LogoGrid supports **Google Analytics 4** and **Microsoft Clarity**, but **no tracking ID is ever committed to the repo**. IDs are injected at build time from environment variables, so the source stays clean and analytics stays off when you just open the file locally.

### How it works

`index.html` holds inert placeholders:

```html
<script>
  window.LOGOGRID_ANALYTICS = {
    ga4:     "__GA_MEASUREMENT_ID__",
    clarity: "__CLARITY_PROJECT_ID__"
  };
</script>
```

At deploy time, [`scripts/inject-analytics.js`](scripts/inject-analytics.js) replaces those tokens with the values of your environment variables and writes the deployable site to `dist/`. Unreplaced placeholders are ignored by the loader, so nothing tracks until you set the env vars.

### Setup on Vercel (or any host)

1. **Create your properties:**
   - **Google Analytics 4**: create a property at [analytics.google.com](https://analytics.google.com) to get your `G-XXXXXXXXXX` measurement ID.
   - **Microsoft Clarity** (optional): create a free project at [clarity.microsoft.com](https://clarity.microsoft.com) for heatmaps and session recordings.
2. **Add the environment variables** (Vercel → Project → Settings → Environment Variables):
   | Name | Value |
   | --- | --- |
   | `GA_MEASUREMENT_ID` | `G-XXXXXXXXXX` |
   | `CLARITY_PROJECT_ID` | your Clarity id (optional) |
3. **Deploy.** [`vercel.json`](vercel.json) already sets the build command (`node scripts/inject-analytics.js`) and output directory (`dist`). Vercel runs it automatically.

### Build it yourself

```bash
GA_MEASUREMENT_ID="G-XXXXXXXXXX" node scripts/inject-analytics.js
# outputs a ready-to-host dist/ folder with the ID injected
```

Run it with no env vars and the placeholders are blanked out, leaving analytics fully off.

---

## How It Works

LogoGrid is pure front-end. Two pieces are worth understanding:

### Automatic background removal (edge flood-fill)

When you upload a raster logo, LogoGrid draws it to an off-screen `<canvas>`, samples the four corners to estimate the background color, then runs a **flood-fill from the image edges**. Only the *contiguous* background touching the border is made transparent, so white pixels *inside* your logo are preserved. The result is exported as a transparent PNG. If anything can't be processed, it safely falls back to the original image.

### Single-color variant generation (HSL)

When you enter a hex code, LogoGrid converts it to HSL and procedurally builds 20 related backgrounds: the base color, a tint→shade lightness ladder, desaturated tones, three gradients, and a radial spotlight, all sharing the same hue. This lets you stress-test a logo against one brand color and its realistic range.

No frameworks, no canvas libraries, no external processing. Just the standard browser APIs.

---

## Tech Stack

- **HTML5**: semantic, single-file structure
- **CSS3**: custom properties (design tokens), `clamp()` fluid type, container-friendly responsive grid, `prefers-reduced-motion` and `prefers-color-scheme` support
- **Vanilla JavaScript (ES6+)**: no frameworks, no bundler, no dependencies
- **HTML Canvas API**: for background removal and pixel work
- **Google Fonts**: Inter + JetBrains Mono (with graceful system fallback)

**Total dependencies: 0. Total build steps: 0.**

---

## Roadmap

Ideas and PRs welcome. See [Contributing](#contributing). Candidate features:

- [ ] **Contrast-risk badges**: auto-flag tiles where the logo likely fails (WCAG-style scoring)
- [ ] **Export a contact sheet**: render all 20 tiles to a single shareable PNG
- [ ] **Real photographic backgrounds**: swap CSS textures for stock imagery
- [ ] **Clear-space / safe-zone overlay**: visual minimum-margin guides
- [ ] **Custom scenario sets**: save and share your own background presets
- [ ] **Drag to reorder tiles**
- [ ] **Shareable permalinks** that encode the uploaded logo + settings (local only)

---

## Contributing

**Contributions are very welcome.** This is a community tool. Whether it's a new background scenario, a bug fix, an accessibility improvement, or a docs tweak, we'd love your help.

👉 Read the [**Contributing Guide**](CONTRIBUTING.md) to get started.

Good first issues:
- Add a new background scenario to the `SCENARIOS` array
- Improve the background-removal tolerance for tricky logos
- Add screenshots to `docs/`
- Translate the UI copy

By contributing you agree your work is licensed under the project's [MIT License](LICENSE).

---

## FAQ

### What is LogoGrid?
LogoGrid is a free, open-source tool that tests a logo against 20 different backgrounds at once (light, dark, brand colors, gradients, and busy photos), so you can spot contrast and visibility problems before the logo goes live. It runs entirely in your browser.

### Is LogoGrid free?
Yes. LogoGrid is 100% free and open source under the MIT license. There is no paid tier, no sign-up, and no usage limit.

### Does LogoGrid upload my logo to a server?
No. LogoGrid is fully client-side. Your logo is processed locally in your browser and is **never uploaded** anywhere. This makes it safe for unreleased brands and confidential work.

### What file formats does LogoGrid support?
PNG, SVG, JPEG, and WebP. Transparent PNGs and SVGs give the best results, but LogoGrid can automatically remove a solid background from raster logos.

### How do I test my logo on a dark background?
Just upload your logo. LogoGrid instantly shows it on charcoal, true black, and navy scenarios (among 17 others). No configuration needed.

### Can I test my logo against a specific brand color?
Yes. Enter any hex code and click **Generate 20 variants** to see your logo on 20 shades of that color: tints, shades, tones, and gradients.

### How does the automatic background removal work?
LogoGrid uses an edge flood-fill on an HTML canvas: it samples the corner color and removes only the connected background touching the image border, preserving whites inside the logo. See [How It Works](#how-it-works).

### Do I need to install anything or run a build?
No. LogoGrid is a single `index.html` file with zero dependencies and zero build steps. Open it in any modern browser.

### Does LogoGrid work offline?
Yes, once the page has loaded. Only the web fonts require a connection; without it, LogoGrid falls back to system fonts.

### Is LogoGrid good for checking logo accessibility / contrast?
LogoGrid is a fast *visual* check across many real contexts, including the difficult 50%-gray case. Automated WCAG contrast scoring is on the [roadmap](#roadmap).

### Who made LogoGrid?
LogoGrid is a tool by [Prompts2Products](https://prompts2products.com). See [Credits](#credits).

---

## LogoGrid vs. Other Tools

| | **LogoGrid** | Generic mockup generators | Manual artboard checks |
| --- | --- | --- | --- |
| Tests many backgrounds at once | ✅ 20 in one grid | ⚠️ usually one scene at a time | ❌ one at a time |
| Privacy (no upload) | ✅ 100% local | ❌ often cloud-based | ✅ local |
| Auto background removal | ✅ built-in | ⚠️ varies | ❌ manual |
| Test a single brand color | ✅ 20 variants | ❌ | ❌ |
| Cost | ✅ free & open source | ⚠️ often paid | ✅ free |
| Install / build | ✅ none | ⚠️ varies | n/a |

---

## Who Is It For?

- **Brand & logo designers** validating a new mark before delivery
- **Startup founders** sanity-checking a DIY or AI-generated logo
- **Product & UI teams** confirming a logo works in light *and* dark mode
- **Marketing teams** placing logos on gradients, ads, and photography
- **Developers** who want a dependency-free tool they can self-host

**Common searches LogoGrid answers:** _how to test a logo on different backgrounds · check if a logo works on dark mode · logo contrast checker · preview logo on brand colors · free logo background tester · does my logo work on a busy photo._

---

## License

Released under the [**MIT License**](LICENSE). Free to use, modify, self-host, and distribute. Attribution appreciated but not required.

---

## Credits

**LogoGrid is a tool by [Prompts2Products](https://prompts2products.com)**, helping non-technical founders build real products with AI.

Designed and built by **Aisha** for Prompts2Products.

If LogoGrid saved you from shipping an invisible logo, please ⭐ **star the repo** and share it. It genuinely helps others discover the tool.

<div align="center">

**[⬆ back to top](#logogrid-test-your-logo-on-20-real-world-backgrounds-instantly)**

Made with 💜 by **Aisha** for [Prompts2Products](https://prompts2products.com)

</div>
