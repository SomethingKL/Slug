const path = require("path")
const webpack = require("webpack")
const nodeExternals = require("webpack-node-externals")

const clientConfig = {
	entry: "./src/client/index.js",
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "true"
		})
	]
}

const serverConfig = {
	entry: "./src/server/index.js",
	target: "node",
	externals: [ nodeExternals() ],
	output: {
		path: __dirname,
		filename: "server.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{ 
				test: /\.(js)$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader"
				}
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			__isClient__: "false"
		})
	]
}

module.exports = [ clientConfig, serverConfig ]