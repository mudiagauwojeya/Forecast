const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		app: "./source/app.js",
	},
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist", "assets", "scripts"),
	},
	watch: true,
	devtool: "eval-source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "styles.css",
		}),
		new BrowserSyncPlugin({
			host: "localhost",
			port: 3000,
			server: { baseDir: ["dist"] },
			files: ["./dist/index.html", "./dist/service-worker.js"],
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
