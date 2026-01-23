import React, { useRef } from "react";

const cities = [
  { name: "Mumbai", image: "/assets/mumbai.webp" },
  { name: "Delhi", image: "/assets/delhi.webp" },
  { name: "Bangalore", image: "/assets/banglore.webp" },
  { name: "Hyderabaad", image: "/assets/hydrabaad.jpg" },
  { name: "Pune", image: "/assets/pune.png" },
  { name: "Kolkata", image: "/assets/kolkata.jpg" },
];

function PopularCities(){
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = direction === "left" ? -200 : 200;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="container my-5 position-relative">
      <h2 className="text-center fw-bold mb-3 fs-2">Popular Cities</h2>
      <p className="text-center text-muted mb-4">Explore top real estate locations in India </p>

      {/* Arrows */}
      <button
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
        onClick={() => scroll("left")}
        style={{ zIndex: 2 }}
      >
        ◀
      </button>
      <button
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
        onClick={() => scroll("right")}
        style={{ zIndex: 2 }}
      >
        ▶
      </button>

      {/* Scrollable Container */}
      <div
        className="d-flex overflow-auto gap-3 px-2"
        ref={scrollRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {cities.map((city, index) => (
          <div
            key={index}
            className="card border-0 shadow-sm flex-shrink-0"
            style={{ width: "200px" }}
          >
            <div style={{ overflow: "hidden", borderRadius: "1rem 1rem 0 0" }}>
              <img
                src={city.image}
                alt={city.name}
                style={{
                  width: "100%",
                  height: "140px",
                  objectFit: "cover",
                  transform: "scale(1.05) rotate(-1deg)",
                }}
              />
            </div>
            <div className="card-body text-center">
              <h6 className="fw-semibold m-0">{city.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
