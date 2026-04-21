import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { MapPin, Search } from 'lucide-react';

const PremiumClassifieds = () => {
  const [ads, setAds] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);
  const [search, setSearch] = useState("");

  //API CALL
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await axios.get("https://kismatkiproperty-backend.onrender.com/api/classified");
      setAds(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  // FILTER (search)
  const filteredAds = ads.filter((ad) =>
    ad.title?.toLowerCase().includes(search.toLowerCase()) ||
    ad.location?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: "#f8fafc", minHeight: "100vh" }}>

      {/*HERO / BANNER */}
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

          {/*SEARCH BAR */}
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

      {/* LISTING */}
      <Container className="py-5">
        <Row>
          {filteredAds.map((ad) => (
            <Col key={ad._id} lg={4} md={6} className="mb-4">

              <Card className="shadow border-0 rounded-4 overflow-hidden h-100">
              {/* IMAGE */}
<div onClick={() => setSelectedImg(ad.image)} style={{ cursor: "pointer" }}>
  <Card.Img src={ad.image} style={{ height: "300px", objectFit: "cover" }} />
</div>

                {/* DETAILS */}
                <Card.Body>
                  <h5 className="fw-bold">{ad.title}</h5>

                  <p className="text-muted mb-1">
                    <MapPin size={14} /> {ad.location}
                  </p>

                  <p>🛏 {ad.bedrooms} Bedrooms</p>

                  <h5 className="text-success fw-bold">₹ {ad.price}</h5>

                  <small className="text-muted">
                    Agent: {ad.agent}
                  </small>

                  {/* BUTTONS */}
                  <div className="d-flex gap-2 mt-3">
                    <Button
                      variant="success"
                      className="w-100"
                      onClick={() => window.open(`https://wa.me/${ad.contact?.[0]}`)}
                    >
                      WhatsApp
                    </Button>

                    <Button
                      variant="primary"
                      className="w-100"
                      onClick={() => window.open(`tel:${ad.contact?.[0]}`)}
                    >
                      Call
                    </Button>
                  </div>

                </Card.Body>

              </Card>

            </Col>
          ))}
        </Row>
      </Container>

      {/* IMAGE MODAL */}
<Modal show={!!selectedImg} onHide={() => setSelectedImg(null)} centered>
  <Modal.Body className="p-0">
    {selectedImg && (
      <img src={selectedImg} alt="preview" className="w-100" />
    )}
  </Modal.Body>
</Modal>

    </div>
  );
};

export default PremiumClassifieds;