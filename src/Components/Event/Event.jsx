import React from "react";
import "./Event.css";
function Event() {
  return (
    <div className="event">
      <div className="eventDate">
        <p>12</p>
        <span>June</span>
      </div>
      <div className="eventDes">
        <span>MCQ Test - Physics</span>
        <p>8.00 a.m. - 10.00 a.m.</p>
      </div>
    </div>
  );
}

export default Event;
