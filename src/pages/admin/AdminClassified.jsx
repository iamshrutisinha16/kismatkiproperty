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

  const [ads, setAds] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedAd, setSelectedAd] = useState(null);

  // 🔥 FETCH DATA
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/classified`);
    setAds(res.data);
  };

  // INPUT
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // ADD
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) =>
      data.append(key, formData[key])
    );
    data.append("image", image);

    await axios.post(`${process.env.REACT_APP_API_URL}/api/classified`,
    data );

    setShowSuccess(true);
    fetchAds();

    setFormData({
      title: "",
      location: "",
      bedrooms: "",
      price: "",
      agent: "",
      contact: "",
    });
    setPreview(null);
  };

  // DELETE
  const handleDelete = async () => {
    await axios.delete(
  `${process.env.REACT_APP_API_URL}/api/classified/${selectedAd._id}`);
  
    setDeleteModal(false);
    fetchAds();
  };

  // EDIT SAVE
  const handleEditSave = async () => {
   await axios.put(
  `${process.env.REACT_APP_API_URL}/api/classified/${selectedAd._id}`,
  selectedAd );

    setEditModal(false);
    fetchAds();
  };

  return (
    <Container fluid className="p-4">

      <h2 className="fw-bold mb-4">Admin Classified</h2>

      {/* ✅ ADD FORM */}
      <Card className="p-4 mb-5 shadow rounded-4">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Control
                className="mb-3"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                placeholder="Bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                placeholder="Price"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </Col>

            <Col md={6}>
              <Form.Control
                className="mb-3"
                placeholder="Agent"
                name="agent"
                value={formData.agent}
                onChange={handleChange}
              />
              <Form.Control
                className="mb-3"
                placeholder="Contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />

              <Form.Control type="file" onChange={handleImage} />

              {preview && (
                <img
                  src={preview}
                  alt=""
                  className="mt-3 rounded"
                  style={{ height: "150px" }}
                />
              )}
            </Col>
          </Row>

          <Button className="mt-3" type="submit">
            Add Classified
          </Button>
        </Form>
      </Card>

      {/* ✅ LIST */}
      <Card className="p-3 shadow rounded-4">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {ads.map((ad) => (
              <tr key={ad._id}>
                <td>
                  <img src={ad.image} width="80" alt="classified"/>
                </td>
                <td>{ad.title}</td>
                <td>{ad.location}</td>
                <td>{ad.price}</td>
                <td>
                  <Button
                    size="sm"
                    variant="warning"
                    onClick={() => {
                      setSelectedAd(ad);
                      setEditModal(true);
                    }}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => {
                      setSelectedAd(ad);
                      setDeleteModal(true);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      {/* ✅ EDIT MODAL */}
      <Modal show={editModal} onHide={() => setEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Classified</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            className="mb-2"
            value={selectedAd?.title || ""}
            onChange={(e) =>
              setSelectedAd({ ...selectedAd, title: e.target.value })
            }
          />
          <Form.Control
            className="mb-2"
            value={selectedAd?.price || ""}
            onChange={(e) =>
              setSelectedAd({ ...selectedAd, price: e.target.value })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleEditSave}>Save</Button>
        </Modal.Footer>
      </Modal>

      {/* ✅ DELETE MODAL */}
      <Modal show={deleteModal} onHide={() => setDeleteModal(false)}>
        <Modal.Body className="text-center">
          <h5>Delete this item?</h5>
          <Button variant="danger" onClick={handleDelete}>
            Yes Delete
          </Button>
        </Modal.Body>
      </Modal>

      {/* ✅ SUCCESS POPUP */}
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <Modal.Body className="text-center">
          <h5>✅ Added Successfully</h5>
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default AdminClassified;