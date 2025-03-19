import { Link } from 'react-router-dom';

function Navbar () {
  return (
    <nav className='p-4 bg-gray-900 text-white flex justify-between'>
      <h1 className='text-2x1 font-bold'>My Porfolio</h1>
      <div>
        <Link to='/' className='mx-2'>Home</Link>
        <Link to='/about' className='mx-2'>About</Link>
        <Link to='/projects' className='mx-2'>Projects</Link>
        <Link to='/contact' className='mx-2'>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
