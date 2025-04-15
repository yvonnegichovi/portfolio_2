import React from 'react';
import '../styles/Footer.css';

function Footer () {
	return (
		<footer className="footer">
		<p>&copy; {new Date().getFullYear()} Yvonne Ng'endo. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
