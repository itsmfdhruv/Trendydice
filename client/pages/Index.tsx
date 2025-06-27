import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import mainFirstHeroSection from "../assets/main first hero section.png";
import heroSection1 from "../assets/Hero section 1.png";
import heroSection2 from "../assets/hero section 2.png";
import heroSection3 from "../assets/hero section 3.png";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    {
      src: mainFirstHeroSection,
      alt: "Main Hero Section - Lifestyle Apparel",
    },
    {
      src: heroSection1,
      alt: "Hero Section 1",
    },
    {
      src: heroSection2,
      alt: "Hero Section 2",
    },
    {
      src: heroSection3,
      alt: "Hero Section 3",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[665px] overflow-hidden">
        {/* Hero Product Carousel */}
        <div className="relative w-full h-full">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    height: "100%",
                    width: "100%",
                    minHeight: "350px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <HeroSection />

      {/* Customized Event Partnerships */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[133px]">
          <div className="text-center mb-11">
            <h2 className="text-black font-poppins text-3xl lg:text-[48px] font-normal max-w-[808px] mx-auto">
              CUSTOMISED EVENT PARTNERSHIPS
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1 group cursor-pointer">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a714e3b32e936710c6620fe05590af6927c99fc?width=1100"
                alt="Fest Merchandise"
                className="w-[550px] h-[550px] object-cover rounded-lg transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-[0px_20px_40px_rgba(0,0,0,0.3)]"
              />
            </div>

            <div className="flex-1 space-y-20">
              <div className="space-y-3">
                <h3 className="text-black font-poppins text-xl">
                  Personalized Fest & Event Merchandise
                </h3>
                <p className="text-black font-poppins text-xl font-light leading-normal text-justify">
                  Empower your college fest or event with Trendydice's
                  customized merchandise solutions—crafted to your exact needs.
                  From apparel to trophies and accessories, we deliver
                  high-quality, personalized products that make every event
                  memorable and uniquely yours.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-11 py-2.5 bg-gradient-to-b from-black to-[#211278] text-white font-poppins text-xl font-medium rounded-[14px] shadow-[0px_0px_16px_rgba(0,0,0,0.40)] hover:shadow-lg transition-all"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[157px]">
          <div className="text-center mb-14">
            <h2 className="text-black font-poppins text-3xl lg:text-[48px] font-normal">
              CATEGORIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:h-[595px]">
            {/* Apparels */}
            <Link
              to="/apparel"
              className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#EEEDED] to-[#999] group hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0px_20px_40px_rgba(0,0,0,0.4)] min-h-[250px]"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/903de070062f40ddd5b660f87b28e869cec326ef?width=1228"
                alt="Apparels"
                className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 min-h-[250px]"
              />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-poppins text-2xl lg:text-[32px] font-medium transition-all duration-300 ease-in-out group-hover:text-shadow-lg drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
                  Appearels
                </h3>
              </div>
            </Link>

            <div className="grid grid-rows-2 gap-8">
              {/* Trophies & Momentos */}
              <Link
                to="/trophies"
                className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#EEEDED] to-[#999] group hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0px_20px_40px_rgba(0,0,0,0.4)] min-h-[120px]"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8a718c15c641f07cae8d31565fea6a33bf08dba?width=936"
                  alt="Trophies & Momentos"
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 min-h-[120px]"
                />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-poppins text-2xl lg:text-[32px] font-medium transition-all duration-300 ease-in-out group-hover:text-shadow-lg drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
                    Trophies & Momentos
                  </h3>
                </div>
              </Link>

              {/* Accessories */}
              <Link
                to="/accessories"
                className="relative rounded-lg overflow-hidden bg-gradient-to-b from-[#EEEDED] to-[#999] group hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-[0px_20px_40px_rgba(0,0,0,0.4)] min-h-[120px]"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/600e7bf937ee57b2ddb76555de8ad6351d66df24?width=936"
                  alt="Accessories"
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110 min-h-[120px]"
                />
                <div className="absolute bottom-4 left-5">
                  <h3 className="text-white font-poppins text-2xl lg:text-[32px] font-medium transition-all duration-300 ease-in-out group-hover:text-shadow-lg drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)]">
                    Accessories
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Partners */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[174px]">
          <div className="text-center mb-20">
            <h2 className="text-black font-poppins text-3xl lg:text-[48px] font-normal">
              PAST PARTNERS
            </h2>
          </div>

          <div className="space-y-12">
            {/* First Row */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-10">
              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/354bde9307702372c60ca850c324905875f1c8e1?width=312"
                  alt="IIT Guwahati"
                  className="w-[156px] h-[152px] object-contain mx-auto mb-10"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  IIT GUWAHATI
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac5ef78be46c9afaa5ebaa22ff2eacfeb1f82936?width=340"
                  alt="IIT Patna"
                  className="w-[170px] h-[158px] object-contain mx-auto mb-10"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  IIT PATNA
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42711823ec3dfac0fe4e364758de1fb6bd48a73e?width=316"
                  alt="OYO"
                  className="w-[158px] h-[151px] object-contain mx-auto mb-10"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  OYO
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/191c211391b7f13f20cb7c1225f2cdb2b5c2fcd7?width=338"
                  alt="Campus Groups"
                  className="w-[169px] h-[163px] object-contain mx-auto mb-10"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  CAMPUS GROUPS
                </h3>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-wrap justify-center items-end gap-8 lg:gap-9">
              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f6b62b6b982703d02c8a3d33a4c3ddd796f628d?width=492"
                  alt="IIT Guwahati Research"
                  className="w-[246px] h-[146px] object-contain mx-auto mb-16"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  IIT GUWAHATI
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b00bcc694ad54c7d3e75d649ef1124f4187e64c?width=312"
                  alt="IIT Alumni Cell"
                  className="w-[156px] h-[168px] object-contain mx-auto mb-10"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  IIT ALUMNI CELL
                </h3>
              </div>

              <div className="text-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/27d16b5242201eda2c67b0a3aa05648cfa90ba9b?width=876"
                  alt="ISM Patna"
                  className="w-[438px] h-[144px] object-contain mx-auto mb-14"
                />
                <h3 className="text-black font-poppins text-xl font-semibold">
                  ISM PATNA
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-[146px]">
          <div className="text-center mb-4">
            <h2 className="text-black font-poppins text-3xl lg:text-[48px] font-normal">
              FAQ's
            </h2>
          </div>

          <div className="space-y-4">
            <div className="h-[57px] bg-[#D9D9D9] rounded"></div>
            <div className="h-[57px] bg-[#D9D9D9] rounded"></div>
            <div className="h-[57px] bg-[#D9D9D9] rounded"></div>
            <div className="h-[57px] bg-[#D9D9D9] rounded"></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
