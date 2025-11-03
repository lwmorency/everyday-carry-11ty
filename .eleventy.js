module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addShortcode("figure", (src, alt, caption) => `
    <figure class="figure">
      <img src="${src}" alt="${alt}">
      ${caption ? `<figcaption>${caption}</figcaption>` : ""}
    </figure>
  `);
  return {
    dir: { input: "src", includes: "_includes", layouts: "_includes/layouts" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
