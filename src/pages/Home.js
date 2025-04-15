import React from 'react';
import { Link } from 'react-router-dom'; // Import router
import '../styles/Home.css'; // Import the CSS file
import profileImage from '../assets/profile.png';
import Layout from '../components/Layout';

function Home () {
  return (
	  <>
	  <h1>Welcome to My Portfolio</h1>
          <p>Showcasing my skills, projects, and contact info.</p>
	  <section id="home">
	  <img src={profileImage} alt="Profile" className="profile-img" />
	  </section>
	  </>
  );
}

export default Home;
