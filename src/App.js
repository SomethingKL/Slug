import React, { Component } from "react"
import { Switch, Redirect, Route } from "react-router-dom"
import { routes, redirects } from "./routes"
import Missing from "./pages/Missing"

class App extends Component {
	render() {
		return(
			<div>
				<Switch>
					{redirects.map(({from, to}) => (
						<Redirect
							key={from}
							exact from={from}
							to={to}
						/>
					))}
					{routes.map(({ path, exact, component: Page, ...rest }) => (
						<Route
							key={path}
							path={path}
							exact={exact}
							render={(props) => (
								<Page {...props} {...rest}/>
							)}
						/>
					))}
					<Route render={ (props) => <Missing {...props}/> } />
				</Switch>
			</div>
		)
	}
}

export default App