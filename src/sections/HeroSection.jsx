import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="hero-section">
      {/* 🔹 Background Video */}
      <div className="video-container">
        <video
          className="background-video"
          src="/assets/bannervideo1.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-overlay" />
      </div>

      {/* 🔸 Hero Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="main-heading">
            अगर आप अपनी कोई भी पुरानी प्रॉपर्टी बेचना चाहते हैं,
            तो बस एक मिस कॉल दें!
          </h1>
          <h2 className="highlight-text">Search Kare</h2>
        </motion.div>

        {/* 📞 Improved Call Box */}
        <motion.div
          className="call-box-container"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="tel:8595076589" className="call-card">
            <div className="phone-circle">
              <FaPhoneAlt className="vibrating-phone" />
            </div>
            <div className="call-info">
              <span className="label">अभी कॉल करें</span>
              <span className="number">8595076589</span>
            </div>
          </a>
        </motion.div>

        {/* Explore Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#properties" className="explore-btn">
            Explore Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;