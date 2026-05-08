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

const AdminProperties = () => {

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    bedrooms: "",
    price: "",
    area: "",
    tag: "",
    type: "",
  });

  const [image, setImage] = useState(null);

  const [preview, setPreview] = useState(null);

  const [ads, setAds] = useState([]);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const [editModal, setEditModal] =
    useState(false);

  const [deleteModal, setDeleteModal] =
    useState(false);

  const [selectedAd, setSelectedAd] =
    useState(null);



  // =========================
  // FETCH DATA
  // =========================
  useEffect(() => {
    fetchAds();
  }, []);

  const fetchAds = async () => {
    try {

      const res = await axios.get(
        "https://kismatkiproperty-backend.onrender.com/api/properties"
      );

      setAds(res.data);

    } catch (err) {
      console.log(err);
    }
  };



  // =========================
  // INPUT CHANGE
  // =========================
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };



  // =========================
  // IMAGE
  // =========================
  const handleImage = (e) => {

    const file = e.target.files[0];

    setImage(file);

    if (file) {
      setPreview(
        URL.createObjectURL(file)
      );
    }
  };



  // =========================
  // ADD PROPERTY
  // =========================
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = new FormData();

      Object.keys(formData).forEach((key) =>
        data.append(key, formData[key])
      );

      if (image) {
        data.append("image", image);
      }

      await axios.post(
        "https://kismatkiproperty-backend.onrender.com/api/properties",
        data
      );

      setShowSuccess(true);

      fetchAds();

      setFormData({
        title: "",
        location: "",
        bedrooms: "",
        price: "",
        area: "",
        tag: "",
        type: "",
      });

      setImage(null);

      setPreview(null);

      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

    } catch (err) {

      console.log(err);
    }
  };



  // =========================
  // DELETE PROPERTY
  // =========================
  const handleDelete = async () => {

    try {

      await axios.delete(
        `https://kismatkiproperty-backend.onrender.com/api/properties/${selectedAd._id}`
      );

      setDeleteModal(false);

      fetchAds();

    } catch (err) {

      console.log(err);
    }
  };



  // =========================
  // EDIT SAVE
  // =========================
  const handleEditSave = async () => {

    try {

      await axios.put(
        `https://kismatkiproperty-backend.onrender.com/api/properties/${selectedAd._id}`,
        {
          title: selectedAd.title,
          location: selectedAd.location,
          bedrooms: selectedAd.bedrooms,
          price: selectedAd.price,
          area: selectedAd.area,
          tag: selectedAd.tag,
          type: selectedAd.type,
        }
      );

      setEditModal(false);

      fetchAds();

    } catch (err) {

      console.log(err);
    }
  };



  return (
    <Container fluid className="p-4">

      <h2 className="fw-bold mb-4">
        Admin Properties
      </h2>



      {/* =========================
          ADD PROPERTY FORM
      ========================= */}
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



              {/* TYPE */}
              <Form.Select
                className="mb-3"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >

                <option value="">
                  Select Property Type
                </option>

                <option value="Buy">
                  Buy
                </option>

                <option value="Rent">
                  Rent
                </option>

                <option value="Commercial">
                  Commercial
                </option>

                <option value="Projects">
                  Projects
                </option>

                <option value="New Launch">
                  New Launch
                </option>

              </Form.Select>



              <Form.Control
                className="mb-3"
                placeholder="Tag"
                name="tag"
                value={formData.tag}
                onChange={handleChange}
              />

            </Col>



            <Col md={6}>

              <Form.Control
                className="mb-3"
                placeholder="Area"
                name="area"
                value={formData.area}
                onChange={handleChange}
              />

              <Form.Control
                type="file"
                onChange={handleImage}
              />

              {preview && (
                <img
                  src={preview}
                  alt="preview"
                  className="mt-3 rounded"
                  style={{
                    height: "150px",
                    objectFit: "cover",
                  }}
                />
              )}

            </Col>

          </Row>

          <Button
            className="mt-3"
            type="submit"
          >
            Add Property
          </Button>

        </Form>
      </Card>



      {/* =========================
          PROPERTY TABLE
      ========================= */}
      <Card className="p-3 shadow rounded-4">

        <Table bordered hover responsive>

          <thead>

            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Type</th>
              <th>Location</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {ads.map((ad) => (

              <tr key={ad._id}>

                <td>
                  <img
                    src={ad.image}
                    width="80"
                    alt="property"
                    style={{
                      borderRadius: "10px",
                    }}
                  />
                </td>

                <td>{ad.title}</td>

                <td>
                  <span className="badge bg-primary">
                    {ad.type || "N/A"}
                  </span>
                </td>

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



      {/* =========================
          EDIT MODAL
      ========================= */}
      <Modal
        show={editModal}
        onHide={() => setEditModal(false)}
      >

        <Modal.Header closeButton>
          <Modal.Title>
            Edit Property
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form.Control
            className="mb-3"
            placeholder="Title"
            value={selectedAd?.title || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                title: e.target.value,
              })
            }
          />

          <Form.Control
            className="mb-3"
            placeholder="Location"
            value={selectedAd?.location || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                location: e.target.value,
              })
            }
          />

          <Form.Control
            className="mb-3"
            placeholder="Bedrooms"
            value={selectedAd?.bedrooms || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                bedrooms: e.target.value,
              })
            }
          />

          <Form.Control
            className="mb-3"
            placeholder="Price"
            value={selectedAd?.price || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                price: e.target.value,
              })
            }
          />

          <Form.Control
            className="mb-3"
            placeholder="Area"
            value={selectedAd?.area || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                area: e.target.value,
              })
            }
          />

          <Form.Control
            className="mb-3"
            placeholder="Tag"
            value={selectedAd?.tag || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                tag: e.target.value,
              })
            }
          />



          {/* TYPE */}
          <Form.Select
            className="mb-3"
            value={selectedAd?.type || ""}
            onChange={(e) =>
              setSelectedAd({
                ...selectedAd,
                type: e.target.value,
              })
            }
          >

            <option value="">
              Select Type
            </option>

            <option value="Buy">
              Buy
            </option>

            <option value="Rent">
              Rent
            </option>

            <option value="Commercial">
              Commercial
            </option>

            <option value="Projects">
              Projects
            </option>

            <option value="New Launch">
              New Launch
            </option>

          </Form.Select>

        </Modal.Body>

        <Modal.Footer>

          <Button
            variant="secondary"
            onClick={() =>
              setEditModal(false)
            }
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={handleEditSave}
          >
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>



      {/* =========================
          DELETE MODAL
      ========================= */}
      <Modal
        show={deleteModal}
        onHide={() =>
          setDeleteModal(false)
        }
      >

        <Modal.Body className="text-center p-4">

          <h5 className="mb-3">
            Delete this property?
          </h5>

          <Button
            variant="danger"
            onClick={handleDelete}
          >
            Yes Delete
          </Button>

        </Modal.Body>

      </Modal>



      {/* =========================
          SUCCESS MODAL
      ========================= */}
      <Modal
        show={showSuccess}
        onHide={() =>
          setShowSuccess(false)
        }
      >

        <Modal.Body className="text-center p-4">

          <h5>
            ✅ Property Added Successfully
          </h5>

        </Modal.Body>

      </Modal>

    </Container>
  );
};

export default AdminProperties;