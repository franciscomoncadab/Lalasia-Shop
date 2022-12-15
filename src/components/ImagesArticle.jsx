import React from "react";
import { articles } from "../constants/articles";
import "../assets/scss/main.scss";

function ImagesArticle() {
  return (
    <div className="xl:grid xl:gap-y-[10px]">
      {articles.map((elem, i) => {
        return (
          <div
            key={i}
            className="imgContainer"
          >
            <img
              src={elem.images}
              alt={elem.images}
              className="w-[110px] h-[110px] xl:w-auto xl:h-auto"
            />
            <div className="">
              <p className="imgContainer__name">
                {elem.name}
              </p>
              <h6 className="imgContainer__titles">
                {elem.title}
              </h6>
              <p className="imgContainer__hidenParagraph">
                {`Pellentesque etiam blandit in tincidunt at donec. Eget ipsum .`.substring(0, 29)} ...
              </p>
              <div className="imgContainer__texts">
                <div className="flex flex-row gap-x-[6px] items-center">
                  <img src={elem.userImg} alt={elem.userImg} />
                  <p className="imgContainer__texts-paragraph">
                    {elem.userName}
                  </p>
                </div>
                <p className="imgContainer__texts-dateText">Friday, 1 April 2022</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImagesArticle;
