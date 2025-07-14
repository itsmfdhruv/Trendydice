import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import printingImg from "../assets/Printing/1.png";
import printingImg2 from "../assets/Printing/2.png";
import printingImg3 from "../assets/Printing/3.png";
import printingImg4 from "../assets/Printing/4.png";
import printingImg5 from "../assets/Printing/5.png";

const Printing = () => (
  <div className="min-h-screen bg-[#FFF4DF] text-black flex flex-col items-center px-2 sm:px-0">
    <Navigation />
    <h1 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 tracking-wider text-[#211278] text-center mt-8">
      PRINTING SERVICES DTF PRINTING DTG PRINTING T SHIRT PRINTING
    </h1>
    <hr className="w-full max-w-4xl border-t border-gray-400 mb-10" />
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0">
      <img
        src={printingImg}
        alt="DTF Printing Process"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-contain"
        style={{ maxHeight: 400, background: "#fff" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          DTF PRINTING
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          DTF (direct-to-film) printing is a cutting-edge technology in the
          world of custom apparel. Unlike traditional printing methods, DTF
          allows for vibrant, detailed designs directly onto fabric. The process
          involves printing the design onto a special film, which is then
          transferred onto the garment using heat and pressure.
          <br />
          <br />
          This technique offers a high level of color accuracy, intricate
          detailing, and excellent durability. DTF printing is versatile,
          catering to various fabrics and garment types, making it ideal for
          creating personalized and eye-catching apparel.
          <br />
          <br />
          Whether you're looking to showcase your unique style or create custom
          merchandise, DTF printing provides a seamless way to bring your
          designs to life with vivid colors and exceptional quality. Experience
          the next level of customization with DTF printing for a truly
          personalized and standout wardrobe.
          <br />
          <br />
          <ul className="list-disc ml-6">
            <li>
              <b>Versatility:</b> It accommodates various fabric types,
              providing flexibility for printing on cotton, blends, poluster and
              more.
            </li>
            <li>
              <b>No Minimum Order Quantity:</b> DTF is cost-effective for small
              quantities, enabling on-demand printing without the need for bulk
              orders.
            </li>
            <li>
              <b>Quick Turnaround:</b> With minimal setup requirements, DTF
              printing offers a faster turnaround time compared to traditional
              methods.
            </li>
            <li>
              <b>Price Range:</b> 0.35 to 0.6 Per Square Inches Depand on
              Quantity and design. t shirt printing dtg printing
            </li>
          </ul>
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide mt-6"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* DTG Printing Section */}
    <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <img
        src={printingImg2}
        alt="DTG Printing Process"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-contain"
        style={{ maxHeight: 400, background: "#fff" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          DTG PRINTING
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Direct-to-garment (DTG) printing is a modern and innovative method of
          apparel customization. This technique involves using specialized
          inkjet printers to print full-color designs directly onto fabric.
          Unlike traditional methods, DTG allows for intricate and vibrant
          designs without the need for screens or extensive setup.
          <br />
          <br />
          Here's what sets DTG printing apart:
          <ul className="list-disc ml-6">
            <li>
              <b>Detailed and Colorful Designs:</b> DTG excels at reproducing
              intricate details and a wide range of colors, making it ideal for
              complex and vivid designs.
            </li>
            <li>
              <b>No Minimum Order Quantity:</b> DTG is Premium for small
              quantities, enabling on-demand printing without the need for bulk
              orders.
            </li>
            <li>
              <b>Quick Turnaround:</b> With minimal setup requirements, DTG
              printing offers a faster turnaround time compared to traditional
              methods.
            </li>
            <li>
              <b>Environmentally Friendly:</b> DTG inks are water-based and
              eco-friendly, reducing environmental impact.
            </li>
            <li>
              <b>Price Range:</b> 1.35 to 1.9 Per Square Inches Depand on
              Quantity and design. t shirt printing dtg printing
            </li>
          </ul>
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide mt-6"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Screen Printing Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <img
        src={printingImg3}
        alt="Screen Printing Process"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-contain"
        style={{ maxHeight: 400, background: "#fff" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          SCREEN PRINTING
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Screen printing, also known as silk screening, is a traditional and
          widely used method for printing designs on various surfaces, including
          fabric, paper, metal, and more. Here's an overview of screen printing:
          <br />
          <br />
          <b>Key Features of Screen Printing:</b>
          <ul className="list-disc ml-6">
            <li>
              <b>Durability:</b> Screen printing produces durable and
              long-lasting prints, making it suitable for high-wear items like
              T-shirts.
            </li>
            <li>
              <b>Cost-Effective for Bulk:</b> It is often more cost-effective
              for large quantities due to the setup involved.
            </li>
            <li>
              <b>Versatility:</b> Works well on various materials and surfaces.
            </li>
            <li>
              <b>Vibrant Colors:</b> Can achieve vibrant and opaque colors,
              especially on darker fabrics.
            </li>
          </ul>
          <br />
          While screen printing is a traditional method, it remains a popular
          choice for many applications, particularly when producing large
          quantities of custom-designed items with bold and colorful graphics.
          <br />
          <br />
          <b>Price Range:</b> 10 to 50 per piece Depand on Quantity and design.
          t shirt printing dtf printing dtg printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide mt-6"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    {/* Sublimation Printing Section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          SUBLIMATION PRINTING
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Sublimation printing is a unique and innovative technique used to
          transfer full-color designs onto a variety of materials, primarily
          polyester fabrics and polyester-coated items. Here's an overview of
          sublimation printing:
          <br />
          <br />
          <b>Key Features of Sublimation Printing:</b>
          <ul className="list-disc ml-6">
            <li>
              <b>Vivid Colors:</b> Sublimation produces vibrant and long-lasting
              colors with excellent color reproduction.
            </li>
            <li>
              <b>Durability:</b> The prints are embedded into the material,
              making them resistant to fading, cracking, or peeling.
            </li>
            <li>
              <b>Full Coverage:</b> Sublimation allows for full-color,
              edge-to-edge printing without affecting the fabric's texture.
            </li>
          </ul>
          <br />
          Sublimation printing is commonly used for creating personalized
          apparel, sportswear, home décor items, promotional products, and more.
          It's especially popular for products that require full-color and
          all-over prints. It's important to note that sublimation is most
          effective on polyester or polyester-coated items, as the process
          relies on the material's ability to absorb the sublimated inks.
          <br />
          <br />
          <b>Price Range</b> 0.15 to 0.6 Per Square Inches Depand on Quantity
          and design. t shirt printing dtg printing dtf printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide mt-6"
        >
          CONTACT US
        </Link>
      </div>
      <img
        src={printingImg4}
        alt="Sublimation Printing Process"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-contain"
        style={{ maxHeight: 400, background: "#fff" }}
      />
    </div>
    {/* Embroidery Section */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-5xl px-2 sm:px-0 mt-16">
      <img
        src={printingImg5}
        alt="Embroidery Process"
        className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0 object-contain"
        style={{ maxHeight: 400, background: "#fff" }}
      />
      <div className="flex-1 text-left w-full">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide text-[#211278]">
          EMBROIDERY
        </h2>
        <p className="mb-4 text-gray-800 text-base">
          Embroidery is a timeless and intricate decorative art form that
          involves the creation of designs by stitching threads onto fabric.
          This method adds a tactile and textured element to textiles, elevating
          the visual appeal of various items. Here's an overview of embroidery:
          <br />
          <br />
          <b>Key Features of Embroidery:</b>
          <ul className="list-disc ml-6">
            <li>
              <b>High-Quality and Durable:</b> Embroidered designs are known for
              their durability and resistance to wear and tear.
            </li>
            <li>
              <b>Textured and 3D Effect:</b> Embroidery adds a tactile element
              to the fabric, creating a textured and three-dimensional effect.
            </li>
            <li>
              <b>Versatility:</b> It can be applied to a wide range of fabrics,
              including clothing, hats, bags, and home textiles.
            </li>
            <li>
              <b>Customization:</b> Embroidery allows for the personalization of
              items with names, logos, and intricate designs.
            </li>
          </ul>
          <br />
          Embroidery is widely used in the fashion industry for branding and
          embellishments. It is also popular for creating personalized gifts,
          uniforms, team apparel, and various home decor items. The
          craftsmanship of embroidery continues to be valued for its ability to
          add a touch of elegance and sophistication to a wide array of
          products.
          <br />
          <br />
          <b>Price Range</b> 15 to 50 per piece Depand on Quantity and design. t
          shirt printing dtg printing dtf printing
        </p>
        <Link
          to="/contact#top"
          className="inline-block px-10 py-4 bg-white border border-[#211278] text-[#211278] font-bold rounded hover:bg-[#211278] hover:text-white transition-colors duration-200 shadow text-lg tracking-wide mt-6"
        >
          CONTACT US
        </Link>
      </div>
    </div>
    <div className="mt-4" />
    <Footer />
  </div>
);

export default Printing;
