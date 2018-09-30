String.prototype.fmt = function() {
	const fixSize = (str = "", num = 0, rghtJstfy = false) => {
		return (str.length == num) ?
			str :
		(str.length < num) ?
			(rghtJstfy) ? " ".repeat(num-str.length) + str :
			str + " ".repeat(num-str.length) :
		(rghtJstfy) ?
			str.substring(str.length-num) :
			str.substring(0, num)
	}
	return (arguments.length) ? this.replace(
		/{(\d+)}/g,
		(exact, i) => {
			return (typeof arguments[i] == "undefined") ?
				exact : arguments[i]
		}
	).replace(
		/{(\d+):(_)?(\d+)?}/g,
		(exact, i, rghtJstfy, margin) => {
			return (typeof arguments[i] == "undefined") ?
				exact :
			(typeof margin != "undefined") ?
				(typeof rghtJstfy == "undefined") ?
				fixSize(arguments[i], margin) :
				fixSize(arguments[i], margin, true) :
			exact
		}
	) : this.toString()
}