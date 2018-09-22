import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"
import style from "./scss/notfound.scss"

class NotFound extends Page {
	render() {
		const { data } = this.pass
		return(
			<div className={style.component}>
				<Helmet
					title="404"
				/>

				Sorry there is no page here.
			</div>
		)
	}
}

export default NotFound