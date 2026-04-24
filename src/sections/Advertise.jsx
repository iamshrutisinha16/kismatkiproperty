import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const AdvertiseWithUs = () => {
  return (
    <div className="container my-5">
      
      {/* Section Heading */}
      <h2 className="text-center fw-bold mb-4">
        Advertise With Us
      </h2>

      <Carousel
        fade
        interval={4000}
        pause={false}
        indicators={true}
      >
        {/* Slide 1 */}
        <Carousel.Item>
          <div className="ad-image-wrapper">
            <img
              className="d-block w-100 ad-image"
              src="/assets/advertisement1.png"
              alt="Advertise 1"
            />
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="ad-image-wrapper">
            <img
              className="d-block w-100 ad-image"
              src="/assets/advertisement2.png"
              alt="Advertise 2"
            />
          </div>
        </Carousel.Item>

        {/* Slide 2 */}
        <Carousel.Item>
          <div className="ad-image-wrapper">
            <img
              className="d-block w-100 ad-image"
              src="/assets/advertisement.png"
              alt="Advertise 2"
            />
          </div>
        </Carousel.Item>

        {/* Slide 3 */}
        <Carousel.Item>
          <div className="ad-image-wrapper">
            <img
              className="d-block w-100 ad-image"
              src="/assets/advertisement3.png"
              alt="Advertise 3"
            />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default AdvertiseWithUs;