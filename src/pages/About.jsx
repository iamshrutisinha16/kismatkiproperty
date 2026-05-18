import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div>
      {/* 🔹 Banner Section with Overlay Heading */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="banner-wrapper"
      >
        <div className="banner-inner">
          <video
            src="/assets/Aboutus.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="banner-video"
          />
          <div className="video-overlay">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="banner-heading"
            >
              About Us
            </motion.h1>
          </div>
        </div>
      </motion.div>

      {/* 🔸 About Section */}
      <div className="about-container">
      <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true, amount: 0.3 }}
  className="about-text"
>
  <h3>Smart Property Promotion Platform 📢</h3>

  <p>
    <strong>Kismat Ki Property</strong> is a trusted real estate advertising and promotion platform specializing in builder advertisement, property branding, and smart promotional solutions across India.
  </p>

  <p>
    Our main focus is helping builders, property owners, and sellers promote their residential and commercial projects to the right audience through effective marketing, branding, and lead generation services.
  </p>

  <p>
    We connect property seekers according to their budget and requirements while providing verified listings, audience matching, and professional promotional support for better visibility and genuine responses.
  </p>

  <p>
    Guided by <strong>Swami Prem Dhiraj</strong>, we are committed to creating a modern platform built on trust, transparency, branding excellence, and customer satisfaction.
  </p>
</motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="about-image"
        >
          <img
            src="https://www.godigit.com/content/dam/godigit/life/homepage/person-owning-multiple-property.jpg"
            alt="Kismat Ki Property"
          />
        </motion.div>
      </div>

      {/* Core Values Section */}
      <div className="values-section">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values 💎
        </motion.h3>

        <div className="values-grid">
          {[
            { title: "Trust", icon: "🤝", desc: "We build long-term relationships through honesty and commitment." },
            { title: "Transparency", icon: "🔍", desc: "All communication and documentation are crystal clear." },
            { title: "Pan-India Reach", icon: "🌐", desc: "Our network spans across every major city in India." },
            { title: "Client-First Approach", icon: "👥", desc: "Your goals are our priority from start to finish." }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="value-card"
            >
              <div className="value-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🖼️ Gallery Section */}
      <div className="gallery-wrapper">
        <h3 className="gallery-heading">Our People & Projects 📸</h3>
        <div className="gallery-grid">
          {["team1.jpg", "team2.jpg", "property1.jpg"].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="gallery-card"
            >
              <img src={`/assets/${img}`} alt={`Gallery ${idx + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
