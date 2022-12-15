import React from "react";
import Titles from "./Titles";
import { cards } from "../constants/cards";
import "../assets/scss/main.scss";

function Benefits() {
  return (
    <div className="benefit">
      <div>
        <Titles
          colm={`${window.innerWidth < 1000 ? "col" : "row"}`}
          firstTitle="Benefits"
          secondTitle="Benefits when using our services"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient."
        />
      </div>
      <div className="benefit__cards">
        {cards.map((elem, i) => {
          return (
            <div
              key={i}
              className="benefit__cards-card"
            >
              <div className="mb-[14px]">
                <img
                  src={elem.svg}
                  alt={elem.svg}
                  className="xl:w-[62px] xl:h-[62px]"
                />
              </div>
              <h6 className="benefit__cards-card-title">
                {elem.title}
              </h6>
              <p className="benefit__cards-card-paragraph">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Benefits;
