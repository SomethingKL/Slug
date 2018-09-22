import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"
import style from "./scss/home.scss"

class Home extends Page {
	render() {
		const { data } = this.pass
		return(
			<div className={style.component}>
				<Helmet
					title="Home"
				/>

				{data} Feel free to look around.
			</div>
		)
	}
}

export default Home