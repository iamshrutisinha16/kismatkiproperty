import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  X, 
  MapPin, 
  PhoneCall,
  MessageCircle,
  Play
} from 'lucide-react';

const featuredVideos = [
  { 
    id: 1, 
    title: "Premium 3BHK Apartment in Noida", 
    path: "/assets/featurevideo11.mp4", 
    desc: "Luxury 3BHK with modern amenities, modular kitchen, and spacious balcony near Metro station.",
    location: "Sector 75, Noida",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
  { 
    id: 2, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo12.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
  { 
    id: 3, 
    title: "Modern Smart Home Tour", 
    path: "/assets/featurevideo13.mp4", 
    desc: "Fully automated smart home with Alexa integration and smart lighting solutions.",
    location: "South Delhi",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 4, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo14.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 5, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo15.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 6, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo16.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 7, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo10.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 8, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo9.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 9, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo8.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 10, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo7.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 11, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo6.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 12, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo5.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 13, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo4.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 14, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo3.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 15, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo2.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
   { 
    id: 16, 
    title: "DLF Smart City Luxury Villa", 
    path: "/assets/featurevideo1.mp4", 
    desc: "A beautiful independent villa with private garden and 24/7 security. Perfect for families.",
    location: "Gurugram, Phase 5",
    ig: "https://instagram.com", fb: "https://facebook.com", yt: "https://youtube.com" 
  },
];

const VideoGalleryPage = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="bg-light min-vh-100">
      <style>{`
        /* 1. RESPONSIVE BANNER */
        .video-banner {
          position: relative;
          width: 100%;
          height: 70vh; /* Shorter for better mobile view */
          overflow: hidden;
        }
        @media (max-width: 768px) {
          .video-banner { height: 35vh; }
        }
        .video-banner video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .banner-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
          padding: 20px;
        }

        /* 2. RESPONSIVE VIDEO CARDS */
        .video-card {
          border-radius: 15px;
          overflow: hidden;
          background: #fff;
          border: none;
          height: 100%;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }
        .card-video-wrapper {
          position: relative;
          width: 100%;
          aspect-ratio: 9/12; /* Reel style ratio */
          background: #000;
        }
        @media (max-width: 576px) {
          .card-video-wrapper { aspect-ratio: 16/9; } /* Landscape on small mobile */
        }
        .card-video-wrapper video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 3. SOCIAL BUTTONS */
        .social-btn {
          width: 35px;
          height: 35px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: white;
          text-decoration: none;
        }
        .bg-insta { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }
        .bg-fb { background: #1877F2; }
        .bg-yt { background: #FF0000; }

        /* 4. FULLY RESPONSIVE MODAL */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0,0,0,0.9);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
        }
        .modal-container {
          background: white;
          width: 100%;
          max-width: 950px;
          max-height: 90vh;
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column; /* Mobile first: Stacked */
        }
        @media (min-width: 992px) {
          .modal-container { flex-direction: row; } /* Desktop: Side-by-side */
        }
        .modal-video-side {
          flex: 1.2;
          background: #000;
          display: flex;
          align-items: center;
        }
        .modal-content-side {
          flex: 1;
          padding: 25px;
          overflow-y: auto;
        }
        .close-modal {
          position: absolute;
          top: 15px; right: 15px;
          z-index: 10;
          background: rgba(255,255,255,0.8);
          border: none;
          border-radius: 50%;
          padding: 5px;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="video-banner">
        <video autoPlay muted loop playsInline>
          <source src="/assets/blogbanner.mp4" type="video/mp4" />
        </video>
        <div className="banner-overlay">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          </motion.div>
        </div>
      </div>

      <div className="container py-4 py-md-5">
        
        <div className="text-center mb-4">
          <h2 className="fw-bold">🎥 Featured Video Tours</h2>
          <p className="text-muted">Explore properties in high definition</p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="row g-3 g-md-4">
          {featuredVideos.map((video) => (
            <div className="col-12 col-sm-6 col-lg-4" key={video.id}>
              <div className="video-card shadow-sm">
                <div className="card-video-wrapper">
                  <video 
                    src={video.path} 
                    muted loop playsInline 
                    onMouseOver={e => e.target.play()} 
                    onMouseOut={e => e.target.pause()} 
                  />
                  <div className="position-absolute bottom-0 start-0 m-3">
                    <span className="badge bg-primary d-flex align-items-center gap-1">
                      <Play size={12} fill="white" /> Preview
                    </span>
                  </div>
                </div>
                
                <div className="p-3">
                  <h6 className="fw-bold text-dark mb-3 text-truncate">{video.title}</h6>
                  
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex gap-2">
                    <a href={video.ig} target="_blank" rel="noreferrer" className="social-btn bg-insta">
  <Instagram size={16} />
</a>

<a href={video.fb} target="_blank" rel="noreferrer" className="social-btn bg-fb">
  <Facebook size={16} />
</a>

<a href={video.yt} target="_blank" rel="noreferrer" className="social-btn bg-yt">
  <Youtube size={16} />
</a>
                    </div>
                    <button 
                      onClick={() => setSelectedVideo(video)}
                      className="btn btn-sm btn-outline-primary rounded-pill px-3 fw-bold"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RESPONSIVE MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-container shadow-2xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <button className="close-modal" onClick={() => setSelectedVideo(null)}>
                <X size={24} />
              </button>

              <div className="modal-video-side">
                <video 
                  src={selectedVideo.path} 
                  controls autoPlay 
                  className="w-100 h-100"
                  style={{ maxHeight: '50vh' }} // Limit video height on mobile
                />
              </div>

              <div className="modal-content-side">
                <div className="mb-3">
                  <span className="badge bg-success-subtle text-success px-3 py-2 rounded-pill mb-2">Available</span>
                  <h3 className="fw-bold text-dark">{selectedVideo.title}</h3>
                  <div className="d-flex align-items-center gap-1 text-muted small">
                    <MapPin size={16} className="text-danger" /> {selectedVideo.location}
                  </div>
                </div>

                <p className="text-secondary mb-4" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {selectedVideo.desc}
                </p>

              <div className="row g-2">
  {/* Call Button */}
  <div className="col-12 col-md-4">
    <a 
      href="tel:+918595076589"
      className="btn btn-primary w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
    >
      <PhoneCall size={18} /> Call
    </a>
  </div>

  {/* SMS Button */}
  <div className="col-12 col-md-4">
    <a 
      href="sms:+918595076589"
      className="btn btn-warning w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
    >
      <MessageCircle size={18} /> SMS
    </a>
  </div>

  {/* WhatsApp Button */}
  <div className="col-12 col-md-4">
    <a 
      href="https://wa.me/918595076589"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-success w-100 py-2 fw-bold rounded-pill d-flex align-items-center justify-content-center gap-2"
    >
      <MessageCircle size={18} /> WhatsApp
    </a>
  </div>
</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoGalleryPage;