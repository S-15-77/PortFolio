import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logoBw.png'; // Adjust the path as necessary

export default function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer className='footer'>
            <img src={logo} alt="Logo" className="footer-logo" />
            <p>©️{year} Santhosh Dayakar. </p>
            <div className="footer-links">
                 <a href="https://github.com/S-15-77" target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub />
                </a>
                <a href="https://linkedin.com/in/santhosh-dayakar" target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin />
                </a>
                <a href="mailto:santhoshdayakar2002@gmail.com" title="Email">
                <FaEnvelope />
                </a>
            </div>
        </footer>
    )
}