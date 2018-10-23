const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const configRules = require("./config.rules")

const clientConfig = {
	mode: "production",
	entry: "./src/client/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: configRules({})
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "true"
		}),
		new CopyWebpackPlugin([
			{ from: "src/pages/assets/", to: "assets/" }
		])
	]
}

const serverConfig = {
	mode: "production",
	entry: [ "./src/server/index.js", "./src/pages/styling/core/styles.scss" ],
	target: "node",
	externals: [ nodeExternals() ],
	output: {
		path: __dirname,
		filename: "server.js",
		publicPath: "/"
	},
	module: {
		rules: configRules({
			caller: "server",
			styleLoader: MiniCssExtractPlugin.loader
		})
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "false"
		}),
		new MiniCssExtractPlugin({
			filename: "./public/styles.css",
		})
	]
}

module.exports = [ clientConfig, serverConfig ]