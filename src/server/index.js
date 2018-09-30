import React from "react"
import express from "express"
import cors from "cors"
import { renderToString } from "react-dom/server"
import { StaticRouter, matchPath } from "react-router-dom"
import { routes } from "../routes"
import App from "../App"
import MarkUp from "./markup"

const app = express()
const PORT = process.env.PORT || 80;

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

		res.status(200).send(MarkUp({
			pass: data,
			markup: markup
		}))
	}).catch(next)
})

app.listen(PORT, () => {
	console.log(`Server is listening on port: ${PORT}`)
})