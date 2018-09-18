import React, { Component } from "react"

class Page extends Component {
	constructor(props) {
		super(props)

		const data = (__isClient__) ?
			window.__INITIAL_STATE__ : props.staticContext.data

		this.pass = { data }
	}
}

export default Page