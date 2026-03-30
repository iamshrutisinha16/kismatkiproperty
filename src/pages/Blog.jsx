import React, { useState } from "react"; 
import { motion } from "framer-motion";

const blogData = [
  {
    title: "Top 5 Tips to Sell Your Property Faster",
    image: "https://via.placeholder.com/600x400?text=Sell+Fast",
    date: "June 20, 2025",
    category: "Tips & Guides",
    excerpt: "Want to sell your home quickly? Learn practical strategies to attract the right buyers and close faster.",
    author: "Admin",
  },
  {
    title: "Real Estate Trends in 2025: What's Hot?",
    image: "https://via.placeholder.com/600x400?text=Market+Trends",
    date: "June 10, 2025",
    category: "Market Trends",
    excerpt: "Discover the latest in real estate for 2025 – from property price shifts to upcoming hotspots.",
    author: "Karan Mehta",
  },
  {
    title: "Step-by-Step Guide to Buying Your First Home",
    image: "https://via.placeholder.com/600x400?text=First+Home+Guide",
    date: "May 28, 2025",
    category: "How-to",
    excerpt: "Buying your first home? Here's a detailed breakdown of every step involved in the journey.",
    author: "Sonu Kumar",
  },
  {
    title: "Review: DLF’s New Sky Tower Project",
    image: "https://via.placeholder.com/600x400?text=Project+Review",
    date: "May 15, 2025",
    category: "Project Review",
    excerpt: "We visited DLF’s new Sky Tower project – here’s what we found out about location, pricing, and amenities.",
    author: "Riya Sharma",
  },
  {
    title: "Avoid These Common Property Buying Mistakes",
    image: "https://via.placeholder.com/600x400?text=Property+Mistakes",
    date: "April 20, 2025",
    category: "Tips & Guides",
    excerpt: "From poor inspections to legal slip-ups, here are mistakes you must avoid.",
    author: "Shalini Gupta",
  },
  {
    title: "How to Invest in Commercial Real Estate",
    image: "https://via.placeholder.com/600x400?text=Invest+Commercial",
    date: "April 05, 2025",
    category: "Investment",
    excerpt: "Explore why commercial property can be a smart investment and how to start.",
    author: "Ankit Sinha",
  },
  {
    title: "Understanding RERA Compliance in India",
    image: "https://via.placeholder.com/600x400?text=RERA+Guide",
    date: "March 18, 2025",
    category: "Regulations",
    excerpt: "Everything you need to know about RERA for safe and compliant investments.",
    author: "Rohit Verma",
  },
  {
    title: "Smart Home Tech: Transform Your Space in 2025",
    image: "https://via.placeholder.com/600x400?text=Smart+Home",
    date: "March 02, 2025",
    category: "Technology",
    excerpt: "Explore the latest smart gadgets and automation ideas that add value to your home.",
    author: "Pooja Rana",
  },
];

const featuredVideos = [
  { title: "Top Real Estate Tips", path: "/assets/featurevideo1.mp4" },
  { title: "Property Tour 2025", path: "/assets/featurevideo4.mp4" },
  { title: "Investment Advice", path: "/assets/featurevideo3.mp4" },
  { title: "Smart Home Demo", path: "/assets/featurevideo2.mp4" },
  { title: "DLF Smart City Tour", path: "/assets/featurevideo5.mp4" },
  { title: "Luxury Apartment Review", path: "/assets/featurevideo6.mp4" },
  { title: "Commercial,Advertisment Review", path: "/assets/featurevideo7.mp4" },
  { title: "Advertisment Review", path: "/assets/featurevideo8.mp4" },
  { title: "Buy, Sell review", path: "/assets/featurevideo9.mp4" },
  { title: "Investment Advice", path: "/assets/featurevideo10.mp4" },
  { title: "Investment Advice", path: "/assets/featurevideo11.mp4" },
];

