import React from "react";
import "./CSS/Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";

function Courses() {
  const options = [
    { value: "colombo", label: "Colombo" },
    { value: "gampaha", label: "Gampaha" },
    { value: "matara", label: "Matara" },
    // Add more districts as needed
  ];
  return (
    <div className="coursesEnrollment">
      <Navbar />
      <div className="course-right">
        <Header />
        <div className="headerTitle">
          <p>All Courses</p>
        </div>
        <div className="filters">
          <DropDownMenu options={options} label="Study Stream" />
          <DropDownMenu options={options} label="Study Stream" />
          <DropDownMenu options={options} label="Study Stream" />
        </div>
      </div>
    </div>
  );
}

export default Courses;
