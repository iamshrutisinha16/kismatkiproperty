import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaSearch, FaMicrophone,FaHome, FaBuilding, FaBriefcase, FaProjectDiagram } from "react-icons/fa";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const tabs = ["Buy", "Rent", "New Launch", "Commercial", "Projects"];

  // Mobile Grid Icons mapping
  const mobileIcons = [
    { name: "Buy", icon: <FaHome />, color: "#3465C2" },
    { name: "Rent", icon: <FaBuilding />, color: "#2F5BB0" },
    { name: "New Projects", icon: <FaProjectDiagram />, color: "#294F9A" },
   { name: "Commercial", icon: <FaBriefcase />, color: "#2F5BB0" },

  ];

  const handleSearch = () => {
    if (!searchText.trim()) return;
    navigate(`/properties?type=${activeTab}&location=${searchText}`);
  };

  return (
    <section className="hero-container">
      <div className="hero-banner">
        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="Banner" className="banner-img" />
        <div className="banner-overlay"></div>
        <div className="hero-content">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="main-heading">Agar aap apni purani property bechna chahte hain, toh bas ek missed call dein!</h1>
            <div className="cta-wrapper">
              <a href="tel:8595076589" className="call-card-btn">
                <div className="phone-icon-circle"><FaPhoneAlt /></div>
                <div className="call-text"><span>अभी कॉल करें</span><strong>8595076589</strong></div>
              </a>
              <Link to="/classified" className="explore-now-link">Explore Now →</Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="search-card-container">
        <motion.div className="search-card">
          {/* Desktop Tabs - hidden on small mobile */}
          <div className="search-tabs desktop-only">
            {tabs.map((tab) => (
              <button key={tab} className={activeTab === tab ? "active" : ""} onClick={() => setActiveTab(tab)}>{tab}</button>
            ))}
          </div>

          {/* New Mobile Icon Grid (99acres Style) */}
          <div className="mobile-action-grid">
            <h3 className="mobile-grid-title">Get started with</h3>
            <div className="grid-wrapper">
              {mobileIcons.map((item) => (
                <div key={item.name} className="grid-item" onClick={() => navigate(`/properties?type=${item.name}`)}>
                  <div className="grid-icon-box" style={{ color: item.color }}>{item.icon}</div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Search Input Group */}
          <div className="search-input-group">
            <div className="input-section">
              <FaSearch className="search-icon-inside" />
              <input 
                type="text" 
                value={searchText} 
                onChange={(e) => setSearchText(e.target.value)} 
                placeholder='Search "Sector 150 Noida"' 
              />
              <FaMicrophone className="mic-icon-mobile" />
            </div>
            <button className="main-search-btn desktop-only" onClick={handleSearch}>Search</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;