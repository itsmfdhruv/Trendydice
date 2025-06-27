import { ChevronDown } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Trophies = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Glass Trophy",
      price: "₹1,299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/25732cf1e3158d9e3fabf8df4175963741f384e1?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 2,
      title: "Metal Trophy",
      price: "₹1,799",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d109dba024a0b9490072ab609f513dab77fb98f0?width=1047",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 3,
      title: "Crystal Award",
      price: "₹2,299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a60d9b67e98fb94be2bb646a7d1031695353ea90?width=904",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 4,
      title: "Gold Trophy",
      price: "₹2,999",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d2b0fbafb6b86839b5edaa0a1969641662702b2?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 5,
      title: "Sports Trophy",
      price: "₹1,599",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/01a00deec0c704cde84418c5a6ac8444e652fcc9?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 6,
      title: "Achievement Award",
      price: "₹1,899",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e631b62ec89c947461eebc83bba1334802dc8a98?width=619",
      gradient: "from-[#B3D4EE] to-[#B3D4EE]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[395px] bg-[#535353] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5787A7] to-[#CDDCE3]"></div>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e93d531c9e1915104a23f6e6fe9b4d2f2fd3e3e?width=873"
          alt="Trophies Hero"
          className="absolute left-[501px] top-[52px] w-[437px] h-[291px]"
        />
      </section>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[391px] min-h-screen border-r border-black/50 bg-[#FFF4DF] p-8">
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
                  className={`w-9 h-9 text-black transition-transform ${
                    openDropdown === "Apparel" ? "rotate-180" : "rotate-0"
                  }`}
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
                <span className="text-black font-poppins text-xl">
                  Trophy & Memento
                </span>
                <ChevronDown
                  className={`w-9 h-9 text-black transition-transform ${
                    openDropdown === "Trophy" ? "rotate-180" : "rotate-0"
                  }`}
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
                <span
                  className="text-black font-poppins text-xl cursor-pointer hover:underline"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/accessories");
                  }}
                >
                  Accessories
                </span>
                <ChevronDown
                  className={`w-9 h-9 text-black transition-transform ${
                    openDropdown === "Accessories" ? "rotate-180" : "rotate-0"
                  }`}
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
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-black font-poppins text-3xl lg:text-[48px] font-normal mb-16 text-center">
              Trophies & Momento
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-[0px_0px_16px_rgba(0,0,0,0.25)] overflow-hidden hover:scale-105 transition-transform"
                >
                  <div
                    className={`h-[339px] bg-gradient-to-br ${product.gradient} flex items-center justify-center p-6`}
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                  </div>
                  <div className="p-4 flex flex-col items-center justify-center">
                    <span className="text-gray-400 font-inter text-xl font-medium mb-2">
                      Product Name
                    </span>
                    <span className="text-gray-300 font-inter text-xl font-semibold">
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

export default Trophies;
