import React from "react"
import Page from "./core/Page"

class Missing extends Page {
	render() {
		const { data } = this.pass
		return(
			<div>
				Sorry there is no page here.
			</div>
		)
	}
}

export default Missing