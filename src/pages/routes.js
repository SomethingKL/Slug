import Home from "./Home"
import Projects from "./Projects"

const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/projects',
		exact: true,
		component: Projects
	}
]

export default routes