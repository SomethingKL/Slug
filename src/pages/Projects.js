import React from "react"
import Page from "../Page"

class Projects extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				{data} Feel free to look around.
			</div>
		)
	}
}

export default Projects