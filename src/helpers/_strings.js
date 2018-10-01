String.prototype.fmt = function() {
	// \x1b = \033 = escape
	const escape = "\x1b["
	const ANSI = {
		'rt': escape + "0m", // reset
		'bt': escape + "1m", // bright
		'un': escape + "4m", // underline
		'up': "\x1b[A\x1b[2K\r" // up and delete previous line
	}
	// \1b[38;2;r;g;bm
	//     foreground color: r=red, g=green, b=blue
	// \1b[48;2;r;g;bm
	//     foreground color: r=red, g=green, b=blue
	// foreground color
	const foreColor = {
		'bk': "30", // black
		'rd': "31", // red
		'bl': "34", // blue
		'wh': "37", // white
		'gr': "90", // gray
		'gn': "92", // green
		'yw': "93", // yellow
		'ma': "95", // magenta
		'cy': "96" // cyan
	}
	const fixStyle = (str, key, exact) => {
		if(key == 'rt')
			return str
		
		if(ANSI[key] !== undefined)
			return ANSI[key] + str + ANSI['rt']

		return (foreColor[key] === undefined) ?
			exact :
			escape + foreColor[key] + 'm' + str + ANSI['rt']
			
	}
	const fixSize = (str, num, rghtJstfy = false) => {
		if(str.length == num)
			return str

		if(str.length < num)
			return (rghtJstfy) ?
				' '.repeat(num-str.length) + str :
				str + ' '.repeat(num-str.length)

		return (rghtJstfy) ?
			str.slice(-num) :
			str.slice(0, num)
	}
	return (arguments.length) ? this.replace(
		/{(\w\w~)?(\d+)}/g,
		(exact, style, i) => {
			if(arguments[i] === undefined)
				return exact
			
			return (style === undefined) ?
				arguments[i] :
				fixStyle(arguments[i], style.slice(0, 2), exact)
		}
	).replace(
		/{(\w\w~)?(\d+):(_)?(\d+)?}/g,
		(exact, style, i, rghtJstfy, mrgn) => {
			if(arguments[i] === undefined || mrgn === undefined)
				return exact
			
			const str = (rghtJstfy === undefined) ?
				fixSize(arguments[i], mrgn) :
				fixSize(arguments[i], mrgn, true)
			
			return (style === undefined) ?
				str :
				fixStyle(str, style.slice(0, 2), exact)
		}
	) : this.toString()
}