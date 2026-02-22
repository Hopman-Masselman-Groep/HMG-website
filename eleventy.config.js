import eleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default function (eleventyConfig) {

	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/assets": "." });
	
	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	return {
		dir: {
			input: "src/pages",
			output: "public",
			includes: "../includes",
			layouts: "../layouts",
			data: "../data",
		},
	};
};