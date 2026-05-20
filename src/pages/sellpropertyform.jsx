import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  MapPin,
  IndianRupee,
  Upload,
  Phone,
  User,
  FileText,
  Building2,
} from "lucide-react";

const SellProperty = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    title: "",
    type: "",
    price: "",
    location: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Property Submitted Successfully!");
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        background:
          "linear-gradient(to right,rgb(243, 247, 255),rgb(255, 255, 255))",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-5"
        >
          <p className="text-secondary fs-5">
            Fill your property details and get genuine buyers instantly.
          </p>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="card border-0 shadow-lg p-4 rounded-4"
        >
          <form onSubmit={handleSubmit}>
            <div className="row g-4">
              {/* OWNER NAME */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <User size={18} className="me-2" />
                  Owner Name
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter owner name"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PHONE */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <Phone size={18} className="me-2" />
                  Mobile Number
                </label>

                <input
                  type="tel"
                  className="form-control form-control-lg"
                  placeholder="Enter phone number"
                  name="phone"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PROPERTY TITLE */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <Home size={18} className="me-2" />
                  Property Title
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="2BHK Flat in Noida"
                  name="title"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* PROPERTY TYPE */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <Building2 size={18} className="me-2" />
                  Property Type
                </label>

                <select
                  className="form-select form-select-lg"
                  name="type"
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Property Type</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Commercial</option>
                  <option>Plot</option>
                  <option>Office</option>
                </select>
              </div>

              {/* PRICE */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <IndianRupee size={18} className="me-2" />
                  Expected Price
                </label>

                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Enter property price"
                  name="price"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* LOCATION */}
              <div className="col-md-6">
                <label className="form-label fw-semibold">
                  <MapPin size={18} className="me-2" />
                  Property Location
                </label>

                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Sector 150 Noida"
                  name="location"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* IMAGE */}
              <div className="col-12">
                <label className="form-label fw-semibold">
                  <Upload size={18} className="me-2" />
                  Upload Property Image
                </label>

                <input
                  type="file"
                  className="form-control form-control-lg"
                  name="image"
                  onChange={handleChange}
                />
              </div>

              {/* DESCRIPTION */}
              <div className="col-12">
                <label className="form-label fw-semibold">
                  <FileText size={18} className="me-2" />
                  Property Description
                </label>

                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Write complete property details..."
                  name="description"
                  onChange={handleChange}
                ></textarea>
              </div>

              {/* BUTTON */}
              <div className="col-12 text-center mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow"
                >
                  Submit Property
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SellProperty;