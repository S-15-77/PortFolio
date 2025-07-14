import { FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>
      <p className="contact-text">I’m open to internships, co-op roles, or collaborations in AI, full-stack, or cloud-based projects.</p>
      <div className="contact-links">
        <a href="mailto:santhoshdayakar2002@gmail.com" target="_blank" rel="noreferrer" title="Email">
          <FaEnvelope className="email-icon" />Email
        </a>
        
      </div>
    </section>
  );
}

export default Contact;
