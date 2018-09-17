import React, { Component } from "react"

class Home extends Component {
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
				This is the Home page! {data}
			</div>
		)
	}
}

export default Home