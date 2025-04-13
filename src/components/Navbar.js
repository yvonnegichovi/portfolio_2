import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar () {
	const location = useLocation();

  return (
    <nav className='navbar'>
	  <ul className='nav-tabs'>
        <li><Link to='/' className={location.pathname === '/' ? 'tab active' : ''}>Home</Link></li>
        <li><Link to='/about' className={location.pathname === '/about' ? 'tab active' : ''}>About</Link></li>
        <li><Link to='/projects' className={location.pathname === '/projects' ? 'tab active' : ''}>Projects</Link></li>
        <li><Link to='/contact' className={location.pathname === '/contact' ? 'tab active' : ''}>Contact</Link></li>
	  </ul>
    </nav>
  );
}

export default Navbar;
