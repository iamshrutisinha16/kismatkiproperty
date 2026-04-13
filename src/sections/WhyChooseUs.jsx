import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Listings",
    description: "Every listing is manually verified to ensure trust and safety.",
    number: "01",
  },
  {
  title: "Growing Community",
  description: "We are building a community of users across India who trust our platform.",
  number: "02",
},
  {
    title: "Fast Property Deals",
    description: "We connect serious buyers and sellers faster than others.",
    number: "03",
  },
  {
    title: "Pan-India Reach",
    description: "From Delhi to Bangalore — we cover properties across India.",
    number: "04",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to right, #fefefe, #eef3f8)",
      }}
    >
      <div className="container">
        {/* Center Heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted mb-2">You Will Love it</p>
          <h2 className="fw-bold">
            Why Choose <span className="text-primary">Kismat Ki Property?</span>
          </h2>
        </motion.div>

        <div className="row align-items-center">
          {/* Left Side: Features */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="row">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="col-sm-6 mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <div
                    className="p-4 rounded bg-white shadow-sm h-100"
                    style={{
                      transition: "transform 0.3s",
                      borderLeft: "4px solid #007bff",
                    }}
                  >
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className="me-3 rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                        style={{
                          width: "40px",
                          height: "40px",
                          fontWeight: "600",
                          fontSize: "16px",
                        }}
                      >
                        {feature.number}
                      </div>
                      <h6 className="fw-bold mb-0">{feature.title}</h6>
                    </div>
                    <p className="text-muted small mb-0">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Video */}
          <motion.div
            className="col-lg-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="position-relative rounded shadow overflow-hidden">
              <video
                src="/assets/propertyvideo.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-100 rounded"
                style={{ height: "300px", objectFit: "cover" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

