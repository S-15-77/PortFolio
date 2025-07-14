import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand">SANTHOSH DAYAKAR</div>
        <div className="footer-socials">
          <a href="https://github.com/S-15-77" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/santhosh-dayakar" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="mailto:santhoshdayakar2002@gmail.com"><FaEnvelope /></a>
        </div>
      </div>
      <div className="footer-copyright">
        © {year} Santhosh Dayakar. All rights reserved.
      </div>
    </footer>
  );
}
