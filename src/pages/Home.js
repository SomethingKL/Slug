import React from "react"
import { Helmet } from "react-helmet"
import Page from "./core/Page"

class Home extends Page {
	render() {
		const { data } = this.state
		return(
			<section className="home">
				<Helmet
					title="Home"
				/>
				
				Welcome to the Home page.{data} Feel free to look sound.
			</section>
		)
	}
}

export default Home