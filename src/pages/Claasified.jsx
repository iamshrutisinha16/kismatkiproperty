import React from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaSearch, FaPlus, FaPhoneAlt, FaDownload } from 'react-icons/fa';

// NOTE: Apni image import karne ke liye niche wali line uncomment karein aur path sahi karein
// import MyImageAd from './path-to-your-image.jpg';

const ClassifiedPage = () => {
  
  // 1. Array for your Actual Images (Poster Ads)
  const posterAds = [
    { 
      id: 1, 
      img: 'https://i.postimg.cc/mD4m3v0y/Screenshot-2024-05-22-at-12-00-00-AM.png', // Yahan apni image ka path dalein
      title: 'Wanted Kothi in Maharani Bagh' 
    },
    { 
      id: 2, 
      img: 'https://i.postimg.cc/mD4m3v0y/Screenshot-2024-05-22-at-12-00-00-AM.png', // Example placeholder
      title: 'Urgent Plot Required' 
    },
    { 
      id: 3, 
      img: 'https://i.postimg.cc/mD4m3v0y/Screenshot-2024-05-22-at-12-00-00-AM.png', 
      title: 'Commercial Space Wanted' 
    }
  ];

  // 2. Regular Listings Data
  const regularAds = [
    { id: 101, type: 'Premium', price: '₹1.2 Cr', title: 'Skyline Luxury Penthouse', loc: 'Worli, Mumbai', img: 'https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?q=80&w=1000' },
    { id: 102, type: 'Verified', price: '₹45 Lakh', title: 'Modern 2BHK Apartment', loc: 'Gachibowli, Hyderabad', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000' },
  ];

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      
      {/* --- HERO SECTION --- */}
      <div style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', padding: '60px 0', color: 'white' }}>
        <Container className="text-center">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fw-bold mb-3">
            India's Leading Property Classifieds
          </motion.h1>
          <div className="mx-auto" style={{ maxWidth: '700px' }}>
            <div className="bg-white p-2 rounded-pill shadow d-flex align-items-center">
              <FaSearch className="text-muted ms-3" />
              <Form.Control type="text" placeholder="Search for 'Wanted Maharani Bagh'..." className="border-0 shadow-none px-3" />
              <Button variant="primary" className="rounded-pill px-4 py-2 fw-bold">Search</Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="mt-4">
        
        {/* --- SECTION 1: ACTUAL IMAGE ADS (Your Image Style) --- */}
        <div className="mb-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold text-dark m-0">Featured Newspaper Ads</h3>
            <Badge bg="danger" className="p-2 px-3">URGENT REQUIREMENTS</Badge>
          </div>

          <Row>
            {posterAds.map((post) => (
              <Col md={4} key={post.id} className="mb-4">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Card className="border-0 shadow-lg rounded-4 overflow-hidden image-ad-card">
                    {/* Yahan aapki upload ki hui image dikhegi */}
                    <Card.Img 
                        src={post.img} 
                        style={{ width: '100%', height: 'auto', display: 'block' }} 
                        alt={post.title}
                    />
                    <Card.Footer className="bg-white border-0 d-flex justify-content-around py-3">
                       <Button variant="outline-primary" size="sm" className="rounded-pill px-3">
                         <FaPhoneAlt className="me-1" /> Call
                       </Button>
                       <Button variant="success" size="sm" className="rounded-pill px-3">
                         <FaWhatsapp className="me-1" /> WhatsApp
                       </Button>
                       <Button variant="light" size="sm" className="rounded-pill px-3 text-muted">
                         <FaDownload />
                       </Button>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* --- SECTION 2: REGULAR LISTINGS --- */}
        <div className="mb-5">
          <h4 className="fw-bold mb-4 border-start border-4 border-primary ps-3">Recently Added Listings</h4>
          <Row>
            {regularAds.map((ad) => (
              <Col md={6} key={ad.id} className="mb-4">
                <Card className="flex-row border-0 shadow-sm rounded-4 overflow-hidden h-100">
                  <div style={{ width: '40%' }}>
                    <Card.Img src={ad.img} style={{ height: '100%', objectFit: 'cover' }} />
                  </div>
                  <Card.Body className="p-3">
                    <Badge bg="info" className="mb-2">{ad.type}</Badge>
                    <h5 className="fw-bold mb-1">{ad.price}</h5>
                    <p className="text-muted small mb-3">{ad.title}</p>
                    <Button variant="dark" size="sm" className="w-100 rounded-pill">View Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* --- ACTION BUTTON --- */}
        <div className="text-center pb-5">
          <Button variant="primary" size="lg" className="rounded-pill px-5 shadow-lg fw-bold">
            <FaPlus className="me-2" /> Post Your Newspaper Ad Today
          </Button>
        </div>

      </Container>

      {/* Global CSS */}
      <style>{`
        .image-ad-card {
          transition: transform 0.2s;
          cursor: pointer;
        }
        .image-ad-card:hover {
          box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
        }
        .btn-primary { background: #0061ff; border: none; }
        .form-control:focus { box-shadow: none; }
      `}</style>
    </div>
  );
};

export default ClassifiedPage;