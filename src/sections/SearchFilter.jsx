import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaHome, FaRupeeSign } from "react-icons/fa";

function SearchFilter() {
  const [results, setResults] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    propertyType: "",
    priceRange: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults({ ...formData }); // Simulated result
  };

  return (
    <section className="py-5" style={{ background: "#eef2f5" }}>
      <div className="container">
        <motion.div
          className="rounded-4 p-4 p-md-5 shadow-lg mx-auto"
          style={{
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(12px)",
            maxWidth: "950px",
            border: "1px solid rgba(0,0,0,0.05)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center text-primary fw-bold mb-4">
            Find Your Perfect Property
          </h2>

          <form
            className="row gy-4 gx-4 justify-content-center"
            onSubmit={handleSubmit}
          >
            {/* Location */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="location" className="form-label fw-semibold">
                <FaMapMarkerAlt className="me-2 text-secondary" />
                Location
              </label>
              <select
                className="form-select shadow-sm rounded-3"
                id="location"
                onChange={handleChange}
              >
                <option value="">Select City</option>
                <option value="Delhi">Delhi</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="propertyType" className="form-label fw-semibold">
                <FaHome className="me-2 text-secondary" />
                Property Type
              </label>
              <select
                className="form-select shadow-sm rounded-3"
                id="propertyType"
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Flat">Flat</option>
                <option value="House">House</option>
                <option value="Plot">Plot</option>
                <option value="Commercial">Commercial</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="col-lg-4 col-md-6">
              <label htmlFor="priceRange" className="form-label fw-semibold">
                <FaRupeeSign className="me-2 text-secondary" />
                Price Range
              </label>
              <select
                className="form-select shadow-sm rounded-3"
                id="priceRange"
                onChange={handleChange}
              >
                <option value="">Select Range</option>
                <option value="0-20">₹0 - ₹20 Lakhs</option>
                <option value="20-50">₹20 - ₹50 Lakhs</option>
                <option value="50-100">₹50 Lakhs - ₹1 Crore</option>
                <option value="100+">₹1 Crore+</option>
              </select>
            </div>

            {/* Button */}
            <div className="col-12 text-center">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                type="submit"
                className="btn px-5 py-2 fs-5 rounded-pill text-white"
                style={{
                  background: "linear-gradient(to right, #007bff, #00c6ff)",
                  border: "none",
                  boxShadow: "0 4px 14px rgba(0, 123, 255, 0.3)",
                }}
              >
                Search
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Simulated Results */}
        {results && (
          <motion.div
            className="mt-5 p-4 bg-white shadow rounded-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h5 className="fw-bold text-success mb-3">Search Results</h5>
            <p>
              <strong>Location:</strong> {results.location}
            </p>
            <p>
              <strong>Property Type:</strong> {results.propertyType}
            </p>
            <p>
              <strong>Price Range:</strong> {results.priceRange}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default SearchFilter;
