module.exports = function(eleventyConfig) {
  
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "html",
    "css",
    "jpg"
  ]);

  eleventyConfig.addPassthroughCopy("*.jpg");
  eleventyConfig.addPassthroughCopy("*.css");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  return {
    dir: {
      input: "dev-site",
      layouts: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
  };
};