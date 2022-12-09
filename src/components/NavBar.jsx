import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";
import { ReactComponent as Bag } from "../assets/icons/bag-2.svg";
import { ReactComponent as User } from "../assets/icons/user.svg";
import "./navBar.css";

function NavBar() {
  return (
    <div className="border-b-line-color border-b-[1px]">
      <div className="nav">
        <div className="my-auto">
          <Logo />
        </div>
        <div>
          {window.innerWidth < 1024 ? (
            <button className="btn my-[21px]">
              <div></div>
              <div></div>
              <div></div>
            </button>
          ) : (
            <div className="flex flex-row my-[30px] items-center">
                <ul className="flex flex-row gap-x-[60px] font-exodo font-medium text-[18px] text-title-color">
                  <li>Product</li>
                  <li>Services</li>
                  <li>Article</li>
                  <li>About Us</li>
                </ul>
            </div>
          )}
        </div>
          <div className="flex flex-row gap-x-[28px] items-center">
                <Bag />
                <User />
          </div>
      </div>
      {/* <hr className="border-line-color" /> */}
    </div>
  );
}

export default NavBar;
