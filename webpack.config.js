const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
		watchContentBase: true,
		writeToDisk: true,
	},
	devtool: "eval-source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
			linkType: "text/css",
		}),
	],
	module: {
		rules: [
			{
				test: /\.(c|sc|sa)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					// "style-loader",
					"css-loader",
					// "postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.m?js$/i,
				exclude: /node_modules$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
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
