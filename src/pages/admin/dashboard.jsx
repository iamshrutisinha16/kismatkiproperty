import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {

  // 📊 Bar Chart Data
  const barData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Properties Added",
        data: [5, 10, 7, 12, 15],
        backgroundColor: "#4e73df",
      },
    ],
  };

  // 🍩 Doughnut Chart Data
  const doughnutData = {
    labels: ["Sale", "Rent", "Sold"],
    datasets: [
      {
        data: [12, 8, 5],
        backgroundColor: ["#1cc88a", "#36b9cc", "#f6c23e"],
      },
    ],
  };

  return (
    <div className="d-flex">

      <div className="container-fluid">

        <h2 className="my-4 fw-bold">Dashboard</h2>

        {/* 🔥 CARDS */}
        <div className="row">

          <div className="col-md-3 mb-4">
            <div className="card shadow border-0 bg-primary text-white">
              <div className="card-body">
                <h6>Total Properties</h6>
                <h3>120</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow border-0 bg-success text-white">
              <div className="card-body">
                <h6>Blogs</h6>
                <h3>45</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow border-0 bg-warning text-dark">
              <div className="card-body">
                <h6>Classified</h6>
                <h3>60</h3>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="card shadow border-0 bg-danger text-white">
              <div className="card-body">
                <h6>Users</h6>
                <h3>200</h3>
              </div>
            </div>
          </div>

        </div>

        {/* 📊 CHARTS */}
        <div className="row">

          <div className="col-md-8 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5>Monthly Properties</h5>
                <Bar data={barData} />
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow">
              <div className="card-body">
                <h5>Property Types</h5>
                <Doughnut data={doughnutData} />
              </div>
            </div>
          </div>

        </div>

        {/* 🧾 RECENT ACTIVITY */}
        <div className="card shadow">
          <div className="card-body">
            <h5>Recent Activity</h5>

            <ul className="list-group">
              <li className="list-group-item">New property added</li>
              <li className="list-group-item">New user registered</li>
              <li className="list-group-item">New classified post</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;