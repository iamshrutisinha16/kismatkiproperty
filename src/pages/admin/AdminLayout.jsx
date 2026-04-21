import React from "react";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="d-flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ marginLeft: "250px", width: "100%", padding: "20px" }}>
        <Outlet />
      </div>

    </div>
  );
};

export default AdminLayout;