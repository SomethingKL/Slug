import React, { Component } from "react"
import serialize from "serialize-javascript"

const MarkUp = ({ helmet, pass, markup }) => {
	return(`
		<!DOCTYPE html>
		<html ${helmet.htmlAttributes.toString()}>
			<head>
				${helmet.meta.toString()}
				${helmet.title.toString()}
				${helmet.link.toString()}
				<script src="bundle.js" defer></script>
				<script>
					window.__INITIAL_DATA__ = ${serialize(pass)}
				</script>
			</head>

			<body ${helmet.bodyAttributes.toString()}>
				<div id="root">
					${markup}
				</div>
			</body>
		</html>
	`)
}

export default MarkUp