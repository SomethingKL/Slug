require("./_strings")

const inform = (loc) => {
	console.log(
		" {gr~0:13} preformed on the {1}".fmt(
		"initial get", loc
	))
}

const initialGet = {
	home: () => {
		inform("Home page")
		return "This was your entry point to the website."
	},
	projects: () => {
		inform("Projects page")
		return "This was your entry point to the website."
	}
}

module.exports = initialGet