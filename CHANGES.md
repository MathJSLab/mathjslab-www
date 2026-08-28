# Release notes

All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.1.1

- Added `includes/head-macros.njk` to centralize reusable HTML head macros for base metadata, Open Graph, Twitter cards, alternate language links and icons.
- Updated the main site, app hub, redirect page and SEO utility templates to use the shared head macros instead of separate head include files.
- Removed the older single-purpose head include files now covered by the macro-based implementation.
- Refactored the `seo.html` utility page to generate diagnosis links from structured endpoint and tool lists.
- Improved the SEO diagnosis page with responsive cards, consistent MathJSLab branding, dark-mode-aware styling, and `noindex,nofollow` metadata.

## 0.1.0

- The project page was implemented using SCSS templates in the same way as in the `mathjslab-app` project, by copying files from the organization's repository.
- Implemented color switching between light and dark modes based on browser appearance settings using styles defined in the SCSS templates.
- More online SEO tools in the `seo.html` (`site/seo.html.njk`) file.

## 0.0.17

- Use of `images/mathjslab-og.png` (1200x630) in Open Graph and Twitter records.
- Introduction of the `seo.html` file, featuring links to online tools for technical SEO.

## 0.0.16

- Introduction of the `"offers"` field in the JSON-LD record.
- Use of `mathjslab-logo.png` in Open Graph and Twitter records.

## 0.0.15

- Full technical SEO support in `includes/layout.njk` and `includes/app-hub.njk`.

## 0.0.14

- Adjustment of JSON-LD data in the `includes/layout.njk` file.

## 0.0.13

- Implemented SEO support (`sitemap.xml`, `robots.txt`, and meta tags in `includes/layout.njk` and `site/index.html.njk`).
- The `data/i18n.js` file has been split into separate files for each language:
  - `data/i18n-en.js`.
  - `data/i18n-es.js`.
  - `data/i18n-pt.js`.
  The file `data/i18n-licenseText.js` was also created, containing the MIT license text in English, which is common to all languages.

## 0.0.12

- Full responsiveness implemented. The MathJSLab execution flow panel in section 2 has been implemented as a carousel for mobile.

## 0.0.11

- Implementation of responsiveness on the page has begun. The menu has been implemented as a collapsible panel triggered by a button in the top-right corner. The language selector also takes the form of a button.

## 0.0.10

- A new multilingual pipeline section has been added after the overview,
  showing the MathJSLab processing flow with localized SVG diagrams in English,
  Portuguese and Spanish.
- The main navigation now links to the new pipeline section.

## 0.0.9

- A downloads/week badge has been added to the `mathjslab` project card.

## 0.0.8

- Application hub.

## 0.0.7

- Rewriting of content and insertion of links into the text.

## 0.0.6

- Addition of buttons for the MathJSLab calculator (`mathjslab-calc` project at https://calc.mathjslab.com)

## 0.0.5

- The temporary redirect to `app.mathjslab.com` has been replaced by an
  initial MathJSLab project homepage with navigation, project highlights,
  repository links, resources and educational/trademark notices.
- Multilingual pages have been added for English, Portuguese and Spanish using
  `intl-messageformat` and shared Nunjucks templates.
- The root page now redirects visitors to the appropriate localized page based
  on the browser language, while still providing manual language links.
- The Eleventy development environment has been fixed with a shared
  `eleventy.config.mjs` configuration, corrected layout directory settings and
  working `serve` and `watch` scripts.
- The homepage visual style has been updated, including responsive layout,
  smaller hero title text without intra-word wrapping, and enlarged MathJSLab
  logo/brand text in the header.
- The sitemap has been updated to include the localized pages.

## 0.0.4

- The system of downloading raw files from the repository on GitHub has been
  replaced by cloning the repository and copying selected files.
- The MathJSLab logo has been updated and the logo in the .md files has been
  modified to use logo image in the website (this repository).

## 0.0.3

- Some TypeScript development dependencies has been installed (`tsx`,
  `ts-config-paths` and `ts-node`).
- The ESLint and Prettier dependencies has been installed.
- The `dotenv` and `dotenv-expand` dependencies has been removed.
- All Webpack related dependencies has been removed.
- The following scripts in the `package.json`file has been renamed:
  * `"download-resources"` to `"download"`.
  * `"clean:download-resources"` to `"clean:download"`.

## 0.0.2

- Development dependencies installed in the project.
- Files generated in the organization repository have been added. It is
downloaded from the organization repository using the `download-files.cjs`
script, which also provides a means to clean up the downloaded files. The
download of these files is triggered by the script in the `package.json` file:
`"download-resources"`.
- Building the site using the `EleventyUtil.mjs` tool. Build configuration in
the `eleventy.build.mjs` file.

## 0.0.1

- Start of the project. The `mathjslab.com` web page was structured using
Nunjucks templates with data in Markdown and json files using the
`@11ty/eleventy` npm package through `npx` (withouth installing any
dependencies) for the replacement process during the build.
- The site temporarily redirects to `app.mathjslab.com`.
