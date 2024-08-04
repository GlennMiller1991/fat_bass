const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const Dotenv = require("dotenv-webpack")

module.exports = {
	mode: "development",
	entry: "./src/index.tsx",
	devtool: "inline-source-map",
	plugins: [
		new HtmlWebpackPlugin({
			template: "./static/index.html",
			inject: "head",
		}),
		new Dotenv({ path: "./static/.env" }),
	],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss", ".module.css", ".module.scss"],
	},
	output: {
		filename: "index_[fullhash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "style-loader",
						options: {
							injectType: "styleTag",
						},
					},
					{
						loader: "css-loader",
						options: {
							importLoaders: 2,
							modules: true,
						},
					},
					{
						loader: "sass-loader",
					},
				],
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "ts-loader",
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", ["@babel/preset-react", { runtime: "automatic" }]],
					},
				},
			},
		],
	},
}
