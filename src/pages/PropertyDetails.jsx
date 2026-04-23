import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt, FaBed, FaRulerCombined } from "react-icons/fa";

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await axios.get("https://kismatkiproperty-backend.onrender.com/api/properties");
        const found = res.data.find((item) => item._id === id);
        setProperty(found);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProperty();
  }, [id]); 

  if (!property) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  const whatsappLink = `https://wa.me/918595076589?text=Hi, I'm interested in ${property.title}`;

  return (
    <div className="container py-5">

      <div className="row g-4 align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-md-6">
          <img
            src={property.image}
            alt={property.title}
            className="property-img"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="col-md-6">

          <h2 className="fw-bold mb-2">{property.title}</h2>

          <p className="text-muted mb-3">
            <FaMapMarkerAlt className="text-primary me-2" />
            {property.location}
          </p>

          <h3 className="text-primary fw-bold mb-4">
            ₹ {property.price}
          </h3>

          <div className="info-box mb-4">
            <div>
              <FaBed className="me-2" />
              {property.bedrooms || "N/A"} Bedrooms
            </div>

            <div>
              <FaRulerCombined className="me-2" />
              {property.area || "N/A"}
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success w-100 py-2 fw-bold"
          >
            Contact on WhatsApp
          </a>

        </div>
      </div>

    </div>
  );
};

export default PropertyDetails;