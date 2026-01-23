import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const packages = [
    {
      id: "1",
      name: "Advertisement",
      price: "₹5,000",
      duration: "2 Months",
      features: [
        "1 Advertisement Slot on homepage",
        "Up to 10 property images allowed",
        "Visible to all users: dealer / owner / buyer",
        "Highlighted or “Best Value” badge",
      ],
      details: `- Professional Photography
- Videography
- Social Media Advertisement
- Targeted Posts on Facebook & Instagram
- Website Listings with Basic Lead Report
   - Your property is showcased on our website
   - Receive all inquiries directly
Additional benefits include:
- Quick approval within 24 hours
- Featured slot for first week of listing
- Maximum exposure across all device screens
- No hidden charges; all features included for the 2-month duration`,
    },
    {
      id: "2",
      name: "Project",
      price: "₹1,80,000",
      duration: "1 Year",
      features: [
        "Project Listing on Website",
        "Unlimited Photos & Video",
        "Full Branding & Promotion",
        "Dedicated Support Team",
        "Lead Management Dashboard",
      ],
      details:
        "Designed for full-scale project launches. Get premium visibility, branding, media support, and lead tracking tools.",
    },
    {
      id: "3",
      name: "Platinum",
      price: "₹4,50,000",
      duration: "1 Year",
      features: [
        "Unlimited Listings",
        "Unlimited Photos & Videos",
        "Dedicated Account Manager",
        "Featured & City-Level Promotion",
        "Google Ads Campaign Included",
        "Legal & Documentation Assistance",
      ],
      details:
        "All-in-one solution for serious sellers and developers. Includes Google Ads, legal help, and full-service listing support.",
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
        <motion.h2 className="text-center mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          Choose Your Package
        </motion.h2>

        <div className="row g-4">
          {packages.map((pkg, idx) => (
            <motion.div key={pkg.id} className="col-lg-4 col-md-6 col-sm-12" whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
              <div className="card shadow-sm h-100 position-relative">
                {pkg.price === "₹5,000" && (
                  <span style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    background: "#ffc107",
                    color: "#000",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontWeight: "600",
                    fontSize: "14px"
                  }}>Best Value</span>
                )}
                <div className="card-header bg-primary text-white text-center">
                  <h4 className="my-2">{pkg.name}</h4>
                </div>
                <div className="card-body d-flex flex-column">
                  <h3 className="text-center text-success mb-2">{pkg.price}</h3>
                  <p className="text-center text-muted mb-3">{pkg.duration}</p>
                  <ul className="list-unstyled small mb-3">
                    {pkg.features.map((f, i) => (
                      <li key={i}>
                        <i className="bi bi-check-circle-fill text-success me-2"></i>{f}
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="btn btn-outline-primary mt-auto w-100"
                    onClick={() => toggleDetails(idx)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {expandedIndex === idx ? "Hide Details" : "View Details"}
                  </motion.button>

                  {expandedIndex === idx && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.4 }}
                      style={{ overflow: "hidden" }}
                      className="mt-3 border-top pt-2 text-muted small"
                    >
                      <strong>Details:</strong>
                      <pre style={{whiteSpace: "pre-wrap"}}>{pkg.details}</pre>
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
