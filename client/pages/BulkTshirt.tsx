import React from "react";
import { Link } from "react-router-dom";
import bulkTshirtImg from "../assets/Bulk t-shirt/1.jpg";
import bulkTshirtImg2 from "../assets/Bulk t-shirt/2 (2).png";
import bulkTshirtImg3 from "../assets/Bulk t-shirt/3.png";
import bulkTshirtImg4 from "../assets/Bulk t-shirt/4.png";
import bulkTshirtImg5 from "../assets/Bulk t-shirt/5.png";
import bulkTshirtImg6 from "../assets/Bulk t-shirt/6.png";
import bulkTshirtImg7 from "../assets/Bulk t-shirt/7.png";
import bulkTshirtImg8 from "../assets/Bulk t-shirt/8.png";
import bulkTshirtImg9 from "../assets/Bulk t-shirt/9.png";
import bulkTshirtImg10 from "../assets/Bulk t-shirt/10.png";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const BulkTshirt = () => (
  <div className="min-h-screen bg-[#FFF4DF] flex flex-col items-center px-2 sm:px-0">
    <Navigation />
    <div className="p-4 sm:p-8 w-full flex flex-col items-center max-w-7xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 tracking-wider text-[#211278] text-center">
        OUR SERVICES T SHIRT PRINTING CUSTOMISED TSHIRT DTF PRINTING BULK
        T-SHIRT
      </h1>
      <hr className="w-full max-w-4xl border-t border-gray-300 mb-6 sm:mb-10" />
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl px-2 sm:px-0">
        <img
          src={bulkTshirtImg}
          alt="Bulk T-shirt"
          className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0"
          style={{ maxHeight: 400 }}
        />
        <div className="flex-1 text-left w-full">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
            OVERSIZE T-SHIRTS
          </h2>
          <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
            Indulge in the ultimate comfort and style with our oversize T-shirts
            crafted from 200GSM, 220GSM, and 240GSM cotton. Experience the
            luxurious feel of bio-washed softness, elevating these shirts to a
            premium quality level. Whether embracing a laid-back vibe or making
            a bold fashion statement, our oversize tees offer the perfect blend
            of comfort and trendiness. Unleash your individuality with these
            versatile and unisex wardrobe essentials.
            <br />
            <br />
            <span className="font-bold text-black">STARTING PRICE: 185₹</span> t
            shirt printing customised t shirt dtf printing bulk t-shirt
            corporate t-shirts bulk t-shirt printing
          </p>
          <Link
            to="/contact#top"
            className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </div>
    {/* Men's Round Neck T-Shirts Section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-10 sm:mt-16 px-2 sm:px-0">
      <div className="flex-1 text-left w-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          MEN'S ROUND NECK T-SHIRTS
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Men's round neck T-shirts epitomize casual comfort with their classic
          design, offering versatility for various occasions. Crafted from
          premium cotton and available in 160GSM, 180GSM, and 200GSM, they
          provide a soft and breathable feel. Whether worn solo or layered,
          these wardrobe essentials cater to timeless style. Embrace the
          simplicity of the round neck silhouette, making these T-shirts a
          versatile and seasonless addition to your collection. Elevate your
          everyday look with our quality and comfort-driven men's round neck
          tees.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 145₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={bulkTshirtImg2}
        alt="Men's Round Neck T-shirt"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0"
        style={{ maxHeight: 400 }}
      />
    </div>
    {/* V-Neck Neck T-Shirts Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-10 sm:mt-16 px-2 sm:px-0">
      <img
        src={bulkTshirtImg3}
        alt="V-Neck T-shirt"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0"
        style={{ maxHeight: 400 }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          V-NACK NECK T-SHIRTS
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Explore timeless style with our V-neck men's T-shirts, crafted from
          premium 100% Cotton and offering a luxurious feel with 180GSM and
          200GSM options. The Bio-wash treatment ensures softness and
          durability, making these tees essential for comfort and everyday
          sophistication. Elevate your wardrobe with the perfect blend of
          quality and style in our V-neck T-shirts.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 155₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Polo T-Shirts or Collar T-Shirts Section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-10 sm:mt-16 px-2 sm:px-0">
      <div className="flex-1 text-left w-full">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          POLO T-SHIRTS Or COLLAR T-SHIRTS
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Indulge in timeless elegance with our Polo men's T-shirts, expertly
          crafted from premium 100% Cotton and available in 220GSM and 240GSM
          for a luxurious feel. The Bio-wash treatment guarantees enduring
          softness, and the matty finish adds an extra touch of sophistication
          to your wardrobe. Elevate your casual style with the perfect blend of
          comfort and premium quality in our Polo T-shirts.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 205₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={bulkTshirtImg4}
        alt="Polo T-shirt"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0"
        style={{ maxHeight: 400 }}
      />
    </div>
    {/* Hoodie, Zipper & Varsity Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-14 sm:mt-20 px-2 sm:px-0">
      <div className="flex-1 text-left w-full order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          HOODIE, ZIPPER & VARSITY
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Experience ultimate warmth and style with our Hoodies, featuring a
          zipper and varsity design, available in 280GSM, 300GSM, 340GSM, and
          360GSM. Crafted from premium Spun PC and Bio-washed for enhanced
          softness, these hoodies are the perfect winter companions. Embrace
          comfort and fashion effortlessly with our heavyweight and cozy hoodie
          collection.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 365₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={bulkTshirtImg5}
        alt="Hoodie, Zipper & Varsity"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0 order-1 md:order-2"
        style={{ maxHeight: 400, objectPosition: "top" }}
      />
    </div>
    {/* Women's Full Sleeve Crop-Top Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-14 sm:mt-20 px-2 sm:px-0">
      <img
        src={bulkTshirtImg6}
        alt="Women's Full Sleeve Crop-Top"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0 order-1 md:order-1"
        style={{ maxHeight: 400, objectPosition: "top" }}
      />
      <div className="flex-1 text-left w-full order-2 md:order-2">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          WOMEN'S FULL SLEEVE CROP-TOP
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Get ready for summer vibes with our soft and comfy women's full sleeve
          crop top. It's made from 100% bio-wash cotton, ensuring a cozy feel.
          Stay cool and stylish on sunny days with this trendy top designed for
          comfort.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 160₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Women's Half Sleeve Crop-Top Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-14 sm:mt-20 mb-14 sm:mb-20 px-2 sm:px-0">
      <div className="flex-1 text-left w-full order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          WOMEN'S HALF SLEEVE CROP-TOP
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Get ready for summer in our comfy women's half sleeve crop-top. It's
          made from soft 100% bio-wash cotton, ensuring a cozy feel. Stay cool
          and stylish on sunny days with this trendy top designed for comfort.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 155₹</span> t
          shirt printing customised t shirt dtf printing bulk t-shirt corporate
          t-shirts bulk t-shirt printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={bulkTshirtImg7}
        alt="Women's Full Sleeve Crop-Top"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0 order-1 md:order-1"
        style={{ maxHeight: 400, objectPosition: "top" }}
      />
    </div>
    {/* Women's Half Sleeve Round Neck T-Shirts Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-14 sm:mt-20 mb-14 sm:mb-20 px-2 sm:px-0">
      <img
        src={bulkTshirtImg8}
        alt="Women's Half Sleeve Round Neck T-Shirts"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0 order-1 md:order-1"
        style={{ maxHeight: 400, objectPosition: "top" }}
      />
      <div className="flex-1 text-left w-full order-2 md:order-2">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          WOMEN'S HALF SLEEVE ROUND NECK T-SHIRTS
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Get summer-ready in our round-neck women's t-shirt, crafted from 100%
          bio-wash soft cotton. Embrace the season with this comfortable and
          breathable tee, perfect for warm days. Stay effortlessly cool and
          stylish with the classic round-neck design, ideal for a laid-back
          summer look.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 145₹</span> t
          shirt printing customised t shirt dtf printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Women's Designer T-Shirts Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 w-full max-w-5xl mt-14 sm:mt-20 mb-14 sm:mb-20 px-2 sm:px-0">
      <div className="flex-1 text-left w-full order-2 md:order-1">
        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 tracking-wide text-[#211278]">
          WOMEN'S DESIGNER T-SHIRTS
        </h2>
        <p className="mb-3 sm:mb-4 text-gray-800 text-sm sm:text-base">
          Elevate your style with our designer women's round-neck t-shirt,
          crafted with attention to detail. Made from 100% bio-wash soft cotton,
          this tee combines comfort with a touch of sophistication. Embrace the
          fashion-forward look of the round-neck design, perfect for a trendy
          and casual vibe.
          <br />
          <br />
          <span className="font-bold text-black">STARTING PRICE: 205₹</span> t
          shirt printing customised t shirt dtf printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 bg-white border border-[#211278] text-[#211278] font-semibold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-sm sm:text-base"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={bulkTshirtImg9}
        alt="Women's Designer T-Shirts"
        className="w-full md:w-1/2 rounded-lg object-cover shadow-lg mb-4 md:mb-0 order-1 md:order-2"
        style={{ maxHeight: 400, objectPosition: "top" }}
      />
    </div>
    <Footer />
  </div>
);

export default BulkTshirt;
