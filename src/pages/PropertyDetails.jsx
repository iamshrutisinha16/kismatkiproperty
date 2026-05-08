import React, {useEffect, useState,} from "react";
import {useParams,} from "react-router-dom";
import axios from "axios";
import {motion,} from "framer-motion";

import {
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

const PropertyDetails = () => {

  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperty =
      async () => {

        try {

          const res =
            await axios.get(
              "https://kismatkiproperty-backend.onrender.com/api/properties"
            );

          const found =
            res.data.find(
              (item) =>
                item._id === id
            );

          setProperty(found);

        } catch (err) {

          console.log(err);

        } finally {

          setLoading(false);

        }
      };

    fetchProperty();

  }, [id]);



  if (loading) {

    return (
      <div className="pd-loading-wrap">
        Loading Property...
      </div>
    );
  }

  if (!property) {

    return (
      <div className="pd-loading-wrap">
        Property Not Found
      </div>
    );
  }



  const whatsappLink =
    `https://wa.me/918595076589?text=Hi, I'm interested in ${property.title}`;



  return (

    <div className="pd-main-wrapper">

      {/* TOP IMAGE */}
      <motion.div
        initial={{
          opacity: 0,
        }}

        animate={{
          opacity: 1,
        }}

        transition={{
          duration: 0.7,
        }}

        className="pd-top-image-wrap"
      >

        <img
          src={property.image}
          alt={property.title}
          className="pd-top-image"
        />

        <div className="pd-dark-layer"></div>

        <div className="pd-image-content">

          <span className="pd-tag">
            {property.tag || "Featured"}
          </span>

          <h1>
            {property.title}
          </h1>

          <p>
            <FaMapMarkerAlt />
            {property.location}
          </p>

        </div>
      </motion.div>



      {/* MAIN */}
      <div className="pd-content-area">

        <div className="pd-grid-layout">

          {/* LEFT */}
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}

            animate={{
              y: 0,
              opacity: 1,
            }}

            transition={{
              duration: 0.6,
            }}
          >

            {/* PRICE */}
            <div className="pd-price-card">

              <div>

                <span className="pd-price-title">
                  Property Price
                </span>

                <h2>
                  ₹ {property.price || "On Call"}
                </h2>

              </div>

              <button>
                Premium Listing
              </button>

            </div>



            {/* FEATURES */}
            <div className="pd-feature-grid">

              <div className="pd-feature-box">

                <div className="pd-feature-icon">
                  <FaBed />
                </div>

                <div>

                  <span>
                    Bedrooms
                  </span>

                  <h4>
                    {property.bedrooms || "N/A"}
                  </h4>

                </div>
              </div>



              <div className="pd-feature-box">

                <div className="pd-feature-icon">
                  <FaRulerCombined />
                </div>

                <div>

                  <span>
                    Area
                  </span>

                  <h4>
                    {property.area || "N/A"}
                  </h4>

                </div>
              </div>

            </div>



            {/* DESCRIPTION */}
            <div className="pd-description-box">

              <h3>
                About This Property
              </h3>

              <p>
                This luxury property located at{" "}
                {property.location} offers
                spacious interiors, elegant
                architecture, premium living,
                and exceptional investment
                value. Designed with modern
                comfort and sophistication,
                this property is ideal for
                families and investors looking
                for a premium lifestyle.
              </p>

            </div>

          </motion.div>



          {/* RIGHT */}
          <motion.div
            initial={{
              y: 40,
              opacity: 0,
            }}

            animate={{
              y: 0,
              opacity: 1,
            }}

            transition={{
              delay: 0.2,
              duration: 0.6,
            }}
          >

            <div className="pd-contact-card">

              <h3>
                Interested?
              </h3>

              <p>
                Contact our property expert
                instantly.
              </p>



              <a
                href="tel:8595076589"
                className="pd-call-btn"
              >
                <FaPhoneAlt />
                Call Now
              </a>



              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="pd-whatsapp-btn"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

            </div>

          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;