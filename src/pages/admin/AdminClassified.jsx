import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Row,
  Col,
  Modal,
  Table,
} from "react-bootstrap";
import axios from "axios";

const AdminClassified = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    bedrooms: "",
    price: "",
    agent: "",
    contact: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [ads, setAds] = useState([]); // Default empty array
  const [showSuccess, setShowSuccess] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  // 🔥 FETCH DATA (Safe Version)
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/classified`);
      
      // Live API mein data aksar res.data.data ke andar hota hai
      // Isliye hum dono check kar rahe hain taaki page blank na ho
      const result = Array.isArray(res.data) ? res.data : (res.data?.data || []);
      
      setAds(result);
    } catch (error) {
      console.error("Fetch Error:", error);
      setAds([]); // Error aane par empty array set karein taaki crash na ho
    }
  };

  // INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // ADD
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => data.append(key, formData[key]));
      if (image) data.append("image", image);

      await axios.post(`${process.env.REACT_APP_API_URL}/api/classified`, data);

      setShowSuccess(true);
      fetchAds();

      // Reset Form
      setFormData({
        title: "",
        location: "",
        bedrooms: "",
        price: "",
        agent: "",
        contact: "",
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error("Add Error:", error);
      alert("Error adding classified");
    }
  };

  // DELETE
  const handleDelete = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/api/classified/${selectedAd._id}`);
      setDeleteModal(false);
      fetchAds();
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  // EDIT SAVE
  const handleEditSave = async () => {
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/api/classified/${selectedAd._id}`, selectedAd);
      setEditModal(false);
      fetchAds();
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <Container fluid className="p-4">
      <h2 className="fw-bold mb-4">Admin Classified</h2>

      {/* ✅ ADD FORM */}
      <Card className="p-4 mb-5 shadow rounded-4 border-0">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Control className="mb-3" placeholder="Title" name="title" value={formData.title} onChange={handleChange} required />
              <Form.Control className="mb-3" placeholder="Location" name="location" value={formData.location} onChange={handleChange} required />
              <Form.Control className="mb-3" placeholder="Bedrooms" name="bedrooms" value={formData.bedrooms} onChange={handleChange} />
              <Form.Control className="mb-3" placeholder="Price" name="price" value={formData.price} onChange={handleChange} required />
            </Col>

            <Col md={6}>
              <Form.Control className="mb-3" placeholder="Agent" name="agent" value={formData.agent} onChange={handleChange} />
              <Form.Control className="mb-3" placeholder="Contact" name="contact" value={formData.contact} onChange={handleChange} />
              <Form.Control type="file" onChange={handleImage} />
              {preview && <img src={preview} alt="Preview" className="mt-3 rounded shadow-sm" style={{ height: "120px", objectFit: "cover" }} />}
            </Col>
          </Row>
          <Button className="mt-3 px-4" type="submit" variant="primary">Add Classified</Button>
        </Form>
      </Card>

      {/* ✅ LIST (Safe Mapping) */}
      <Card className="p-3 shadow rounded-4 border-0">
        <Table bordered hover responsive>
          <thead className="bg-light">
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(ads) && ads.length > 0 ? (
              ads.map((ad) => (
                <tr key={ad._id}>
                  <td>
                    <img src={ad.image} width="70" height="50" alt="classified" className="rounded" style={{objectFit: 'cover'}} />
                  </td>
                  <td>{ad.title}</td>
                  <td>{ad.location}</td>
                  <td>{ad.price}</td>
                  <td>
                    <Button size="sm" variant="outline-warning" className="me-2" onClick={() => { setSelectedAd(ad); setEditModal(true); }}>Edit</Button>
                    <Button size="sm" variant="outline-danger" onClick={() => { setSelectedAd(ad); setDeleteModal(true); }}>Delete</Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 text-muted">No data found. Check your API or .env URL.</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>

      {/* ✅ EDIT MODAL */}
      <Modal show={editModal} onHide={() => setEditModal(false)} centered>
        <Modal.Header closeButton><Modal.Title>Edit Classified</Modal.Title></Modal.Header>
        <Modal.Body>
          <Form.Label>Title</Form.Label>
          <Form.Control className="mb-3" value={selectedAd?.title || ""} onChange={(e) => setSelectedAd({ ...selectedAd, title: e.target.value })} />
          <Form.Label>Price</Form.Label>
          <Form.Control className="mb-3" value={selectedAd?.price || ""} onChange={(e) => setSelectedAd({ ...selectedAd, price: e.target.value })} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleEditSave}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* ✅ DELETE MODAL */}
      <Modal show={deleteModal} onHide={() => setDeleteModal(false)} centered size="sm">
        <Modal.Body className="text-center p-4">
          <h5 className="mb-4">Are you sure?</h5>
          <div className="d-flex justify-content-center gap-2">
            <Button variant="secondary" onClick={() => setDeleteModal(false)}>No</Button>
            <Button variant="danger" onClick={handleDelete}>Yes, Delete</Button>
          </div>
        </Modal.Body>
      </Modal>

      {/* ✅ SUCCESS POPUP */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)} centered size="sm">
        <Modal.Body className="text-center p-4">
          <div className="display-4 text-success mb-2">Check</div>
          <h5>Added Successfully!</h5>
          <Button className="mt-3" onClick={() => setShowSuccess(false)}>OK</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminClassified;