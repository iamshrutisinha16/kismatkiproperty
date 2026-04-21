import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg fixed-top bg-white"
      style={{
        height: isLargeScreen ? "75px" : "auto",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container d-flex align-items-center justify-content-between">

        {/* LOGO */}
        <NavLink to="/" className="navbar-brand py-0">
          <img
            src="/assets/kkplogo.png"
            alt="Logo"
            style={{
              height: isLargeScreen ? "80px" : "55px",
            }}
          />
        </NavLink>

        {/* TOGGLER */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show bg-white p-3" : ""}`}>
          
          <ul className="navbar-nav mx-auto gap-lg-3">

            {menuItems.map((item) => (
              <li className="nav-item" key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `nav-link px-2 ${
                      isActive
                        ? "text-primary"
                        : "text-dark"
                    }`
                  }
                  style={{
                    fontSize: "15px",
                    fontWeight: "450",   // 🔥 light font
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}

          </ul>

          {/* RIGHT BUTTONS */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-3 mt-lg-0">

            <NavLink
              to="/signup"
              className="btn btn-outline-success rounded-pill px-3"
              style={{ fontSize: "14px" }}
            >
              Sign Up
            </NavLink>

            <NavLink
              to="/contact"
              className="btn btn-danger rounded-pill px-3"
              style={{ fontSize: "14px" }}
            >
             Get In Touch
            </NavLink>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;