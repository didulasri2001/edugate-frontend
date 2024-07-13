import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./EventCalendar.css";

const EventCalendar = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="event-calendar">
      <Calendar onChange={setValue} value={value} />
    </div>
  );
};

export default EventCalendar;
