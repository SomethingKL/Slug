import React, { Component } from "react"

class Home extends Component {
	constructor(props) {
		super(props)

		let data = (__isClient__) ? 
			window.__INITIAL_STATE__ : props.staticContext.data

		this.pass = { data }
	}
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