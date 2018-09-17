import React from "react"
import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import serialize from "serialize-javascript"
import App from "../pages/App"


const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())

// this is where bundle.js is
app.use(express.static("public"))

app.get("*", (req, res, next) => {
	const data = 'Just keep coding...'
	const markup = renderToString(
		<App data={data}/>
	)

	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>SomeSlug</title>
				<script src="/bundle.js" defer></script>
				<script>
					window.__INITIAL_DATA__ = ${serialize(data)}
				</script>
			</head>

			<body>
				<div id="app">${markup}</div>
			</body>
		</html>
	`)
})

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`)
})