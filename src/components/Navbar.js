// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <ThemeToggle/>
    </div>
  );
}

export default Navbar;
