import React, { Component } from "react"

class Projects extends Component {
	constructor(props) {
		super(props)

		let data = (__isClient__) ? 
			window.__INITIAL_STATE__ : props.staticContext.data

		this.pass = { data }
	}
	render() {
		const {data} = this.pass
		return (
			<div>
				This is the Projects page! {data}
			</div>
		)
	}
}

export default Projects