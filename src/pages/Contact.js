import './Contact.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

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
        toast.error("Failed to send message. Try again.");
      });
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
        <a href="/Santhosh_Resume.pdf" download><FaFileDownload /> Download Resume</a>
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

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default Contact;
