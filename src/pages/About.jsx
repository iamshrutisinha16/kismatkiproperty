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
          <h3>Over 20 Years of Trust 🏡</h3>
          <p>
            Founded two decades ago, <strong>Kismat Ki Property</strong> has become a trusted name in India's real estate sector. Whether you're looking to <strong>buy</strong>, <strong>sell</strong>, or explore <strong>loan-assisted properties</strong>, our experienced team is here to help.
          </p>
          <p>
            Our legacy is built on customer satisfaction, legal transparency, and timely delivery. We’ve helped thousands find their dream homes and investment opportunities.
          </p>
          <p>
            We continue to innovate and expand, offering tailored property solutions for individuals and businesses across India.
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

      {/* 💎 Core Values Section */}
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

      {/* 🎨 CSS Styles */}
      <style jsx>{`
        .banner-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }
        .banner-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          max-height: 420px;
        }
        .banner-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .banner-heading {
          font-size: clamp(28px, 6vw, 48px);
          font-weight: bold;
          color: white;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
        }

        .about-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 40px;
          max-width: 1100px;
          margin: 50px auto;
          padding: 0 20px;
        }
        .about-text, .about-image {
          flex: 1 1 400px;
          min-width: 280px;
        }
        .about-text p {
          margin-bottom: 16px;
          line-height: 1.6;
        }
        .about-image img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
        }

        .values-section {
          background: #f9f9f9;
          padding: 60px 20px;
          text-align: center;
        }
        .values-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 25px;
          justify-content: center;
          max-width: 1000px;
          margin: auto;
        }
        .value-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          flex: 1 1 220px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.08);
        }
        .value-icon {
          font-size: 32px;
          margin-bottom: 10px;
        }

        .gallery-wrapper {
          padding: 60px 20px;
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }
        .gallery-heading {
          font-size: 28px;
          margin-bottom: 30px;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 20px;
        }
        .gallery-card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }
        .gallery-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }
        .gallery-card:hover {
          transform: scale(1.02);
        }

        @media (max-width: 768px) {
          .banner-inner {
            aspect-ratio: 16 / 9;
          }
        }
        @media (max-width: 480px) {
          .banner-inner {
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
