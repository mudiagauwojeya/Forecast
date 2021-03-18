const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: {
		app: "./source/app.js",
		weather: "./source/components/weather.js",
		finder: "./source/components/finder.js",
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
		}),
	],
	module: {
		rules: [
			{
				test: /\.(c|sc|sa)ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: { importLoaders: 2 },
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [["autoprefixer"]],
							},
						},
					},
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
