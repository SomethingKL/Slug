import React from "react"
import { Helmet } from "react-helmet"
import Page from "./core/Page"

class Home extends Page {
	render() {
		const { data } = this.pass
		return(
			<section className="home">
				<Helmet
					title="Home"
				/>
				
				{data} Feel free to look around.
			</section>
		)
	}
}

export default Home