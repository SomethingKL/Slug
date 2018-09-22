import React, { Component } from "react"
import { Helmet } from "react-helmet"
import styles from "./scss/notfound.scss"

class NotFound extends Component {
	render() {
		return(
			<div className={styles.component}>
				<Helmet
					title="404"
				/>
				
				There is no page here
			</div>
		)
	}
}

export default NotFound