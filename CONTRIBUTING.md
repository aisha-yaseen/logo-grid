# Contributing to LogoGrid

First off — **thank you!** 💜 LogoGrid is a community tool, and contributions of every size are welcome: new background scenarios, bug fixes, accessibility improvements, performance tweaks, docs, translations, or just good ideas.

## Code of Conduct

Be kind, be constructive, assume good intent. We want LogoGrid to be a friendly place for first-time and experienced contributors alike. Harassment or discrimination of any kind won't be tolerated.

## Project Philosophy

LogoGrid intentionally stays **simple**:

- ✅ **Single file** — everything lives in `index.html` (HTML + CSS + JS).
- ✅ **Zero dependencies, zero build step** — no npm, no bundler, no framework.
- ✅ **100% client-side** — the user's logo must never be uploaded or sent anywhere.
- ✅ **Accessible & responsive** — keyboard support, ARIA, reduced-motion, mobile-first.

Please keep PRs aligned with these principles. If a change would add a build tool or a runtime dependency, open an issue first to discuss.

## Getting Started

```bash
# 1. Fork the repo on GitHub, then clone your fork
git clone https://github.com/<your-username>/logogrid.git
cd logogrid

# 2. Serve it locally (any static server works)
python3 -m http.server 4188
# visit http://localhost:4188

# 3. Create a branch
git checkout -b feature/my-improvement
```

Edit `index.html`, refresh the browser, and you're iterating. There's nothing to compile.

## How to Contribute

### 🎨 Add a new background scenario

Find the `SCENARIOS` array in `index.html` and add an object:

```js
{
  name: "Slate",            // shown on the tile
  tag:  "neutral · UI",     // short descriptor
  css:  "#475569",          // any valid CSS background (color, gradient, etc.)
  sw:   "#475569"           // a solid hex used for the swatch dot + text-contrast calc
}
```

> Note: keep the default set focused and meaningful. New scenarios should test a *distinct* real-world context (a surface, a brand color family, a gradient style, a texture).

### 🐛 Fix a bug

1. Open an issue describing the bug (steps to reproduce + browser).
2. Reference the issue in your PR.

### ♿ Improve accessibility or responsiveness

Test across viewport widths (we check 375 / 480 / 720 / desktop) and with a keyboard. Verify no horizontal overflow on mobile.

### 📖 Improve docs or add screenshots

Add images to a `docs/` folder and reference them in the README.

## Pull Request Checklist

Before opening a PR, please confirm:

- [ ] The change works in the latest Chrome, Firefox, and Safari.
- [ ] No console errors (check DevTools).
- [ ] No horizontal scroll on mobile (≤ 480px).
- [ ] The logo is still **never uploaded** — all processing stays client-side.
- [ ] No new dependencies or build steps were added.
- [ ] Existing features still work (upload, background removal, single-color mode, lightbox, theme toggle, sliders).
- [ ] Your PR description explains **what** changed and **why**.

## Commit & PR Style

- Use clear, present-tense commit messages: `Add teal-to-lime gradient scenario`.
- Keep PRs focused — one logical change per PR is easier to review.
- Screenshots or a short clip are hugely appreciated for visual changes.

## Reporting Bugs & Requesting Features

Open a [GitHub Issue](../../issues) with:

- **Bugs:** what you expected, what happened, your browser/OS, and steps to reproduce.
- **Features:** the problem you're trying to solve (not just the solution), and who it helps.

## Licensing

By contributing, you agree that your contributions are licensed under the project's [MIT License](LICENSE).

---

Thanks again for helping make LogoGrid better. ⭐ If you enjoy the project, star it and tell a friend!

— A tool by [Prompts2Products](https://prompts2products.com)
