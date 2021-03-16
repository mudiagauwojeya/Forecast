const path = require("path");
// const HtmlWebPackPlugin = require("html-webpack-plugin");
// const WorkboxPlugin = require("workbox-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./source/app.js",
		weather: "./source/weather/weather.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist", "assets", "scripts"),
		publicPath: "dist",
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		writeToDisk: true,
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	// plugins: [
	// 	new WorkboxPlugin.GenerateSW({
	// 		clientsClaim: true,
	// 		skipWaiting: true,
	// 	}),
	// ],
};
