import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#002242", 
        padding: "50px 20px",
        color: "white",
      }}
    >
      <div className="container-fluid">
        <div
          className="row gy-4"
          style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}
        >
          {/* Logo and Social */}
          <div
            className="col-12 col-md-4"
            style={{ textAlign: "center", padding: "10px" }}
          >
            <img
              src="/assets/kkplogo.png"
              alt="Logo"
              style={{ width: "150px", marginBottom: "15px" }}
            />
            <p style={{ fontSize: "14px" }}>
              Empowering your real estate journey. © 2025 Kismat Ki Property.
            </p>
            <div
              className="d-flex justify-content-center gap-3 mt-3"
              style={{ fontSize: "20px" }}
            >
              <a href="https://www.facebook.com/kismatkiproperty.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/kismatkiproperty_rb" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/RishabBajaj" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/@RishabB48486844" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://wa.me/918595076589" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://youtube.com/@kismatkiproperty" target="_blank" rel="noopener noreferrer" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled small">
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/properties" className="text-white text-decoration-none">Properties</a></li>
              <li><a href="/careers" className="text-white text-decoration-none">Careers</a></li>
              <li><a href="/media" className="text-white text-decoration-none">Media</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-6 col-md-2">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled small">
              <li><a href="/faq" className="text-white text-decoration-none">FAQs</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
              <li><a href="/terms" className="text-white text-decoration-none">Terms</a></li>
              <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4">
            <h6 className="fw-bold">Contact Us</h6>
            <p className="small mb-1">kismatkiproperty.com</p>
            <h5>📍 Head Office</h5>
            <p className="small mb-1">
              B-1/628, 2nd Floor, Pillar No- 570, Near Dell Showroom, Janakpuri East Metro Station, New Delhi
            </p>
            <p className="small mb-1">Email: Property.charukhanna@gmail.com</p>
            <p className="small mb-1">Phone: +91 8595076589, +919810526380</p>
            <p className="small">Office Hours: Mon - Sat, 10AM to 7PM</p>
          </div>

          {/* Play Store */}
          <div className="col-12 text-center">
            <img
              src="/assets/Google play.webp"
              alt="Google Play"
              style={{ width: "150px", marginTop: "20px" }}
            />
          </div>
        </div>

        <hr className="my-4 border-light" />

        <div className="text-center small">
          Made with ❤️ by <strong>Kismat Ki Property</strong> | All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
