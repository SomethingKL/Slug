import React, { Component } from "react"
import { Helmet } from "react-helmet"
import serialize from "serialize-javascript"

const MarkUp = ({ pass, markup }) => {
	const helmet = Helmet.renderStatic()
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
				<link href="styles.css" rel="stylesheet" type="text/css" />
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