import React, { Component } from 'react'

class App extends Component {
	render() {
		return (
			<div>
				server msg: {this.props.data}
			</div>
		)
	}
}

export default App