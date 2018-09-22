import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"
import style from "./scss/projects.scss"

class Projects extends Page {
	render() {
		const { data } = this.pass
		return(
			<div className={style.component}>
				<Helmet
					title="Projects"
				/>

				{data} Feel free to look around.
			</div>
		)
	}
}

export default Projects