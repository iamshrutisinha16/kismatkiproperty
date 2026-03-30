 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [contactForm, setContactForm] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleContactFormChange = (e) => setContactForm({ ...contactForm, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message submitted!');
    console.log('Leave a message form:', form);
    setForm({ name: '', email: '', message: '' });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    alert('Thanks! We will get in touch soon.');
    console.log('Bottom form:', contactForm);
    setContactForm({ name: '', email: '', phone: '' });
  };

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.innerHTML = `
      @media (max-width: 768px) {
        .responsive-flex {
          flex-direction: column !important;
        }
        .responsive-left,
        .responsive-right {
          min-width: 100% !important;
          padding: 10px !important;
        }
        .videoFormWrapper {
          padding: 20px !important;
        }
        .videoFormHeading {
          font-size: 22px !important;
        }
        .faqHeading,
        .mapHeading,
        .heading {
          font-size: 26px !important;
        }
        .mapSection iframe {
          height: 300px !important;
        }
      }
      @media (max-width: 480px) {
        .videoForm {
          padding: 20px !important;
        }
        input,
        textarea,
        button {
          font-size: 14px !important;
        }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div style={styles.container}>
      {/* Top Banner */}
      <motion.video
        src="/assets/contactbanner.mp4"
        autoPlay loop muted playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={styles.bannerVideo}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={styles.headingWrapper}
      >
        <h2 className="heading" style={styles.heading}>Contact Us</h2>
      </motion.div>

      {/* Contact Info + Form */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={styles.infoFormWrapper}
        className="responsive-flex"
      >
        {/* Left Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.leftInfo}
          className="responsive-left"
        >
          <h4>📍 <strong>Head Office</strong></h4>
          <p>B-1/628, 2nd Floor, Janakpuri East Metro Station, New Delhi</p>
          <p>Branches – South Delhi, Gurugram, Noida</p>
          <h4>📞 <strong>Mobile</strong></h4>
          <p><a href="tel:+918595076589" style={styles.link}>+91 8595076589</a></p>
          <h4>📧 <strong>Email</strong></h4>
          <p><a href="mailto:property.charukhanna@gmail.com" style={styles.link}>property.charukhanna@gmail.com</a></p>
          <h4>⏰ <strong>Working Hours</strong></h4>
          <p>Mon - Sat: 10am - 7pm</p>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={styles.rightForm}
          className="responsive-right"
        >
          <h4 style={{ marginBottom: '15px' }}>Leave a Message</h4>
          <form onSubmit={handleSubmit} style={styles.form}>
            <motion.input {...inputProps('name', 'Your Name', form.name, handleChange)} />
            <motion.input {...inputProps('email', 'Your Email', form.email, handleChange, 'email')} />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              style={styles.textarea}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.button
              type="submit"
              style={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* FAQ Section (moved up) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={styles.faqWrapper}
      >
        <h2 style={styles.faqHeading} className="faqHeading">Frequently Asked Questions ❓</h2>
        <div style={styles.faqList}>
          {faqData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={styles.faqItem}
            >
              <h4 style={styles.faqQuestion}>{item.q}</h4>
              <p style={styles.faqAnswer}>{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Video + Form (now below FAQ) */}
      <div style={styles.videoFormContainer}>
        <video src="/assets/formBanner.mp4" autoPlay loop muted playsInline style={styles.videoBackground} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={styles.videoFormWrapper}
          className="videoFormWrapper"
        >
          <form onSubmit={handleContactFormSubmit} style={styles.videoForm} className="videoForm">
            <h3 style={styles.videoFormHeading} className="videoFormHeading">Let's Get In Touch 🚀</h3>
            <motion.input {...inputProps('name', 'Full Name', contactForm.name, handleContactFormChange)} />
            <motion.input {...inputProps('email', 'Email Address', contactForm.email, handleContactFormChange, 'email')} />
            <motion.input {...inputProps('phone', 'Mobile Number', contactForm.phone, handleContactFormChange, 'tel')} />
            <motion.button
              type="submit"
              style={{ ...styles.button, backgroundColor: '#28a745' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📤 Send Enquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

const faqData = [
  { q: 'How can I schedule a property visit?', a: 'Fill out the contact form and we’ll get back to you shortly to fix a time.' },
  { q: 'Are loan facilities available?', a: 'Yes, we assist with home loans through trusted banking partners.' },
  { q: 'Do you charge any consultation fees?', a: 'No consultation charges. You only pay when you finalize the property.' },
  { q: 'Which cities do you serve?', a: 'Primarily Delhi, Noida, Gurugram — with pan-India availability.' },
  { q: 'When will I get a call back?', a: 'Usually within 30–60 mins during working hours.' },
];

const inputProps = (name, placeholder, value, onChange, type = 'text') => ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required: true,
  style: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '15px',
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box'
  },
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.5 }
});

const styles = {
  container: { fontFamily: 'Arial, sans-serif' },
  bannerVideo: { width: '100%', height: 'auto', objectFit: 'cover', maxHeight: '411px' },
  headingWrapper: { textAlign: 'center', margin: '40px 0 20px' },
  heading: { fontWeight: '800', fontSize: '35px' },
  infoFormWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
    maxWidth: '1200px',
    margin: 'auto',
    gap: '30px'
  },
  leftInfo: {
    flex: '1 1 300px',
    padding: '20px',
    minWidth: '280px'
  },
  rightForm: {
    flex: '1 1 300px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '10px',
    boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
    minWidth: '280px'
  },
  form: { display: 'flex', flexDirection: 'column', gap: '10px' },
  textarea: {
    padding: '12px',
    marginBottom: '14px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '15px',
    resize: 'vertical',
    outline: 'none'
  },
  button: {
    padding: '12px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '16px'
  },
  link: { color: '#007bff', textDecoration: 'none' },
  videoFormContainer: {
    position: 'relative',
    height: 'auto',
    minHeight: '500px',
    marginTop: '40px'
  },
  videoBackground: {
    position: 'absolute',
    top: 0, left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  },
  videoFormWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px'
  },
  videoForm: {
    width: '100%',
    maxWidth: '700px',
    backgroundColor: 'rgba(255,255,255,0.1)',
    backdropFilter: 'blur(4px)',
    padding: '30px',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px'
  },
  videoFormHeading: {
    textAlign: 'center',
    fontSize: '26px',
    color: 'black',
    marginBottom: '10px',
    fontWeight: '600'
  },
  faqWrapper: {
    maxWidth: '1000px',
    margin: '60px auto',
    padding: '0 20px'
  },
  faqHeading: {
    fontSize: '32px',
    textAlign: 'center',
    marginBottom: '30px',
    fontWeight: '800'
  },
  faqList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  faqItem: {
    background: '#f1f1f1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
  },
  faqQuestion: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '8px'
  },
  faqAnswer: {
    fontSize: '15px',
    color: '#333'
  }
};

export default Contact;
