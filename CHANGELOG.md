# Changelog

All notable changes to LogoGrid are documented here. This project follows [Semantic Versioning](https://semver.org/) and the [Keep a Changelog](https://keepachangelog.com/) format.

## [1.0.0] - 2026-06-30

The first public release of LogoGrid: a free, open-source, single-file logo background tester.

### Added
- **20 background scenarios** rendered at once: pure white, off-white, light gray, 50% mid gray, charcoal, true black, brand blue, brand red, brand green, brand purple, sunny yellow, hot pink, teal, navy, sunset gradient, ocean gradient, aurora gradient, checkerboard, concrete texture, and foliage texture.
- **Automatic background removal** using an edge flood-fill on an HTML canvas, preserving whites inside the logo. Toggle to turn it off.
- **Single-color mode**: enter any hex code to generate 20 variants of that color (tints, shades, tones, gradients, and a radial spotlight).
- **Click-to-zoom lightbox** with arrow-key navigation and Esc to close.
- **Live controls** for logo size, padding, and contain/cover fit.
- **Light and dark theme** toggle.
- **Drag-and-drop upload** plus a file picker, supporting PNG, SVG, JPEG, and WebP.
- **Landing page** with a hero showcase that fans the demo logo across multiple backgrounds.
- **Optional, opt-in analytics** hooks for Google Analytics 4 and Microsoft Clarity (off until you add your own IDs).
- **SEO and structured data**: meta tags, Open Graph, Twitter cards, and JSON-LD (`SoftwareApplication` and `FAQPage`).
- **Responsive, accessible UI**: keyboard navigation, ARIA roles, reduced-motion support, and a mobile-first layout.
- Documentation: `README.md`, `CONTRIBUTING.md`, `LICENSE` (MIT), and this changelog.

### Notes
- 100% client-side. No backend, no accounts, and nothing is uploaded.
- Zero dependencies and zero build step. The entire app is one `index.html` file.

[1.0.0]: https://github.com/prompts2products/logogrid/releases/tag/v1.0.0
