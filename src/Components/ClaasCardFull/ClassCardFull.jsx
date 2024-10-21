import React from "react";
import "./ClassCardFull.css";
import teacher from "../Assets/teacher.png";

function ClassCardFull() {
  return (
    <div className="cardFull">
      <div className="imgContainer">
        <img src={teacher} alt=""></img>
      </div>
      <div className="classDescription">
        <span>Chemistry 2026 AL - Theory | Sinhala Medium</span>

        <p>Tutor : Charitha Dissanayake</p>
        <div className="enrollClass">
          <button>Enroll Class</button>
          <button>View Class</button>
        </div>
      </div>
    </div>
  );
}

export default ClassCardFull;
