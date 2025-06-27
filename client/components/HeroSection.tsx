import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import aboutUsImage from "../assets/assets_task_01jykdkjd0e3mr43apaeyffn6s_1750851241_img_1 2.png";

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-8 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Slides in from left */}
          <div
            className={`space-y-8 transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-7xl font-bold text-[#1c1c1e] font-poppins leading-tight">
                TRENDYDICE
              </h1>

              <p className="text-[#232222] text-lg font-light font-poppins leading-relaxed max-w-lg">
                Trendydice is a B2B print-on-demand and dropshipping partner,
                connecting manufacturers with businesses for scalable,
                high-quality customized merchandise solutions.
                <br />
                <br />
                We power your brand's success with reliable, tech-driven apparel
                and gifting services tailored for events, institutions, and
                creators.
              </p>
            </div>

            <div className="space-y-4">
              <Button className="w-full max-w-md h-12 rounded-2xl bg-gradient-to-r from-black to-[#211278] hover:from-gray-800 hover:to-[#1a0f60] text-white font-poppins text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Personalized Fest & Event Merchandise
              </Button>

              <Button className="w-full max-w-md h-12 rounded-2xl bg-gradient-to-r from-black to-[#211278] hover:from-gray-800 hover:to-[#1a0f60] text-white font-poppins text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Product Category
              </Button>
            </div>
          </div>

          {/* Image - Slides in from right */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0"
            }`}
          >
            <img
              src={aboutUsImage}
              alt="Trendy hoodie merchandise"
              className="w-80 lg:w-96 h-auto object-cover rounded-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
