import React from "react";
import "./AcademicYearSelection.css";

const currentYear = new Date().getFullYear();
const options = [];

for (let year = currentYear; year >= 1983; year--) {
  options.push(
    <option key={year} value={year}>
      {year} - {year + 1}
    </option>
  );
}

function AcademicYearSelection() {
  return (
    <div className="academicYear">
      <label className="ayLabel">Academic Year</label>
      <select className="ayDropdown">
        {options}
      </select>
    </div>
  );
}

export default AcademicYearSelection;
