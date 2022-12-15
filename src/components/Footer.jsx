import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";
import "../assets/scss/main.scss"

function Footer() {
  return (
    <footer className="bg-white mb-[24px] xl:mb-[88px]">
      <hr className="my-6 border-line-color sm:mx-auto lg:my-8 xl:my-[80px]" />
      <div className="footer">
        <div className="footer__logoContent">
          <Logo className="footer__logoContent-logo"/>
          <p className="footer__logoContent-paragraph">
          Lalasia is digital agency that help you make better experience iaculis cras in.
          </p>
        </div>
        <div className="footer__menuFooter">
          <div>
            <h6 className="mb-[14px] xl:mb-[20px] text-[16px] xl:text-[20px] font-bold font-exodo text-title-color">
              Product
            </h6>
            <ul className="text-paragraph-color text-[14px] xl:text-[18px] font-medium font-exodo">
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  Best Selling
                </a>
              </li>
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  Home Decor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Kitchen Set
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-[14px] xl:mb-[20px] text-[16px] xl:text-[20px] font-bold font-exodo text-title-color">
              Services
            </h6>
            <ul className="text-paragraph-color text-[14px] xl:text-[18px] font-medium font-exodo">
              <li className="mb-[6px] xl:mb-[12px]">
                <a
                  href="#"
                  className="hover:underline "
                >
                  Catalog
                </a>
              </li>
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  FaQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb-[14px] xl:mb-[20px] text-[16px] xl:text-[20px] font-bold font-exodo text-title-color">
              Follow Us
            </h6>
            <ul className="text-paragraph-color text-[14px] xl:text-[18px] font-medium font-exodo ">
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-[6px] xl:mb-[12px]">
                <a href="#" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
