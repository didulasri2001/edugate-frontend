import React from "react";
import "./CSS/LoginSignup.css";
import logo from "../../Components/Assets/logo.png";
function LoginSignUp() {
  return (
    <div className="mainContainer">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="innerContainer">
          <p>Select Your Role</p>
          <div className="buttonContainer">
            <div className="role">Student</div>
            <div className="role">Tutor</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
