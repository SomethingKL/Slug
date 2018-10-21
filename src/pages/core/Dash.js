import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom"

class Dash extends Component {
	render() {
		return(
			<Fragment>
				<aside className="dash">
					<div className="group">
						Pages
					</div>
					<li>
						<NavLink to="/home">
							Home
						</NavLink>
					</li>
					<li>
						<NavLink to="/projects">
							Projects
						</NavLink>
					</li>
					<div className="group">
						Links
					</div>
				</aside>
				
				{this.props.children}
			</Fragment>
		)
	}
}

export default Dash