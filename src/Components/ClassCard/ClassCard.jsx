import React from "react";
import "./ClassCard.css";
import teacher from "../Assets/teacher.png";
function ClassCard() {
  return (
    <div className="card">
      <div className="imgCon">
        <img src={teacher} alt=""></img>
      </div>
      <div className="classDes">
        <span>Chemistry</span>
        <span>2026 AL - Theory</span>
        <p>Charitha Dissanayake</p>
        <div className="viewClass">
          <button>View Class</button>
        </div>
      </div>
    </div>
  );
}

export default ClassCard;
