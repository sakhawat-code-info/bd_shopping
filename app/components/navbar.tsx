"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBell, FaFacebook, FaInstagram } from "react-icons/fa";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import HeadSlider from "./HeadSlider";

const menuItems = [
  { label: "New Arrivals", href: "#" },
  { label: "QPRINTS", href: "#" },
  { label: "Alisha Noor", href: "#", special: true },
  { label: "Woman", href: "#" },
  { label: "Man", href: "#" },
  { label: "SALE", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* Top Slider Bar */}
      <section className=" py-2 bg-black text-white text-center text-sm">
        <HeadSlider />
      </section>

      {/* Social Icons Bar */}
      <section className="hidden md:flex justify-end items-center gap-3 border-b border-gray-300 px-4 sm:px-10 py-2 text-gray-700 text-sm">
        <FaInstagram />
        <FaFacebook />
        <FaBell />
      </section>

      {/* Navbar */}
      <header className="sticky top-0 bg-white tracking-wide z-50 max-w-[1500px] mx-auto ">
        <section className="flex items-center justify-between py-11 px-4 sm:px-10 min-h-[70px]">
          {/* Left: Search / Hamburger */}
          <div className="flex items-center gap-4">
            {/* Hamburger (mobile only) */}
            <button
              className="sm:hidden text-gray-700"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <RxCross2 size={24} />
              ) : (
                <RxHamburgerMenu size={24} />
              )}
            </button>

            {/* Search Icon */}
            <button className="hidden sm:block cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="20"
                className="fill-gray-500"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </button>
          </div>

          {/* Center: Menu (desktop only) */}
          <ul className="hidden sm:flex items-center gap-6 lg:gap-10 uppercase">
            {menuItems.map(({ label, href, special }, idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  className={`transition duration-200 ${
                    special
                      ? "text-2xl lg:text-3xl font-extrabold text-slate-900 hover:text-pink-600"
                      : "text-sm text-slate-700 hover:text-black relative link-underline"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <IoPersonOutline size={22} />
            <HiOutlineShoppingBag size={22} />
          </div>
        </section>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden px-4 pb-4">
            <ul className="flex flex-col gap-4 uppercase text-sm text-gray-700">
              {menuItems.map(({ label, href, special }, idx) => (
                <li key={idx}>
                  <Link
                    href={href}
                    className={`block ${
                      special
                        ? "text-xl font-bold text-slate-900"
                        : "hover:text-black"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
