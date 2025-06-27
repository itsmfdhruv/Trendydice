import { Link, useLocation } from "react-router-dom";
import { User, ShoppingCart } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

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

      {/* Navigation Links */}
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

      {/* User Actions */}
      <div className="flex items-center gap-4">
        {/* Profile Avatar */}
        <div className="flex items-center justify-center w-[52px] h-[52px] bg-white rounded-full p-2">
          <User className="w-6 h-6 text-[#A75600]" />
        </div>

        {/* Shopping Cart */}
        <div className="w-11 h-11 flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 text-[#1C1C1E]" strokeWidth={1.5} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
