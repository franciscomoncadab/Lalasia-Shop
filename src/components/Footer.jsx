import React from "react";
import { ReactComponent as Logo } from "../assets/icons/lalasiaLogo.svg";

function Footer() {
  return (
    <footer className="p-4 bg-white sm:px-6">
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Logo />
          <p className="mt-[20px] text-gray-400">
          Lalasia is digital agency that help you make better experience iaculis cras in.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-8 sm:gap-[30px] sm:grid-cols-3">
          <div>
            <h2 className="mb-[14px] text-sm font-semibold text-black uppercase">
              Product
            </h2>
            <ul className="text-gray-600">
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
            <h2 className="mb-[14px] text-sm font-semibold text-black uppercase">
              Services
            </h2>
            <ul className="text-gray-600 ">
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
            <h2 className="mb-6 text-sm font-semibold text-black uppercase">
              Follow Us
            </h2>
            <ul className="text-gray-600 ">
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
