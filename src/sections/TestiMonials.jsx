import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Ranganath RK",
    location: "Owner, Bangalore",
    feedback:
      "The team was constantly looking for the exact match of tenants and coordinating with both parties to get the deal fixed. I would recommend kismatkiproperty within my network & rate 5/5 for the services provided.",
  },
  {
    name: "Mr. Danasekar",
    location: "Property Agent, Chennai",
    feedback:
      "Our experience has been very fruitful. We got a lot of enquiries and good conversions. Very happy as it helped us reach a diversified audience.",
  },
  {
    name: "Priya Sharma",
    location: "Tenant, Mumbai",
    feedback:
      "Smooth experience from start to finish. Found the perfect home in just 3 days!",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[index];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(135deg, #f0f8ff, #ffffff)",
      }}
    >
      <div className="container text-center">
        <h5 className="text-primary fw-semibold mb-2">Testimonials</h5>
        <h2 className="fw-bold mb-4">
          What <span className="text-primary">Owners & Dealers</span> Say
        </h2>

        <div className="d-flex justify-content-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              className="bg-white rounded shadow p-4 d-flex flex-column flex-md-row align-items-center gap-4 text-start"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              style={{ maxWidth: "800px", width: "100%" }}
            >
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                  current.name
                )}&background=random`}
                alt={current.name}
                className="rounded-circle"
                style={{ width: 70, height: 70, objectFit: "cover", border: "2px solid #007bff" }}
              />
              <div>
                <h5 className="mb-0 fw-bold">{current.name}</h5>
                <p className="text-muted small mb-2">{current.location}</p>
                <p className="mb-2 fw-normal text-dark fst-italic">"{current.feedback}"</p>
                <div className="text-warning">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-4 d-flex justify-content-center gap-3">
          <button className="btn btn-outline-primary rounded-circle px-3 py-2" onClick={prev}>
            <FaArrowLeft />
          </button>
          <button className="btn btn-outline-primary rounded-circle px-3 py-2" onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
