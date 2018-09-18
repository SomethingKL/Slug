import React from "react"
import Page from "../Page"

class Home extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				{data} Feel free to look around.
			</div>
		)
	}
}

export default Home