const Blog = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "" });

  const handleContactFormChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", contactForm);
  };

  const inputProps = (name, placeholder, value, onChange, type = "text") => ({
    name,
    type,
    placeholder,
    value,
    onChange,
    required: true,
    style: {
      padding: "12px",
      marginBottom: "15px",
      width: "100%",
      fontSize: "16px",
      borderRadius: "8px",
      background: "rgba(255,255,255,0.8)",
      border: "none",
    },
  });

  return (
    <>
      <style>{`
        /* Responsive Banner */
        .video-banner {
          position: relative;
          width: 100%;
          height: 70vh;
          min-height: 300px;
          max-height: 500px;
          overflow: hidden;
        }
        .video-banner video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .video-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,0.5);
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 15px;
        }
        .video-overlay h1 {
          color: #fff;
          font-size: 3rem;
          font-weight: bold;
        }
        @media (max-width: 768px) {
          .video-banner {
            height: 40vh;
            min-height: 200px;
          }
          .video-overlay h1 {
            font-size: 1.6rem;
          }
        }

        .blog-card {
          border: none;
          border-radius: 12px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }
        .blog-image {
          height: 220px;
          object-fit: cover;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
        @media (max-width: 768px) {
          .blog-image {
            height: 180px;
          }
        }
        .scroll-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          z-index: 2;
          box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
      `}</style>

      {/*  Banner Section */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline>
          <source src="/assets/blogbanner.mp4" type="video/mp4" />
        </video>
        <div className="video-overlay">
        </div>
      </div>

      <div className="container py-5">
        {/* 📰 Blog Section */}
        <motion.h2 className="text-center mb-5 fw-bold text-primary"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          📢 Latest Blog
        </motion.h2>

        <div className="row g-4">
          {blogData.map((blog, index) => (
            <motion.div className="col-lg-3 col-md-6" key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}>
              <div className="card blog-card h-100 shadow-sm">
                <img src={blog.image} alt={blog.title} className="blog-image card-img-top" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="text-muted small mb-1">
                    <strong>Date:</strong> {blog.date}<br />
                    <strong>Category:</strong> {blog.category}
                  </p>
                  <p className="card-text small flex-grow-1">{blog.excerpt}</p>
                  <p className="text-muted small"><strong>Author:</strong> {blog.author}</p>
                  <div className="d-flex justify-content-between mt-2">
                    <button className="btn btn-sm btn-warning text-white">Share</button>
                    <a href="/blog-details" className="btn btn-sm btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🎥 Featured Videos Section */}
        <motion.h2 className="text-center my-5 text-danger fw-bold"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
          🎥 Watch Now – Featured Videos
        </motion.h2>

        <div style={{ position: "relative", paddingBottom: "20px" }}>
          <button className="scroll-btn" style={{ left: "0" }}
            onClick={() => document.getElementById("videoScroll").scrollBy({ left: -300, behavior: 'smooth' })}>◀</button>

          <button className="scroll-btn" style={{ right: "0" }}
            onClick={() => document.getElementById("videoScroll").scrollBy({ left: 300, behavior: 'smooth' })}>▶</button>

          <div
            id="videoScroll"
            style={{
              display: "flex",
              overflowX: "auto",
              scrollBehavior: "smooth",
              gap: "20px",
              padding: "0 50px",
            }}
          >
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{ minWidth: "280px", flex: "0 0 auto" }}
              >
                <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <video src={video.path} controls style={{ width: "100%", height: "400px", objectFit: "cover" }} />
                  <div className="card-body text-center">
                    <h6 className="fw-semibold">{video.title}</h6>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 📝 Contact Form Section */}
        <div style={{ position: "relative", height: "450px", marginTop: "60px", overflow: "hidden" }}>
          <video
            src="/assets/formBanner.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1,
              background: "rgba(0, 0, 0, 0.35)",
            }}
          >
            <form
              onSubmit={handleContactFormSubmit}
              style={{
                background: "rgba(255, 255, 255, 0.15)",
                padding: "30px",
                borderRadius: "20px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                width: "100%",
                maxWidth: "500px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                color: "#fff"
              }}
            >
              <h3 style={{ marginBottom: "20px", fontSize: "24px", fontWeight: "bold", textAlign: "center", color: "#fff" }}>
                Let's Get In Touch 🚀
              </h3>

              <motion.input {...inputProps("name", "Full Name", contactForm.name, handleContactFormChange)} />
              <motion.input {...inputProps("email", "Email Address", contactForm.email, handleContactFormChange, "email")} />
              <motion.input {...inputProps("phone", "Mobile Number", contactForm.phone, handleContactFormChange, "tel")} />
              <motion.button
                type="submit"
                style={{ padding: "12px", width: "100%", fontSize: "16px", color: "#fff", backgroundColor: "#28a745", border: "none", borderRadius: "8px", cursor: "pointer" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📤 Send Enquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;
