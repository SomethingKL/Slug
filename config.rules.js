require("./src/helpers/_strings")
const memoize = require("./src/helpers/_wrappers")

const jsRules = (jsLoader) => {
	return {
		test: /\.(js)$/,
		exclude: /(node_modules)/,
		use: {
			loader: jsLoader
		}
	}
}
const scssRules = (scssLoader) => {
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
	if(caller == "server") {
		console.log(
			"{0}:\n    {yw~1:7}loader:  {2}\n    {yw~3:7}loader:  {4}".fmt(
			caller, ".js", jsLoader, ".scss", styleLoader
		))
		function printAdd(num) { return "number given: "+num}
		let ffff = memoize(printAdd)
		let n = 0
		while(n++ < 6){
			console.log("{cy~0}".fmt(ffff(Math.floor(Math.random()*3)+1)))
		}
		return [ jsRules(jsLoader), scssRules(styleLoader) ]
	} else {
		console.log(
			"{0}:\n    {yw~1:7}loader:  {2}".fmt(
			caller, ".js", jsLoader
		))
		return [ jsRules(jsLoader) ]
	}
}

module.exports = configRules