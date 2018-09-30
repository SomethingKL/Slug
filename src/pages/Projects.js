import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"

class Projects extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				<Helmet
					title="Projects"
				/>

				{data} Feel free to look around.
			</div>
		)
	}
}

export default Projects