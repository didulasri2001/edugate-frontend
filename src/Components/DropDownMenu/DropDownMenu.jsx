// DistrictDropdown.js
import React, { useState } from "react";
import "./DropDownMenu.css";

const DropDownMenu = ({ options, label }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="dropdown-container">
      <label htmlFor="district" className="dropdown-label">
        {label} <span className="required">*</span>
      </label>
      <div className="custom-select-wrapper">
        <select
          id="district"
          className="custom-select"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="">--Select District--</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDownMenu;
