import React from "react"
import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import App from "../App"
import { routes } from "../routes"


const app = express()
const PORT = process.env.PORT || 3000;

app.use(cors())

// this is where bundle.js is
app.use(express.static("public"))

app.get("*", (req, res, next) => {
	const activeRoute = routes.find(
		(route) => matchPath(req.url, route)
	) || {}

	const promise = (activeRoute.pass) ?
		activeRoute.pass(req.path) : Promise.resolve()

	promise.then((data) => {
		const context = {data}
		const markup = renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)

		res.send(`
			<!DOCTYPE html>
			<html>
				<head>
					<title>SomeSlug</title>
					<script src="/bundle.js" defer></script>
					<script>
						window.__INITIAL_STATE__ = ${serialize(data)}
					</script>
				</head>

				<body>
					<div id="app">${markup}</div>
				</body>
			</html>
		`)
	}).catch(next)
})

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`)
})