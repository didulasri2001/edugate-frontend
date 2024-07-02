import React from "react";
import "./CSS/LoginSignup.css";
import logo from "../../Components/Assets/logo.png";
import student from "../../Components/Assets/student.png";
import tutor from "../../Components/Assets/tutor.png";
import youtube from "../../Components/Assets/youtube.png";
import facebook from "../../Components/Assets/facebook.png";
import instagram from "../../Components/Assets/instagram.png";
import whatsapp from "../../Components/Assets/whatsapp.png";
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
            <div className="role">
              <img src={student} alt="student" />
              Student
            </div>
            <div className="role">
              <img src={tutor} alt="tutor" />
              Tutor
            </div>
          </div>
          <div className="continue">
            <button>Continue</button>
          </div>
          <div className="dotts">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="socials">
            <img src={facebook} alt="" />

            <img src={instagram} alt="" />

            <img src={youtube} alt="" />

            <img src={whatsapp} alt="" />
          </div>
          <div className="footer">
            <span>Powered by DevSparks Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
