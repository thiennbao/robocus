'use client'

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navs = [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "#intro" },
    { name: "Thể lệ", href: "#overview" },
    { name: "Đơn vị", href: "#organizer" },
    { name: "Hành trình", href: "#lookback" },
    { name: "Liên hệ", href: "/" },
  ];

  return (
    <header>
      <div className="max-w-[75rem] m-auto flex justify-between items-center my-3 px-4">
        <Link href={"/"}>
          <div className="logo flex items-center gap-2">
            <img
              src="https://github.com/robocus/robocus.github.io/blob/main/docs/images/logo/logo.png?raw=true"
              className="h-[4rem]"
              alt="logo"
            />
          </div>
        </Link>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-8 absolute md:static top-20 left-0 w-full md:w-auto bg-gray-800/75 md:bg-transparent p-4 md:p-0 z-30 backdrop-blur-2xl rounded-lg`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            {navs.map((nav, index) => (
              <li key={index}>
                <Link href={nav.href} onClick={() => setIsMenuOpen(false)}>
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
