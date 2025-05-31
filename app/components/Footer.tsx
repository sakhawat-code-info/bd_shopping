import React from "react";

import { FaBell, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gray-100 px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-300">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm text-gray-900 font-semibold mb-4">
              SUPPORT
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Return & Exchange Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Terms and conditions
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-gray-900 font-semibold mb-4">
              INFORMATION
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Retailers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm text-gray-900 font-semibold mb-4 uppercase">
              Newsletter and social
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-[13px] text-slate-600 hover:text-slate-900"
                >
                  Subscribe to get special updates & offers.
                </a>
              </li>
              <li>
                <div className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="px-2 py-3 pr-8  text-slate-900 w-full text-sm border-b-2 border-black focus:border-blue-500 outline-none"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[20px] h-[20px] absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clip-path="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </li>
              <li>
                <section className="flex gap-3 py-2 text-right">
                  <FaInstagram size={20} />
                  <FaFacebook size={20} />
                  <FaBell size={20} />
                </section>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 text-center">
          <div className="flex items-center justify-center mb-3">
            <label className="ml-4 flex gap-2 cursor-pointer">
              <img
                src="https://readymadeui.com/images/visa.webp"
                className="w-8"
                h
                alt="card1"
              />
              <img
                src="https://readymadeui.com/images/american-express.webp"
                className="w-8"
                alt="card2"
              />
              <img
                src="https://readymadeui.com/images/master.webp"
                className="w-8"
                alt="card3"
              />
            </label>
          </div>
          <p className="text-sm text-slate-600">
            &copy; © 2025 Asraf Bhai ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center mt-4 gap-4">
            <a
              href="javascript:void(0)"
              className="text-[13px] text-slate-600 hover:text-slate-900"
            >
              Powered by MIR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
