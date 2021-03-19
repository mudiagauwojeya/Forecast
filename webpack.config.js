const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		app: "./source/app.js",
		weather: "./source/components/weather.js",
		finder: "./source/components/finder.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "dist", "assets", "scripts"),
	},
	watch: true,
	// devServer: {
	// 	contentBase: path.resolve(__dirname, "dist"),
	// 	watchOptions: {
	// 		poll: 2000,
	// 		ignored: /node_modules/,
	// 	},
	// 	writeToDisk: true,
	// },
	devtool: "eval-source-map",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
		new BrowserSyncPlugin({
			// browse to http://localhost:3000/ during development
			host: "localhost",
			port: 3000,
			server: { baseDir: ["dist"] },
			files: ["./dist/*.html", "./dist/service-worker.js"],
			// proxy the Webpack Dev Server endpoint
			// (which should be serving on http://localhost:3100/)
			// through BrowserSync
			// proxy: "http://localhost:8080/",
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
