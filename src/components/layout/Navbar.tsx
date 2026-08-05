import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaXmark } from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Services & SOS", path: "/services" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white/20 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className=" mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group font-heading">
            <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors duration-300">
              UNSEEN
              <span className="text-emerald-400 group-hover:text-white lowercase tracking-[0.08rem]">
                .TAPRO
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-emerald-500 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2">
              {isOpen ? (
                <FaXmark className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu Section  */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 absolute w-full left-0 dynamic-fade-in animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase ${
                    isActive(link.path)
                      ? "bg-emerald-500 text-black"
                      : "text-gray-300 hover:bg-white/5"
                  }`}>
                  {link.name}
                </Link>
              ))}

              {/* <hr className="border-white/10 my-2" /> */}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
