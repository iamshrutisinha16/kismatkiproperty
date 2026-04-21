import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path)
      ? "nav-link active bg-white text-dark fw-bold"
      : "nav-link text-white";
  };

  return (
    <div
      className="sidebar d-flex flex-column p-3 text-white"
      style={{
        width: "250px",
        height: "100vh",
        position: "fixed",
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
      }}
    >
      <h4 className="mb-4 fw-bold text-center">Admin Panel</h4>

      <ul className="nav nav-pills flex-column mb-auto gap-2">

        <li>
          <Link to="/admin" className={isActive("/admin")}>
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/admin/properties" className={isActive("/admin/properties")}>
            <i className="bi bi-house-door me-2"></i>
            Properties
          </Link>
        </li>

        <li>
          <Link to="/admin/blogs" className={isActive("/admin/blogs")}>
            <i className="bi bi-file-earmark-text me-2"></i>
            Blogs
          </Link>
        </li>

        <li>
          <Link to="/admin/classified" className={isActive("/admin/classified")}>
            <i className="bi bi-bag me-2"></i>
            Classified
          </Link>
        </li>

        <li>
          <Link to="/admin/users" className={isActive("/admin/users")}>
            <i className="bi bi-people me-2"></i>
            Users
          </Link>
        </li>

        <li>
          <Link to="/admin/leads" className={isActive("/admin/leads")}>
            <i className="bi bi-envelope me-2"></i>
            Leads
          </Link>
        </li>

        <li>
          <Link to="/admin/settings" className={isActive("/admin/settings")}>
            <i className="bi bi-gear me-2"></i>
            Settings
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;