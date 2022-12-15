import React from "react";
import { ReactComponent as Arrow} from "../assets/icons/arrow-right.svg";
import "../assets/scss/main.scss";

function Discount() {
  return (
    <div className="discount">
      <h3 className="discount__title">Join with me to get special discount</h3>
      <button className="discount__button">
          <p className="discount__button-paragraph">Learn More</p>
          <Arrow />
      </button>
    </div>
  );
}

export default Discount;
