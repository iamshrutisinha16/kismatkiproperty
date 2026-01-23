import React from "react";
import { motion } from "framer-motion";

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

      {/* 🔸 Hero Text Content */}
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Property Toh Kismat Se Milti Hai{" "}
          <span className="highlight">Search Kare</span>
        </h1>
      </motion.div>
    </section>
  );
}

export default HeroSection;
