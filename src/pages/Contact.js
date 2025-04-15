import React from 'react';
import '../styles/Contact.css';

function Contact () {
  return (
	  <>
	  <div className="contact-container">
          <h2>Contact Me</h2>
          <p>Email: yvonnegichovi@gmail.com</p>
          <p>GitHub: <a href="https://github.com/yvonnegichovi" target="_blank" rel="noreferrer">github.com/yvonnegichovi</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/yvonne-gichovi-2b0753223/" target="_blank" rel="noreferrer">linkedin.com/in/yvonnegichovi</a></p>
	  <div className="download">
	  📄 Download My CV
	  </div>
	  <p>
	  <a href="/Yvonne_Gichovi-Software_Engineer_CV.pdf" download className="cv-button">
	  📄 Download My CV
	  </a>
	  </p>
          </div>
          </>
  );
}

export default Contact;
