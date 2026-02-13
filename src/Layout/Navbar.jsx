import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSignalMessenger, 
  FaYoutube, 
  FaFacebook, 
  FaTwitter, 
  FaTiktok, 
  FaBars, 
  FaXmark 
} from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'PakMCQS App', path: '/app' },
    { name: 'PakMCQS Quiz', path: '/quiz' },
    { name: 'PAST Papers', path: '/past-papers' },
    { name: 'Submit Mcqs', path: '/submit' },
  ];

  const socialIcons = [
    { icon: <FaSignalMessenger size={20} />, link: "#", color: "hover:text-green-500" },
    { icon: <FaYoutube size={20} />, link: "#", color: "hover:text-red-600" },
    { icon: <FaFacebook size={20} />, link: "#", color: "hover:text-blue-600" },
    { icon: <FaTwitter  size={20} />, link: "#", color: "hover:text-sky-500" },
    { icon: <FaTiktok size={20} />, link: "#", color: "hover:text-pink-500" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-[999] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          {/* Desktop Links */}
          <div className="hidden lg:flex space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center space-x-3">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} className={`text-gray-500 ${social.color} transition-all`}>
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button" // Type button zaroori hai
              className="text-gray-700 hover:text-blue-700 focus:outline-none p-2"
            >
              {isOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white border-t border-gray-100 shadow-inner`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:bg-blue-50 hover:text-blue-700 px-3 py-3 rounded-xl text-base font-semibold transition-all"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Social Icons (Mobile) */}
        <div className="flex justify-around py-6 border-t border-gray-100 bg-gray-50">
          {socialIcons.map((social, index) => (
            <a key={index} href={social.link} className={`text-gray-500 ${social.color}`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;