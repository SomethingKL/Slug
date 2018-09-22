import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"
import styles from "./scss/home.scss"

class Home extends Page {
	render() {
		const { data } = this.pass
		return(
			<div className={styles.component}>
				<Helmet
					title="Home"
				/>

				{data} Feel free to look around.
			</div>
		)
	}
}

export default Home