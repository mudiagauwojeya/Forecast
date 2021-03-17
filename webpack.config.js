const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
		watchContentBase: true,
		liveReload: true,
		port: 3000,
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
};
