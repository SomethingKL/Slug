const rules = ({ loadJS, loadSCSS }) => [
	{ 
		test: /\.(js|jsx)$/,
		exclude: /(node_modules)/,
		use: {
			loader: loadJS
		}
	},
	{
		test: /\.(scss)$/,
		use: [
			{
				loader: loadSCSS
			},
			{
				loader: "css-loader",
				options: {
					modules: true,
					importLoaders: 1,
					localIdentName: "[name]_[local]_[hash:base64:5]",
					sourceMap: true
				}
			},
			{
				loader: "sass-loader"
			}
		]
	}
]

module.exports = rules