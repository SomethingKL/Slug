import React, { Component, Fragment } from "react"

class Dash extends Component {
	render() {
		return(
			<Fragment>
				<h1>
					Heading
				</h1>
				
				{this.props.children}
			</Fragment>
		)
	}
}

export default Dash