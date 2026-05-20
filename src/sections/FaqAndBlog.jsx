import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";

const FaqAndInquiryForm = () => {

  const API_BASE = process.env.REACT_APP_API_BASE_URL;

  return (
    <>

      {/* ================= FAQ SECTION ================= */}

      <section
        className="py-5"
        style={{
          background: "#f8fafc",
        }}
      >

        <div className="container">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-5"
          >

            <span
              className="px-4 py-2 rounded-pill text-white fw-semibold"
              style={{
                background: "#0d6efd",
                fontSize: "14px",
              }}
            >
              FAQS
            </span>

            <h2 className="fw-bold display-5 mt-4 mb-3">
              Frequently Asked Questions
            </h2>

            <p
              className="text-muted mx-auto"
              style={{
                maxWidth: "700px",
                lineHeight: "1.8",
              }}
            >
              Everything you need to know about buying,
              selling and property listing.
            </p>

          </motion.div>

          {/* FAQ CARDS */}
          <div className="row g-4">

            {[
              {
                q: "Is property listing free?",
                a: "Yes! Property listing is completely free.",
              },
              {
                q: "How can I sell faster?",
                a: "Upload quality photos with proper details.",
              },
              {
                q: "Do you charge brokerage?",
                a: "No hidden brokerage or extra charges.",
              },
              {
                q: "How quickly does listing go live?",
                a: "Listings are approved very quickly.",
              },
            ].map((item, index) => (

              <div className="col-md-6" key={index}>

                <motion.div
                  whileHover={{
                    y: -8,
                  }}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="bg-white rounded-4 p-4 h-100 border-0 shadow-sm"
                >

                  <div className="d-flex align-items-start gap-3">

                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center text-white"
                      style={{
                        width: "55px",
                        height: "55px",
                        minWidth: "55px",
                        background: "#0d6efd",
                      }}
                    >
                      <FaCheckCircle />
                    </div>

                    <div>

                      <h5 className="fw-bold mb-2">
                        {item.q}
                      </h5>

                      <p className="text-muted mb-0">
                        {item.a}
                      </p>

                    </div>

                  </div>

                </motion.div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= INQUIRY FORM SECTION ================= */}

      <section
        className="position-relative overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.70), rgba(0,0,0,0.70)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 0",
        }}
      >

        <div className="container position-relative">

          <div className="row justify-content-center align-items-center">

            {/* LEFT CONTENT */}
            <div className="col-lg-5 text-white mb-5 mb-lg-0">

              <motion.div
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
              >

                <span
                  className="px-4 py-2 rounded-pill fw-semibold"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  PROPERTY INQUIRY
                </span>

                <h2
                  className="fw-bold display-3 mt-4 mb-4"
                  style={{
                    lineHeight: "1.2",
                  }}
                >
                  Find Your Dream Property With Us
                </h2>

                <p
                  className="fs-5"
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    lineHeight: "1.8",
                  }}
                >
                  Submit your property inquiry and our team
                  will connect with you shortly for the best deals.
                </p>

              </motion.div>

            </div>

            {/* RIGHT FORM */}
            <div className="col-lg-6">

              <motion.div
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                viewport={{ once: true }}
                className="rounded-5 overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(15px)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow:
                    "0 20px 50px rgba(0,0,0,0.25)",
                }}
              >

                {/* FORM HEADER */}
                <div className="text-center text-white p-5">

                  <h3 className="fw-bold display-6 mb-3">
                    Property Inquiry Form
                  </h3>

                  <p
                    className="mb-0"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    Fill in your details and get instant assistance.
                  </p>

                </div>

                {/* FORM */}
                <div className="p-4 p-md-5">

                  <form
                    onSubmit={async (e) => {

                      e.preventDefault();

                      const formData = {
                        name: e.target.name.value,
                        phone: e.target.phone.value,
                        email: e.target.email.value,
                        message: e.target.message.value,
                      };

                      try {

                        const res = await fetch(
                          `${API_BASE}/api/inquiry`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(formData),
                          }
                        );

                        if (res.ok) {

                          alert("✅ Inquiry Submitted Successfully!");
                          e.target.reset();

                        } else {

                          alert("❌ Something went wrong!");

                        }

                      } catch (error) {

                        console.error(error);

                        alert("⚠️ Server Error!");

                      }
                    }}
                  >

                    <div className="row g-4">

                      {/* NAME */}
                      <div className="col-md-6">

                        <label className="form-label text-white fw-semibold">
                          Full Name
                        </label>

                        <div
                          className="input-group rounded-4 overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                          }}
                        >

                          <span
                            className="input-group-text border-0"
                            style={{
                              background: "transparent",
                              color: "#fff",
                            }}
                          >
                            <FaUser />
                          </span>

                          <input
                            type="text"
                            name="name"
                            className="form-control border-0 text-white"
                            placeholder="Enter your name"
                            required
                            style={{
                              background: "transparent",
                              height: "58px",
                            }}
                          />

                        </div>

                      </div>

                      {/* PHONE */}
                      <div className="col-md-6">

                        <label className="form-label text-white fw-semibold">
                          Phone Number
                        </label>

                        <div
                          className="input-group rounded-4 overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                          }}
                        >

                          <span
                            className="input-group-text border-0"
                            style={{
                              background: "transparent",
                              color: "#fff",
                            }}
                          >
                            <FaPhoneAlt />
                          </span>

                          <input
                            type="tel"
                            name="phone"
                            className="form-control border-0 text-white"
                            placeholder="Enter phone number"
                            required
                            style={{
                              background: "transparent",
                              height: "58px",
                            }}
                          />

                        </div>

                      </div>

                      {/* EMAIL */}
                      <div className="col-12">

                        <label className="form-label text-white fw-semibold">
                          Email Address
                        </label>

                        <div
                          className="input-group rounded-4 overflow-hidden"
                          style={{
                            background: "rgba(255,255,255,0.12)",
                          }}
                        >

                          <span
                            className="input-group-text border-0"
                            style={{
                              background: "transparent",
                              color: "#fff",
                            }}
                          >
                            <FaEnvelope />
                          </span>

                          <input
                            type="email"
                            name="email"
                            className="form-control border-0 text-white"
                            placeholder="Enter email address"
                            required
                            style={{
                              background: "transparent",
                              height: "58px",
                            }}
                          />

                        </div>

                      </div>

                      {/* MESSAGE */}
                      <div className="col-12">

                        <label className="form-label text-white fw-semibold">
                          Message / Requirement
                        </label>

                        <textarea
                          name="message"
                          rows="5"
                          className="form-control border-0 text-white"
                          placeholder="Tell us about your property requirement..."
                          required
                          style={{
                            resize: "none",
                            padding: "18px",
                            borderRadius: "20px",
                            background: "rgba(255,255,255,0.12)",
                          }}
                        ></textarea>

                      </div>

                      {/* BUTTON */}
                      <div className="col-12">

                        <motion.button
                          whileHover={{
                            scale: 1.03,
                          }}
                          whileTap={{
                            scale: 0.97,
                          }}
                          type="submit"
                          className="btn w-100 fw-bold py-3 rounded-pill text-white"
                          style={{
                            background:
                              "linear-gradient(135deg,#0d6efd,#4dabff)",
                            border: "none",
                            fontSize: "18px",
                            boxShadow:
                              "0 10px 30px rgba(13,110,253,0.35)",
                          }}
                        >

                          <FaPaperPlane className="me-2" />

                          Submit Inquiry

                        </motion.button>

                      </div>

                    </div>

                  </form>

                </div>

              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* INPUT PLACEHOLDER COLOR */}
      <style>{`

        input::placeholder,
        textarea::placeholder {
          color: rgba(255,255,255,0.7) !important;
        }

        input:focus,
        textarea:focus {
          box-shadow: none !important;
          outline: none !important;
          background: transparent !important;
          color: white !important;
        }

      `}</style>

    </>
  );
};

export default FaqAndInquiryForm;
