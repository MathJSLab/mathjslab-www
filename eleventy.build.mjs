import path from 'node:path';
import { fileURLToPath } from 'node:url';

import eleventyConfig, { config as eleventyOptions } from './eleventy.config.mjs';
import EleventyUtil from './script/helper/EleventyUtil.mjs';

/**
 * This filename.
 */
const scriptName = path.basename(fileURLToPath(import.meta.url));

/**
 * The `data/site.json` data parsed.
 */
const site = JSON.parseFileSync(path.resolve('.', 'data', 'site.json'));

/**
 * Run Eleventy static build.
 */
EleventyUtil.console.log(`Building ${site.title} site <${site.url}> repository (build script: ${scriptName}) ...`);
EleventyUtil.console.log(`Running step01 ...`);
EleventyUtil.run(eleventyConfig, eleventyOptions, () => {
    EleventyUtil.console.log(`Running step01 done.`);
    EleventyUtil.console.log(`Building ${site.title} site <${site.url}> repository (build script: ${scriptName}) done.`);
});
// .then()
// .catch();
