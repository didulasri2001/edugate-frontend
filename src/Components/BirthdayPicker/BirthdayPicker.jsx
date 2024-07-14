// BirthdayPicker.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "./BirthdayPicker.css"; // Add custom styles here

const BirthdayPicker = ({ onSave }) => {
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div className="birthday-picker">
      <label htmlFor="birthday">Birthday</label>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select your birthday"
        className="birthday-input"
        id="birthday"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        maxDate={new Date()} // Restrict to past dates
      />
    </div>
  );
};

export default BirthdayPicker;
