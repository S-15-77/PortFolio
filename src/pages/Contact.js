import { FaEnvelope,FaFileDownload,FaGithub,FaLinkedin } from "react-icons/fa";
import './Contact.css';
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      <p className="contact-text">I’m open to internships, co-op roles, or collaborations in AI, full-stack, or cloud-based projects.</p>
      <div className="contact-links">
        <a href="mailto:santhoshdayakar2002@gmail.com" target="_blank" rel="noreferrer" title="Email">
          <FaEnvelope className="email-icon" />Email
        </a>
        <a href="">
          <FaLinkedin/> LinkedIn
        </a>
        <a href="">
          <FaGithub/> GitHub
        </a>
        <a href="src/assets/Santhosh Dayakar Resume.pdf" download title="Download Resume">
          <FaFileDownload/>Resume
        </a>
      </div>
    </section>
  );
}

export default Contact;
