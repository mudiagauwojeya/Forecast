const path = require("path");

module.exports = {
	mode: "development",
	entry: "./source/app.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist", "assets", "scripts"),
		publicPath: "dist",
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		writeToDisk: true,
	},
};
