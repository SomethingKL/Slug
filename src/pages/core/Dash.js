import React, { Component } from "react"

class Dash extends Component {
	render() {
		return(
			<div>
				<h1>
					Heading
				</h1>
				
				{this.props.children}
			</div>
		)
	}
}

export default Dash