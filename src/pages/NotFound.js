import React, { Component } from "react"
import { Helmet } from "react-helmet"

class NotFound extends Component {
	render() {
		return(
			<div>
				<Helmet
					title="404"
				/>
				
				There is no page here.
			</div>
		)
	}
}

export default NotFound