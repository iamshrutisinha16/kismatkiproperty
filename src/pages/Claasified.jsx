import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Badge, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, MapPin, Maximize2, Phone, MessageSquare, 
  Heart, Plus, Filter, CheckCircle, ArrowUpRight 
} from 'lucide-react';

const PremiumClassifieds = () => {
  const [activeTab] = useState('all');
  const [selectedImg, setSelectedImg] = useState(null);

  const ads = [
    { 
      id: 1, 
      isPoster: true, 
      img: '/assets/classifiedimage.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 2, 
      isPoster: true, 
      img: '/assets/classifiedimage1.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 3, 
      isPoster: true, 
      img: '/assets/classifiedimage2.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 4, 
      isPoster: true, 
      img: '/assets/classifiedimage3.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 5, 
      isPoster: true, 
      img: '/assets/classifiedimage4.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 6, 
      isPoster: true, 
      img: '/assets/classifiedimage5.jpeg', 
      category: 'wanted',
      title: 'High Priority: Kothi in Maharani Bagh',
      contact: '8595076589'
    },
    { 
      id: 7, 
      isPoster: true, 
      img: 'https://i.ibb.co/v4yZgHj/wanted-ad.jpg', // Replace with your image link
      category: 'wanted',
      title: 'Urgent Requirement: Plot in South Delhi',
      contact: '9810126380'
    }
    
  ];

  const filteredAds = activeTab === 'all' ? ads : ads.filter(ad => ad.category === activeTab);

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: "'Inter', sans-serif" }}>
      
      {/* --- PREMIUM HERO SECTION --- */}
      <div style={{ 
        background: 'linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: 'white'
      }}>
        <Container>
          <div className="text-center mb-5">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="fw-bold display-4 mb-3"
            >
              Discover <span style={{ color: '#facc15' }}>Prime</span> Properties
            </motion.h1>
            <p className="fs-5 opacity-75">India's most exclusive real estate classifieds network.</p>
          </div>

          {/* Floating Search Bar */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            className="mx-auto shadow-lg rounded-4 bg-white p-2 d-flex flex-wrap gap-2"
            style={{ maxWidth: '850px' }}
          >
            <div className="flex-grow-1 d-flex align-items-center px-3 border-end">
              <Search size={20} className="text-muted me-2" />
              <Form.Control type="text" placeholder="Search locality or property type..." className="border-0 shadow-none" />
            </div>
            <div className="d-flex align-items-center px-3 border-end d-none d-md-flex">
              <MapPin size={20} className="text-muted me-2" />
              <Form.Select className="border-0 shadow-none bg-transparent">
                <option>All Delhi</option>
                <option>South Delhi</option>
                <option>Mumbai</option>
              </Form.Select>
            </div>
            <Button variant="dark" className="rounded-3 px-4 py-3 fw-bold d-flex align-items-center gap-2">
              <Filter size={18} /> Search
            </Button>
          </motion.div>
        </Container>
      </div>

      <Container className="py-5">
        {/* --- NAVIGATION & FILTERS --- */}
        <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
          
          <Button variant="outline-dark" className="rounded-pill px-4 py-2 fw-bold d-flex align-items-center gap-2">
            <Plus size={18} /> Post Free Ad
          </Button>
        </div>

        {/* --- ADS GRID --- */}
        <Row>
          <AnimatePresence mode='popLayout'>
            {filteredAds.map((ad) => (
              <Col key={ad.id} lg={4} md={6} className="mb-4">
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {ad.isPoster ? (
                    /* --- POSTER STYLE AD (For your specific images) --- */
                    <Card className="border-0 shadow-lg rounded-4 overflow-hidden h-100" style={{ cursor: 'pointer' }}>
                      <div className="position-relative" onClick={() => setSelectedImg(ad.img)}>
                        <Card.Img src={ad.img} style={{ height: '420px', objectFit: 'cover' }} />
                        <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                          <Badge bg="warning" text="dark" className="mb-2">URGENT REQUIREMENT</Badge>
                          <h5 className="text-white fw-bold mb-0">Tap to view full details</h5>
                        </div>
                        <div className="position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle shadow-sm">
                           <ArrowUpRight size={20} className="text-dark" />
                        </div>
                      </div>
                      <div className="p-3 bg-white border-top d-flex gap-2">
                        <Button variant="success" className="w-100 rounded-3 py-2 d-flex align-items-center justify-content-center gap-2" onClick={() => window.open(`https://wa.me/${ad.contact}`)}>
                          <MessageSquare size={18} /> WhatsApp
                        </Button>
                        <Button variant="primary" className="w-100 rounded-3 py-2 d-flex align-items-center justify-content-center gap-2" onClick={() => window.open(`tel:${ad.contact}`)}>
                          <Phone size={18} /> Call
                        </Button>
                      </div>
                    </Card>
                  ) : (
                    /* --- MODERN PROPERTY CARD --- */
                    <Card className="border-0 shadow-sm rounded-4 overflow-hidden h-100">
                      <div className="position-relative">
                        <Card.Img src={ad.img} style={{ height: '240px', objectFit: 'cover' }} />
                        <div className="position-absolute top-0 start-0 m-3">
                          <Badge bg="white" text="dark" className="shadow-sm border">
                            <CheckCircle size={12} className="text-success me-1" /> Verified
                          </Badge>
                        </div>
                        <div className="position-absolute top-0 end-0 m-3 bg-white p-2 rounded-circle shadow-sm" style={{ cursor: 'pointer' }}>
                           <Heart size={20} className="text-danger" />
                        </div>
                      </div>
                      <Card.Body className="p-4">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <span className="text-primary fw-bold fs-4">{ad.price}</span>
                          <small className="text-muted">{ad.type}</small>
                        </div>
                        <Card.Title className="fw-bold mb-2 text-dark">{ad.title}</Card.Title>
                        <p className="text-muted small d-flex align-items-center gap-1 mb-3">
                          <MapPin size={14} /> {ad.loc}
                        </p>
                        <div className="d-flex gap-3 py-3 border-top border-bottom mb-3">
                          <div className="small d-flex align-items-center gap-1"><Maximize2 size={14} /> {ad.area}</div>
                          <div className="small d-flex align-items-center gap-1">New Construction</div>
                        </div>
                        <Button variant="dark" className="w-100 rounded-3 py-2 fw-bold">View Details</Button>
                      </Card.Body>
                    </Card>
                  )}
                </motion.div>
              </Col>
            ))}
          </AnimatePresence>
        </Row>
      </Container>

      {/* Lightbox for Posters */}
      <Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered size="md">
        <Modal.Body className="p-0 border-0">
          <img src={selectedImg} alt="Requirement" className="w-100 rounded shadow-lg" />
          <Button variant="dark" className="position-absolute top-0 end-0 m-3 rounded-circle p-2" onClick={() => setSelectedImg(null)}>✕</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PremiumClassifieds;