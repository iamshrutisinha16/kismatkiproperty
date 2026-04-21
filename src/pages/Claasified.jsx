import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { MapPin, Search } from 'lucide-react';

const PremiumClassifieds = () => {
  const [ads, setAds] = useState([]); // Default empty array
  const [selectedImg, setSelectedImg] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // 🔹 API CALL (With Safety Check)
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/classified`);
      
      // ✅ Check formatting: res.data array hai ya res.data.data array hai
      const finalData = Array.isArray(res.data) ? res.data : (res.data?.data || []);
      
      setAds(finalData);
    } catch (err) {
      console.error("Fetch error:", err);
      setAds([]); // Error aane par array khali rakhein crash na hone dein
    } finally {
      setLoading(false);
    }
  };

  // 🔹 FILTER (Safe Filter - Crash Proof)
  const filteredAds = Array.isArray(ads) ? ads.filter((ad) =>
    (ad.title?.toLowerCase() || "").includes(search.toLowerCase()) ||
    (ad.location?.toLowerCase() || "").includes(search.toLowerCase())
  ) : [];

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/* 🔹 HERO / BANNER */}
      <div style={{
        background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 0',
        color: 'white'
      }}>
        <Container>
          <div className="text-center mb-4">
            <h1 className="fw-bold">Classified Properties</h1>
            <p>Find exclusive deals & urgent requirements</p>
          </div>

          {/* SEARCH BAR */}
          <div className="mx-auto bg-white p-2 rounded shadow d-flex" style={{ maxWidth: "600px" }}>
            <Search className="mt-2 ms-2 text-muted" />
            <Form.Control
              type="text"
              placeholder="Search by location or title..."
              className="border-0 shadow-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Container>
      </div>

      {/* 🔹 LISTING SECTION */}
      <Container className="py-5">
        {loading ? (
          <div className="text-center py-5"><h4>Loading properties...</h4></div>
        ) : (
          <Row>
            {filteredAds.length > 0 ? (
              filteredAds.map((ad) => (
                <Col key={ad._id} lg={4} md={6} className="mb-4">
                  <Card className="shadow-sm border-0 rounded-4 overflow-hidden h-100">
                    {/* IMAGE */}
                    <div onClick={() => setSelectedImg(ad.image)} style={{ cursor: "pointer" }}>
                      <Card.Img 
                        src={ad.image || 'https://via.placeholder.com/400x300?text=No+Image'} 
                        style={{ height: "260px", objectFit: "cover" }} 
                      />
                    </div>

                    {/* DETAILS */}
                    <Card.Body>
                      <h5 className="fw-bold text-dark">{ad.title}</h5>

                      <p className="text-muted mb-1 d-flex align-items-center gap-1">
                        <MapPin size={16} className="text-primary" /> {ad.location}
                      </p>

                      <p className="mb-2"><strong>🛏 {ad.bedrooms}</strong> Bedrooms</p>

                      <h4 className="text-primary fw-bold mb-3">₹ {ad.price}</h4>

                      <div className="border-top pt-3">
                        <small className="text-muted d-block mb-2">Agent: <b>{ad.agent || 'N/A'}</b></small>
                        
                        {/* BUTTONS */}
                        <div className="d-flex gap-2">
                          <Button
                            variant="success"
                            className="w-100 fw-bold"
                            onClick={() => window.open(`https://wa.me/${ad.contact}`)}
                          >
                            WhatsApp
                          </Button>

                          <Button
                            variant="outline-primary"
                            className="w-100 fw-bold"
                            onClick={() => window.open(`tel:${ad.contact}`)}
                          >
                            Call
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h3 className="text-muted">No properties found matching your search.</h3>
              </Col>
            )}
          </Row>
        )}
      </Container>

      {/* 🔹 IMAGE MODAL */}
      <Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered size="lg">
        <Modal.Body className="p-0 bg-transparent border-0">
          {selectedImg && (
            <img src={selectedImg} alt="preview" className="w-100 rounded" style={{maxHeight: '90vh', objectFit: 'contain'}} />
          )}
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default PremiumClassifieds;