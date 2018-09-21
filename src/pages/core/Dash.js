import React, { Component } from "react"

class Dash extends Component {
	render() {
		return(
			<div>
				<h1>
					Heading
				</h1>
				<section>
					{this.props.children}
				</section>
			</div>
		)
	}
}

export default Dash