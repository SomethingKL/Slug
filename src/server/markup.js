import React, { Component } from "react"
import serialize from "serialize-javascript"

const MarkUp = ({ helmMeta, helmTitle, pagePass, pageMarkup }) => {
	return(`
		<!DOCTYPE html>
		<html>
			<head>
				${helmMeta}
				${helmTitle}
				<script src="bundle.js" defer></script>
				<script>
					window.__INITIAL_DATA__ = ${serialize(pagePass)}
				</script>
			</head>

			<body>
				<div id="root">${pageMarkup}</div>
			</body>
		</html>
	`)
}

export default MarkUp