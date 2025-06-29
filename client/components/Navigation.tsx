import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import whatsappNavbar from "../assets/whatsapp-navbar.png";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-[84px] bg-[#FFF4DF] flex items-center justify-between px-6 lg:px-[117px]">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/955d3cdf5b858818d5f30bb29bab05609c1b615d?width=108"
          alt="Trendydice Logo"
          className="w-[54px] h-[51px]"
        />
        <span className="text-[#211278] font-inter text-xl font-semibold">
          TRENDYDICE
        </span>
      </Link>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex items-center gap-12 lg:gap-[50px]">
        <Link
          to="/"
          className={`font-poppins text-base ${
            location.pathname === "/"
              ? "text-[#211278] font-medium"
              : "text-black"
          } hover:text-[#211278] transition-colors`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`font-poppins text-base ${
            location.pathname === "/about"
              ? "text-[#211278] font-medium"
              : "text-black"
          } hover:text-[#211278] transition-colors`}
        >
          About us
        </Link>
        <Link
          to="/contact"
          className={`font-poppins text-base ${
            location.pathname === "/contact"
              ? "text-[#211278] font-medium"
              : "text-black"
          } hover:text-[#211278] transition-colors`}
        >
          Contact us
        </Link>
      </div>

      {/* WhatsApp Button & Hamburger */}
      <div className="flex items-center gap-4 relative">
        <a
          href="https://api.whatsapp.com/send/?phone=9738097381&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-[52px] h-[52px] bg-transparent rounded-full p-2 hover:bg-green-100 transition-colors"
          title="Chat on WhatsApp"
        >
          <img
            src={whatsappNavbar}
            alt="WhatsApp"
            className="w-8 h-8 object-contain"
          />
        </a>
        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-2 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-14 z-50 bg-[#FFF4DF] rounded-lg shadow-lg py-3 px-6 flex flex-col gap-4 min-w-[160px] border">
            <Link
              to="/"
              className="font-poppins text-base text-black hover:text-[#211278] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="font-poppins text-base text-black hover:text-[#211278] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="font-poppins text-base text-black hover:text-[#211278] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
