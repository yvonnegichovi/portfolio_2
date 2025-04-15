import React from 'react';
import '../styles/About.css';

const skills = [
	{ name: 'Javascript (Es6+)', level: 8 },
	{ name: 'React.js', level: 7 },
	{ name: 'Node.js', level: 7 },
	{ name: 'Python', level: 9 },
	{ name: 'Flask & FastAPI', level: 8 },
	{ name: 'PostgreSQL & MongoDB', level: 8 },
	{ name: 'Docker', level: 6 },
	{ name: 'Git & GitHub', level: 8 },
	{ name: 'CI/CD', level: 8 },
	{ name: 'Agile Development', level: 7 }
];

function About () {
  return (
	  <div className="about-container">
	  <h1>About Me</h1>
	  <p>
	  I am a passionate Software Engineer who loves building clean efficient solutions.
	  I like identifying, barinstorming and solving problems.
	  </p>
	  <h2>My Skills</h2>
	  <div className="skills-container">
	  {skills.map((skill, index) => (
		  <div className="skill" key={index}>
		  <div className="skill-header">
		  <span>{skill.name}</span>
		  <span>{skill.level}/10</span>
		  </div>
		  <div className="skill-bar">
		  <div className="skill-level" style={{ width: `${skill.level * 10}%` }}></div>
		  </div>
		  </div>
	  ))}
	  </div>
	  </div>
  );
}

export default About;
