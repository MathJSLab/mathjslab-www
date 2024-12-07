# Release notes
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## 0.0.2
- Development dependencies installed in the project.
- Files generated in the organization repository have been added. It is downloaded from the organization
repository using the `download-files.cjs` script, which also provides a means
to clean up the downloaded files. The download of these files is triggered by
the script in the `package.json` file called "download-resources".
- Building the site using the `EleventyUtil.mjs` tool. Build configuration in the `eleventy.build.mjs` file.

## 0.0.1
- Start of the project. The `mathjslab.com` web page was structured using `nunjucks` templates with data in Markdown and json files using the `@11ty/eleventy` npm package through `npx` (withouth installing any dependencies) for the replacement process during the build.
- The site temporarily redirects to `app.mathjslab.com`.
