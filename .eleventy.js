module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./site/css");
    eleventyConfig.addPassthroughCopy("./site/img");
    return {
        dir: {
            input: "./site",
            includes: "../includes",
            data: "../data",
            output: "www"
        },
        pathPrefix: "/",
    };
};
