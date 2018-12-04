import React, { Component, Fragment } from "react"
import { NavLink } from "react-router-dom"

class Dash extends Component {
	constructor(props) {
		super(props);

		this.state = {
			nav: false,
			lnk: false
		}
	}
	toggleNav() {
		this.setState({
			nav: !this.state.nav,
			lnk: false
		})
	}
	navGroup() {
		return(
			<Fragment>
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
					<NavLink to="/documents">
						<i className="far fa-file-alt"></i>
						Documents
					</NavLink>
				</li>
				<li>
					<NavLink to="/notfound">
						<i className="fas fa-question"></i>
						404
					</NavLink>
				</li>
			</Fragment>
		)
	}
	toggleLnk() {
		this.setState({
			nav: false,
			lnk: !this.state.lnk
		})
	}
	lnkGroup() {
		return(
			<Fragment>
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
			</Fragment>
		)
	}
	render() {
		return(
			<Fragment>
				<aside className="dash">
					<img src={"./assets/logo.svg"} alt="logo" className="logo" />

					<section className="topDash">
						<section className="topBar">
							<div className="topHeading" onClick={() => this.toggleNav()}>
								Navigation
							</div>

							<div className="topHeading" onClick={() => this.toggleLnk()}>
								Links
							</div>
						</section>

						{this.state.nav ? this.navGroup() : null}
						{this.state.lnk ? this.lnkGroup() : null}
					</section>

					<section className="sideDash">
						<section className="sideGroup">
							<div className="sideHeading">
								Navigation
							</div>
							
							{this.navGroup()}
						</section>

						<section className="sideGroup">
							<div className="sideHeading">
								Links
							</div>
							
							{this.lnkGroup()}
						</section>
					</section>
				</aside>
				
				{this.props.children}
			</Fragment>
		)
	}
}

export default Dash