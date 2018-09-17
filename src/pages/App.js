import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import routes from "./routes"
import Missing from "./Missing"

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
				{
					routes.map(({ path, exact, component: C, ...rest }) => (
						<Route
							key={path}
							path={path}
							exact={exact}
							render={(props) => (
								<C {...props} {...rest}/>
							)}
						/>
					))
				}
				<Route render={ (props) => <Missing {...props}/> } />
				</Switch>
			</div>
		)
	}
}

export default App