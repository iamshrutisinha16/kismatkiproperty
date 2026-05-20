import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";

import {
  FaHeart,
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const FeaturedProperties = () => {

  const scrollRef = useRef(null);

  // STATES
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState({});

  // FETCH DATA
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {

      setLoading(true);

      const res = await axios.get(
        "https://kismatkiproperty-backend.onrender.com/api/properties"
      );

      setAds(res.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }
  };

  // HORIZONTAL SCROLL
  const scroll = (direction) => {

    const container = scrollRef.current;

    if (container) {
      container.scrollBy({
        left: direction === "left" ? -320 : 320,
        behavior: "smooth",
      });
    }
  };

  // NEXT SLIDE
  const nextSlide = (id, total) => {

    setCurrentSlide((prev) => ({
      ...prev,
      [id]:
        (prev[id] || 0) >= total - 1
          ? 0
          : (prev[id] || 0) + 1,
    }));
  };

  // PREVIOUS SLIDE
  const prevSlide = (id, total) => {

    setCurrentSlide((prev) => ({
      ...prev,
      [id]:
        (prev[id] || 0) <= 0
          ? total - 1
          : (prev[id] || 0) - 1,
    }));
  };

  return (
    <section
      className="py-5"
      style={{ background: "#f8f9fa" }}
    >

      <div className="container">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">

          <div>
            <h2 className="fw-bold text-primary mb-1">
              Featured Properties
            </h2>

            <p className="text-muted mb-0">
              Curated especially for you
            </p>
          </div>

          <div className="d-flex gap-2">

            <button
              className="btn btn-light shadow-sm rounded-circle"
              onClick={() => scroll("left")}
            >
              <FaChevronLeft />
            </button>

            <button
              className="btn btn-light shadow-sm rounded-circle"
              onClick={() => scroll("right")}
            >
              <FaChevronRight />
            </button>

          </div>
        </div>

        {/* PROPERTY CARDS */}
        <div
          ref={scrollRef}
          className="d-flex gap-4 overflow-auto pb-3 no-scrollbar"
        >

          {/* LOADING SKELETON */}
          {loading ? (

            [...Array(4)].map((_, index) => (

              <div
                key={index}
                className="card border-0 shadow-sm rounded-4 overflow-hidden"
                style={{
                  minWidth: "300px",
                  maxWidth: "300px",
                  flexShrink: 0,
                }}
              >

                {/* IMAGE SKELETON */}
                <div
                  className="shimmer"
                  style={{
                    height: "200px",
                    background: "#e9ecef",
                  }}
                ></div>

                <div className="card-body">

                  <div
                    className="shimmer rounded mb-3"
                    style={{
                      height: "20px",
                      width: "80%",
                      background: "#e9ecef",
                    }}
                  ></div>

                  <div
                    className="shimmer rounded mb-3"
                    style={{
                      height: "15px",
                      width: "60%",
                      background: "#e9ecef",
                    }}
                  ></div>

                  <div
                    className="shimmer rounded mb-3"
                    style={{
                      height: "40px",
                      width: "100%",
                      background: "#e9ecef",
                    }}
                  ></div>

                  <div className="d-flex justify-content-between align-items-center mt-4">

                    <div
                      className="shimmer rounded"
                      style={{
                        height: "20px",
                        width: "80px",
                        background: "#e9ecef",
                      }}
                    ></div>

                    <div
                      className="shimmer rounded-pill"
                      style={{
                        height: "35px",
                        width: "90px",
                        background: "#e9ecef",
                      }}
                    ></div>

                  </div>

                </div>
              </div>
            ))

          ) : (

            ads.map((property) => {

              const images = property.images?.length
                ? property.images
                : [property.image];

              const current = currentSlide[property._id] || 0;

              const imageSrc = images[current];

              return (

                <motion.div
                  key={property._id}
                  className="card border-0 shadow-sm rounded-4 overflow-hidden"
                  style={{
                    minWidth: "300px",
                    maxWidth: "300px",
                    flexShrink: 0,
                    cursor: "pointer",
                  }}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                >

                  {/* IMAGE */}
                  <div className="position-relative overflow-hidden">

                    <img
                      loading="lazy"
                      src={imageSrc}
                      alt={property.title}
                      className="card-img-top"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        transition: "0.4s",
                      }}
                    />

                    {/* TAG */}
                    {property.tag && (
                      <span className="badge bg-primary position-absolute top-0 start-0 m-2">
                        {property.tag}
                      </span>
                    )}

                    {/* HEART */}
                    <button className="btn btn-light btn-sm position-absolute top-0 end-0 m-2 rounded-circle text-danger">
                      <FaHeart />
                    </button>

                    {/* SLIDER BUTTONS */}
                    {images.length > 1 && (

                      <div className="position-absolute top-50 start-0 end-0 d-flex justify-content-between px-2 translate-middle-y">

                        <button
                          className="btn btn-dark btn-sm rounded-circle opacity-75"
                          onClick={() =>
                            prevSlide(property._id, images.length)
                          }
                        >
                          <FaChevronLeft size={12} />
                        </button>

                        <button
                          className="btn btn-dark btn-sm rounded-circle opacity-75"
                          onClick={() =>
                            nextSlide(property._id, images.length)
                          }
                        >
                          <FaChevronRight size={12} />
                        </button>

                      </div>
                    )}

                  </div>

                  {/* BODY */}
                  <div className="card-body">

                    <h6 className="fw-bold text-truncate">
                      {property.title}
                    </h6>

                    <p className="text-muted small mb-2">
                      <FaMapMarkerAlt className="me-1 text-primary" />
                      {property.location}
                    </p>

                    <div className="d-flex justify-content-between text-muted small mb-3 bg-light p-2 rounded">

                      <span>
                        <FaBed /> {property.bedrooms || "N/A"}
                      </span>

                      <span>
                        <FaRulerCombined /> {property.area || "N/A"}
                      </span>

                    </div>

                    <div className="d-flex justify-content-between align-items-center">

                      <span className="fw-bold text-primary">
                        ₹ {property.price || "On Call"}
                      </span>

                      <Link
                        to={`/property/${property._id}`}
                        className="btn btn-sm btn-primary rounded-pill px-3"
                      >
                        Details
                      </Link>

                    </div>

                  </div>

                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* CUSTOM CSS */}
      <style>{`

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .shimmer {
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {

          0% {
            opacity: 0.5;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.5;
          }
        }

      `}</style>

    </section>
  );
};

export default FeaturedProperties;