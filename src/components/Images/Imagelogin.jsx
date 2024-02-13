// ImageComponent.jsx
import React from "react";
import myImage from "./logo.png"; // Import the image file
import "./ImageLogin.css";

const ImageLogin = () => {
  return (
    <div className="logoContainer">
      <img src={myImage} alt="logo" className="logoImg" />
    </div>
  );
};

export default ImageLogin;
