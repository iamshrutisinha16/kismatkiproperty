import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

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
import Listings from "./pages/Listings";
import SellProperty from "./pages/sellpropertyform";

// ADMIN
import Dashboard from "./pages/admin/dashboard";
import AdminClassified from "./pages/admin/AdminClassified";
import AdminProperties from "./pages/admin/AdminProperties";
import AdminLayout from "./pages/admin/AdminLayout";

// Initialize Google Analytics
ReactGA.initialize("G-6YQ41WYR5E");

function App() {
  const location = useLocation();

  usePageTracking();

  const hideLayout =
    location.pathname === "/signup" ||
    location.pathname.startsWith("/admin");

  return (
    <div>
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
          <Route path="/properties" element={<Listings />} />
          <Route path="/sell-property" element={<SellProperty />} />

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