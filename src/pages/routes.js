import Home from "./Home"
import Projects from "./Projects"

const routes = [
	{
		path: "/home",
		exact: true,
		component: Home
	},
	{
		path: "/projects",
		exact: true,
		component: Projects
	}
]

const redirects = [
	{
		from: "/",
		to: "/home"
	}
]

export { routes, redirects }