import { ChevronDown } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Accessories = () => {
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
      <section className="relative h-[395px] bg-gradient-to-b from-[#4B4E55] via-[#66686D] to-[#B4A696] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ded6fbb020203a642d062c750e54e14a1e1ee706?width=2880"
          alt="Accessories Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/283de88197cb24f69dcbe1739e270c8b0af4a0aa?width=762"
          alt="Accessories Hero"
          className="absolute left-[530px] top-[71px] w-[381px] h-[254px]"
        />
      </section>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[391px] min-h-screen border-r border-black/50 bg-[#FFF4DF] p-8">
          <div className="space-y-0">
            {/* Apparel Category */}
            <div className="bg-[#FFF4DF] shadow-[0px_0px_16px_rgba(0,0,0,0.25)]">
              <div className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF]">
                <span className="text-black font-poppins text-xl">Apparel</span>
                <ChevronDown className="w-9 h-9 text-black" />
              </div>
            </div>

            {/* Trophy & Memento Category */}
            <div className="bg-[#FFF4DF]">
              <div className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF]">
                <span className="text-black font-poppins text-xl">
                  Trophy & Memento
                </span>
                <ChevronDown className="w-9 h-9 text-black" />
              </div>
            </div>

            {/* Accessories Category */}
            <div className="bg-[#FFF4DF]">
              <div className="flex items-center justify-between px-5 py-3 bg-[#FFF4DF]">
                <span className="text-black font-poppins text-xl">
                  Accessories
                </span>
                <ChevronDown className="w-9 h-9 text-black" />
              </div>
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
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-black font-poppins text-3xl lg:text-[48px] font-normal mb-16 text-center">
              Accessories
            </h1>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-black font-inter text-xl font-medium mb-2">
                      {product.title}
                    </h3>
                    <p className="text-black font-inter text-xl font-semibold">
                      {product.price}
                    </p>
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
