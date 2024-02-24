import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/collegeLogo.jpg";
import style from "./Login.module.css";

function Login() {
  return (
    <div className={style.container}>
      <img src={logo} alt="Logo" className={style.logo} />
      <h3 className={style.textType}>PICT COMMITTEES</h3>
      <p>Login to manage the committees</p>
      <form>
        <div className={style.formGroup}>
          <div className={style.inputcontainer}>
            <label className={style.username}>Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className={style.inputcontainer}>
            <label className={style.password}>Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <Link to="/Reset" className={style.forgetPass}>
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
