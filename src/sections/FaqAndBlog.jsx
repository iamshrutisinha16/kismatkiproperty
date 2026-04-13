import React from "react";
import { motion } from "framer-motion";

const FaqAndInquiryForm = () => {
  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  return (
    <>
      {/* FAQ Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {[
              { q: "Is listing my property free?", a: "Yes, listing is completely free on Kismat Ki Property." },
              { q: "How can I post my property?", a: 'Just fill the form in the "Sell Property" section and submit.' },
              { q: "Do I need to pay any brokerage?", a: "No, we do not charge any brokerage or agent fee." },
              { q: "How can I rent/sell my property faster?", a: "Upload clear images, give detailed description, and set the right price to get faster responses." },
            ].map((item, i) => (
              <div className="accordion-item" key={i}>
                <h2 className="accordion-header" id={`faq${i}`}>
                  <button
                    className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${i}`}
                  >
                    {item.q}
                  </button>
                </h2>
                <div
                  id={`collapse${i}`}
                  className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">{item.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section
        id="inquiry-form" 
        className="py-5 text-white"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/white-wall.png')",
          backgroundColor: "#004d40",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div
            className="p-4 rounded"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              backdropFilter: "blur(4px)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <h2 className="fw-bold text-center mb-4">Property Inquiry Form</h2>
              <p className="text-center fs-5 mb-5">
                Submit your query and our team will contact you shortly.
              </p>

              {/* Inquiry Form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <form
                  className="mx-auto bg-white text-dark p-4 rounded shadow"
                  style={{
                    maxWidth: "600px",
                    backgroundImage:
                      "url('https://www.transparenttextures.com/patterns/paper-fibers.png')",
                  }}
                  onSubmit={async (e) => {
                    e.preventDefault();

                    // Form data collect karna
                    const formData = {
                      name: e.target.name.value,
                      phone: e.target.phone.value,
                      email: e.target.email.value,
                      message: e.target.message.value,
                    };

                    try {
                      const res = await fetch(`${API_BASE}/api/inquiry`, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(formData),
                      });

                      if (res.ok) {
                        alert("✅ Inquiry submitted successfully! We’ll contact you soon.");
                        e.target.reset();
                      } else {
                        alert("❌ Something went wrong. Please try again.");
                      }
                    } catch (error) {
                      console.error("Error submitting inquiry:", error);
                      alert("⚠️ Server error. Please try again later.");
                    }
                  }}
                >
                  <div className="mb-3 text-start">
                    <label className="form-label fw-medium">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-medium">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Mobile Number"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                  <div className="mb-3 text-start">
                    <label className="form-label fw-medium">Message / Requirement</label>
                    <textarea
                      name="message"
                      className="form-control"
                      rows="3"
                      placeholder="Tell us about your property or inquiry..."
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-success fw-bold px-5">
                    📤 Submit
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqAndInquiryForm;
