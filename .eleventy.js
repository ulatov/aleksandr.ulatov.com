/*
module.exports = {
    dir: {
      input: "dev-site",
      output: "docs"
    }
  };
*/

module.exports = function(eleventyConfig) {
  eleventyConfig.setTemplateFormats([
    "jpg",
    "css",  // css is not yet a recognized template extension in Eleventy
    "CNAME"
  ]);
  return {
    dir: {
      input: "dev-site",
      layouts: "dev-site/_includes",
      output: "docs"
    }
  };
};