import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { routes, redirects } from "./routes"
import Dash from "./pages/core/Dash"
import NotFound from "./pages/NotFound"

class App extends Component {
	render() {
		return(
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
							<Dash>
								<Content {...props} {...rest} />
							</Dash>
						)}
					/>
				))}
				<Route render={(props) => (
					<Dash>
						<NotFound {...props} />
					</Dash>
				)} />
			</Switch>
		)
	}
}

export default App