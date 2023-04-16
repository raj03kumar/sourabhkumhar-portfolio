import { styles } from "@/src/utils/styles";
import Link from "next/link";
import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import Image from "next/image";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleLink = (id) => {
    let elem = document.getElementById(id);
    elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center mx-auto">
        <span
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <Image
            draggable={false}
            src={logo}
            alt="Sourabh Kumhar"
            className="w-9 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Sourabh Kumhar
          </p>
        </span>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                handleLink(link.id);
              }}
            >
              <span>{link.title}</span>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            draggable={false}
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            style={{
              height: toggle ? "calc(140px)" : "calc(0px)",
            }}
            className={`fixed overflow-hidden duration-300 bg-gradient-to-r from-[#210b64] via-[#170846] to-[#0f052c] top-16 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 m-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-300"
                  } hover:text-white font-poppins text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <span onClick={() => handleLink(link.id)}>{link.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
