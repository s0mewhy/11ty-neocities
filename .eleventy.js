module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy({ './src/robots.txt': '/robots.txt' });
    eleventyConfig.addPassthroughCopy("./src/_includes/css");
    eleventyConfig.addPassthroughCopy("./src/img");

    eleventyConfig.addFilter("date", require("./src/_filters/date.js"));

/*     eleventyConfig.addGlobalData("arttags", () => {
        let tags = new Array();
        for(let i = 0; i < allart.length; i++) {
            tags = tags.concat(allart[i].tags);
        }
		return tags.sort();
	});
    */
    return {
        passthroughFileCopy: true,
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};