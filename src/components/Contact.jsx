import React, { useState, useEffect } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sending the form data to an API or email service if desired.
    setSubmitted(true);
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section id="contact" className="contact py-5 container">
      <h2 className="mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="form-control" required />
        <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="form-control" required />
        <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} className="form-control" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
      {submitted && <p className="text-success mt-3">Your message has been sent successfully!</p>}
    </section>
  );
}

export default Contact;
