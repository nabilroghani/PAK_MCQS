import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const Header = () => {
    // Dropdown toggles for mobile
    const [isMobileUrduOpen, setIsMobileUrduOpen] = useState(false);
    const [isMobileCAOpen, setIsMobileCAOpen] = useState(false); // Current Affairs mobile state

    const mainLinks = [
        { name: "GK Mcqs", path: "/gk-mcqs" },
        { name: "Pak Study", path: "/pak-study" },
        { name: "Islamic Studies", path: "/islamic-studies" },
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
    ];

    // Naya Current Affairs data
    const currentAffairsLinks = [
        { name: "Pakistan Current Affairs", path: "/pakistan-current-affairs" },
        { name: "World Current Affairs", path: "/world-current-affairs" },
    ];

    return (
        <header className="bg-[#0f172a] text-white shadow-xl sticky top-14 z-[90]">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-4">

                {/* 1. LOGO */}
                <Link to="/" className="flex-shrink-0">
                    <h1 className="text-xl md:text-2xl font-black tracking-tighter italic">
                        PAK<span className="text-cyan-400">LEARNERS</span>
                    </h1>
                </Link>

                {/* 2. NAVIGATION (Desktop) */}
                <nav className="hidden xl:flex items-center">
                    <ul className="flex items-center">
                        {mainLinks.map((link) => (
                            <li key={link.name}>
                                <Link to={link.path} className="px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-400 transition-all whitespace-nowrap">
                                    {link.name}
                                </Link>
                            </li>
                        ))}

                        {/* Current Affairs Dropdown Desktop */}
                        <li className="relative group">
                            <button className="flex items-center gap-1 px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-400 transition-all outline-none">
                                Current Affairs <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform" />
                            </button>

                            <div className="absolute top-full left-0 w-56 bg-white text-gray-800 shadow-2xl rounded-b-md border-t-4 border-cyan-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                                <div className="flex flex-col py-2">
                                    {currentAffairsLinks.map((sub) => (
                                        <Link key={sub.name} to={sub.path} className="px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>

                        {/* Urdu Dropdown Desktop */}
                        <li className="relative group">
                            <button className="flex items-center gap-1 px-3 py-5 text-[12px] font-bold uppercase tracking-wider hover:text-cyan-400 transition-all outline-none">
                                Urdu <FaChevronDown size={10} className="group-hover:rotate-180 transition-transform" />
                            </button>

                            <div className="absolute top-full left-0 w-48 bg-white text-gray-800 shadow-2xl rounded-b-md border-t-4 border-cyan-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[110]">
                                <div className="flex flex-col py-2">
                                    {dropdownLinks.map((sub) => (
                                        <Link key={sub.name} to={sub.path} className="px-4 py-2 text-sm hover:bg-cyan-50 hover:text-cyan-600 transition-colors">
                                            {sub.name} Mcqs
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>

                {/* 3. SEARCH & BUTTONS */}
                <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end lg:flex-none">
                    <div className="relative hidden sm:block">
                        <input
                            type="text"
                            placeholder="Search MCQS..."
                            className="bg-blue-900/50 border border-blue-700 text-sm rounded-full py-1.5 pl-4 pr-10 focus:outline-none focus:border-cyan-400 w-32 md:w-48 transition-all"
                        />
                        <FaSearch className="absolute right-3 top-2.5 text-gray-400 size-3" />
                    </div>

                    <button className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-blue-950 px-4 py-2 rounded-full text-[12px] font-extrabold uppercase tracking-tight transition-all duration-300 shadow-md hover:shadow-cyan-500/50 active:scale-95 whitespace-nowrap border-b-2 border-cyan-700 hover:border-cyan-600">
                        MCQS MOOD
                    </button>
                </div>
            </div>

            {/* 4. MOBILE SCROLL BAR */}
            <div className="xl:hidden bg-blue-900/50 border-t border-blue-800 relative">
                <div className="flex items-center px-4 py-2 space-x-4 text-[11px] font-bold uppercase overflow-x-auto scrollbar-hide">
                    {mainLinks.map(l => (
                        <Link key={l.name} to={l.path} className="whitespace-nowrap hover:text-cyan-400">{l.name}</Link>
                    ))}

                    {/* Mobile Current Affairs Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => {setIsMobileCAOpen(!isMobileCAOpen); setIsMobileUrduOpen(false)}}
                            className="flex items-center gap-1 whitespace-nowrap text-white uppercase font-bold outline-none"
                        >
                            Current Affairs <FaChevronDown size={8} className={`${isMobileCAOpen ? 'rotate-180' : ''} transition-transform`} />
                        </button>
                        {isMobileCAOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-md border-t-2 border-cyan-400 z-[120]">
                                <div className="flex flex-col py-1">
                                    {currentAffairsLinks.map((sub) => (
                                        <Link key={sub.name} to={sub.path} onClick={() => setIsMobileCAOpen(false)} className="px-3 py-2 text-[10px] text-gray-700 border-b border-gray-50 active:bg-cyan-50 uppercase">
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {/* Mobile Urdu Dropdown */}
                    <div className="relative">
                        <button 
                            onClick={() => {setIsMobileUrduOpen(!isMobileUrduOpen); setIsMobileCAOpen(false)}}
                            className="flex items-center gap-1 whitespace-nowrap text-cyan-400 uppercase font-bold outline-none"
                        >
                            Urdu <FaChevronDown size={8} className={`${isMobileUrduOpen ? 'rotate-180' : ''} transition-transform`} />
                        </button>
                        {isMobileUrduOpen && (
                            <div className="absolute top-full right-0 mt-2 w-40 bg-white shadow-xl rounded-md border-t-2 border-cyan-400 z-[120]">
                                <div className="flex flex-col py-1 overflow-y-auto max-h-48">
                                    {dropdownLinks.map((sub) => (
                                        <Link key={sub.name} to={sub.path} onClick={() => setIsMobileUrduOpen(false)} className="px-3 py-2 text-[10px] text-gray-700 border-b border-gray-50 last:border-none active:bg-cyan-50">
                                            {sub.name} Mcqs
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;