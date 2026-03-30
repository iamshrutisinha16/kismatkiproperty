import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const packages = [
  {
    id: "1",
    name: "Builder Premium Package",
    price: "₹1,90,000 (GST Included)",
    duration: "1 Year",
    features: [
      "All Social Media Marketing Included",
      "Listing on KismatKiProperty.com",
      "100 Advertisement Videos",
      "10 Different Anchors for Video Ads",
      "Complete Branding Support",
    ],
    details: `- Full Social Media Management (Facebook, Instagram, etc.)
- Website Promotion on KismatKiProperty.com
- 100 High-Quality Advertisement Videos
- 10 Professional Anchors for Video शूट
- Strong Brand Building & Online Presence
- Per Advertisement Strategy & Execution
- Lead Generation Support
- Priority Visibility & Promotion

Additional Benefits:
- Dedicated Support Team
- High Reach & Engagement Campaigns
- Professional Content Creation
- No Hidden Charges (All Inclusive Package)`
  },
];

  const addOns = [
    "Professional Property Photoshoot",
    "Drone Footage & Virtual Tours",
    "Legal Document Verification",
    "Social Media Marketing Boost",
    "Google Ads Campaign Setup",
  ];

  const whyChooseUs = [
    "We provide maximum visibility for your property.",
    "Professional team handling marketing and promotions.",
    "Get leads directly and efficiently managed.",
    "Transparent and cost-effective packages.",
    "Dedicated support to answer all queries quickly."
  ];

  const faqs = [
    {
      q: "What happens if my property doesn’t sell in 30 days?",
      a: "You can renew or upgrade your package to get extended visibility and benefits.",
    },
    {
      q: "Can I upgrade my plan anytime?",
      a: "Yes, you can upgrade your plan anytime by contacting our support.",
    },
    {
      q: "Is there a refund policy?",
      a: "Refunds are processed as per the terms and conditions mentioned during purchase.",
    },
    {
      q: "Can I list multiple properties in a single package?",
      a: "Depending on the package, you can list multiple properties. Please check the details above.",
    },
  ];

  const toggleDetails = (idx) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="container-fluid px-0">

      {/* Hero Banner */}
      <motion.div
        className="hero-banner d-flex align-items-center justify-content-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", height: "400px", overflow: "hidden" }}
      >
        <video autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover" }}>
          <source src="/assets/Package.mp4" type="video/mp4" />
        </video>
      </motion.div>

     {/* Packages Section */}
<div className="container my-5">
  <motion.h2 
    className="text-center mb-5 fw-bold"
    initial={{ opacity: 0, y: -20 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    viewport={{ once: true }}
  >
    🚀 Premium Builder Package
  </motion.h2>

  <div className="row justify-content-center">
    {packages.map((pkg, idx) => (
      <motion.div 
        key={pkg.id} 
        className="col-lg-5 col-md-8 col-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4 }}
      >
        <div 
          className="card border-0 shadow-lg h-100 text-center position-relative"
          style={{
            borderRadius: "20px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #0d6efd, #0dcaf0)",
            color: "#fff"
          }}
        >

          {/* Badge */}
          <span style={{
            position: "absolute",
            top: "15px",
            right: "-40px",
            background: "#ffc107",
            color: "#000",
            padding: "8px 50px",
            transform: "rotate(45deg)",
            fontWeight: "bold",
            fontSize: "14px"
          }}>
            BEST OFFER
          </span>

          {/* Header */}
          <div className="py-4">
            <h3 className="fw-bold">{pkg.name}</h3>
            <h1 className="fw-bold mt-3">{pkg.price}</h1>
            <p className="opacity-75">{pkg.duration}</p>
          </div>

          {/* Body */}
          <div 
            className="bg-white text-dark px-4 py-4"
            style={{ borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}
          >
            <ul className="list-unstyled text-start mb-4">
              {pkg.features.map((f, i) => (
                <li key={i} className="mb-2">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.button
              className="btn btn-primary w-100 fw-bold py-2"
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleDetails(idx)}
            >
              {expandedIndex === idx ? "Hide Details" : "View Full Details"}
            </motion.button>

            {/* Details */}
            {expandedIndex === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.4 }}
                className="mt-3 text-start small text-muted"
              >
                <hr />
                <pre style={{ whiteSpace: "pre-wrap" }}>{pkg.details}</pre>
              </motion.div>
            )}
          </div>

        </div>
      </motion.div>
    ))}
  </div>
</div>
      {/* Add-ons & Extra Services */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Add-ons & Extra Services</h3>
        <ul className="list-group list-group-flush w-100 w-md-75 mx-auto">
          {addOns.map((item, idx) => (
            <li key={idx} className="list-group-item">
              <i className="bi bi-plus-circle-fill text-primary me-2"></i>{item}
            </li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us Section */}
      <div className="container my-5">
        <h3 className="text-center mb-4">Why Choose Us?</h3>
        <div className="row g-4 justify-content-center">
          {whyChooseUs.map((point, idx) => (
            <motion.div
              key={idx}
              className="col-md-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              <div className="card h-100 shadow-sm p-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                {point}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bank Payment Details */}
      <motion.div className="container my-5 bg-white p-4 rounded shadow-sm border" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
        <h3 className="text-center mb-4">Bank Payment Details</h3>
        <div className="row">
          <div className="col-md-6">
            <p><strong>Account Holder Name:</strong> kismatkiproperty.com</p>
            <p><strong>Account Number:</strong> 23060200000203</p>
            <p><strong>IFSC Code:</strong> FDRL0002306</p>
            <p><strong>Bank Name:</strong> FEDERAL Bank</p>
            <p><strong>Address:</strong> New Delhi Janakpuri, South West Delhi-110058</p>
          </div>
          <div className="col-md-6 text-center">
            <p><strong>Scan to Pay:</strong></p>
            <img src="/assets/scanner.jpeg" alt="Scan QR Code" className="img-fluid" style={{ maxWidth: "250px" }} />
          </div>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="container my-5">
        <h3 className="text-center mb-4">FAQs</h3>
        <div className="accordion w-100 w-md-75 mx-auto" id="faqAccordion">
          {faqs.map((faq, idx) => (
            <div key={idx} className="accordion-item">
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button className={`accordion-button ${idx !== 0 ? "collapsed" : ""}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`} aria-expanded={idx === 0} aria-controls={`collapse${idx}`}>
                  {faq.q}
                </button>
              </h2>
              <div id={`collapse${idx}`} className={`accordion-collapse collapse ${idx === 0 ? "show" : ""}`} aria-labelledby={`heading${idx}`} data-bs-parent="#faqAccordion">
                <div className="accordion-body">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ContactPage;
