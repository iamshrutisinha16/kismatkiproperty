import React, { useState, useRef } from 'react'; // 1. useRef import kiya
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Zap, 
  Video, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Camera, 
  Plane, 
  FileText, 
  BarChart, 
  CreditCard, 
  QrCode,
  ChevronDown,
} from 'lucide-react';

const PackagePage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  // 2. Payment section ke liye reference banaya
  const paymentSectionRef = useRef(null);

  // 3. Scroll function banaya
  const scrollToPayment = () => {
    paymentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const packageFeatures = [
    "All Social Media Marketing Included",
    "Listing on KismatKiProperty.com",
    "100 Advertisement Videos",
    "10 Different Anchors for Video Ads",
    "Full Social Media Management (FB, IG, etc.)",
    "Complete Branding Support",
    "Lead Generation Support",
    "Priority Visibility & Promotion",
    "Per Advertisement Strategy & Execution"
  ];

  const addOns = [
    { icon: <Camera size={24} />, title: "Property Photoshoot" },
    { icon: <Plane size={24} />, title: "Drone & Virtual Tours" },
    { icon: <FileText size={24} />, title: "Legal Verification" },
    { icon: <TrendingUp size={24} />, title: "Social Media Boost" },
    { icon: <BarChart size={24} />, title: "Google Ads Setup" }
  ];

  const faqs = [
    { q: "What happens if my property doesn’t sell in 30 days?", a: "Our premium package is for 1 year, ensuring continuous marketing until you get the best results." },
    { q: "Can I upgrade my plan anytime?", a: "Yes, you can upgrade or customize your add-ons at any point by contacting your dedicated manager." },
    { q: "Is there a refund policy?", a: "Service charges are non-refundable once the production (videos/anchors) starts." },
    { q: "Can I list multiple properties in a single package?", a: "The Builder Package allows multiple listings under the same brand umbrella." }
  ];

  return (
    <div className="bg-light overflow-hidden">
      
      {/* 1. HERO BANNER */}
      <section 
        className="text-white d-flex align-items-center justify-content-center text-center px-3"
        style={{
          background: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80")',
          height: '40vh',
          minHeight: '300px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          marginTop: '70px'
        }}
      >
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <span className="badge bg-warning text-dark mb-2 px-3 py-2 fw-bold">BEST OFFER FOR BUILDERS</span>
          <h1 className="display-4 fw-bold">Premium Builder Package</h1>
          <p className="lead">The ultimate marketing solution for real estate growth</p>
        </motion.div>
      </section>

      <div className="container py-5">
        
        {/* 2. MAIN PRICING CARD */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card border-0 shadow-lg rounded-4 overflow-hidden"
            >
              <div className="row g-0">
                <div className="col-md-5 bg-primary text-white p-5 d-flex flex-column justify-content-center text-center text-md-start">
                  <h2 className="fw-bold mb-3">Builder Premium</h2>
                  <div className="display-4 fw-bold mb-2">₹1,90,000</div>
                  <p className="opacity-75 mb-4">(GST Included) / 1 Year Validity</p>
                  <hr className="bg-white" />
                  <div className="d-flex align-items-center gap-2 mb-2 justify-content-center justify-content-md-start">
                    <ShieldCheck size={20} /> <span>100% Verified Service</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 justify-content-center justify-content-md-start">
                    <Zap size={20} /> <span>Instant Onboarding</span>
                  </div>
                </div>
                <div className="col-md-7 bg-white p-4 p-md-5">
                  <h4 className="fw-bold mb-4 text-primary">Everything you get:</h4>
                  <div className="row">
                    {packageFeatures.map((f, i) => (
                      <div className="col-md-6 mb-3" key={i}>
                        <div className="d-flex align-items-start gap-2">
                          <CheckCircle2 className="text-success mt-1 flex-shrink-0" size={18} />
                          <span className="small fw-semibold text-secondary">{f}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* 4. Button par onClick listener lagaya */}
                  <button 
                    onClick={scrollToPayment} 
                    className="btn btn-primary btn-lg w-100 mt-4 rounded-pill fw-bold shadow"
                  >
                    Activate This Plan
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. ADDITIONAL BENEFITS */}
        <div className="row g-4 mb-5">
          <div className="col-12 text-center mb-3">
            <h2 className="fw-bold">Additional Benefits</h2>
          </div>
          {[
            { title: "Dedicated Support", desc: "A personal account manager for your brand", icon: <Users className="text-primary" /> },
            { title: "Pro Content", desc: "High-quality ad scripts and creative designs", icon: <Video className="text-danger" /> },
            { title: "Lead Support", desc: "Direct integration with lead generation tools", icon: <Zap className="text-warning" /> },
            { title: "No Hidden Costs", desc: "All prices are inclusive of GST and production", icon: <ShieldCheck className="text-success" /> }
          ].map((item, i) => (
            <div className="col-12 col-md-6 col-lg-3" key={i}>
              <div className="card h-100 border-0 shadow-sm p-4 text-center rounded-4 bg-white">
                <div className="mb-3">{item.icon}</div>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="small text-muted mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 4. ADD-ONS SECTION */}
        <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm mb-5">
          <h3 className="fw-bold mb-4 text-center">Add-ons & Extra Services</h3>
          <div className="row g-3">
            {addOns.map((add, i) => (
              <div className="col-6 col-md-4 col-lg" key={i}>
                <div className="p-3 border rounded-3 text-center h-100 hover-shadow transition-all">
                  <div className="text-primary mb-2">{add.icon}</div>
                  <span className="small fw-bold d-block">{add.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. PAYMENT SECTION (Ref yahan attach kiya hai) */}
        <div className="row g-4 mb-5 align-items-center" ref={paymentSectionRef} style={{ scrollMarginTop: '100px' }}>
          <div className="col-lg-7">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-4 p-md-5 rounded-4 shadow border-start border-primary border-5"
            >
              <h3 className="fw-bold mb-4 d-flex align-items-center gap-2">
                <CreditCard className="text-primary" /> Bank Payment Details
              </h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="text-muted small">Account Holder Name</label>
                  <p className="fw-bold">kismatkiproperty.com</p>
                </div>
                <div className="col-md-6">
                  <label className="text-muted small">Account Number</label>
                  <p className="fw-bold text-primary fs-5">23060200000203</p>
                </div>
                <div className="col-md-6">
                  <label className="text-muted small">IFSC Code</label>
                  <p className="fw-bold">FDRL0002306</p>
                </div>
                <div className="col-md-6">
                  <label className="text-muted small">Bank Name</label>
                  <p className="fw-bold">FEDERAL Bank</p>
                </div>
                <div className="col-12">
                  <label className="text-muted small">Address</label>
                  <p className="fw-bold">New Delhi Janakpuri, South West Delhi-110058</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-5 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 p-md-5 rounded-4 shadow-lg h-100 d-flex flex-column justify-content-center border border-light"
            >
              <div className="mb-3 text-primary">
                <QrCode size={50} className="mx-auto mb-2" />
                <h4 className="fw-bold text-dark mb-1">Scan to Pay</h4>
                <p className="small text-muted">Use any UPI App (GPay, PhonePe, Paytm)</p>
              </div>

              <div 
                className="p-3 bg-white rounded-4 shadow-sm border border-2 border-dashed d-inline-block mx-auto mb-3"
                style={{ borderColor: '#dee2e6' }}
              >
                <img 
                  src="/assets/scanner.jpeg" 
                  alt="Payment QR Code" 
                  className="img-fluid rounded-3"
                  style={{ 
                    width: '220px', 
                    height: '220px', 
                    objectFit: 'contain',
                    display: 'block' 
                  }} 
                />
              </div>

              <div className="mt-2">
                <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
                  <span className="badge bg-light text-dark border px-3 py-2 rounded-pill">
                    <ShieldCheck size={16} className="text-success me-1" /> Secure Payment
                  </span>
                </div>
                <p className="x-small text-muted mb-0" style={{ fontSize: '0.75rem' }}>
                  Scan the QR code to complete your transaction securely.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 6. FAQ SECTION */}
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h3 className="fw-bold mb-4 text-center">Frequently Asked Questions ❓</h3>
            {faqs.map((f, i) => (
              <div key={i} className="mb-2 border-bottom">
                <button 
                  className="w-100 text-start py-3 bg-transparent border-0 d-flex justify-content-between align-items-center fw-bold text-dark"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {f.q}
                  <ChevronDown className={`transition-all ${activeFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="pb-3 text-secondary small"
                  >
                    {f.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default PackagePage;