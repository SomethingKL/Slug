require("./src/helpers/_strings")

function jsRules(jsLoader) {
	return {
		test: /\.(js)$/,
		exclude: /(node_modules)/,
		use: {
			loader: jsLoader
		}
	}
}
function scssRules(scssLoader) {
	return {
		test: /\.(scss)$/,
		use: [
			scssLoader,
			"css-loader",
			"sass-loader"
		]
	}
}

const configRules = ({
	caller = "client",
	jsLoader = "babel-loader",
	styleLoader = "style-loader"
}) => {
	console.log(
		"{0}:\n    {1:7}loader:  {2}\n    {3:7}loader:  {4}".fmt(
		caller, ".js", jsLoader, ".scss", styleLoader
	))
	return (caller == "server") ? [
		jsRules(jsLoader),
		scssRules(styleLoader)
	] : [ jsRules(jsLoader) ]
}

module.exports = configRules