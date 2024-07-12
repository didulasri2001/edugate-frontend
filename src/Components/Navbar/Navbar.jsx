import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import courses from "../Assets/courses.png";
import dashboard from "../Assets/dashboard.png";
import payments from "../Assets/payments.png";
import performance from "../Assets/performance.png";
import customer from "../Assets/customer.png";
import settings from "../Assets/settings.png";
import personProfile from "../Assets/personProfile.png";

function Navbar() {
  const [active, setActive] = useState("dashboard");

  const handleClick = (linkName) => {
    setActive(linkName);
  };

  return (
    <div className="navbar">
      <div className="navLogo">
        <img src={personProfile} alt="person "></img>
      </div>
      <ul className="navLinks">
        <li
          onClick={() => handleClick("dashboard")}
          className={active === "dashboard" ? "active" : ""}
        >
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <img src={dashboard} alt="Dashboard" />
            <p>Dashboard</p>
          </Link>
        </li>
        <li
          onClick={() => handleClick("courses")}
          className={active === "courses" ? "active" : ""}
        >
          <Link to="/courses" style={{ textDecoration: "none" }}>
            <img src={courses} alt="Courses" />
            <p>Courses</p>
          </Link>
        </li>
        <li
          onClick={() => handleClick("payments")}
          className={active === "payments" ? "active" : ""}
        >
          <Link to="/payments" style={{ textDecoration: "none" }}>
            <img src={payments} alt="Payments" />
            <p>Payments</p>
          </Link>
        </li>
        <li
          onClick={() => handleClick("performance")}
          className={active === "performance" ? "active" : ""}
        >
          <Link to="/performance" style={{ textDecoration: "none" }}>
            <img src={performance} alt="Performance" />
            <p>Performance</p>
          </Link>
        </li>
        <li
          onClick={() => handleClick("profile")}
          className={active === "profile" ? "active" : ""}
        >
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <img src={customer} alt="My profile" />
            <p>My profile</p>
          </Link>
        </li>
        <li
          onClick={() => handleClick("settings")}
          className={active === "settings" ? "active" : ""}
        >
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <img src={settings} alt="Settings" />
            <p>Settings</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
