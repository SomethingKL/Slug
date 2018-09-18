import React, { Component } from "react"

class Page extends Component {
	constructor(props) {
		super(props)

		let data
		if(__isClient__){
			data = window.__INITIAL_STATE__
			if(this.props.location.redirected)
				window.location.reload()
		} else
			data = props.staticContext.data

		this.pass = { data }
	}
}

export default Page