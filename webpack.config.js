const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")
const loadRules = require("./config.rules.js")

const clientConfig = {
	mode: "production",
	entry: "./src/client/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: loadRules({
			loadJS: "babel-loader",
			loadSCSS: "style-loader"
		})
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "true"
		})
	]
}

const serverConfig = {
	mode: "production",
	entry: "./src/server/index.js",
	target: "node",
	externals: [ nodeExternals() ],
	output: {
		path: __dirname,
		filename: "server.js",
		publicPath: "/"
	},
	module: {
		rules: loadRules({
			loadJS: "babel-loader",
			loadSCSS: "isomorphic-style-loader"
		})
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "false"
		})
	]
}

module.exports = [ clientConfig, serverConfig ]