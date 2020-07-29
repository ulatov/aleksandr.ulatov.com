
module.exports = function(eleventyConfig) {
  
  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "html",
    "jpg",
    "css", 
    "CNAME"
  ]);
  
  return {
    dir: {
      input: "dev-site",
      layouts: "_includes",
      output: "docs"
    },
    passthroughFileCopy: true
  };

};