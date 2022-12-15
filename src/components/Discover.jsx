import React from "react";
import img1 from "../assets/images/img1.png";
import { ReactComponent as CircularLogo } from "../assets/icons/starcircular.svg";
import { ReactComponent as Stars } from "../assets/icons/stars.svg";
import { ReactComponent as Search } from "../assets/icons/search-normal.svg";
import "../assets/scss/main.scss";

function Discover() {
  return (
    <div className="discover">
      <div className="discover__titles">
        <div className="relative">
          <CircularLogo className="discover__titles-logoArrow" />
          <h3 className="discover__titles-title">
            Discover Furniture With <br /> High Quality Wood
          </h3>
          <Stars className="discover__titles-logoStar"/>
        </div>
        <div className="mt-[20px] xl:mt-[30px]">
          <p className="discover__titles-paragraph">
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
      </div>
      <div className="discover__input">
        <div className="discover__input-container">
          <Search className="discover__input-search" />
          <input
            className="discover__input-property"
            placeholder="Search property"
          />
          <button className="discover__input-button">
            Search
          </button>
        </div>
        <div className="mt-[30px] xl:z-0 xl:mt-[90px]">
          <img src={img1} alt="img1" />
        </div>
      </div>
    </div>
  );
}

export default Discover;
