import React from "react";
import "./AcademicYearSelection.css";

function AcademicYearSelection(){
    return (
    <div className="academicYear">
    <label className="ayLabel">Academic Year</label>
    <select className="ayDropdown">
      <option>2023-2024</option>
      <option>2022-2023</option>
      <option>2021-2022</option>
      <option>2020-2021</option>
      <option>2019-2020</option>
      <option>2018-2029</option>
    </select>
    </div>);
}

export default AcademicYearSelection;