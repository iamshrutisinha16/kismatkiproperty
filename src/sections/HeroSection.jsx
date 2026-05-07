import React, {useState,useEffect,} from "react";
import {Link,useNavigate,} from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import {
  FaPhoneAlt,
  FaSearch,
  FaMicrophone,
  FaHome,
  FaBuilding,
  FaBriefcase,
  FaProjectDiagram,
} from "react-icons/fa";

function HeroSection() {

  const [activeTab, setActiveTab] = useState("Buy");
  const [searchText, setSearchText] = useState("");
  const [locations, setLocations] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();

  const tabs = [
    "Buy",
    "Rent",
    "New Launch",
    "Commercial",
    "Projects",
  ];

  // MOBILE ICONS
  const mobileIcons = [
    { name: "Buy", icon: <FaHome />, color: "#3465C2", },
    { name: "Rent",icon: <FaBuilding />, color: "#2F5BB0",},
    { name: "New Launch", icon: <FaProjectDiagram />,color: "#294F9A",},
    { name: "Commercial", icon: <FaBriefcase />, color: "#2F5BB0",},
    { name: "Projects", icon: <FaProjectDiagram />, color: "#3465C2",
    },
  ];

  // FETCH LOCATIONS
  useEffect(() => {
    fetchLocations();
  }, []);

  const fetchLocations = async () => {

    try {

      const res = await axios.get(
        "https://kismatkiproperty-backend.onrender.com/api/properties"
      );

      // ALL LOCATIONS
      const allLocations =
        res.data.map(
          (item) =>
            item.location
        );

      // REMOVE DUPLICATES
      const uniqueLocations =
        [...new Set(allLocations)];

      setLocations(
        uniqueLocations
      );

    } catch (err) {

      console.log(err);

    }
  };



  // SEARCH BUTTON
  const handleSearch = () => {

    navigate(
      `/properties?category=${activeTab}&city=${searchText}`
    );
  };



  return (
    <section className="hero-container">

      {/* HERO BANNER */}
      <div className="hero-banner">

        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
          alt="Banner"
          className="banner-img"
        />

        <div className="banner-overlay"></div>

        <div className="hero-content">

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}
          >

            <h1 className="main-heading">
              Agar aap apni purani
              property bechna chahte
              hain, toh bas ek
              missed call dein!
            </h1>

            <div className="cta-wrapper">

              <a
                href="tel:8595076589"
                className="call-card-btn"
              >

                <div className="phone-icon-circle">
                  <FaPhoneAlt />
                </div>

                <div className="call-text">

                  <span>
                    अभी कॉल करें
                  </span>

                  <strong>
                    8595076589
                  </strong>

                </div>
              </a>

              <Link
                to="/classified"
                className="explore-now-link"
              >
                Explore Now →
              </Link>

            </div>
          </motion.div>
        </div>
      </div>



      {/* SEARCH CARD */}
      <div className="search-card-container">

        <motion.div className="search-card">

          {/* DESKTOP TABS */}
          <div className="search-tabs desktop-only">

            {tabs.map((tab) => (

              <button
                key={tab}

                className={
                  activeTab === tab
                    ? "active"
                    : ""
                }

                onClick={() => {

                  setActiveTab(tab);

                  navigate(
                    `/properties?category=${tab}`
                  );
                }}
              >
                {tab}
              </button>
            ))}
          </div>



          {/* MOBILE GRID */}
          <div className="mobile-action-grid">

            <h3 className="mobile-grid-title">
              Get started with
            </h3>

            <div className="grid-wrapper">

              {mobileIcons.map(
                (item) => (

                  <div
                    key={item.name}

                    className="grid-item"

                    onClick={() =>
                      navigate(
                        `/properties?category=${item.name}`
                      )
                    }
                  >

                    <div
                      className="grid-icon-box"

                      style={{
                        color:
                          item.color,
                      }}
                    >
                      {item.icon}
                    </div>

                    <span>
                      {item.name}
                    </span>

                  </div>
                )
              )}
            </div>
          </div>



          {/* SEARCH INPUT */}
          <div className="search-input-group">

            <div
              className="input-section"

              style={{
                position: "relative",
              }}
            >

              <FaSearch className="search-icon-inside" />

              <input
                type="text"

                value={searchText}

                placeholder='Search "Sector 150 Noida"'

                onFocus={() =>
                  setShowDropdown(
                    true
                  )
                }

                onChange={(e) =>
                  setSearchText(
                    e.target.value
                  )
                }
              />

              <FaMicrophone className="mic-icon-mobile" />



              {/* DROPDOWN */}
              {showDropdown && (

                <div
                  style={{position:"absolute", top: "55px", left: 0, width: "100%",
                 background:"#fff", borderRadius:"10px", boxShadow:"0 4px 15px rgba(0,0,0,0.1)",
                zIndex: 999, maxHeight:"250px", overflowY: "auto",}}
                >

                  {locations.map(
                    (
                      location,
                      index
                    ) => (

                      <div
                        key={index}

                        onClick={() => {

                          setSearchText(
                            location
                          );

                          setShowDropdown(
                            false
                          );

                          navigate(
                            `/properties?category=${activeTab}&city=${location}`
                          );
                        }}

                        style={{
                          padding:
                            "12px 15px",

                          cursor:
                            "pointer",

                          borderBottom:
                            "1px solid #eee",
                        }}
                      >
                        📍 {location}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>



            <button
              className="main-search-btn desktop-only"

              onClick={handleSearch}
            >
              Search
            </button>

          </div>
        </motion.div>
      </div>



      {/* CSS */}
      <style jsx>{`

        .grid-wrapper{
          display:flex;
          justify-content:space-between;
          align-items:flex-start;
          gap:10px;
          flex-wrap:nowrap;
          overflow-x:auto;
          padding-bottom:5px;
        }

        .grid-wrapper::-webkit-scrollbar{
          display:none;
        }

        .grid-item{
          min-width:60px;
          text-align:center;
          flex-shrink:0;
          cursor:pointer;
        }

        .grid-icon-box{
          width:55px;
          height:55px;
          border-radius:14px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#f5f7ff;
          font-size:22px;
          margin:auto;
          box-shadow:0 2px 10px rgba(0,0,0,0.08);
        }

        .grid-item span{
          font-size:12px;
          margin-top:6px;
          display:block;
          color:#444;
          font-weight:500;
        }

      `}</style>

    </section>
  );
}

export default HeroSection;