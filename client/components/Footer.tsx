import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#FBDDCA] pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-[106px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-[53px] mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e3b50561fcd8103a23f1c1a2720b1da77752643?width=108"
                alt="Trendydice Logo"
                className="w-[54px] h-[51px]"
              />
              <span className="text-[#211278] font-inter text-xl font-semibold">
                TRENDYDICE
              </span>
            </div>
            <p className="text-black font-poppins text-base leading-[1.47] max-w-[282px]">
              Trendydice bridges manufacturers and local businesses with
              innovative supply chain solutions, leveraging technology to
              streamline operations and deliver value across the apparel
              industry
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-black font-poppins text-xl font-semibold">
              Quick Links
            </h3>
            <div className="space-y-1">
              <Link
                to="/"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact us
              </Link>
              {/*
              <Link
                to="/cart"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
              >
                Cart
              </Link>
              <Link
                to="/profile"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
              >
                Profile
              </Link>
              <Link
                to="/pricing"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
              >
                Pricing
              </Link>
              */}
              <a
                href="/#faqs-section"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  if (window.location.pathname === "/") {
                    const faqSection = document.getElementById("faqs-section");
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: "smooth" });
                    }
                  } else {
                    window.location.href = "/#faqs-section";
                  }
                }}
              >
                FAQ's
              </a>
              <Link
                to="/terms-and-conditions"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className="text-black font-poppins text-xl font-semibold">
              Products
            </h3>
            <div className="space-y-1">
              <Link
                to="/apparel"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Apparels
              </Link>
              <Link
                to="/trophies"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Trophies
              </Link>
              <Link
                to="/accessories"
                className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Accessories
              </Link>
            </div>
            <div className="pt-8">
              <h4 className="text-black font-poppins text-xl font-semibold mb-5">
                Company
              </h4>
              <div className="space-y-1">
                <Link
                  to="/delivery-and-billing"
                  className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                >
                  Delivery and Billing Information
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="block text-black font-poppins text-base hover:text-[#211278] transition-colors"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className="text-black font-poppins text-xl font-semibold">
              Contact
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/31fe1152a227eda5cb7c847149124c9dc1bca3f8?width=38"
                  alt="Phone"
                  className="w-[19px] h-[19px]"
                />
                <span className="text-black font-poppins text-base">
                  97380-97381
                </span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a3e6f145db3ae7f39110ff0a62ccf90c046eb6?width=44"
                  alt="Email"
                  className="w-[22px] h-[22px]"
                />
                <span className="text-black font-poppins text-base">
                  trendydice@gmail.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b94a1a2e970fe668b37b4def97d849f8a2469?width=50"
                  alt="Location"
                  className="w-[25px] h-[25px] mt-1"
                />
                <div className="text-black font-poppins text-base leading-[1.69]">
                  <strong>Delhi Office</strong>
                  <br />
                  C-68, 1st Floor, Indira Enclave,Near IGNOU, Neb Sarai,New
                  Delhi, 110068
                </div>
              </div>
              <div className="flex items-start gap-2">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b94a1a2e970fe668b37b4def97d849f8a2469?width=50"
                  alt="Location"
                  className="w-[25px] h-[25px] mt-1"
                />
                <div className="text-black font-poppins text-base leading-[1.37]">
                  <strong>Tiruppur Office</strong>
                  <br />
                  No. 32/81, Process Server Street,Tiruppur, 641601
                </div>
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="text-black font-poppins text-xl font-semibold">
              Follow us
            </h3>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/trendydice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
              <a
                href="https://x.com/TrendyDice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/Trendydice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/company/trendydice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=9738097381&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
              <a
                href="https://www.youtube.com/@trendydice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube className="w-5 h-5 text-black hover:text-[#211278] transition-colors cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-center justify-center gap-1 pt-8 border-t border-black/10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/033dbcaeb87be2c02ca76415d1ed5ccfeef34184?width=24"
            alt="Copyright"
            className="w-3 h-3"
          />
          <span className="text-black font-inter text-[10px] leading-[1.29]">
            2024 Trendydice. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
