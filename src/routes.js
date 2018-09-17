import Home from "./pages/Home"
import Projects from "./pages/Projects"

const routes = [
	{
		path: "/home",
		exact: true,
		component: Home,
		pass: () => new Promise(function(resolve, reject) {
			resolve("This is the Home page!")
		})
	},
	{
		path: "/projects",
		exact: true,
		component: Projects,
		pass: () => new Promise(function(resolve, reject) {
			resolve("This is the Projects page!")
		})
	}
]

const redirects = [
	{
		from: "/",
		to: "/home"
	}
]

export { routes, redirects }