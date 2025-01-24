import React from "react"

const description = "I'm a Full Stack Web Developer adept at creating robust API's and delivering efficient web solutions."

const skillsList = ["Web design", "API Development", "Version Control", "Authentication", "Responsive Design", "Database"]

const detailOrQuote =
	"I am passionate about solving problems in new creative ways to drive innovation. By leveraging my Web Development skills I continually look for new and better ways to make tech accessible by all."

const About = () => {
	return (
		<section className='padding' id='about'>
			<div
				style={{
					backgroundColor: "rgba(255,255,255,0.25)",
					color: "white",
					borderRadius: "20px",
					width: "50%",
					padding: "4rem",
					margin: "3rem auto",
					textAlign: "center",
				}}
			>
				<h2>About Myself</h2>
				<p className='large'>{description}</p>
				<hr />
				<ul
					style={{
						columns: 2,
						fontSize: "1.25rem",
						margin: "2rem 3rem",
						gap: "3rem",
						textAlign: "center",
					}}
				>
					{skillsList.map((skill) => (
						<li key={skill}>{skill}</li>
					))}
				</ul>
				<hr />
				<p style={{padding: "1rem 3rem 0"}}>{detailOrQuote}</p>
			</div>
		</section>
	)
}

export default About
