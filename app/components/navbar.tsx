import Link from "next/link";
import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaBell, FaFacebook, FaInstagram } from "react-icons/fa";
import HeadSlider from "./HeadSlider";

const menuItems = [
  { label: "New Arrivals", href: "#" },
  { label: "QPRINTS", href: "#" },
  { label: "Alisha Noor", href: "#", special: true }, // special = centered, bold, bigger font
  { label: "Woman", href: "#" },
  { label: "Man", href: "#" },
  { label: "SALe", href: "#" },
];

const Navbar = () => {
  return (
    <div>
      {/* Top Bar */}
      <section className="py-3 bg-black text-white text-center px-10">
        <HeadSlider />
      </section>

      {/* Social Bar */}
      <section className="flex border-b border-gray-300 items-center justify-end gap-3 py-2 text-right px-10">
        <FaInstagram size={16} />
        <FaFacebook size={16} />
        <FaBell size={16} />
      </section>

      <header className="sticky top-0 bg-white tracking-wide z-50 max-w-[1500px] mx-auto ">
        {/* Main Navbar */}
        <section className="flex items-center justify-between py-11 px-4 sm:px-10 min-h-[70px]">
          {/* Left: Search Icon */}
          <div className="flex items-center">
            <button className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="22px"
                className="fill-gray-500"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
              </svg>
            </button>
          </div>

          {/* Middle: Menu Items */}
          <ul className="flex items-center space-x-10 uppercase">
            {menuItems.map(({ label, href, special }, idx) => {
              if (special) {
                // Centered big logo item
                return (
                  <li key={idx}>
                    <Link
                      href={href}
                      className="hover:text-pink-600 text-slate-900 text-3xl uppercase font-extrabold"
                    >
                      {label}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={idx}
                  className="relative text-slate-900 text-[15px] hover:text-black link-underline"
                >
                  <Link href={href}>{label}</Link>
                </li>
              );
            })}
          </ul>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <IoPersonOutline size={24} />
            <HiOutlineShoppingBag size={24} />
          </div>
        </section>
      </header>
    </div>
  );
};

export default Navbar;
