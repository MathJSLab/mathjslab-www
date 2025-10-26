# Release notes
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.0.4
- The system of downloading raw files from the repository on GitHub has been
  replaced by cloning the repository and copying selected files.
- The MathJSLab logo has been updated.

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
