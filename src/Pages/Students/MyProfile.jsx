import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./CSS/MyProfile.css";
import Header from "../../Components/Header/Header";
import personProfile from "../../Components/Assets/personProfile.png";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import InputBar from "../../Components/InputBar/InputBar";

function MyProfile() {
  const options = [
    { value: "colombo", label: "Colombo" },
    { value: "gampaha", label: "Gampaha" },
    { value: "matara", label: "Matara" },
    // Add more districts as needed
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [email, setEmail] = useState("");
  const [nic, setNic] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [school, setSchool] = useState("");
  const [pName, setPName] = useState("");
  const [pNumber, setPNumber] = useState("");

  return (
    <div className="profileCon">
      <Navbar />
      <div className="rightCon">
        <Header />
        <div className="headerTitle">
          <p>My Profile</p>
        </div>
        <div className="profImage">
          <img src={personProfile} alt="Profile" />
          <div className="profImageDes">
            <p>Update Profile Image</p>
            <button>+ Choose</button>
          </div>
          <InputBar
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required={true}
          />
          <InputBar
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required={true}
          />
        </div>
        <div className="profiledetailsContainer">
          <div className="inputLine">
            <InputBar
              label="Address Line 1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              required={true}
            />
            <InputBar
              label="Address Line 2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              required={true}
            />
            <InputBar
              label="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
            />
          </div>
          <div className="inputLine">
            <InputBar
              label="NIC"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <DropDownMenu options={options} label="District" />
          </div>
          <div className="inputLine">
            <InputBar
              label="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <InputBar
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required={true}
            />
          </div>
          <div className="inputLine">
            <InputBar
              label="School"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <DropDownMenu options={options} label="District" />
          </div>
          <div className="inputLine">
            <InputBar
              label="Parent's Name"
              value={pName}
              onChange={(e) => setPName(e.target.value)}
              required={true}
            />
            <InputBar
              label="Parent's Mobile"
              value={pNumber}
              onChange={(e) => setPNumber(e.target.value)}
              required={true}
            />
          </div>
          <button>Update Your profile</button>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
