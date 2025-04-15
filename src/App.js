import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './styles/Navbar.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from './components/Layout';

function App () {
  return (
    <Router>
	  <Layout> {/* Make sure Navbar is inside Router! */}
	  <div className="content">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
	  </div>
	  </Layout>
    </Router>
  );
}
export default App;
