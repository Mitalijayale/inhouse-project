import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/collegeLogo.jpg";

function Reset() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="textType">PICT COMMITTEES</h3>
      <p>Login to manage the committees</p>
      <form>
        <div className="formGroup">
          <div className="mb-3  input-container">
            <label className="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>

          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Reset Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Reset;
