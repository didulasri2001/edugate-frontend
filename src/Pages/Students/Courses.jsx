import React from "react";
import "./CSS/Courses.css";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import DropDownMenu from "../../Components/DropDownMenu/DropDownMenu";
import ClassCardFull from "../../Components/ClaasCardFull/ClassCardFull";

function Courses() {
  const optionsSubject = [
    { value: "Physics", label: "Physics" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Combined Mathematics", label: "Combined Mathematics" },
    // Add more districts as needed
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
  return (
    <div className="coursesEnrollment">
      <Navbar />
      <div className="course-right">
        <Header />
        <div className="headerTitle">
          <p>All Courses</p>
        </div>
        <div className="filters">
          <DropDownMenu options={optionsStream} label="Study Stream" />
          <DropDownMenu options={optionsYear} label="AL Year" />
          <DropDownMenu options={optionsSubject} label="Subject" />
        </div>
        <div className="classes">
          <div className="classrows">
            <ClassCardFull />
            <ClassCardFull />
          </div>
          <div className="classrows">
            <ClassCardFull />
            <ClassCardFull />
          </div>
          <div className="classrows">
            <ClassCardFull />
            <ClassCardFull />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
