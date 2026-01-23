import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function AddProperty() {
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    area: "",
    tag: "New",
    type: "Residential",
    bedrooms: 2,
    bathrooms: 2,
    description: ""
  });

  const [images, setImages] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  // Check login on component mount
  useEffect(() => {
    const user = localStorage.getItem("user"); 
    if (!user) {
      alert("Property add karne ke liye signup / login zaroori hai");
      navigate("/signup"); 
    }
  }, [navigate]);

  // Input change handler
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Images change handler
  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  // Add button click check
  const handleAddClick = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Property add karne ke liye signup / login zaroori hai");
      navigate("/signup");
      return false; // Stop further action
    }
    return true; // User is logged in
  };

  // Form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check login again
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login first");
      navigate("/signup");
      return;
    }

    // Check if images are uploaded
    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    try {
      const data = new FormData();
      Object.keys(formData).forEach(key => data.append(key, formData[key]));
      images.forEach(img => data.append("images", img));

      await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/properties`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          }
        }
      );

      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 1500);
    } catch (err) {
      console.error(err);
      alert("Failed to add property");
    }
  };

  return (
    <div style={styles.pageContainer}>
      {showAlert && (
        <div
          className="alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3"
          role="alert"
          style={{ zIndex: 9999, width: "80%", maxWidth: "500px" }}
        >
          Property added successfully!
        </div>
      )}

      <motion.form
        onSubmit={handleSubmit}
        style={styles.formContainer}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={styles.formTitle}>Add Property</h2>

        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required />
        <input name="area" type="number" placeholder="Area (sqft)" value={formData.area} onChange={handleChange} required />

        <select name="tag" value={formData.tag} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Featured">Featured</option>
          <option value="Premium">Premium</option>
        </select>

        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Land">Land</option>
        </select>

        <input name="bedrooms" type="number" min="0" value={formData.bedrooms} onChange={handleChange} />
        <input name="bathrooms" type="number" min="0" value={formData.bathrooms} onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
        />

        <input type="file" accept="image/*" multiple onChange={handleImagesChange} />

        {images.length > 0 && (
          <div style={styles.previewContainer}>
            {images.map((img, i) => (
              <img
                key={i}
                src={URL.createObjectURL(img)}
                alt={`preview-${i}`}
                style={styles.previewImage}
              />
            ))}
          </div>
        )}

        <motion.button
          type="submit"
          style={styles.submitButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddClick}
        >
          Add Property
        </motion.button>
      </motion.form>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: "100vh",
    padding: "2rem",
    background: "#f1f3f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "2rem",
    background: "#fff",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
    marginTop: "50px"
  },
  formTitle: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#264653"
  },
  submitButton: {
    padding: "0.7rem",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#2a9d8f",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "700"
  },
  previewContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "10px"
  },
  previewImage: {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px"
  }
};

export default AddProperty;

