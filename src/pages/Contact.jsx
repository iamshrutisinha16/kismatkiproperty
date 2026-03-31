import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown } from 'lucide-react';

const ContactPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const faqs = [
    { q: "How can I schedule a property visit?", a: "Fill out the contact form and we’ll get back to you shortly to fix a time." },
    { q: "Are loan facilities available?", a: "Yes, we assist with home loans through trusted banking partners." },
    { q: "Do you charge any consultation fees?", a: "No consultation charges. You only pay when you finalize the property." },
    { q: "Which cities do you serve?", a: "Primarily Delhi, Noida, Gurugram — with pan-India availability." },
    { q: "When will I get a call back?", a: "Usually within 30–60 mins during working hours." }
  ];

  return (
    <div className="container-fluid p-0">
      
      {/* 1. BANNER SECTION */}
      <section 
        className="d-flex align-items-center justify-content-center text-white text-center"
         style={{
    background: `linear-gradient(
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80")`,
    height: '470px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}
>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h1 className="display-3 fw-bold">Contact Us</h1>
          <p className="fs-5 opacity-75">Expert Real Estate Services in Delhi NCR</p>
        </motion.div>
      </section>

      <div className="container py-5">
        
        {/* 2. CONTACT INFO CARDS */}
        <div className="row g-4 mb-5">
          {[
            { icon: <MapPin className="text-danger" />, title: "Head Office", desc: "B-1/628, 2nd Floor, Janakpuri East Metro Station, New Delhi", sub: "Branches: South Delhi, Gurugram, Noida" },
            { icon: <Phone className="text-success" />, title: "Mobile", desc: "+91 8595076589", sub: "Call us for site visits" },
            { icon: <Mail className="text-primary" />, title: "Email", desc: "property.charukhanna@gmail.com", sub: "24/7 Email Support" },
            { icon: <Clock className="text-warning" />, title: "Working Hours", desc: "Mon - Sat: 10am - 7pm", sub: "Sunday: Closed" }
          ].map((item, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <motion.div 
                whileHover={{ scale: 1.03 }}
                className="card h-100 border-0 shadow-sm p-3 text-center"
              >
                <div className="mb-3">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="mb-1 text-secondary small">{item.desc}</p>
                <small className="text-muted" style={{fontSize: '11px'}}>{item.sub}</small>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="row g-5">
          {/* 3. LEAVE A MESSAGE FORM */}
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-4 bg-white rounded shadow-sm border"
            >
              <h2 className="mb-4 fw-bold">Leave a Message</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control p-3 border-0 bg-light" placeholder="John Doe" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control p-3 border-0 bg-light" placeholder="name@example.com" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Your Message</label>
                  <textarea className="form-control p-3 border-0 bg-light" rows="5" placeholder="Write your requirements here..."></textarea>
                </div>
                <button type="submit" className="btn btn-dark w-100 p-3 fw-bold d-flex align-items-center justify-content-center gap-2">
                  <Send size={18} /> Submit Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* 4. MAP SECTION */}
          <div className="col-lg-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-100 rounded overflow-hidden shadow-sm border"
              style={{ minHeight: '400px' }}
            >
              <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.444703810168!2d77.07890067550137!3d28.63141597566418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04bf30000001%3A0x868c1221f7d24266!2sJanakpuri%20East!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* 5. FAQ SECTION */}
        <section className="mt-5 pt-5">
          <h2 className="text-center fw-bold mb-5">Frequently Asked Questions ❓</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mb-3 border rounded overflow-hidden shadow-sm bg-white"
                >
                  <button 
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-100 text-start p-3 border-0 bg-white d-flex justify-content-between align-items-center fw-semibold"
                  >
                    {faq.q}
                    <ChevronDown 
                      style={{ 
                        transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: '0.3s'
                      }} 
                    />
                  </button>
                  {activeFaq === index && (
                    <motion.div 
                      initial={{ height: 0 }} 
                      animate={{ height: 'auto' }} 
                      className="p-3 border-top bg-light"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default ContactPage;