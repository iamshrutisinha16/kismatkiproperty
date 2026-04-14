import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { Alert } from "react-bootstrap";

// Components
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import WhatsappWidget from "./Components/WhatsappWidget";
import HomePage from "./HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blueprint from "./pages/Blueprint";
import Package from "./pages/Package";
import Blog from "./pages/Blog";
import Signup from "./landing_page/Signup";
import AddProperty from "./pages/AddProperty";
import PropertyDetails from "./sections/PropertyDetails";
import Classified from "./pages/Claasified";
import usePageTracking from "./pages/usePageTracking";

// Initialize Google Analytics 4
ReactGA.initialize("G-6YQ41WYR5E");

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");

  // पेज ट्रैकिंग हुक
  usePageTracking();

  // जिन पेजों पर Navbar/Footer नहीं दिखाना है
  const hideLayout = location.pathname === "/signup";

  useEffect(() => {
    // लॉगआउट मैसेज हैंडलर
    if (location.state?.message === "Logged out successfully" && !hideLayout) {
      setLogoutMessage("Logged out successfully");

      const timer = setTimeout(() => {
        setLogoutMessage("");
        // स्टेट साफ़ करना ताकि रिफ्रेश पर मैसेज न आए
        navigate(location.pathname, { replace: true, state: null });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [location, navigate, hideLayout]);

  return (
    <div className="app-container">
      {/* लॉगआउट अलर्ट */}
      {logoutMessage && (
        <Alert variant="success" className="text-center fixed-top m-3" style={{ zIndex: 9999 }}>
          {logoutMessage}
        </Alert>
      )}

      {/* Header & Widgets (Conditional) */}
      {!hideLayout && <Navbar />}
      {!hideLayout && <WhatsappWidget />}

      {/* Main Routes */}
      <main className="content-area">
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
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </main>

      {/* Footer (Conditional) */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;