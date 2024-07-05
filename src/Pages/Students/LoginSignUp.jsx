import React, { useState } from "react";
import "./CSS/LoginSignup.css";
import logo from "../../Components/Assets/logo.png";
import student from "../../Components/Assets/student.png";
import tutor from "../../Components/Assets/tutor.png";
import youtube from "../../Components/Assets/youtube.png";
import facebook from "../../Components/Assets/facebook.png";
import instagram from "../../Components/Assets/instagram.png";
import whatsapp from "../../Components/Assets/whatsapp.png";
import person from "../../Components/Assets/person.png";
import lock from "../../Components/Assets/lock.png";
import eye from "../../Components/Assets/eye.png";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
function LoginSignUp() {
  const [studentBgColor, setStudentBgColor] = useState("#f9f9f7");
  const [tutorBgColor, setTutorBgColor] = useState("#f9f9f7");
  const [currentDot, setCurrentDot] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleStudentClick = () => {
    return (
      setSelectedRole("student"),
      setStudentBgColor(studentBgColor === "#f9f9f7" ? "#F6CB52" : "#f9f9f7"),
      setTutorBgColor("#f9f9f7")
    );
  };
  const handleTutorClick = () => {
    return (
      setSelectedRole("tutor"),
      setTutorBgColor(tutorBgColor === "#f9f9f7" ? "#F6CB52" : "#f9f9f7"),
      setStudentBgColor("#f9f9f7")
    );
  };
  const handleContinueClick = () => {
    if (!selectedRole) {
      alert("Please select a role");
      return;
    }
    setCurrentDot(1);
    setShowLogin(true);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in");
      navigate("/dashboard"); // Redirect to dashboard
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="mainContainer">
      <div className="leftContainer"></div>

      <div className="rightContainer">
        <div className="logoContainer">
          <img src={logo} alt="logo" />
        </div>
        <div className="innerContainer">
          {showLogin ? (
            <>
              <span className="signin">Sign In</span>
              <div className="inputContainer">
                <img src={person} alt=""></img>
                <input
                  type="text"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="inputContainer">
                <img src={lock} alt=""></img>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                {/* <img className="eye" src={eye} alt=""></img> */}
              </div>

              <span className="forgetPassword">Forgot Password?</span>
              <div className="loginButton">
                <button onClick={handleLogin}>Login</button>
              </div>

              <div className="registration">
                <span>NOT A STUDENT? REGISTER NOW!</span>
              </div>
            </>
          ) : (
            <>
              <p>Select Your Role</p>
              <div className="buttonContainer">
                <div
                  className="role"
                  onClick={handleStudentClick}
                  style={{ backgroundColor: studentBgColor }}
                >
                  <img src={student} alt="student" />
                  Student
                </div>
                <div
                  className="role"
                  onClick={handleTutorClick}
                  style={{ backgroundColor: tutorBgColor }}
                >
                  <img src={tutor} alt="tutor" />
                  Tutor
                </div>
              </div>
              <div className="continue">
                <button onClick={handleContinueClick}>Continue</button>
              </div>
            </>
          )}

          <div className="dotts">
            <span
              style={{
                backgroundColor: currentDot === 0 ? "#F6CB52" : "#D9D9D9",
              }}
            ></span>
            <span
              style={{
                backgroundColor: currentDot === 1 ? "#F6CB52" : "#D9D9D9",
              }}
            ></span>
            <span
              style={{
                backgroundColor: currentDot === 2 ? "#F6CB52" : "#D9D9D9",
              }}
            ></span>
          </div>
          <div className="socials">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={youtube} alt="YouTube" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="WhatsApp" />
            </a>
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
