import React, { Component } from "react"

class Page extends Component {
	constructor(props) {
		super(props)

		let data
		if (__isClient__){
			data = window.__INITIAL_DATA__
			delete window.__INITIAL_DATA__
		} else
			data = props.staticContext.data

		this.state = { data }
	}
}

export default Page