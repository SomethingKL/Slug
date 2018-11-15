import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Documents from "./pages/Documents"
import initialGet from "./helpers/_init_get"

const routes = [
	{
		path: "/",
		exact: true,
		component: Home,
		pass: () => new Promise(function(resolve, reject) {
			resolve(initialGet.home())
		})
	},
	{
		path: "/projects",
		exact: true,
		component: Projects,
		pass: () => new Promise(function(resolve, reject) {
			resolve(initialGet.projects())
		})
	},
	{
		path: "/documents",
		exact: true,
		component: Documents,
		pass: () => new Promise(function(resolve, reject) {
			resolve(initialGet.documents())
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