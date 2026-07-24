# Release notes
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

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
