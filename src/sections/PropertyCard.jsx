import React from "react";

function PropertyCard ({ image, title, location, price }){
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{location}</p>
          <p className="card-text fw-bold">₹{price} Lakhs</p>
          <a href="/properties" className="btn btn-primary w-100">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
