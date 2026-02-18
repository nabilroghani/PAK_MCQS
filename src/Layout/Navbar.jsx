import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSignalMessenger, 
  FaYoutube, 
  FaFacebook, 
  FaTwitter, 
  FaTiktok, 
  FaBars, 
  FaXmark,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Job Updates', path: '/job-updates' },
    { name: 'PAST Papers', path: '/past-papers' },
    { name: 'Submit Mcqs', path: '/submit' },
    { name: 'E Book', path: '/E-Book'},
  ];

  const socialIcons = [
    { icon: <FaSignalMessenger size={20} />, link: "#", color: "hover:text-green-400" },
    { icon: <FaYoutube size={20} />, link: "#", color: "hover:text-red-500" },
    { icon: <FaFacebook size={20} />, link: "#", color: "hover:text-blue-400" },
    { icon: <FaTwitter  size={20} />, link: "#", color: "hover:text-sky-400" },
    { icon: <FaTiktok size={20} />, link: "#", color: "hover:text-pink-400" },
    { icon: <FaInstagram size={20} />, link: "#", color: "hover:text-[#f9ce34]"}
  ];

  return (
    <nav className="bg-[#1565C0] shadow-lg sticky top-0 z-[999] w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Desktop Links - Text white rakha hai taake blue background par nazar aaye */}
          <div className="hidden lg:flex space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white/90 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-[13px] font-bold transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Social Icons (Desktop) - White color with hover effects */}
          <div className="hidden md:flex items-center space-x-4">
            {socialIcons.map((social, index) => (
              <a key={index} href={social.link} className={`text-white/80 ${social.color} transition-all duration-300`}>
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <FaXmark size={28} /> : <FaBars size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden bg-white border-t border-gray-100 shadow-2xl`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block text-gray-700 hover:bg-[#1565C0]/10 hover:text-[#1565C0] px-3 py-3 rounded-xl text-base font-bold transition-all"
              onClick={() => setIsOpen(false)} 
            >
              {link.name}
            </Link>
          ))}
        </div>
        
        {/* Social Icons (Mobile) */}
        <div className="flex justify-around py-6 border-t border-gray-100 bg-gray-50">
          {socialIcons.map((social, index) => (
            <a key={index} href={social.link} className={`text-gray-400 ${social.color} transition-colors`}>
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;