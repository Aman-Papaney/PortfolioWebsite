import React from "react"
import PropTypes from "prop-types"

import envelopeIcon from "../images/socials/envelope.svg"
import gitHubIcon from "../images/socials/github.svg"
import linkedInIcon from "../images/socials/linkedin.svg"

const Footer = (props) => {
	const {email, gitHub, linkedIn, name} = props

	return (
		<div
			id='footer'
			style={{
				backgroundColor: "rgba(255,255,255,0.25)",
				color: "white",
				borderRadius: "20px",
				width: "100%",
				height: "fit-cotent",
				padding: "2rem 0px",
				textAlign: "center",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "2.5rem",
				}}
			>
				{email && (
					<a href={`mailto:${email}`}>
						<img src={envelopeIcon} alt='email' className='socialIcon' />
					</a>
				)}
				{gitHub && (
					<a href={`https://github.com/${gitHub}`} target='_blank' rel='noopener noreferrer'>
						<img src={gitHubIcon} alt='GitHub' className='socialIcon' />
					</a>
				)}
				{linkedIn && (
					<a href={`https://www.linkedin.com/in/${linkedIn}`} target='_blank' rel='noopener noreferrer'>
						<img src={linkedInIcon} alt='LinkedIn' className='socialIcon' />
					</a>
				)}
			</div>
			<p className='small' style={{marginTop: "1rem", color: "white"}}>
				Created by {name}
			</p>
		</div>
	)
}

Footer.defaultProps = {
	name: "",
}

Footer.propTypes = {
	devDotTo: PropTypes.string,
	email: PropTypes.string,
	gitHub: PropTypes.string,
	instagram: PropTypes.string,
	linkedIn: PropTypes.string,
	medium: PropTypes.string,
	name: PropTypes.string.isRequired,
	primaryColor: PropTypes.string,
	twitter: PropTypes.string,
	youTube: PropTypes.string,
}

export default Footer
