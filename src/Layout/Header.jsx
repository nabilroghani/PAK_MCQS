import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Header = () => {
  const [isMobileUrduOpen, setIsMobileUrduOpen] = useState(false);
  const [isMobileCAOpen, setIsMobileCAOpen] = useState(false); 

  const mainLinks = [
    { name: "Pak Study", path: "/pak-study" },
    { name: "Islamic Studies", path: "/islamic-studies" },
    { name: "GK Mcqs", path: "/gk-mcqs" },
    { name: "Everyday Science", path: "/everyday-science" },
  ];

  const dropdownLinks = [
    { name: "Biology", path: "/biology" },
    { name: "Chemistry", path: "/chemistry" },
    { name: "Physics", path: "/physics" },
    { name: "Pedagogy Mcqs", path: "/pedagogy" },
    { name: "Computer", path: "/computer" },
    { name: "Maths", path: "/maths" },
    { name: "English", path: "/english" },
    { name: "Urdu", path: "/urdu" },
  ];

  const currentAffairsLinks = [
    { name: "Pakistan Current Affairs", path: "/pakistan-current-affairs" },
    { name: "World Current Affairs", path: "/world-current-affairs" },
  ];

  return (
    // Background ko Slate-50 kiya hai (Off-white) aur text ko Gray-800
    <header className="bg-[#f8fafc] text-gray-800 shadow-lg sticky top-14 z-[90] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        
        {/* 1. LOGO - Dark Blue color */}
        <Link to="/" className="flex-shrink-0">
  <h1 className="text-xl md:text-2xl font-black tracking-tighter italic text-[#444444]">
    PAK LEARNERS
  </h1>
</Link>

        {/* 2. NAVIGATION (Desktop) */}
        <nav className="hidden xl:flex items-center">
          <ul className="flex items-center">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-600 transition-all whitespace-nowrap text-gray-700"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            {/* Current Affairs Dropdown Desktop */}
            <li className="relative group">
              <button className="flex items-center gap-1 px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-600 text-gray-700 transition-all outline-none">
                Current Affairs{" "}
                <FaChevronDown
                  size={10}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>

              <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-2xl rounded-b-md border-t-4 border-cyan-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                <div className="flex flex-col py-2">
                  {currentAffairsLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Other Dropdown Desktop */}
            <li className="relative group">
              <button className="flex items-center gap-1 px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-600 text-gray-700 transition-all outline-none">
                Other{" "}
                <FaChevronDown
                  size={10}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>

              <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-2xl rounded-b-md border-t-4 border-cyan-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                <div className="flex flex-col py-2">
                  {dropdownLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {sub.name} Mcqs
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </nav>

        {/* 3. SEARCH */}
        <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end lg:flex-none">
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search MCQS..."
              // Input field ko light background aur dark text diya
              className="bg-gray-200/50 border border-gray-300 text-gray-800 text-sm rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-cyan-500 w-32 md:w-48 transition-all"
            />
            <FaSearch className="absolute right-3 top-2.5 text-gray-500 size-3" />
          </div>
        </div>
      </div>

      {/* 4. MOBILE SCROLL BAR - Iska background bhi light kiya gaya hai */}
      <div className="xl:hidden bg-gray-100 border-t border-gray-200 relative">
        <div className="flex items-center px-4 py-2 space-x-4 text-[11px] font-bold uppercase overflow-x-auto scrollbar-hide text-gray-600">
          {mainLinks.map((l) => (
            <Link
              key={l.name}
              to={l.path}
              className="whitespace-nowrap hover:text-cyan-600"
            >
              {l.name}
            </Link>
          ))}

          {/* Mobile Dropdowns Text colors adjusted for light background */}
          <div className="relative">
            <button
              onClick={() => {
                setIsMobileCAOpen(!isMobileCAOpen);
                setIsMobileUrduOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap text-gray-700 uppercase font-bold outline-none"
            >
              Current Affairs{" "}
              <FaChevronDown size={8} className={`${isMobileCAOpen ? "rotate-180" : ""}`} />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => {
                setIsMobileUrduOpen(!isMobileUrduOpen);
                setIsMobileCAOpen(false);
              }}
              className="flex items-center gap-1 whitespace-nowrap text-cyan-600 uppercase font-bold outline-none"
            >
              Urdu{" "}
              <FaChevronDown size={8} className={`${isMobileUrduOpen ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;