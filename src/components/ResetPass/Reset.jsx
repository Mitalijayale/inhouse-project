import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/collegeLogo.jpg";
import style from "./Reset.module.css";

function Reset() {
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
