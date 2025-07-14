import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import sportsImg from "../assets/Sports t-shirt/1.png";
import sportsImg2 from "../assets/Sports t-shirt/2.png";
import sportsImg3 from "../assets/Sports t-shirt/3.png";
import sportsImg4 from "../assets/Sports t-shirt/4.png";

const SportsTshirt = () => (
  <div className="min-h-screen bg-[#FFF4DF] text-black flex flex-col items-center px-2 sm:px-0">
    <Navigation />
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-wider text-[#211278] text-center mt-8">
      OUR SERVICES T SHIRT PRINTING CUSTOMISED TSHIRT DTF PRINTING SPORTS
      T-SHIRT
    </h1>
    <hr className="w-full max-w-4xl border-t border-gray-400 mb-10" />
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0">
      <img
        src={sportsImg}
        alt="Sports T-shirt group"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-6 md:mb-0"
        style={{ maxHeight: 400, objectPosition: "center" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          Dry-Fit Sports T-shirts
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Dry fit sports t-shirts, ideal for cricket, football, and various
          sports, feature moisture-wicking fabric to keep athletes dry and
          comfortable. They're lightweight, durable, and offer breathability and
          quick drying. Customization options are available, with on-demand
          delivery in a week. IPL t-shirts are also offered, letting fans
          support their teams stylishly. Prioritize reputable brands for quality
          athletic apparel, ensuring a perfect fit and comfort during intense
          activity.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 205₹</span> t
          shirt printing customised t shirt dtf printing personalized t-shirts
          custom t-shirts
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Second sports t-shirt section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          Team Custom Sports Jerseys
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Get your team ready with custom sports jerseys designed for
          performance and unity. Our jerseys are made from high-quality,
          breathable fabrics that keep players comfortable during intense
          matches. Choose your colors, add your logo, and personalize each
          jersey for a professional look. Fast turnaround and bulk order
          discounts available.
          <br />
          <br />
          <span className="font-bold text-black">
            STARTING PRICE: 225₹
          </span>{" "}
          team jersey printing, custom sportswear, bulk team t-shirts
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={sportsImg2}
        alt="Sports T-shirt action"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-6 md:mb-0"
        style={{ maxHeight: 400, objectPosition: "center" }}
      />
    </div>
    {/* Third sports t-shirt section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <img
        src={sportsImg3}
        alt="Premium Sports T-shirts"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-6 md:mb-0"
        style={{ maxHeight: 400, objectPosition: "center" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          Premium Sports T-SHIRTS
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Dot net sports t-shirts, ideal for cricket, football, and various
          sports, feature premium sublimation printing on high-quality fabric.
          Moisture-wicking technology keeps athletes dry and comfortable, while
          the lightweight and durable construction ensures breathability and
          quick drying. Options include sleeveless, half-sleeve, and full-sleeve
          designs. Customization is available with on-demand delivery in a week.
          IPL t-shirts are also offered for stylish team support. Prioritize
          reputable brands for top-notch athletic apparel, guaranteeing a
          perfect fit and comfort during intense activity.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 395₹</span> t
          shirt printing customised sports tshirt personalized t-shirts custom
          t-shirts
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Fourth sports t-shirt section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          POLO T-SHIRTS Or COLLAR T-SHIRTS
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Our track suits offer a customized option, available with on-demand
          delivery within one week, catering to individual preferences. Designed
          for athletes in cricket, football, and other sports, they blend
          functionality with style. Versatile for both warm-ups and winter wear,
          they ensure athletes stay comfortable and mobile. Crafted with
          high-quality materials, our track suits guarantee durability and
          optimal performance, making them an essential part of any athlete's
          attire.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 1000₹</span> t
          shirt printing customised t shirt dtf printing sports t-shirts
          personalized t-shirts custom t-shirts
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={sportsImg4}
        alt="Track Suits"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
        style={{
          height: "auto",
          maxHeight: 400,
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </div>
    <div className="mt-4" />
    <Footer />
  </div>
);

export default SportsTshirt;
