import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Trophies = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Glass Trophy",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/25732cf1e3158d9e3fabf8df4175963741f384e1?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 2,
      title: "Metal Trophy",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d109dba024a0b9490072ab609f513dab77fb98f0?width=1047",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 3,
      title: "Crystal Award",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a60d9b67e98fb94be2bb646a7d1031695353ea90?width=904",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 4,
      title: "Gold Trophy",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d2b0fbafb6b86839b5edaa0a1969641662702b2?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 5,
      title: "Sports Trophy",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/01a00deec0c704cde84418c5a6ac8444e652fcc9?width=678",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 6,
      title: "Achievement Award",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e631b62ec89c947461eebc83bba1334802dc8a98?width=619",
      gradient: "from-[#B3D4EE] to-[#B3D4EE]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[260px] sm:h-[395px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#5787A7] to-[#CDDCE3]" />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e93d531c9e1915104a23f6e6fe9b4d2f2fd3e3e?width=873"
          alt="Trophies Hero"
          className="relative w-[200px] h-[200px] sm:w-[437px] sm:h-[291px] object-contain z-10"
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
                onClick={() => navigate("/trophies")}
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
              Trophies & Momento
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
