import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { Alert } from "react-bootstrap";

// Components
import Navbar from "./landing_page/Navbar";
import HomePage from "./HomePage";
import Footer from "./landing_page/Footer";
import Blueprint from "./pages/Blueprint";
import WhatsappWidget from "./Components/WhatsappWidget";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Package from "./pages/Package";
import Blog from "./pages/Blog";
import usePageTracking from "./pages/usePageTracking";
import Signup from "./landing_page/Signup";
import AddProperty from "./pages/AddProperty";
import PropertyDetails from "./sections/PropertyDetails";
import Classified from "./pages/Claasified";

// Initialize Google Analytics 4
ReactGA.initialize("G-6YQ41WYR5E");

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const hideLayoutRoutes = ["/signup"];

  const [logoutMessage, setLogoutMessage] = useState("");

  useEffect(() => {
    if (
      location.state?.message === "Logged out successfully" &&
      location.pathname !== "/signup"
    ) {
      setLogoutMessage("Logged out successfully");

      const timer = setTimeout(() => {
        setLogoutMessage("");
        navigate(location.pathname, { replace: true, state: null });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location, navigate]);

  usePageTracking();

  return (
    <>
      <div style={styles.watermark}>Kismat Ki Property</div>

      {logoutMessage && (
        <Alert variant="success" className="text-center mx-3 mt-3">
          {logoutMessage}
        </Alert>
      )}

      {!hideLayoutRoutes.includes(location.pathname) && <Navbar />}
      {!hideLayoutRoutes.includes(location.pathname) && <WhatsappWidget />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blueprint" element={<Blueprint />} />
        <Route path="/package" element={<Package />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/classified" element={<Classified />} />
        <Route path="/addproperty" element={<AddProperty />} />

        {/* Dynamic Property Details Route */}
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>

      {!hideLayoutRoutes.includes(location.pathname) && <Footer />}

      <style>{`
        @keyframes floatText {
          0% { transform: translate(-50%, -50%) rotate(-30deg); }
          50% { transform: translate(-50%, -52%) rotate(-30deg); }
          100% { transform: translate(-50%, -50%) rotate(-30deg); }
        }
      `}</style>
    </>
  );
}

const styles = {
  watermark: {
    position: "fixed",
    top: "50%",
    left: "50%",
    fontSize: "5rem",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.03)",
    transform: "translate(-50%, -50%) rotate(-30deg)",
    pointerEvents: "none",
    whiteSpace: "nowrap",
    zIndex: 0,
    animation: "floatText 6s ease-in-out infinite",
  },
};

export default App;
