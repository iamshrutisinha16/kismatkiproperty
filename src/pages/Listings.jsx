import React, {
  useEffect,
  useState,
} from "react";

import {
  useLocation,
} from "react-router-dom";

import axios from "axios";

function Listings() {

  const [listings, setListings] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const { search } =
    useLocation();

  // URL PARAMS
  const queryParams =
    new URLSearchParams(search);

  const category =
    queryParams.get(
      "category"
    ) || "";

  const city =
    queryParams.get(
      "city"
    ) || "";



  // FETCH DATA
  useEffect(() => {

    const fetchListings =
      async () => {

        try {

          setLoading(true);

          const response =
            await axios.get(
              "https://kismatkiproperty-backend.onrender.com/api/properties"
            );

          let filteredData =
            response.data;

          console.log(
            "ALL DATA:",
            filteredData
          );

          console.log(
            "CATEGORY:",
            category
          );

          console.log(
            "CITY:",
            city
          );



          // CATEGORY FILTER
          // Sirf tab chalega jab DB me type field ho
          if (category) {

            filteredData =
              filteredData.filter(
                (item) => {

                  // Agar type nahi hai toh all show
                  if (!item.type) {
                    return true;
                  }

                  return (
                    item.type
                      ?.toLowerCase()
                      .trim() ===
                    category
                      .toLowerCase()
                      .trim()
                  );
                }
              );
          }



          // LOCATION FILTER
          if (city) {

            filteredData =
              filteredData.filter(
                (item) =>
                  item.location &&
                  item.location
                    .toLowerCase()
                    .trim()
                    .includes(
                      city
                        .toLowerCase()
                        .trim()
                    )
              );
          }

          console.log(
            "FILTERED:",
            filteredData
          );

          setListings(
            filteredData
          );

        } catch (err) {

          console.log(err);

          setError(
            "Error fetching properties"
          );

        } finally {

          setLoading(false);

        }
      };

    fetchListings();

  }, [category, city]);



  // LOADING
  if (loading) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        Loading Properties...
      </div>
    );
  }



  // ERROR
  if (error) {
    return (
      <div
        style={{
          padding: "50px",
          textAlign: "center",
          color: "red",
          fontSize: "18px",
        }}
      >
        {error}
      </div>
    );
  }



  return (
    <div
      style={{
        padding: "20px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >

      {/* PAGE TITLE */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "700",
        }}
      >
        {category || "All"} Properties
        {city && ` in ${city}`}
      </h2>



      {/* GRID */}
      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fill,minmax(320px,1fr))",

          gap: "25px",
        }}
      >

        {listings.length > 0 ? (

          listings.map((property) => (

            <div
              key={property._id}

              style={{
                background: "#fff",

                borderRadius: "16px",

                overflow: "hidden",

                boxShadow:
                  "0 4px 15px rgba(0,0,0,0.08)",

                transition: "0.3s",
              }}
            >

              {/* IMAGE */}
              <img
                src={
                  property.image ||
                  property.images?.[0] ||
                  "https://via.placeholder.com/400x250"
                }

                alt={property.title}

                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />



              {/* BODY */}
              <div
                style={{
                  padding: "20px",
                }}
              >

                {/* TITLE */}
                <h3
                  style={{
                    marginBottom: "10px",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  {property.title}
                </h3>



                {/* LOCATION */}
                <p
                  style={{
                    color: "#666",
                    marginBottom: "15px",
                  }}
                >
                  📍 {property.location}
                </p>



                {/* DETAILS */}
                <div
                  style={{
                    display: "flex",
                    gap: "20px",
                    marginBottom: "15px",
                    color: "#555",
                  }}
                >

                  <span>
                    🛏️{" "}
                    {property.bedrooms ||
                      "N/A"}
                  </span>

                  <span>
                    📏{" "}
                    {property.area ||
                      "N/A"}
                  </span>

                </div>



                {/* PRICE + BUTTON */}
                <div
                  style={{
                    display: "flex",

                    justifyContent:
                      "space-between",

                    alignItems:
                      "center",
                  }}
                >

                  <h3
                    style={{
                      color: "#007bff",
                      margin: 0,
                    }}
                  >
                    ₹{" "}
                    {property.price ||
                      "On Call"}
                  </h3>

                  <button
                    style={{
                      padding:
                        "10px 16px",

                      border: "none",

                      background:
                        "#007bff",

                      color: "#fff",

                      borderRadius:
                        "8px",

                      cursor:
                        "pointer",

                      fontWeight:
                        "600",
                    }}
                  >
                    Details
                  </button>

                </div>
              </div>
            </div>
          ))

        ) : (

          <div
            style={{
              gridColumn: "1/-1",
              textAlign: "center",
              padding: "60px",
            }}
          >

            <h2>
              No Properties Found
            </h2>

            <p>
              Try changing category
              or location
            </p>

          </div>
        )}
      </div>
    </div>
  );
}

export default Listings;