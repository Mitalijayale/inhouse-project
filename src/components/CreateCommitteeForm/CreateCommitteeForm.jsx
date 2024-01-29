import React from "react";
import "./CreateCommitteeForm.css";

function CreateCommitteeForm() {
  return (
    <div className="container">
      <div className="academicYear">
        <label className="ayLabel">Academic Year</label>
        <select className="ayDropdown">
          <option>2023-2024</option>
          <option>2023-2024</option>
          <option>2023-2024</option>
        </select>
      </div>
      <h2 className="headText">Create new committee</h2>
      <div className="committeeForm">
        <div id="row1">
          <label id="comLab">Name of the committee</label>
          <label id="catLab">Category</label>
          <br />
        </div>

        <div id="row2">
          <input type="text" placeholder="Committee name" />
          <input type="text" placeholder="Academic Committee" />
        </div>

        <div id="row3">
          <label>Description</label>
          <br />
          <textarea></textarea>
        </div>

        <div id="row4">
          <label id="memLab">Members</label>
          <br />
          <label >Name</label>
          <label >Designation</label>
        </div>

        <div id="row5">
          <select>
            <option>john</option>
            <option>wick</option>
            <option>boomer</option>
          </select>
          <select>
            <option>teacher</option>
            <option>assistant</option>
            <option>hod</option>
          </select>
          <button>&#x1F5D1;</button>
        </div>

        <div id="row6">
          <button>New Member</button>
        </div>

        <div id="row7">
          <label>Upload document if any</label>
          <br />
        </div>

        <div id="row8">
          <input type="file"></input>
        </div>

        <div id="row9">
            <button id="btnReset">Reset</button>
            <button id="btnCancel">Cancel</button>
            <button id="btnSave">Save</button>
        </div>

      </div>
    </div>
  );
}

export default CreateCommitteeForm;
