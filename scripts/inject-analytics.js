#!/usr/bin/env node
/**
 * Build-time analytics injection.
 *
 * LogoGrid stays a single static file, but we never commit tracking IDs to the
 * repo. Instead, the committed index.html holds inert placeholders, and this
 * script swaps in the real IDs from environment variables at deploy time.
 *
 * Environment variables (set them in your host, e.g. Vercel → Settings → Env):
 *   GA_MEASUREMENT_ID   Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX"
 *   CLARITY_PROJECT_ID  Microsoft Clarity project id (optional)
 *
 * Output: a `dist/` folder containing the deployable site. If no env vars are
 * set, the placeholders are blanked out and analytics simply stays off.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "dist");

const ga = (process.env.GA_MEASUREMENT_ID || "").trim();
const clarity = (process.env.CLARITY_PROJECT_ID || "").trim();

let html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
html = html
  .split("__GA_MEASUREMENT_ID__").join(ga)
  .split("__CLARITY_PROJECT_ID__").join(clarity);

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, "index.html"), html);

// Copy docs/ (e.g. og-image.png) so Open Graph assets resolve, if present.
const docs = path.join(ROOT, "docs");
if (fs.existsSync(docs)) {
  fs.cpSync(docs, path.join(OUT, "docs"), { recursive: true });
}

console.log(
  `[inject-analytics] built dist/  GA4: ${ga ? "set (" + ga + ")" : "off"}  Clarity: ${clarity ? "set" : "off"}`
);
