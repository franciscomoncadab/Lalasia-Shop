import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div>
          <Logo />
        </div>
        <button className="btn">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <hr />
    </div>
  );
}

export default NavBar;
