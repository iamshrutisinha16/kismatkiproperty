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
import Classified from "./pages/Claasified";
import usePageTracking from "./pages/usePageTracking";
import PropertyDetails from "./pages/PropertyDetails";

//ADMIN
import Dashboard from "./pages/admin/dashboard";
import AdminClassified from "./pages/admin/AdminClassified";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminLayout from "./pages/admin/AdminLayout";

// Initialize Google Analytics
ReactGA.initialize("G-6YQ41WYR5E");

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPwaBanner, setShowPwaBanner] = useState(false);

  usePageTracking();

  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin");

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      if (!hideLayout) {
        // 2 second ke delay ke baad dikhao taaki smooth lage
        setTimeout(() => setShowPwaBanner(true), 2000);
      }
    });
  }, [hideLayout]);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setShowPwaBanner(false);
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    if (location.state?.message === "Logged out successfully" && !hideLayout) {
      setLogoutMessage("Logged out successfully");
      const timer = setTimeout(() => {
        setLogoutMessage("");
        navigate(location.pathname, { replace: true, state: null });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [location, navigate, hideLayout]);

  return (
    <div className="app-container" style={{ position: 'relative' }}>

      {/* ⭐ MODERN FLOATING PWA CARD */}
      {showPwaBanner && !hideLayout && (
        <div style={{
          position: 'fixed',
          top: '80px', // Navbar ke thoda niche
          right: '20px', // Right side mein float karega
          width: '300px',
          backgroundColor: '#fff',
          borderRadius: '12px',
          boxShadow: '0px 10px 25px rgba(0,0,0,0.2)',
          padding: '15px',
          zIndex: 10001,
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          border: '1px solid #eee',
          animation: 'slideIn 0.5s ease-out'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div>
                <h6 style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#333' }}>Kismat Property</h6>
                <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>Install our app for a faster</p>
              </div>
            </div>
            <button onClick={() => setShowPwaBanner(false)} style={{ background: 'none', border: 'none', fontSize: '20px', color: '#999', cursor: 'pointer', lineHeight: '1' }}>×</button>
          </div>
          
          <button onClick={handleInstallClick} style={{
            background: '#007bff', // Professional Blue color
            color: '#fff',
            border: 'none',
            padding: '10px',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background 0.3s'
          }}>
            Install App
          </button>

          <style>
            {`@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`}
          </style>
        </div>
      )}

      {logoutMessage && (
        <Alert variant="success" className="text-center fixed-top m-3" style={{ zIndex: 9999 }}>
          {logoutMessage}
        </Alert>
      )}

      {!hideLayout && <Navbar />}
      {!hideLayout && <WhatsappWidget />}

      <main className="content-area">
        <Routes>
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/classified" element={<Classified />} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="classified" element={<AdminClassified />} />
            <Route path="properties" element={<AdminProperties />} />
          </Route>
        </Routes>
      </main>

      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;