import React from "react";
import Template from "../componenets/Template";
import LoginImg from "../assets/login.png";

function Loginpage({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={LoginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Loginpage;
