import Home from "./pages/Home"
import Projects from "./pages/Projects"

const routes = [
	{
		path: "/",
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
		from: "/home",
		to: "/"
	}
]

export { routes, redirects }