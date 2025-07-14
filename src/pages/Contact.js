import './Contact.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert("Thank you! Your message has been sent.");
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <h2>Let’s Connect</h2>
      <p className="contact-subtext">
        Whether you're looking to collaborate, hire, or just chat — feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:santhoshdayakar2002@gmail.com"><FaEnvelope /> Email</a>
        <a href="https://linkedin.com/in/santhosh-dayakar" target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
        <a href="https://github.com/S-15-77" target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
        <a href="/Santhosh Dayakar Resume.pdf" download title="Download Resume"><FaFileDownload /> Download Resume</a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;

