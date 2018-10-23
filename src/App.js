import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { routes, redirects } from "./routes"
import Dash from "./pages/core/Dash"
import NotFound from "./pages/NotFound"

class App extends Component {
	render() {
		return(
			<Dash>
				<Switch>
					{redirects.map(({ from, to }) => (
						<Redirect
							key={from}
							exact from={from}
							to={to}
						/>
					))}
					{routes.map(({ path, exact, component: Content, ...rest }) => (
						<Route
							key={path}
							path={path}
							exact={exact}
							render={(props) => (
								<Content {...props} {...rest} />
							)}
						/>
					))}
					<Route render={(props) => (
						<NotFound {...props} />
					)} />
				</Switch>
			</Dash>
		)
	}
}

export default App