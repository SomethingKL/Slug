require("./_strings")

const inform = (loc) => {
	console.log(
		" {gr~0:13} preformed on the {1}".fmt(
		"initial get", loc
	))
}

const msg = "This was your entry point to the website."

const initialGet = {
	home: () => {
		inform("Home page")
		return msg
	},
	projects: () => {
		inform("Projects page")
		return msg
	},
	documents: () => {
		inform("Documents page")
		return msg
	}
}

module.exports = initialGet