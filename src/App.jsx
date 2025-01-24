import React from "react"

import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Portfolio from "./components/Portfolio"

import "./App.css"
import ParticlesComponent from "./components/Particles"

const siteProps = {
	name: "Aman Papaney",
	title: "Full Stack Web Developer",
	email: "amanpapaney2003@gmail.com",
	gitHub: "aman-papaney",
	linkedIn: "aman-papaney",
}
const App = () => {
	return (
		<div id='main'>
			<ParticlesComponent id='particles' />
			<Header />
			<Home name={siteProps.name} title={siteProps.title} />
			<About />
			<Portfolio />
			<Footer {...siteProps}  />
		</div>
	)
}

export default App
