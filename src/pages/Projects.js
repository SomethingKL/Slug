import React from "react"
import { Helmet } from "react-helmet"
import Page from "./core/Page"

class Projects extends Page {
	render() {
		const { data } = this.state
		return(
			<section className="projects">
				<Helmet
					title="Projects"
				/>

				Welcome to the Projects page.{data} Feel free to look around.
			</section>
		)
	}
}

export default Projects