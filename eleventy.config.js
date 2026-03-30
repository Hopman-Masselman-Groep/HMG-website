import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import embedEverything from "eleventy-plugin-embed-everything";

export default function (eleventyConfig) {

	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/assets": "." });
	
	// Plugins
	eleventyConfig.addPlugin(eleventyNavigationPlugin);
	eleventyConfig.addPlugin(embedEverything, {});

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