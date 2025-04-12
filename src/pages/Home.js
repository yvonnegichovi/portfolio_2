import React from 'react';
import { Link } from 'react-router-dom'; // Import router
import './Home.css'; // Import the CSS file

function Home () {
  return (
	  <>
	  <h1>Welcome to My Portfolio</h1>
          <p>Showcasing my skills, projects, and contact info.</p>
	  <section id="projects">
	  <h2>Projects</h2>
	  <ul>
	  <li>Project Website - Built with React & Tailwind</li>
	  <li>Suivi Project - Real time tracking and delivery web app</li>
	  </ul>
	  </section>

	  <section id="contact">
	  <h2>Contact Me</h2>
	  <p>Email: yvonnegichovi@gmail.com</p>
	  <p>GitHub: <a href="https://github.com/yvonnegichovi" target="_blank" rel="noreferrer">github.com/yvonnegichovi</a></p>
	  <p>LinkedIn: <a href="https://www.linkedin.com/in/yvonne-gichovi-2b0753223/" target="_blank" rel="noreferrer">linkedin.com/in/yvonnegichovi</a></p>
	  </section>
	  </>
  );
}

export default Home;
