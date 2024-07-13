import React from "react";
import "./Header.css";
import logo from "../Assets/logo.png";
import personprofile from "../Assets/personProfile.png";
import notification from "../Assets/notification.png";
function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="profile">
        <img src={personprofile} alt="profile"></img>
        <p>Didula Sri Lakpriya</p>
      </div>
      <div className="notifi">
        <img src={notification} alt="notification" />
      </div>
    </div>
  );
}

export default Header;
