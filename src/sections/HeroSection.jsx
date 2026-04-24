import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaSearch, FaMicrophone, FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

function HeroSection() {
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const tabs = ["Buy", "Rent", "New Launch", "Commercial", "Projects"];

  const handleSearch = () => {
    if (!searchText.trim()) return;

    navigate(`/properties?type=${activeTab}&location=${searchText}`);
  };

  return (
    <section className="hero-container">

      {/* Banner */}
      <div className="hero-banner">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          alt="Banner"
          className="banner-img"
        />
        <div className="banner-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="main-heading">
              Agar aap apni purani property bechna chahte hain,
              toh bas ek missed call dein!
            </h1>

            <div className="cta-wrapper">
              <a href="tel:8595076589" className="call-card-btn">
                <div className="phone-icon-circle">
                  <FaPhoneAlt />
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

      {/* SEARCH */}
      <div className="search-card-container">
        <motion.div className="search-card">

          {/* Tabs */}
          <div className="search-tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="search-input-group">

            <div className="dropdown-section">
              <span>{activeTab}</span>
              <FaChevronDown />
            </div>

            <div className="input-divider"></div>

            <div className="input-section">
              <FaSearch className="search-icon-inside" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search location like Noida, Safdarjung..."
              />
            </div>

            <div className="action-icons">
              <FaMapMarkerAlt />
              <FaMicrophone />
              <button className="main-search-btn" onClick={handleSearch}>
                Search
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;