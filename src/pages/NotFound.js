import React, { Component } from "react"
import { Helmet } from "react-helmet"

class NotFound extends Component {
	render() {
		return(
			<section className="notfound">
				<Helmet
					title="404"
				/>
				
				There is no page here.
			</section>
		)
	}
}

export default NotFound