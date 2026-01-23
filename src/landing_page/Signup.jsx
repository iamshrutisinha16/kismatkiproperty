import React, { useState } from 'react';
import { Form, Button, Container, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('');

  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/signup`,
        formData,
        { withCredentials: true }
      );

      console.log(" Signup Success:", response.data);

      setMessage(response.data.message || "Signup successful!");
      setVariant("success");

      setFormData({ username: '', email: '', password: '' });

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (error) {
      console.error(" Signup Error:", error.response?.data || error.message);

      const errorMsg = error.response?.data?.message || "Signup failed. Try again.";
      setMessage(errorMsg);
      setVariant("danger");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '85vh' }}>
      <Card style={{ width: '100%', maxWidth: '450px', padding: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 className="text-center mb-4">Sign Up on Kismat Ki Property</h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit" className="w-100 fw-semibold">
            Sign Up
          </Button>

          {message && (
            <Alert className="mt-3 text-center" variant={variant}>
              {message}
            </Alert>
          )}
        </Form>
      </Card>
    </Container>
  );
}

export default Signup;
