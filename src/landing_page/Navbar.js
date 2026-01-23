import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Navbar() {
  const menuItems = ["Home", "About", "Contact", "Blog", "Blueprint", "Package"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 992;
      setIsLargeScreen(isLarge);
      if (isLarge) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.05, when: "beforeChildren" },
    },
    exit: { opacity: 0, y: -10 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      {isLargeScreen && (
        <motion.div
          className="position-fixed"
          style={{ top: "20px", right: "20px", zIndex: 1051 }}
          whileHover={{ scale: 1.03 }}
        >
          <div
            className="d-flex flex-column text-white fw-bold text-end p-2 px-3 shadow"
            style={{
              backgroundColor: "#dc3545",
              borderRadius: "8px",
              fontSize: "13px",
              lineHeight: "1.2",
              minWidth: "135px",
            }}
          >
            <span>Customer Care</span>
            <a
              href="tel:+918595076589"
              className="text-white text-decoration-none fw-semibold"
            >
              📞 +91 85950 76589
            </a>
          </div>
        </motion.div>
      )}

      <motion.nav
        className="navbar navbar-expand-lg fixed-top bg-white shadow-sm"
        style={{ zIndex: 1050 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container py-2 d-flex align-items-center justify-content-between">
          <NavLink className="navbar-brand" to="/" onClick={closeMenu}>
            <motion.img
              src="/assets/kkplogo.png"
              alt="Logo"
              style={{
                height: isLargeScreen ? "55px" : "48px",
                width: "auto",
                objectFit: "contain",
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            style={{ background: "transparent", border: "none" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-center ${
              menuOpen ? "show" : ""
            }`}
            style={{
              backgroundColor: isLargeScreen ? "transparent" : "white",
              padding: isLargeScreen ? 0 : "10px 0",
              position: isLargeScreen ? "static" : "absolute",
              top: isLargeScreen ? "auto" : "100%",
              left: 0,
              width: "100%",
              zIndex: 999,
              borderRadius: isLargeScreen ? "0" : "10px",
              boxShadow: isLargeScreen
                ? "none"
                : "0 8px 20px rgba(0,0,0,0.1)",
            }}
          >
            <motion.ul
              className="navbar-nav mx-auto gap-lg-4 text-center flex-column flex-lg-row"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {menuItems.map((label) => (
                <motion.li
                  className="nav-item"
                  key={label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <NavLink
                    to={`/${label.toLowerCase()}`}
                    className={({ isActive }) =>
                      `nav-link fw-semibold text-dark ${
                        isActive ? "active text-primary" : ""
                      }`
                    }
                    onClick={closeMenu}
                  >
                    {label}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div
            className="d-flex align-items-center gap-3"
            style={{ marginRight: isLargeScreen ? "180px" : "0px" }}
          >
            <NavLink
              to="/signup"
              className="btn btn-outline-primary px-3 py-1 fw-semibold"
              onClick={closeMenu}
            >
              Signup
            </NavLink>

            <NavLink
              to="/addproperty"
              className="btn btn-success px-3 py-1 fw-semibold"
              onClick={closeMenu}
            >
              Add Property
            </NavLink>
          </div>
        </div>
      </motion.nav>
    </>
  );
}

export default Navbar;
