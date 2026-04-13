import React, { useRef, useState } from "react";
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

// Dummy Data with High Quality Images
const DUMMY_PROPERTIES = [
  {
    _id: "1",
    title: "Luxury 3BHK Apartment",
    location: "Andheri West, Mumbai",
    price: "2.5 Cr",
    bedrooms: 3,
    bathrooms: 3,
    area: "1500 sqft",
    tag: "Premium",
    images: [
      "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    _id: "2",
    title: "Modern Villa with Pool",
    location: "Lonavala, Maharashtra",
    price: "4.8 Cr",
    bedrooms: 4,
    bathrooms: 4,
    area: "3200 sqft",
    tag: "Exclusive",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    _id: "3",
    title: "Sea Facing Penthouse",
    location: "Worli, Mumbai",
    price: "12.0 Cr",
    bedrooms: 5,
    bathrooms: 6,
    area: "4500 sqft",
    tag: "Luxury",
    images: [
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    _id: "4",
    title: "Cozy Studio Apartment",
    location: "Pune, Maharashtra",
    price: "45 Lakhs",
    bedrooms: 1,
    bathrooms: 1,
    area: "550 sqft",
    tag: "Budget",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&auto=format&fit=crop",
    ],
  },
  {
    _id: "5",
    title: "Skyline View Flat",
    location: "Banjara Hills, Hyderabad",
    price: "3.2 Cr",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sqft",
    tag: "New Launch",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800&auto=format&fit=crop",
    ],
  },
];

const FeaturedProperties = () => {
  const scrollRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState({});
  const adIndexes = [1, 3]; // Advertisement cards placeholder positions

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -320 : 320;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const nextSlide = (id, total) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) >= total - 1 ? 0 : (prev[id] || 0) + 1,
    }));
  };

  const prevSlide = (id, total) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) <= 0 ? total - 1 : (prev[id] || 0) - 1,
    }));
  };

  return (
    <section className="py-5" style={{ backgroundColor: "#f8f9fa", overflow: "hidden" }}>
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <motion.h2
              className="fw-bold text-primary mb-1"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              Featured Properties
            </motion.h2>
            <p className="text-muted mb-0">Handpicked properties for you</p>
          </div>
          <div className="d-flex gap-2">
            <button className="btn btn-white shadow-sm rounded-circle" onClick={() => scroll("left")} style={{ width: "45px", height: "45px" }}>
              <FaChevronLeft />
            </button>
            <button className="btn btn-white shadow-sm rounded-circle" onClick={() => scroll("right")} style={{ width: "45px", height: "45px" }}>
              <FaChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="d-flex overflow-auto gap-4 pb-4 no-scrollbar"
          style={{ 
            scrollSnapType: "x mandatory", 
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch" 
          }}
        >
          {DUMMY_PROPERTIES.flatMap((property, index) => {
            const cards = [];

            // Add Advertisement Card at specific indexes
            if (adIndexes.includes(index)) {
              cards.push(
                <motion.div
                  key={`ad-${index}`}
                  className="card border-0 shadow-sm rounded-4 d-flex justify-content-center align-items-center text-center p-4"
                  style={{
                    minWidth: "300px",
                    height: "auto",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    scrollSnapAlign: "start",
                    flexShrink: 0,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <div className="py-5">
                    <h4 className="fw-bold">Your Ad Here</h4>
                    <p className="small opacity-75">Reach thousands of buyers daily!</p>
                    <button className="btn btn-light btn-sm rounded-pill px-4 mt-2">Contact Us</button>
                  </div>
                </motion.div>
              );
            }

            const totalImages = property.images.length;
            const current = currentSlide[property._id] || 0;
            const imageSrc = property.images[current];

            cards.push(
              <motion.div
                key={property._id}
                className="card border-0 shadow-sm rounded-4 h-100"
                style={{ minWidth: "300px", maxWidth: "300px", scrollSnapAlign: "start", flexShrink: 0 }}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="position-relative overflow-hidden rounded-top-4">
                  <img
                    src={imageSrc}
                    alt={property.title}
                    className="card-img-top transition-all"
                    style={{ height: "220px", objectFit: "cover", transition: "0.5s" }}
                  />
                  
                  {/* Overlay Tags */}
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary px-3 py-2 shadow-sm">{property.tag}</span>
                  </div>
                  
                  <button className="btn btn-white btn-sm position-absolute top-0 end-0 m-3 rounded-circle shadow-sm text-danger" style={{ width: "35px", height: "35px", display: "grid", placeItems: "center" }}>
                    <FaHeart />
                  </button>

                  {/* Image Navigation Arrows */}
                  {totalImages > 1 && (
                    <div className="position-absolute top-50 w-100 d-flex justify-content-between px-2 translate-middle-y">
                      <button className="btn btn-dark btn-sm rounded-circle opacity-75" onClick={() => prevSlide(property._id, totalImages)}>
                        <FaChevronLeft size={10} />
                      </button>
                      <button className="btn btn-dark btn-sm rounded-circle opacity-75" onClick={() => nextSlide(property._id, totalImages)}>
                        <FaChevronRight size={10} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="card-body p-3">
                  <h6 className="fw-bold text-dark mb-1 text-truncate">{property.title}</h6>
                  <p className="text-muted small mb-3">
                    <FaMapMarkerAlt className="text-primary me-1" /> {property.location}
                  </p>
                  
                  <div className="d-flex justify-content-between text-muted small mb-3 bg-light p-2 rounded-3">
                    <span title="Bedrooms"><FaBed className="me-1" /> {property.bedrooms}</span>
                    <span title="Bathrooms"><FaBath className="me-1" /> {property.bathrooms}</span>
                    <span title="Area"><FaRulerCombined className="me-1" /> {property.area}</span>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h6 fw-bold text-primary mb-0">₹ {property.price}</span>
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

            return cards;
          })}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .transition-all { transition: all 0.3s ease-in-out; }
      `}</style>
    </section>
  );
};

export default FeaturedProperties;