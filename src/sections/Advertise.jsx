import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
 
const AdvertiseWithUs = () => {
  return (
    <section className="advertise-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          <span className="advertise-tag">
            Premium Property Ads
          </span>

          <h2 className="advertise-heading">
            Advertise With Us
          </h2>

          <p className="advertise-subtitle">
            Promote your luxury properties with high visibility,
            stunning showcase banners and premium reach.
          </p>
        </div>

        {/* Carousel */}
        <div className="advertise-carousel-wrapper">

          <Carousel
            fade
            interval={3500}
            pause={false}
            indicators={true}
            controls={true}
          >

            {/* VIDEO SLIDE */}
            <Carousel.Item>
              <div className="media-wrapper">
                <video
                  className="advertise-media"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="/assets/advertisementvideo.mp4"
                    type="video/mp4"
                  />
                </video>

              </div>
            </Carousel.Item>

            {/* IMAGE 1 */}
            <Carousel.Item>
              <div className="media-wrapper">
                <img
                  className="advertise-media"
                  src="/assets/advertisement2.png"
                  alt="Advertisement 1"
                />

              </div>
            </Carousel.Item>

            {/* IMAGE 2 */}
            <Carousel.Item>
              <div className="media-wrapper">
                <img
                  className="advertise-media"
                  src="/assets/advertisement.png"
                  alt="Advertisement 2"
                />
              </div>
            </Carousel.Item>

            {/* IMAGE 3 */}
            <Carousel.Item>
              <div className="media-wrapper">
                <img
                  className="advertise-media"
                  src="/assets/advertisement3.png"
                  alt="Advertisement 3"
                />
              </div>
            </Carousel.Item>

          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AdvertiseWithUs;