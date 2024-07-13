// InputBar.js
import React from "react";
import "./InputBar.css";

const InputBar = ({ label, value, onChange, required }) => {
  return (
    <div className="inputbar-container">
      <label htmlFor="inputbar" className="inputbar-label">
        {label} {required && <span className="required">*</span>}
      </label>
      <input
        id="inputbar"
        type="text"
        className="inputbar-input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputBar;
