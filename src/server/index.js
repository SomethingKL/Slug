import React from "react"
import express from "express"
import cors from "cors"
import serialize from "serialize-javascript"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import { routes } from "../routes"
import App from "../App"
import { Helmet } from "react-helmet"

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
		activeRoute.pass() : Promise.resolve()

	promise.then((data) => {
		const context = {data}
		const markup = renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		)

		const helmet = Helmet.renderStatic()

		res.send(`
			<!DOCTYPE html>
			<html>
				<head>
					${helmet.meta.toString()}
					${helmet.title.toString()}
					<script src="bundle.js" defer></script>
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