import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaSearch, FaMicrophone, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("Buy");

  const tabs = ["Buy", "Rent", "New Launch", "Commercial", "Plots/Land", "Projects"];

  return (
    <section className="hero-container">
      {/* 🔹 Banner Image Section */}
      <div className="hero-banner">
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" // Aap apni image ka path yahan daal sakte hain
          alt="Banner" 
          className="banner-img"
        />
        <div className="banner-overlay"></div>

        {/* 🔸 Hero Text Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="main-heading">
              Agar aap apni purani property bechna chahte hain,
              toh bas ek missed call dein!
            </h1>
            
            <div className="cta-wrapper">
              <a href="tel:8595076589" className="call-card-btn">
                <div className="phone-icon-circle">
                  <FaPhoneAlt className="vibrating-phone" />
                </div>
                <div className="call-text">
                  <span>अभी कॉल करें</span>
                  <strong>8595076589</strong>
                </div>
              </a>

              <Link to="/classified" className="explore-now-link">
                Explore Now →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 🔹 Overlapping Search Card */}
      <div className="search-card-container">
        <motion.div 
          className="search-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Tabs */}
          <div className="search-tabs">
            {tabs.map((tab) => (
              <button 
                key={tab} 
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {tab === "New Launch" && <span className="red-dot"></span>}
              </button>
            ))}
            <div className="post-property-free">
              Post Property <span className="free-tag">FREE</span>
            </div>
          </div>

          {/* Search Input Area */}
          <div className="search-input-group">
            <div className="dropdown-section">
              <span>All Residential</span>
              <FaChevronDown className="arrow-icon" />
            </div>
            
            <div className="input-divider"></div>

            <div className="input-section">
              <FaSearch className="search-icon-inside" />
              <input 
                type="text" 
                placeholder='Search "Flats for rent in sector 77 Noida"' 
              />
            </div>

            <div className="action-icons">
              <FaMapMarkerAlt className="geo-icon" title="Use current location" />
              <FaMicrophone className="mic-icon" />
              <button className="main-search-btn">Search</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;