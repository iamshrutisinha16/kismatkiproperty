import React from 'react';
import { Container, Row, Col, Card, Button, Form, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaRegHeart, FaSearch, FaMapMarkerAlt, FaExpandArrowsAlt, FaPlus } from 'react-icons/fa';

const ClassifiedPage = () => {
  // Demo Data - Replace images with your own
  const ads = [
    { id: 1, type: 'Premium', price: '₹1.2 Cr', title: 'Skyline Luxury Penthouse', loc: 'Worli, Mumbai', area: '2400 sqft', img: 'https://images.unsplash.com/photo-1600607687940-4e524cb35a5a?q=80&w=1000' },
    { id: 2, type: 'Verified', price: '₹45 Lakh', title: 'Modern 2BHK Apartment', loc: 'Gachibowli, Hyderabad', area: '1200 sqft', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000' },
    { id: 3, type: 'Featured', price: '₹85 Lakh', title: 'Green Valley Independent Villa', loc: 'Whitefield, Bangalore', area: '1800 sqft', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1000' },
    { id: 4, type: 'New', price: '₹3.5 Cr', title: 'Commercial Shop - Prime Location', loc: 'CP, Delhi', area: '500 sqft', img: 'https://images.unsplash.com/photo-1582653280643-e395af3d2733?q=80&w=1000' },
  ];

  return (
    <div style={{ backgroundColor: '#f4f7f6', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      {/* 1. HERO SECTION (Advertisement Focused) */}
      <div style={{ background: 'linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d)', padding: '80px 0', color: 'white', textAlign: 'center' }}>
        <Container>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="fw-bold display-4">
            Find Your Dream Space
          </motion.h1>
          <p className="lead mb-4">India's Most Trusted Property Classifieds</p>
          
          {/* Main Search Bar */}
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="mx-auto" style={{ maxWidth: '800px' }}>
            <div className="bg-white p-3 rounded-pill shadow-lg d-flex align-items-center">
              <FaSearch className="text-muted ms-3" />
              <Form.Control 
                type="text" 
                placeholder="Search City, Locality, Project..." 
                className="border-0 shadow-none px-4"
              />
              <Button variant="dark" className="rounded-pill px-5 py-2 fw-bold">Search</Button>
            </div>
          </motion.div>
        </Container>
      </div>

      <Container className="mt-n5" style={{ position: 'relative', top: '-30px' }}>
        <Row className="justify-content-center">
          <Col md={10} className="bg-white shadow rounded-4 p-4">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
              <div className="d-flex gap-3 overflow-auto">
                <Button variant="outline-dark" className="rounded-pill px-4">Residential</Button>
                <Button variant="outline-dark" className="rounded-pill px-4">Commercial</Button>
                <Button variant="outline-dark" className="rounded-pill px-4">Plots</Button>
                <Button variant="outline-dark" className="rounded-pill px-4">Rentals</Button>
              </div>
              <Button variant="primary" className="rounded-pill px-4 fw-bold shadow-sm d-flex align-items-center">
                <FaPlus className="me-2" /> Post Free Property Ad
              </Button>
            </div>
          </Col>
        </Row>

        {/* 2. CLASSIFIED ADS SECTION */}
        <div className="mt-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <h3 className="fw-bold mb-0">Trending Classifieds</h3>
              <p className="text-muted">Handpicked advertisements for you</p>
            </div>
            <a href="/classified" className="text-decoration-none fw-bold text-primary">View All Ads &rarr;</a>
          </div>

          <Row>
            {ads.map((ad, idx) => (
              <Col lg={3} md={6} key={ad.id} className="mb-4">
                <motion.div 
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100 property-card">
                    <div style={{ position: 'relative' }}>
                      <Card.Img variant="top" src={ad.img} style={{ height: '220px', objectFit: 'cover' }} />
                      <Badge bg="white" text="dark" className="position-absolute top-0 start-0 m-3 shadow-sm rounded-1 fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>
                        {ad.type}
                      </Badge>
                      <div className="position-absolute top-0 end-0 m-3 bg-white rounded-circle p-2 shadow-sm d-flex cursor-pointer" style={{ cursor: 'pointer' }}>
                        <FaRegHeart className="text-danger" />
                      </div>
                    </div>
                    
                    <Card.Body>
                      <h4 className="fw-bold text-dark mb-1">{ad.price}</h4>
                      <Card.Title className="fs-6 mb-2 text-secondary fw-normal">{ad.title}</Card.Title>
                      
                      <div className="d-flex align-items-center text-muted small mb-3">
                        <FaMapMarkerAlt className="me-1 text-primary" /> {ad.loc}
                      </div>

                      <div className="d-flex justify-content-between py-2 border-top border-bottom mb-3 small">
                        <span><FaExpandArrowsAlt className="me-1" /> {ad.area}</span>
                        <span className="fw-bold text-success text-uppercase">Verified</span>
                      </div>

                      <div className="d-grid gap-2 d-flex">
                        <Button variant="outline-primary" className="w-100 rounded-3">Details</Button>
                        <Button variant="success" className="w-auto px-3 rounded-3">
                          <FaWhatsapp size={20} />
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* 3. PROMO BANNER (Advertisement Purpose) */}
        <motion.div 
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          className="my-5 p-5 rounded-4 text-white d-flex align-items-center justify-content-between flex-wrap shadow-lg"
          style={{ background: 'linear-gradient(to right, #243b55, #141e30)' }}
        >
          <div>
            <h2 className="fw-bold">Are you a Builder or Owner?</h2>
            <p className="mb-0 opacity-75">Get your property listed today and reach over 10,000+ buyers daily.</p>
          </div>
          <Button variant="light" className="px-5 py-3 rounded-pill fw-bold text-primary mt-3 mt-lg-0">Advertise Now</Button>
        </motion.div>

      </Container>

      {/* Global CSS for Smoothness */}
      <style>{`
        .property-card {
          transition: all 0.3s ease-in-out;
          border: 1px solid rgba(0,0,0,0.05) !important;
        }
        .property-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.1) !important;
        }
        .btn-primary { background-color: #0061ff; border: none; }
        .btn-primary:hover { background-color: #0056e0; }
        .form-control:focus { outline: none !important; box-shadow: none !important; }
      `}</style>
    </div>
  );
};

export default ClassifiedPage;