import React from "react";

const SellProperty = () => {

  // 🔥 Scroll to existing form
  const handleOpenForm = () => {
    const section = document.getElementById("inquiry-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">
          Sell Your <span className="text-primary">Property</span> with Us
        </h2>
        <p className="text-muted mb-5">
          Simple steps to list your property and find buyers fast!
        </p>

        <div className="row">
          
          {/* 🔹 CARD 1 */}
          <div className="col-md-4 mb-4">
            <div
              className="p-4 shadow-sm rounded bg-light h-100"
              style={{ cursor: "pointer" }}
              onClick={handleOpenForm}   // 👈 yahi main change hai
            >
              <i className="fas fa-user-plus text-primary fs-1 mb-3"></i>
              <h5 className="fw-bold">Create Account</h5>
              <p className="text-muted small">
                Click to fill the form and get started.
              </p>
            </div>
          </div>

          {/* 🔹 CARD 2 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <i className="fas fa-home text-success fs-1 mb-3"></i>
              <h5 className="fw-bold">List Property</h5>
              <p className="text-muted small">
                Add your property details, photos and price in a few steps.
              </p>
            </div>
          </div>

          {/* 🔹 CARD 3 */}
          <div className="col-md-4 mb-4">
            <div className="p-4 shadow-sm rounded bg-light h-100">
              <i className="fas fa-handshake text-warning fs-1 mb-3"></i>
              <h5 className="fw-bold">Find Genuine Buyers</h5>
              <p className="text-muted small">
                Connect with verified buyers and grow your business with confidence.
              </p>
            </div>
          </div>

        </div>

        <a
          href="/sell"
          className="btn btn-primary btn-lg mt-4 px-4 py-2"
        >
          Sell Now
        </a>
      </div>
    </section>
  );
};

export default SellProperty;
