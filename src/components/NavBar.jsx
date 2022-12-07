import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";
import "./navBar.css";

function NavBar() {
  return (
    <div>
      <div className="nav">
        <div className="my-auto">
          <Logo />
        </div>
        <button className="btn my-[21px]">
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      <hr className="border-line-color" />
    </div>
  );
}

export default NavBar;
