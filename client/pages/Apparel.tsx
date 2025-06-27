import { ChevronDown } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Apparel = () => {
  const products = [
    {
      id: 1,
      title: "Black T-Shirt",
      price: "₹299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57e05966673b5b38da2c8fc12b72fe6770fbbc78?width=473",
      gradient: "from-[#EFB0A9] to-[#878EC5]",
    },
    {
      id: 2,
      title: "Blue Polo",
      price: "₹599",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/81222562c933d1dc31a80a9bfa6160e7d4d8f79e?width=518",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 3,
      title: "Black Polo",
      price: "₹599",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a9237ce459f11f19f42805e78c9a55a8ce771b4?width=451",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 4,
      title: "Grey Hoodie",
      price: "₹899",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8d98501599e49064136b1991dc27f6805fa22022?width=527",
      gradient: "from-[#AFB2BB] via-[#C1C2C7] to-[#7B7E86]",
    },
    {
      id: 5,
      title: "Black Sweatshirt",
      price: "₹799",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/18e490a5e6fb67f0ac8d40e796cc3f2bffb86288?width=547",
      gradient: "from-[#AFA6A7] to-[#9396AE]",
    },
    {
      id: 6,
      title: "Black Hoodie",
      price: "₹899",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/72dc858104e000f07a24df690d7b33384ae9d8b7?width=489",
      gradient: "from-[#AEA6A7] to-[#9597AE]",
    },
    {
      id: 7,
      title: "White T-Shirt",
      price: "₹299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/50f5896a45d6b3da96c61cb20185af4ed2e28087?width=443",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 8,
      title: "Black Jacket",
      price: "₹1299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6e34d2bd3b74eb2138afe187bb585b63ba2e3b96?width=562",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 9,
      title: "Black Bomber",
      price: "₹1199",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6a7787db232a973df72a85693614b1e7123c8e7f?width=652",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 10,
      title: "Navy T-Shirt",
      price: "₹299",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/9ef17d1be72549cb9bab0be2f8c19a5210d31d8e?width=358",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 11,
      title: "Black Cap",
      price: "₹399",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6f3d2f17ff3599df00ac6fb699578f1a7e2adf8f?width=442",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
    {
      id: 12,
      title: "White Shirt",
      price: "₹799",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0bc30478acc36ecfdde3a383ae604a2c79e7a89a?width=508",
      gradient: "from-[#F3B1A8] to-[#828CC6]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[395px] bg-[#535353] overflow-hidden">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/790718df4179d149a5bc9fc4bf8e16882f23c111?width=1206"
          alt="Apparel Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cd2c0765b0638147c2f1448a4c007a900d61f84?width=1077"
          alt="T-shirt Hero"
          className="absolute right-[450px] top-[18px] w-[539px] h-[359px] shadow-[9px_27px_25.7px_rgba(0,0,0,0.29)]"
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
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-black font-poppins text-3xl lg:text-[48px] font-normal mb-16 text-center">
              Apparels
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

export default Apparel;
