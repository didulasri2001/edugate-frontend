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

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
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
          <img src={personProfile} alt="Profile" />
          <div className="profImageDes">
            <p>Update Profile Image</p>
            <button>+ Choose</button>
          </div>
          <InputBar
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required={true}
          />
          <InputBar
            label="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
            required={true}
          />
        </div>
        <div className="profiledetailsContainer">
          <div className="inputLine">
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
          </div>
          <div className="inputLine">
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <DropDownMenu options={options} label="District" />
          </div>
          <div className="inputLine">
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
          </div>
          <div className="inputLine">
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <DropDownMenu options={options} label="District" />
            <DropDownMenu options={options} label="District" />
          </div>
          <div className="inputLine">
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              required={true}
            />
            <InputBar
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
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
