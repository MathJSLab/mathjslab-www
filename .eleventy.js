module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./_site/css");
  eleventyConfig.addPassthroughCopy("./_site/img");
    return {
      dir: {
        input: "./_site",
        includes: "../_includes",
        data: "../_data",
        output: "_www"
      },
      pathPrefix: "/",
    };
  };
  