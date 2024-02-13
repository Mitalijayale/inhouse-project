import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/collegeLogo.jpg";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <img src={logo} alt="Logo" className="logo" />
      <h3 className="textType">PICT COMMITTEES</h3>
      <p>Login to manage the committees</p>
      <form>
        <div className="formGroup">
          <div className="mb-3 input-container">
            <label className="username">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-4 input-container">
            <label className="password">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <Link to="/Reset" className="forgetPass">
              Forgot Password ?
            </Link>
          </div>
          <div className="d-grid gap-2">
            <button className="btn btn-primary" type="button">
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
