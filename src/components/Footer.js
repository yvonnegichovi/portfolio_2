import React from 'react';
import '../styles/Footer.css';

function Footer () {
	return (
		<footer className="footer">
		<p>&copy; {new Date().getFullYear()} Suivi Delivery. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
