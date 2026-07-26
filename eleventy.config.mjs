import path from 'node:path';

import EleventyUtil from './script/helper/EleventyUtil.mjs';

const eleventyBuild = JSON.parseFileSync(path.resolve('.', 'eleventy.build.json'));

const getStepOption = (step) => ({
    ...eleventyBuild.build.eleventy.steps[step].options,
    ...eleventyBuild.build.eleventy.commonOptions,
});

export const config = getStepOption(0);

export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory(config.dir.input);
    eleventyConfig.setDataDirectory(config.dir.data);
    eleventyConfig.setIncludesDirectory(config.dir.includes);
    eleventyConfig.setLayoutsDirectory(config.dir.layouts);
    eleventyConfig.setOutputDirectory(config.dir.output);

    eleventyConfig.addPassthroughCopy('./site/css');
    eleventyConfig.addPassthroughCopy('./site/img');
    eleventyConfig.addPassthroughCopy('./site/archive');
    EleventyUtil.configAddTemplateFormat(eleventyConfig, ['njk', 'scss'], '\\./site/');

    EleventyUtil.configAddEntries(eleventyConfig, EleventyUtil.utilFilters, 'addFilter');
    EleventyUtil.configAddEntries(eleventyConfig, EleventyUtil.utilShortcodes, 'addShortcode');
    EleventyUtil.configAddRenderTemplateTools(eleventyConfig, true);

    return config;
}
