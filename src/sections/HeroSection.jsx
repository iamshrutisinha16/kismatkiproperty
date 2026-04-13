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
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Property Toh Kismat Se Milti Hai
          <span className="highlight"> Search Kare</span>
        </motion.h1>

        {/* 📞 Styled Selling Section (P tag fix) */}
        <motion.div 
          className="sell-notice-box"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="hindi-text">
            <FaPhoneAlt className="phone-icon-anim" /> 
            अगर आप अपनी कोई भी पुरानी प्रॉपर्टी बेचना चाहते हैं, तो बस एक मिस कॉल दें!
          </p>
          <div className="phone-highlight">
            <a href="tel:8595076589">8595076589</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#properties" className="hero-btn">
            Explore Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;