import React from "react"
import { hydrate } from "react-dom"
import App from "../pages/App"

hydrate(
	<App />,
	document.getElementById('app')
);