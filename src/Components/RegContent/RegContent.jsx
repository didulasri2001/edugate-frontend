import React, { useState } from "react";
import logo from "../../Components/Assets/logo.png";

import "../RegContent/RegContent.css";
import youtube from "../../Components/Assets/youtube.png";
import facebook from "../../Components/Assets/facebook.png";
import instagram from "../../Components/Assets/instagram.png";
import whatsapp from "../../Components/Assets/whatsapp.png";
import person from "../../Components/Assets/person.png";
import firstname from "../Assets/firstname.png";
import email from "../Assets/email.png";
import password from "../Assets/password.png"



function RegContent() {
   const [currentDot, setCurrentDot] = useState(2);


   return (
      <div className="regContainer">
         <div className="regLogoContainer">
            <img src={logo} alt="logo" />
         </div>

         <span className="signup">Sign Up</span>
         <div className="inputBox">
            <div className="inputContainer">
               <img src={firstname} alt=""></img>
               <input
                  type="text"
                  placeholder="First Name"

                  required
               />
            </div>
            <div className="inputContainer">
               <img src={firstname} alt=""></img>
               <input
                  type="text"
                  placeholder="Second Name"

                  required
               />
            </div>
         </div>

         <div className="inputBox">
            <div className="inputContainer">
               <img src={person} alt=""></img>
               <input
                  type="text"
                  placeholder="Student ID"

                  required
               />
            </div>
            <div className="inputContainer">
               <img src={email} alt=""></img>
               <input
                  type="text"
                  placeholder="Email Address"

                  required
               />
            </div>
         </div>
         <div className="inputBox">
            <div className="inputContainer">
               <img src={password} alt=""></img>
               <input
                  type="text"
                  placeholder="Password"

                  required
               />
            </div>
            <div className="inputContainer">
               <img src={password} alt=""></img>
               <input
                  type="text"
                  placeholder="Confirm Password"

                  required
               />
            </div>
         </div>
         <div className="register">
            <button>Register</button>
         </div>

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


   )

}
export default RegContent;