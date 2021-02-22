const path = require("path");

module.exports = {
	mode: "development",
	entry: "./source/index.js",
	output: {
		filename: "app.js",
		path: path.resolve(__dirname, "dist"),
	},
};
