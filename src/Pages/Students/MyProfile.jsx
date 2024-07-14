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
  const optionsGender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];
  const optionsStream = [
    { value: "Physical Science", label: "Physical Science" },
    { value: "Biological Science", label: "Biological Science" },
    { value: "Commerce", label: "Commerce" },
    { value: "Technology", label: "Technology" },
    { value: "Common", label: "Common" },
  ];
  const optionsYear = [
    { value: "2025", label: "2025" },
    { value: "2026", label: "2026" },
    { value: "2027", label: "2027" },
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
  const [profileImage, setProfileImage] = useState(personProfile);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="profileCon">
      <Navbar />
      <div className="rightCon">
        <Header />
        <div className="headerTitle">
          <p>My Profile</p>
        </div>
        <div className="profImage">
          <img src={profileImage} alt="Profile" />
          <div className="profImageDes">
            <p>Update Profile Image</p>
            <button onClick={triggerFileInput}>+ Choose</button>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleImageChange}
            />
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
            <DropDownMenu options={options} label="Birthday" />

            <DropDownMenu options={optionsGender} label="Gender" />
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
            <DropDownMenu options={optionsStream} label="Stream" />
            <DropDownMenu options={optionsYear} label="AL Year" />
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
          <div className="updateButton">
            <button>Update Your profile</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
