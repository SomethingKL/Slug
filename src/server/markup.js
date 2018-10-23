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
				<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
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