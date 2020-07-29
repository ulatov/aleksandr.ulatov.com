/*
module.exports = {
    dir: {
      input: "dev-site",
      output: "docs"
    }
  };
*/

module.exports = function(eleventyConfig) {
  /*
  eleventyConfig.setTemplateFormats([
    "jpg",
    "css",  // css is not yet a recognized template extension in Eleventy
    "CNAME"
  ]);
  */
  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: "dev-site",
      layouts: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
  };
};