import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Accessories = () => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<null | string>(null);

  const products = [
    {
      id: 1,
      title: "Notebook Set",
      price: "₹499",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dfb2df7a6187beacfa72ee828264aacaf191e71a?width=414",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 2,
      title: "Coffee Mug",
      price: "₹299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e9a6c439d981a1c86ddb9e30f7bc137ab14de27e?width=667",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 3,
      title: "Stationery Set",
      price: "₹799",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d26a1565d368feb36e734b386f25397d5283a025?width=692",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 4,
      title: "Water Bottle",
      price: "₹399",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bcb62f93a79e878e61e72bca7e2d013e3fe2d2e7?width=956",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[260px] sm:h-[395px] bg-gradient-to-b from-[#4B4E55] via-[#66686D] to-[#B4A696] overflow-hidden flex items-center justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/283de88197cb24f69dcbe1739e270c8b0af4a0aa?width=762"
          alt="Accessories Hero"
          className="w-[160px] h-[160px] sm:w-[350px] sm:h-[350px] object-cover rounded-lg transition-transform duration-500 hover:scale-105 z-10 relative"
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
                onClick={() =>
                  setOpenDropdown(openDropdown === "Apparel" ? null : "Apparel")
                }
              >
                <span
                  className="text-black font-poppins text-xl cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/apparel");
                  }}
                >
                  Apparel
                </span>
                <ChevronDown
                  className={`w-9 h-9 text-black transition-transform ${openDropdown === "Apparel" ? "rotate-180" : "rotate-0"}`}
                />
              </div>
              {openDropdown === "Apparel" && (
                <>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      T-Shirts
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Hoodies
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Polo Shirts
                    </span>
                  </div>
                </>
              )}
            </div>
            {/* Trophy & Memento Category */}
            <div className="bg-[#FFF4DF]">
              <div
                className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF] cursor-pointer"
                onClick={() =>
                  setOpenDropdown(openDropdown === "Trophy" ? null : "Trophy")
                }
              >
                <span
                  className="text-black font-poppins text-xl cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/trophies");
                  }}
                >
                  Trophy & Memento
                </span>
                <ChevronDown
                  className={`w-9 h-9 text-black transition-transform ${openDropdown === "Trophy" ? "rotate-180" : "rotate-0"}`}
                />
              </div>
              {openDropdown === "Trophy" && (
                <>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Glass Trophies
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Metal Awards
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Crystal Awards
                    </span>
                  </div>
                </>
              )}
            </div>
            {/* Accessories Category */}
            <div className="bg-[#FFF4DF]">
              <div
                className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF] cursor-pointer"
                onClick={() =>
                  setOpenDropdown(
                    openDropdown === "Accessories" ? null : "Accessories",
                  )
                }
              >
                <span className="text-black font-poppins text-xl">
                  Accessories
                </span>
                <ChevronDown
                  className={`w-9 h-9 text-black transition-transform ${openDropdown === "Accessories" ? "rotate-180" : "rotate-0"}`}
                />
              </div>
              {openDropdown === "Accessories" && (
                <>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Notebooks
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Mugs
                    </span>
                  </div>
                  <div className="bg-[#FFF4DF] px-14 py-3">
                    <span className="text-black font-poppins text-lg font-light">
                      Stationery
                    </span>
                  </div>
                </>
              )}
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
                      <span className="text-gray-400 font-inter text-base font-medium mb-1 text-center truncate w-full">
                        Product Name
                      </span>
                      <span className="text-gray-300 font-inter text-base font-semibold text-center">
                        Price
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
              Accessories
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
                    <span className="text-gray-400 font-inter text-base sm:text-lg font-medium mb-2 text-center truncate w-full">
                      Product Name
                    </span>
                    <span className="text-gray-300 font-inter text-base sm:text-lg font-semibold text-center">
                      Price
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

export default Accessories;
