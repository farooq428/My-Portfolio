import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-3 left-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 pr-6">
          {/* Logo / Brand */}
          <div className="shrink-0 text-white font-bold text-[15px] font-kaushan">
            MyPortfolio
          </div>

          {/* Menu */}
          <div className="hidden md:flex gap-[75px]  text-white font-raleway font-[400] fill-[#FFFFFF] tracking-[0.05em] text-[18px] [ -webkit-text-stroke:1px_#000000 ] [ text-stroke-color:#000000 ]">
            <a
              href="#home"
              className="hover:text-gray-300 transition duration-300 font-raleway"
            >
              Home
            </a>
            <a
              href="#portfolio"
              className="hover:text-gray-300 transition duration-300 font-raleway "
            >
              Portfolio
            </a>
            <a
              href="#skills"
              className=" hover:text-gray-300 transition duration-300 font-raleway"
            >
              Skills
            </a>
            <a
              href="#services"
              className="hover:text-gray-300 transition duration-300 font-raleway"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-gray-300 transition duration-300 font-raleway"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">
              {/* Simple Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
