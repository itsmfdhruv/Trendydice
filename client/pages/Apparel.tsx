import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import bgApparelHero from "../assets/bg for apparels page.png";

const Apparel = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>("Apparel");

  const products = [
    {
      id: 1,
      title: "Round Neck T-Shirt",
      price: "₹200 - ₹350",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57e05966673b5b38da2c8fc12b72fe6770fbbc78?width=473",
      gradient: "from-[#EFB0A9] to-[#878EC5]",
    },
    {
      id: 2,
      title: "Polo T-Shirt",
      price: "₹250 - ₹400",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/81222562c933d1dc31a80a9bfa6160e7d4d8f79e?width=518",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 3,
      title: "Oversized T-Shirt",
      price: "₹250 - ₹450",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a9237ce459f11f19f42805e78c9a55a8ce771b4?width=451",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 4,
      title: "Sports T-Shirt",
      price: "₹200 - ₹450",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8d98501599e49064136b1991dc27f6805fa22022?width=527",
      gradient: "from-[#AFB2BB] via-[#C1C2C7] to-[#7B7E86]",
    },
    {
      id: 5,
      title: "Hoodies",
      price: "₹450 - ₹750",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/18e490a5e6fb67f0ac8d40e796cc3f2bffb86288?width=547",
      gradient: "from-[#AFA6A7] to-[#9396AE]",
    },
    {
      id: 6,
      title: "Sweatshirts",
      price: "₹350 - ₹650",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/72dc858104e000f07a24df690d7b33384ae9d8b7?width=489",
      gradient: "from-[#AEA6A7] to-[#9597AE]",
    },
    {
      id: 7,
      title: "Zipper Hoodies",
      price: "₹500 - ₹800",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5896a45d6b3da96c61cb20185af4ed2e28087?width=443",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 8,
      title: "Varsity Jackets",
      price: "₹500 - ₹800",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d2bd3b74eb2138afe187bb585b63ba2e3b96?width=562",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 9,
      title: "Tracksuits (upper wear)",
      price: "₹900 - ₹1500",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a7787db232a973df72a85693614b1e7123c8e7f?width=652",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 10,
      title: "Tracksuits (lower wear)",
      price: "₹900 - ₹1500",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9ef17d1be72549cb9bab0be2f8c19a5210d31d8e?width=358",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 11,
      title: "caps",
      price: "₹70 - ₹300",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3d2f17ff3599df00ac6fb699578f1a7e2adf8f?width=442",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[395px] overflow-hidden flex items-center justify-center">
        <img
          src={bgApparelHero}
          alt="Apparel Hero Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd2c0765b0638147c2f1448a4c007a900d61f84?width=1077"
          alt="T-shirt Hero"
          className="relative max-w-[600px] max-h-[600px] w-full h-full object-contain rounded-lg z-10"
        />
      </section>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full lg:w-[391px] min-h-screen border-r border-black/50 bg-[#FFF4DF] p-4 sm:p-8 mb-6 lg:mb-0">
          <div className="space-y-0">
            {/* Apparel Category */}
            <div className="bg-[#FFF4DF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
              <div
                className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF] cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => navigate("/apparel"), 300);
                }}
              >
                <span className="text-black font-poppins text-xl cursor-pointer">
                  Apparel
                </span>
              </div>
            </div>
            {/* Trophy & Memento Category */}
            <div className="bg-[#FFF4DF]">
              <div
                className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF] cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => navigate("/trophies"), 300);
                }}
              >
                <span className="text-black font-poppins text-xl cursor-pointer">
                  Trophy & Memento
                </span>
              </div>
            </div>
            {/* Accessories Category */}
            <div className="bg-[#FFF4DF]">
              <div
                className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF] cursor-pointer"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setTimeout(() => navigate("/accessories"), 300);
                }}
              >
                <span className="text-black font-poppins text-xl cursor-pointer">
                  Accessories
                </span>
              </div>
            </div>

            {/* Product Grid for mobile: show below dropdown */}
            <div className="block lg:hidden mt-6">
              <div className="grid grid-cols-1 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.25)] overflow-visible hover:scale-105 transition-transform flex flex-col items-center mx-auto w-full max-w-[320px] min-w-0"
                    style={{ minHeight: 220 }}
                  >
                    <div
                      className={`h-[140px] w-full bg-gradient-to-br ${product.gradient} flex items-center justify-center p-2 rounded-t-2xl`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-[120px] h-[120px] object-cover rounded-xl shadow-xl border-2 border-white bg-white"
                      />
                    </div>
                    <div className="p-2 pt-4 flex flex-col items-center justify-center w-full">
                      <span className="text-black font-inter text-base font-medium mb-1 text-center truncate w-full">
                        {product.title}
                      </span>
                      <span className="text-[#211278] font-inter text-base font-semibold text-center">
                        {product.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content: hide product grid on mobile */}
        <main className="flex-1 p-4 sm:p-8 hidden lg:block">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-black font-poppins text-3xl sm:text-4xl lg:text-[48px] font-normal mb-8 sm:mb-16 text-center">
              Apparels
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.25)] overflow-visible hover:scale-105 transition-transform flex flex-col items-center mx-auto w-full max-w-xs min-w-0"
                  style={{ minHeight: 420 }}
                >
                  <div
                    className={`h-[339px] w-full bg-gradient-to-br ${product.gradient} flex items-center justify-center p-4 sm:p-6 rounded-t-2xl`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-[280px] h-[280px] object-cover rounded-xl"
                    />
                  </div>
                  <div className="p-4 pt-4 flex flex-col items-center justify-center w-full">
                    <span className="text-black font-inter text-base sm:text-lg font-medium mb-2 text-center truncate w-full">
                      {product.title}
                    </span>
                    <span className="text-[#211278] font-inter text-base sm:text-lg font-semibold text-center">
                      {product.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Apparel;
