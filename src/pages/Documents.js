import React from "react"
import { Helmet } from "react-helmet"
import Page from "./core/Page"

class Documents extends Page {
	render() {
		const { data } = this.state
		return(
			<section className="documents">
				<Helmet
					title="Documents"
				/>

				Welcome to the Documents page. {data} Feel free to look around.
			</section>
		)
	}
}

export default Documents