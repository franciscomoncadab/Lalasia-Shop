import React from "react";
import Titles from "./Titles";
import {titlesP} from "../constants/productsTitle";
import imagen1 from "../assets/images/imagen1.png";
import imagen2 from "../assets/images/imagen2.png";
import "../assets/scss/main.scss";

function Crafter() {
  return (
    <div className="crafter">
      <div className="crafter__titles">
        <Titles
          mar="[50px]"
          colm="col"
          firstTitle="Our Product"
          secondTitle="Crafted by talented and high quality material"
          p="Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim placerat nisi, adipiscing mauris non purus parturient. morbi fermentum, vivamus et accumsan dui tincidunt pulvinar"
        />
          <button className="crafter__titles-button">
               Learn More
          </button>
      </div>
      <div className="crafter__elements">
          <div className="flex flex-row gap-x-[20px] w-full lg:gap-x-[55px] lg:justify-end">
               {titlesP.map((elm, i) => {
                return (
                  <div>
                    <p className="crafter__elements-number">{elm.number}</p>
                    <p className="crafter__elements-paragraph">{elm.placeholder}</p>
                  </div>
                )
               })}
          </div>
      </div>
      <div className="mt-[50px] lg:lg:col-span-1 lg:mt-[35px] xl:mt-[50px]">
          <img src={imagen1} alt="img1" className="h-[200px] xl:h-auto xl:mr-[20px] object-cover" />
      </div>
      <div className="mt-[20px] lg:mt-[-65px] lg:ml-[50px] xl:mt-[-185px] lg:col-start-2 lg:col-span-2">
          <img src={imagen2} alt="img2" className="w-full h-[200px] lg:h-[300px] xl:h-auto object-cover"/>

      </div>
    </div>
  );
}

export default Crafter;
