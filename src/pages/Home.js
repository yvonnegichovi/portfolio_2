import React from 'react';
import { Link } from 'react-router-dom'; // Import router
import '../styles/Home.css'; // Import the CSS file
import profileImage from '../assets/profile.png';

function Home () {
  return (
	  <>
	  <h1>Welcome to My Portfolio</h1>
          <p>Showcasing my skills, projects, and contact info.</p>
	  <section id="home">
	  <img src={profileImage} alt="Profile" className="profile-img" />
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
