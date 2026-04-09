import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Blog",
    "Blueprint",
    "Package",
    "Classified",
    "Contact",
  ];

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 992;
      setIsLargeScreen(isLarge);
      if (isLarge) setMenuOpen(false);
    };

    handleResize(); // ✅ initial run (important)

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      className="navbar navbar-expand-lg fixed-top bg-white border-bottom"
      style={{
        height: isLargeScreen ? "80px" : "auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        zIndex: 1050,
        padding: 0,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <NavLink to="/" className="navbar-brand py-0" onClick={closeMenu}>
          <motion.img
            src="/assets/kkplogo.png"
            alt="Logo"
            style={{
              height: isLargeScreen ? "90px" : "65px",
              width: "auto",
              marginTop: isLargeScreen ? "10px" : "0",
              filter: "drop-shadow(0px 3px 5px rgba(0,0,0,0.1))",
            }}
            whileHover={{ scale: 1.05 }}
          />
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show bg-white p-4 shadow-lg rounded" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-2">
            {menuItems.map((item) => (
              <li className="nav-item" key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link fw-bold px-3 ${
                      isActive
                        ? "text-primary border-bottom border-primary border-2"
                        : "text-dark opacity-75"
                    }`
                  }
                  onClick={closeMenu}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* RIGHT BUTTONS */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 ms-lg-3 mt-3 mt-lg-0">

            {!isLoggedIn && (
              <NavLink
                to="/signup"
                className="btn btn-outline-success px-3 rounded-pill shadow-sm"
                onClick={closeMenu}
              >
                Sign Up
              </NavLink>
            )}

            <NavLink
              to="/contact"
              className="btn btn-danger rounded-pill px-3 fw-bold shadow-sm"
              onClick={closeMenu}
              style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#dc3545",
                border: "none",
              }}
            >
              Get In Touch
            </NavLink>

          </div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;