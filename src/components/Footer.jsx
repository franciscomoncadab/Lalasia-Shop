import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";

function Footer() {
  return (
    <footer className="bg-white mb-[24px] xl:mb-[88px]">
      <hr className="my-6 border-line-color sm:mx-auto lg:my-8" />
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Logo />
          <p className="mt-[20px] text-paragraph-color font-exodo font-medium text-[14px]">
          Lalasia is digital agency that help you make better experience iaculis cras in.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:gap-[30px] sm:grid-cols-3">
          <div>
            <h6 className="mb-[14px] text-[16px] font-bold font-exodo text-title-color uppercase">
              Product
            </h6>
            <ul className="text-paragraph-color text-[14px] font-medium font-exodo">
              <li className="mb-[6px]">
                <a href="#" className="hover:underline">
                  New Arrivals
                </a>
              </li>
              <li className="mb-[6px]">
                <a href="#" className="hover:underline">
                  Best Selling
                </a>
              </li>
              <li className="mb-[6px]">
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
            <h6 className="mb-[14px] text-[16px] font-bold font-exodo text-title-color uppercase">
              Services
            </h6>
            <ul className="text-paragraph-color text-[14px] font-medium font-exodo">
              <li className="mb-[6px]">
                <a
                  href="#"
                  className="hover:underline "
                >
                  Catalog
                </a>
              </li>
              <li className="mb-[6px]">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li className="mb-[6px]">
                <a href="#" className="hover:underline">
                  Faq
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
            <h6 className="mb-6 text-[16px] font-bold font-exodo text-title-color uppercase">
              Follow Us
            </h6>
            <ul className="text-paragraph-color text-[14px] font-medium font-exodo ">
              <li className="mb-[6px]">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-[6px]">
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
