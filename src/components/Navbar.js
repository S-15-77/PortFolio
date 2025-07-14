// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
export default Navbar;
