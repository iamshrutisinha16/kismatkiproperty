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

// ✅ ADMIN
import Dashboard from "./pages/admin/dashboard";
import AdminClassified from "./pages/admin/AdminClassified";
import AdminLayout from "./pages/admin/AdminLayout";

// Initialize Google Analytics
ReactGA.initialize("G-6YQ41WYR5E");

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [logoutMessage, setLogoutMessage] = useState("");

  usePageTracking();

  // ✅ Navbar/Footer hide for signup + admin
  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin");

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
    <div className="app-container">

      {/* Alert */}
      {logoutMessage && (
        <Alert
          variant="success"
          className="text-center fixed-top m-3"
          style={{ zIndex: 9999 }}
        >
          {logoutMessage}
        </Alert>
      )}

      {/* Navbar & Widgets */}
      {!hideLayout && <Navbar />}
      {!hideLayout && <WhatsappWidget />}

      {/* Routes */}
      <main className="content-area">
        <Routes>

          {/* 🌐 WEBSITE ROUTES */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blueprint" element={<Blueprint />} />
          <Route path="/package" element={<Package />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/classified" element={<Classified />} />

          {/* 🔥 ADMIN ROUTES (NESTED) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="classified" element={<AdminClassified />} />
          </Route>

        </Routes>
      </main>

      {/* Footer */}
      {!hideLayout && <Footer />}
    </div>
  );
}

export default App;