// clean /public dir
const rimraf = require("rimraf");

module.exports = function (eleventyConfig) {
    //clean up output dir
    rimraf.windows.sync("public/");

    eleventyConfig.addPassthroughCopy({"./src/robots.txt": "/robots.txt"});
    eleventyConfig.addPassthroughCopy("./src/_includes/css");
    eleventyConfig.addPassthroughCopy("./src/img");

    eleventyConfig.addFilter("date", require("./src/_filters/date.js"));

    eleventyConfig.addCollection("arttags", function (collection) {
        let tags = new Array();
        for (let a of collection.getAll()[0].data.allart) {
            for (let t of a.tags){
                if (!tags.includes(t)){
                    tags.push(t);
                }
            }
        } 
        return tags.sort();
    });

    eleventyConfig.addCollection("artyears", function (collection) {
        const d = new Date();
        let newest = 2026;
        let oldest = 2022;
        let years = new Array();
        for (let y = newest; y >= oldest; y--) {
            years.push(y);
        } 
        return years;
    });

    return {
        passthroughFileCopy: true,
        dir: {
            data: "_data",
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};