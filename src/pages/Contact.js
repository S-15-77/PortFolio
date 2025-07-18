import './Contact.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload,FaPaperPlane } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill out all fields.");
      return;
    }

    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    const templateParams = {
      ...form,
      reply_to: form.email,
    };

    emailjs.send('service_3j6q67f', 'template_ay9510a', templateParams, 'IKXBtF0qsH8PvGvT7')
      .then(() => {
        toast.success("Message sent successfully! ✅");
        setForm({ name: '', email: '', message: '' });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="contact-page">
      <h2>Let’s Connect</h2>
      <p className="contact-subtext">
        Interested in working together or want to have a chat? Feel free to reach out!
      </p>

      <div className="contact-links">
        <a href="mailto:santhoshdayakar2002@gmail.com" title="Email" aria-label="Email">
          <FaEnvelope /> <span>Email</span>
        </a>
        <a href="https://linkedin.com/in/santhosh-dayakar" target="_blank" rel="noreferrer" title="LinkedIn" aria-label="LinkedIn">
          <FaLinkedin /> <span>LinkedIn</span>
        </a>
        <a href="https://github.com/S-15-77" target="_blank" rel="noreferrer" title="GitHub" aria-label="GitHub">
          <FaGithub /> <span>GitHub</span>
        </a>
        <a href="/Santhosh_Dayakar_Resume.pdf" download title="Download Resume" aria-label="Download Resume">
          <FaFileDownload /> <span>Resume</span>
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
        <button type="submit">
          <FaPaperPlane style={{ marginRight: '8px' }}/>
          Send Message</button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default Contact;
