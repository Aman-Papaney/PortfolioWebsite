import React from "react"
import arrowSvg from "../images/down-arrow.svg"
import PropTypes from "prop-types"

const Home = ({name, title}) => {
	return (
		<section id='home' className='min-height'>
			<div style={{position: "absolute", color: "white", top: "8rem", left: "3rem", width: "fit-content"}}>
				<h1>{name}</h1>
				<h2 style={{marginTop: "2rem"}}>{title}</h2>
			</div>
			<div style={{position: "absolute", bottom: "3rem", left: "50%"}}>
				<img src={arrowSvg} style={{height: "3rem", width: "3rem"}} />
			</div>
		</section>
	)
}

Home.defaultProps = {
	name: "",
	title: "",
}

Home.propTypes = {
	name: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}

export default Home
