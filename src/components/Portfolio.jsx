import React from "react"

const projectList = [
	{
		title: "The Chronicles",
		description1:
			"I developed a Blog Application for blog posts and integrated Google OAuth2 for seamless user login. The frontend was built using React.js, featuring reusable components for a modular codebase.",
		description2:
			"For data management, I utilized MongoDB's flexible schema to effectively handle blog posts and user information. Additionally, I implemented pagination and filtering features to enhance user experience, making it easier for users to navigate and find relevant content.",

		url: "https://github.com/Aman-Papaney/Full-Stack-Blog-App",
	},
	{
		title: "NutriVerse",
		description1:
			"I developed a robust RESTful API to provide a list of food items and facilitate tracking, implementing user authentication with JSON Web Tokens (JWT) and bcrypt for secure access. To enhance performance, I employed a rate limiting mechanism through middleware.",
		description2:
			"Additionally, I designed a flexible MongoDB schema for efficient storage and retrieval of food item data, and implemented robust error handling to manage exceptions gracefully, ensuring users receive clear error messages when needed.",
		url: "https://github.com/Aman-Papaney/Nutriverse",
	},
	{
		title: "ChatRoom",
		description1:
			"I implemented Socket.io to facilitate real-time, bi-directional communication between users, leveraging WebSockets for low-latency messaging. This setup ensures instant message delivery without the need for page refreshes, creating a seamless chat experience.",
		description2:
			"And I also integrated a feature that allows users to create and join chat rooms using custom room IDs, providing unique identifiers for each room. This functionality enhances user control and flexibility within the application.",
		url: "https://github.com/aman-papaney/ChatRoom",
	},
]

const Portfolio = () => {
	return (
		<section className='padding' id='portfolio'>
			<h2 style={{textAlign: "center", color: "white"}}>Projects</h2>
			<div style={{display: "flex", flexDirection: "row", paddingTop: "3rem"}}>
				<div style={{maxWidth: "40%", alignSelf: "center"}}></div>
				<div className='ProjectsContainer'>
					{projectList.map((project) => (
						<div
							className='box'
							style={{
								backgroundColor: "rgba(255,255,255,0.25)",
								color: "white",
								borderRadius: "20px",
								width: "50%",
								margin: "3rem auto",
								textAlign: "center",
							}}
							key={project.title}
						>
							<a href={project.url} target='_blank' rel='noopener noreferrer'>
								<h3
									style={{
										flexBasis: "40px",
										textAlign: "center",
										color: "white",
										fontSize: "30px",
									}}
								>
									{project.title}
								</h3>
							</a>
							<p style={{color: "white"}} className='desc'>
								{project.description1}
							</p>
							<p style={{color: "white"}} className='desc'>
								{project.description2}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Portfolio
