import React from "react"
import { Helmet } from "react-helmet"
import Page from "./core/Page"

class Projects extends Page {
	render() {
		const { data } = this.pass
		return(
			<section className="projects">
				<Helmet
					title="Projects"
				/>

				{data} Feel free to look around.
			</section>
		)
	}
}

export default Projects