import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom"

class Dash extends Component {
	render() {
		return(
			<Fragment>
				<aside className="dash">
					<img src={"./assets/logo.svg"} alt="logo" className="logo" />
					<div className="group">
						<div className="heading">
							Navigation
						</div>

						<li>
							<NavLink to="/home">
								<i className="fas fa-home"></i>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to="/projects">
								<i className="fas fa-project-diagram"></i>
								Projects
							</NavLink>
						</li>
						<li>
							<NavLink to="/notfound">
								<i className="far fa-file-alt"></i>
								Documents
							</NavLink>
						</li>
					</div>
					<div className="group">
						<div className="heading">
							Links
						</div>

						<li>
							<a href="https://www.linkedin.com/in/ross-brandt-1082a3b6">
								<i className="fab fa-linkedin"></i>
								LinkedIn
							</a>
						</li>
						<li>
							<a href="https://github.com/SomethingKL">
								<i className="fab fa-github"></i>
								GitHub
							</a>
						</li>
					</div>
				</aside>
				
				{this.props.children}
			</Fragment>
		)
	}
}

export default Dash