import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { MapPin, Search } from 'lucide-react';

const PremiumClassifieds = () => {
  // 1. Hamesha empty array [] se shuru karein
  const [ads, setAds] = useState([]); 
  const [selectedImg, setSelectedImg] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/classified`);
      
      // 🔥 DEBUGGING: Console mein check karein live par kya data aa raha hai
      console.log("Live Data Response:", res.data);

      // 2. Data structure check karein (Live par aksar res.data.data hota hai)
      let finalData = [];
      if (Array.isArray(res.data)) {
        finalData = res.data;
      } else if (res.data && Array.isArray(res.data.data)) {
        finalData = res.data.data;
      }

      setAds(finalData);
    } catch (err) {
      console.error("API Error:", err);
      setAds([]); // Error aane par page crash na ho
    } finally {
      setLoading(false);
    }
  };

  // 3. FILTER mein safety lagayein (Ye line crash ho rahi thi)
  // Hum check karenge ki ads array hai ya nahi pehle
  const safeAds = Array.isArray(ads) ? ads : [];
  
  const filteredAds = safeAds.filter((ad) => {
    const title = ad.title?.toLowerCase() || "";
    const location = ad.location?.toLowerCase() || "";
    const searchTerm = search.toLowerCase();
    return title.includes(searchTerm) || location.includes(searchTerm);
  });

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
      {/* BANNER SECTION */}
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

      {/* LISTING SECTION */}
      <Container className="py-5">
        {loading ? (
          <div className="text-center py-5"><h3>Loading...</h3></div>
        ) : (
          <Row>
            {filteredAds.length > 0 ? (
              filteredAds.map((ad) => (
                <Col key={ad._id} lg={4} md={6} className="mb-4">
                  <Card className="shadow border-0 rounded-4 overflow-hidden h-100">
                    <div onClick={() => setSelectedImg(ad.image)} style={{ cursor: "pointer" }}>
                      <Card.Img src={ad.image} style={{ height: "300px", objectFit: "cover" }} />
                    </div>
                    <Card.Body>
                      <h5 className="fw-bold">{ad.title}</h5>
                      <p className="text-muted mb-1"><MapPin size={14} /> {ad.location}</p>
                      <p>🛏 {ad.bedrooms} Bedrooms</p>
                      <h5 className="text-success fw-bold">₹ {ad.price}</h5>
                      <small className="text-muted">Agent: {ad.agent}</small>
                      <div className="d-flex gap-2 mt-3">
                        <Button variant="success" className="w-100" onClick={() => window.open(`https://wa.me/${ad.contact}`)}>WhatsApp</Button>
                        <Button variant="primary" className="w-100" onClick={() => window.open(`tel:${ad.contact}`)}>Call</Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col className="text-center py-5">
                <h4 className="text-muted">No Properties Found</h4>
              </Col>
            )}
          </Row>
        )}
      </Container>

      <Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered>
        <Modal.Body className="p-0">
          {selectedImg && <img src={selectedImg} alt="preview" className="w-100" />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PremiumClassifieds;