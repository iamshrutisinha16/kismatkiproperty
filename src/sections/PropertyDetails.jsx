import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaCompass } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "bootstrap/dist/css/bootstrap.min.css";

// Leaflet marker
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/api/properties/${id}`
        );
        setProperty(res.data);
      } catch (err) {
        console.error("Failed to fetch property", err);
        alert("Property not found!");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchProperty();
  }, [id, navigate]);

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (!property) return null;

  const latitude = property.latitude || 19.076;
  const longitude = property.longitude || 72.8777;

  return (
    <motion.div
      className="container-fluid"
      style={{ marginTop: "90px" }} // ✅ Navbar ka height adjust karke yahan margin de do
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* === Top Info Bar === */}
      <div className="bg-white p-3 shadow-sm border rounded mb-4">
        <div className="row align-items-center">
          <div className="col-md-4">
            <h3 className="fw-bold text-success mb-0">₹ {property.price}</h3>
            <small className="text-muted">{property.area || "N/A"} sqft</small>
          </div>
          <div className="col-md-8">
            <h5 className="fw-bold mb-1">
              {property.bedrooms} BHK {property.bathrooms} Baths
            </h5>
            <p className="mb-0 text-muted">
              Independent / Builder Floor in {property.location}
            </p>
          </div>
        </div>
      </div>

      {/* === Image + Details Section === */}
      <div className="row g-4">
        {/* Left Image */}
        <div className="col-md-6">
          <div
            id="propertyCarousel"
            className="carousel slide shadow rounded overflow-hidden"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {property.images && property.images.length > 0 ? (
                property.images.map((img, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <img
                      src={`${process.env.REACT_APP_API_BASE_URL}/uploads/${img}`}
                      className="d-block w-100"
                      alt="Property"
                      style={{ height: "400px", objectFit: "cover" }}
                    />
                  </div>
                ))
              ) : (
                <div className="carousel-item active">
                  <img
                    src="/assets/propertyimage.jpeg"
                    className="d-block w-100"
                    alt="Default"
                    style={{ height: "400px", objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#propertyCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#propertyCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>

        {/* Right Details */}
        <div className="col-md-6">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h5 className="fw-bold mb-3">Property Details</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><FaBed className="me-2 text-primary" /> Bedrooms: {property.bedrooms || "2"}</li>
              <li className="mb-2"><FaBath className="me-2 text-info" /> Bathrooms: {property.bathrooms || "1"}</li>
              <li className="mb-2"><FaRulerCombined className="me-2 text-warning" /> Area: {property.area || "N/A"} sqft</li>
              <li className="mb-2"><FaMapMarkerAlt className="me-2 text-danger" /> Address: {property.location}</li>
            </ul>
            {property.description && (
              <p className="text-muted mt-3">{property.description}</p>
            )}
          </div>
        </div>
      </div>

      {/* === Map Section === */}
      <motion.div
        className="mt-5 rounded shadow bg-white p-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h5 className="mb-3">Find Us On Map</h5>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[latitude, longitude]} icon={markerIcon}>
            <Popup>{property.title}</Popup>
          </Marker>
        </MapContainer>
      </motion.div>
    </motion.div>
  );
}

export default PropertyDetail;
