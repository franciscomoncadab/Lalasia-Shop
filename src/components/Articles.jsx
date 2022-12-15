import React from "react";
import Titles from "./Titles";
import ImagesArticle from "./ImagesArticle";
import BigImageArticle from "./BigImgArticle";

function Articles() {
  return (
    <div className="lg:flex lg:gap-[20px] xl:gap-x-[50px]">
      <div>
        <div className="xl:w-[582px]">
          <Titles
            mar="[20px]"
            colm="col"
            firstTitle="Articles"
            secondTitle="The best furniture comes from Lalasia"
            p="Pellentesque etiam blandit in tincidunt at donec."
          />
        </div>
        <BigImageArticle />
      </div>
      <div className="xl:mt-[193px] lg:mt-[96px]">
        <ImagesArticle />
      </div>
    </div>
  );
}

export default Articles;
