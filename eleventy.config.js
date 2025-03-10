export default function (eleventyConfig) {

	// Passthrough
	eleventyConfig.addPassthroughCopy({ "src/assets": "." });

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