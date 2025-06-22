// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <ThemeToggle />
    </nav>
  );
}
export default Navbar;
