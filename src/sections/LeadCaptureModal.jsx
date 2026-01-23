import React, { useState, useEffect } from "react";

const LeadCaptureModal = ({ onSubmit }) => {
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Check if mobile was already submitted
    const submitted = localStorage.getItem("leadSubmitted");
    if (!submitted) {
      setShowModal(true); // show modal if not submitted
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mobile) {
      alert("Please enter your mobile number");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("https://kismatkiproperty.onrender.com/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Thanks! We got your number: " + mobile);
        localStorage.setItem("leadSubmitted", "true"); // permanently save submission
        setIsSubmitted(true);
        setShowModal(false); // close modal
        onSubmit && onSubmit();
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error("❌ Error submitting:", err);
      alert("Error submitting number");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal || isSubmitted) return null;

  return (
    <>
      {/* Main Lead Modal */}
      <div style={styles.modalOverlay}>
        <div style={styles.modalBox}>
          <button style={styles.closeBtn} onClick={handleClose}>✖</button>
          <h3 style={styles.heading}>📱 Enter Your Mobile Number</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="tel"
              placeholder="Your 10-digit Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={styles.input}
            />
            <button
              type="submit"
              style={{ ...styles.button, ...(loading ? styles.buttonDisabled : {}) }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
          <p style={styles.termsLink} onClick={() => setShowTerms(true)}>
            By submitting, you agree to our Terms & Conditions
          </p>
        </div>
      </div>

      {/* Terms & Conditions Modal */}
      {showTerms && (
        <div style={styles.termsOverlay}>
          <div style={styles.termsBox}>
            <button style={styles.termsCloseBtn} onClick={() => setShowTerms(false)}>✖</button>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📄 Terms & Conditions</h2>

            {/* FULL Terms & Conditions content */}
            <h4>1. Introduction</h4>
            <p>
              This website kismatkiproperty.com, including any subdomains thereof, and any other websites through which its services are made available, our mobile, tablet and other smart device applications, and application program interfaces etc., is owned, hosted and operated by Info Edge (India) Ltd (IEIL), a company incorporated in India under the Companies Act. These terms and conditions, privacy policy and community guidelines regulating use of these Services constitute a legally binding agreement between kismatkiproperty and the User (the “Agreement”).
            </p>
            <p>
              IEIL may amend/modify these terms and conditions at any time, and such modifications shall be effective immediately upon posting of the modified terms and conditions on kismatkiproperty. Your continued access or use of kismatkiproperty shall be deemed conclusive proof of your acceptance of these terms and conditions.
            </p>

            <h4>2. Submission and administration of listings/advertisements</h4>
            <p>
              User agrees not to submit any property descriptions, photographs, financial, contact or other information contained in each property's data to kismatkiproperty unless the User submitting such a Listing/Advertisement has acquired and received all necessary rights and authorizations from the owner of such property. IEIL does not take ownership of any banners hosted and does not independently verify authenticity. Users are responsible for ensuring all provided information is accurate and lawful.
            </p>
            <p>
              IEIL may remove listings that violate these terms and conditions. The User agrees that all property information may be searchable, displayed, accessed, downloaded, copied, and otherwise referred to by users of kismatkiproperty.
            </p>

            <h4>3. User Agreement</h4>
            <p>By using <b>kismatkiproperty.com</b>, you confirm that you are at least 18 years old and legally capable of entering into an agreement.</p>

            <h4>4. Services</h4>
            <p>kismatkiproperty provides an online platform for property advertisements, searches, and related information.</p>

            <h4>5. User Responsibilities</h4>
            <ul>
              <li>Provide accurate and genuine information.</li>
              <li>Do not post illegal, misleading, or harmful content.</li>
              <li>You are responsible for your account activity.</li>
              <li>Do not attempt to hack, spam, or misuse the platform.</li>
            </ul>

            <h4>6. Intellectual Property</h4>
            <p>All trademarks, content, data, and designs belong to <b>kismatkiproperty</b> and may not be copied, distributed, or reused without permission.</p>

            <h4>7. Limitation of Liability</h4>
            <p>We are not responsible for any direct or indirect losses, damages, or disputes caused due to the use of information provided on this platform.</p>

            <h4>8. Privacy Policy</h4>
            <p>Your personal details are kept confidential. However, by using our platform you agree that we may contact you with updates, offers, and notifications related to property services.</p>

            <h4>9. Termination</h4>
            <p>We reserve the right to suspend or terminate accounts found in violation of our policies without prior notice.</p>

            <h4>10. Governing Law</h4>
            <p>These Terms are governed by Indian law and subject to the jurisdiction of courts in Delhi, India.</p>

            <h4>11. Contact</h4>
            <p>For any queries, please contact us at <b>support@kismatkiproperty.com</b>.</p>

            <button style={styles.termsBottomBtn} onClick={() => setShowTerms(false)}>
              Close Terms & Conditions
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// Styles
const styles = {
  modalOverlay: {
    position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)", display: "flex",
    justifyContent: "center", alignItems: "center", zIndex: 1000, padding: "15px",
  },
  modalBox: {
    backgroundColor: "#fff", padding: "25px", borderRadius: "12px",
    maxWidth: "400px", width: "100%", position: "relative",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)", textAlign: "center",
  },
  heading: { fontSize: "20px", marginBottom: "15px", fontWeight: "bold", color: "#333" },
  input: { width: "100%", padding: "12px", margin: "12px 0", borderRadius: "6px", border: "1px solid #ccc", fontSize: "16px", outline: "none" },
  button: { width: "100%", padding: "12px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer", fontSize: "16px" },
  buttonDisabled: { backgroundColor: "#9E9E9E", cursor: "not-allowed" },
  closeBtn: { position: "absolute", top: "10px", right: "10px", background: "transparent", border: "none", fontSize: "20px", cursor: "pointer", color: "#666" },
  termsLink: { marginTop: "10px", fontSize: "13px", color: "#007bff", textDecoration: "underline", cursor: "pointer" },
  termsOverlay: { position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.6)", zIndex: 2000, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" },
  termsBox: { background: "#fff", borderRadius: "10px", width: "90%", maxWidth: "1000px", height: "90%", overflowY: "auto", padding: "40px", position: "relative", boxShadow: "0 10px 25px rgba(0,0,0,0.4)" },
  termsCloseBtn: { position: "absolute", top: "15px", right: "20px", background: "transparent", border: "none", fontSize: "26px", fontWeight: "bold", color: "#444", cursor: "pointer" },
  termsBottomBtn: { marginTop: "30px", display: "block", marginLeft: "auto", marginRight: "auto", padding: "12px 25px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" },
};

export default LeadCaptureModal;
