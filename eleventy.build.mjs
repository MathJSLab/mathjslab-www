import path from 'node:path';
import { fileURLToPath } from 'node:url';

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
 * Get Eleventy configuration option.
 * @param {*} s Build step.
 * @returns
 */
const getStepOption = (s) => ({
    ...site.build.eleventy.steps[s].options,
    ...site.build.eleventy.commonOptions,
});

/**
 * Build step options and configuration.
 */
const stepData = [
    {
        options: getStepOption(0),
        config: async function (eleventyConfig) {
            eleventyConfig.addPassthroughCopy('./site/css');
            eleventyConfig.addPassthroughCopy('./site/img');
            EleventyUtil.configAddTemplateFormat(eleventyConfig, ['njk', 'scss'], '\\./site/');
            EleventyUtil.configAddRenderTemplateTools(eleventyConfig, true);
            EleventyUtil.configAddDateTimeTools(eleventyConfig);
            return getStepOption(0);
        },
    }
];

/**
 * Run Eleventy static build.
 */
EleventyUtil.console.log(`Building ${site.title} site <${site.url}> repository (build script: ${scriptName}) ...`);
EleventyUtil.console.log(`Running step01 ...`);
EleventyUtil.run(stepData[0].config, stepData[0].options, () => {
    EleventyUtil.console.log(`Running step01 done.`);
    EleventyUtil.console.log(`Building ${site.title} site <${site.url}> repository (build script: ${scriptName}) done.`);
});
// .then()
// .catch();
