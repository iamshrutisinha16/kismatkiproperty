import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaRulerCombined,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import api from "../api";

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [properties, setProperties] = useState([]);
  const adIndexes = [1, 3];
  const [currentSlide, setCurrentSlide] = useState({}); 

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await api.get(
          "https://kismatkiproperty.onrender.com/api/properties"
        );
        setProperties(res.data);
      } catch (err) {
        console.error("Failed to fetch properties", err);
      }
    };
    fetchProperties();
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const nextSlide = (id, total) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: prev[id] >= total - 1 ? 0 : prev[id] + 1,
    }));
  };

  const prevSlide = (id, total) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: prev[id] <= 0 ? total - 1 : prev[id] - 1,
    }));
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <motion.h2
          className="text-center fw-bold text-primary mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Featured Properties
        </motion.h2>
        <motion.p
          className="text-center text-muted mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Recommended For You
        </motion.p>

        <div className="d-flex justify-content-between align-items-center mb-3">
          <button className="btn btn-light shadow" onClick={() => scroll("left")}>
            <FaChevronLeft />
          </button>
          <button className="btn btn-light shadow" onClick={() => scroll("right")}>
            <FaChevronRight />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 pb-3"
          style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
        >
          {properties.flatMap((property, index) => {
            const cards = [];

            if (adIndexes.includes(index)) {
              cards.push(
                <motion.div
                  key={`ad-${index}`}
                  className="card border-0 shadow-sm rounded-4 d-flex justify-content-center align-items-center text-center bg-light text-muted"
                  style={{
                    minWidth: "280px",
                    height: "360px",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <h5 className="fw-bold">Space for Advertisement</h5>
                    <p className="small">Your Ad could be here!</p>
                  </div>
                </motion.div>
              );
            }

            const totalImages = property.images && property.images.length > 0 ? property.images.length : 1;
            const current = currentSlide[property._id] || 0;
            const imageSrc =
              property.images && property.images.length > 0
                ? `https://kismatkiproperty.onrender.com/uploads/${property.images[current]}`
                : "/assets/mumbai.webp";

            cards.push(
              <motion.div
                key={property._id || index}
                className="card border-0 shadow-sm rounded-4"
                style={{ minWidth: "280px", scrollSnapAlign: "start", flexShrink: 0 }}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="position-relative">
                  <img
                    src={imageSrc}
                    alt={property.title}
                    className="card-img-top rounded-top-4"
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/assets/featureproperty.jpeg";
                    }}
                  />
                  {totalImages > 1 && (
                    <>
                      <button
                        className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
                        onClick={() => prevSlide(property._id, totalImages)}
                      >
                        <FaChevronLeft />
                      </button>
                      <button
                        className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
                        onClick={() => nextSlide(property._id, totalImages)}
                      >
                        <FaChevronRight />
                      </button>
                    </>
                  )}
                  <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                    {property.tag || "New"}
                  </span>
                  <button className="btn position-absolute top-0 end-0 m-2 text-danger">
                    <FaHeart />
                  </button>
                </div>

                <div className="card-body">
                  <h6 className="fw-bold mb-1">{property.title}</h6>
                  <p className="text-muted small mb-2">
                    <FaMapMarkerAlt className="me-1" /> {property.location}
                  </p>
                  <div className="d-flex justify-content-between text-muted small mb-2">
                    <span>
                      <FaBed className="me-1" /> {property.bedrooms || 2} Beds
                    </span>
                    <span>
                      <FaBath className="me-1" /> {property.bathrooms || 2} Baths
                    </span>
                    <span>
                      <FaRulerCombined className="me-1" /> {property.area || "1200 sqft"}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-primary">₹ {property.price}</span>
                    <div>
                      <Link
                        to={`/property/${property._id}`}
                        className="btn btn-sm btn-outline-primary rounded-pill me-2"
                      >
                    View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );

            return cards;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
