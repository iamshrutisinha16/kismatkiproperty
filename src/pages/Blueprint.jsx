import React from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaComments,
  FaMapMarkedAlt,
  FaFileContract,
  FaKey,
  FaUserCheck,
  FaUpload,
  FaHandshake,
  FaBuilding,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function BlueprintSection() {
  const whatsAppNumber = "+918595076589";

  const steps = [
    {
      icon: <FaComments size={28} className="text-primary" />,
      title: "Property Discussion",
      desc: "Understand your needs and budget to plan the best property for you.",
    },
    {
      icon: <FaMapMarkedAlt size={28} className="text-success" />,
      title: "Location Planning",
      desc: "We help you explore locations as per your lifestyle and commute needs.",
    },
    {
      icon: <FaFileContract size={28} className="text-danger" />,
      title: "Legal & Financial Help",
      desc: "Full support in documentation, loan, and registration process.",
    },
    {
      icon: <FaKey size={28} className="text-info" />,
      title: "Deal Closure",
      desc: "We finalize the deal and hand over your dream home’s key!",
    },
  ];

  const buyerSteps = [
    {
      icon: <FaUserCheck className="text-primary" size={24} />,
      title: "Sign Up & Browse",
      desc: "Create your account and explore listed properties.",
    },
    {
      icon: <FaHandshake className="text-success" size={24} />,
      title: "Contact Seller/Dealer",
      desc: "Talk directly or take dealer support as per need.",
    },
    {
      icon: <FaFileContract className="text-danger" size={24} />,
      title: "Verify Documents",
      desc: "Check all papers with your lawyer and bank.",
    },
    {
      icon: <FaKey className="text-info" size={24} />,
      title: "Finalize & Move In",
      desc: "Lock the deal and receive your new home keys!",
    },
  ];

  const sellerSteps = [
    {
      icon: <FaUserCheck className="text-primary" size={24} />,
      title: "Register & Post Property",
      desc: "Upload your property details and images.",
    },
    {
      icon: <FaUpload className="text-success" size={24} />,
      title: "Get Leads",
      desc: "Buyers/dealers will reach out directly or through chat.",
    },
    {
      icon: <FaHandshake className="text-danger" size={24} />,
      title: "Negotiate & Deal",
      desc: "Discuss price, terms and finalize the sale.",
    },
    {
      icon: <FaBuilding className="text-info" size={24} />,
      title: "Handover Property",
      desc: "Close the deal and transfer ownership smoothly.",
    },
  ];

  return (
    <>
      {/* Blueprint Section */}
      <section className="py-5 bg-light" id="blueprint">
        <Container>
          <motion.h2
            className="text-center mb-5 fw-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Blueprint to Your Dream Property
          </motion.h2>
          <Row className="align-items-center">
            <Col md={6} className="mb-4 mb-md-0">
              <motion.img
                src="/assets/blueprint.jpg"
                alt="Blueprint illustration"
                className="img-fluid rounded shadow"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              />
            </Col>
            <Col md={6}>
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="d-flex mb-4 align-items-start"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="me-3">{step.icon}</div>
                  <div>
                    <h5 className="mb-1 fw-semibold">{step.title}</h5>
                    <p className="text-muted mb-0">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Process Section */}
      <section className="py-5 bg-white" id="our-process">
        <Container>
          <motion.h2
            className="text-center mb-5 fw-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Process
          </motion.h2>
          <Row className="align-items-center">
            <Col md={6}>
              <motion.ul
                className="text-muted ps-3"
                style={{ listStyle: "disc", minHeight: "240px" }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <li className="mb-2">
                  kismatkiproperty.com is an advertisement platform where buyer and seller can come here and give their advertisement and can sell the property of their choice and can also do a direct deal with the sale.
                </li>
                <li className="mb-2">
                  If he needs a dealer, he also advertises with the dealer and can also take help of the dealer.
                </li>
                <li className="mb-2">
                  Here the buyer can talk directly with the builders who are building their houses all over India and can also take help of the dealer.
                </li>
                <li className="mb-2">
                  But kismatkiproperty gives suggestions that if any buyer comes for doing a deal, then he definitely takes help of the dealer.
                </li>
                <li className="mb-2">
                  The dealer definitely takes commission but he gives information about the complete property and tells many things which the buyer is not aware of.
                </li>
                <li className="mb-2">
                  We definitely say that any buyer coming to buy a property should definitely take a bank loan, get the papers checked by your lawyer, also talk to the insurance people.
                </li>
                <li className="mb-2">
                  Proceed further only after getting complete information of the papers.
                </li>
                <li className="mb-2">
                  If a buyer does not do this then the risk will be his, the company does not take any responsibility.
                </li>
                <li className="mb-2">
                  We tell everyone that property matters are very expensive, that is why first get it checked by a lawyer or whatever it may be.
                </li>
                <li className="mb-2">
                  This buyer has to see with his mind because kismatkiproperty.com is an advertisement portal.
                </li>
                <li className="mb-2">
                  Kismatkiproperty is not responsible for the advertisement either.
                </li>
                <li className="mb-2">
                  Kismatkiproperty platform provides the facility to the buyer-seller to buy and sell his property but before that he should take help from his lawyer for the paper because the buyer-seller does not have that much knowledge about the paper property.
                </li>
              </motion.ul>
            </Col>
            <Col md={6}>
              <motion.div
                className="ratio ratio-16x9 rounded shadow overflow-hidden"
                style={{ height: "600px" }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <video
                  controls
                  muted
                  autoPlay
                  loop
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/assets/ourprocess.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How It Works Section */}
      <section className="py-5 bg-light" id="how-it-works">
        <Container>
          <motion.h2
            className="text-center mb-5 fw-bold"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How It Works
          </motion.h2>
          <Row>
            <Col md={6}>
              <h4 className="fw-semibold mb-4 text-primary">For Buyers</h4>
              {buyerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="d-flex mb-4 align-items-start"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="me-3">{step.icon}</div>
                  <div>
                    <h6 className="mb-1 fw-semibold">{step.title}</h6>
                    <p className="text-muted mb-0">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </Col>
            <Col md={6}>
              <h4 className="fw-semibold mb-4 text-success">For Sellers</h4>
              {sellerSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="d-flex mb-4 align-items-start"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="me-3">{step.icon}</div>
                  <div>
                    <h6 className="mb-1 fw-semibold">{step.title}</h6>
                    <p className="text-muted mb-0">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="py-5 bg-white text-center" id="cta-contact">
        <Container>
          <motion.h2
            className="fw-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Post Your Property or Need Help?
          </motion.h2>
          <motion.p
            className="text-muted mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Connect with our experts now or post your property in just a few clicks.
          </motion.p>
          <motion.div
            className="d-flex flex-wrap justify-content-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              variant="primary"
              className="d-flex align-items-center gap-2"
              href={`tel:${whatsAppNumber}`}
            >
              <FaPhoneAlt /> Call Now
            </Button>
            <Button
              variant="success"
              className="d-flex align-items-center gap-2"
              href={`https://wa.me/${whatsAppNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp /> WhatsApp Now
            </Button>
            <Button variant="outline-dark">Post Your Property</Button>
          </motion.div>
        </Container>
      </section>
    </>
  );
}

export default BlueprintSection;
