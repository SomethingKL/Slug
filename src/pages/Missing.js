import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"

class Missing extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				<Helmet>
					<title>404</title>
				</Helmet>

				Sorry there is no page here.
			</div>
		)
	}
}

export default Missing