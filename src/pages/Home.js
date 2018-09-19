import React from "react"
import Page from "./core/Page"
import { Helmet } from "react-helmet"

class Home extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				<Helmet>
					<title>Home</title>
				</Helmet>

				{data} Feel free to look around.
			</div>
		)
	}
}

export default Home