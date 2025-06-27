import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Welcome Section */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-black font-poppins text-5xl lg:text-[75px] font-medium leading-[1.29] mb-6">
            WELCOME TO
          </h1>

          <div className="flex items-center justify-center gap-4 mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e5b0e0e0f01606e4ee336f4ac436b727173eb7e9?width=201"
              alt="Trendydice Logo"
              className="w-[101px] h-[95px]"
            />
            <h2 className="text-[#211278] font-inter text-[37px] font-semibold">
              TRENDYDICE
            </h2>
          </div>

          <p className="text-black/57 font-inter text-2xl lg:text-[32px] font-semibold">
            Empowering Business since 2016
          </p>
        </div>
      </section>

      {/* Content Body 1 */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-[121px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[73px]">
            {/* Image Collage */}
            <div className="relative w-[618px] h-[359px]">
              <div className="absolute top-0 right-0 w-[309px] h-[292px] bg-[#D9D9D9]"></div>
              <div className="absolute bottom-0 left-[57px] w-[238px] h-[168px] bg-[#D9D9D9]"></div>
              <div className="absolute top-[38px] left-0 w-[289px] h-[130px] bg-[#D9D9D9]"></div>
            </div>

            {/* Content */}
            <div className="flex-1 max-w-[471px]">
              <p className="text-black font-poppins text-xl font-light leading-normal text-justify mb-8">
                Founded by IIT Guwahati alumni, Trendydice is your trusted B2B
                partner, bridging the gap between manufacturers and local
                businesses. We leverage cutting-edge technology to streamline
                supply chains, reducing costs and delivery times while ensuring
                top-notch quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Body 2 */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-6xl mx-auto px-6 lg:px-[120px]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]">
            {/* Content */}
            <div className="flex-1 max-w-[631px] space-y-16">
              <p className="text-black font-poppins text-xl font-light leading-normal text-justify">
                We specialize in bulk sales, catering to both offline and online
                markets, including customized and gifting stores. Beyond raw
                materials, we provide exceptional customization services,
                ensuring fast and reliable delivery.
              </p>

              <p className="text-black font-poppins text-xl font-light leading-normal text-justify">
                With warehouses in Delhi, Noida, and Tiruppur, we efficiently
                serve businesses across India. Our mission is to empower
                businesses with affordable products and drive growth through
                innovation.
              </p>
            </div>

            {/* Placeholder Image */}
            <div className="w-[468px] h-[328px] bg-[#D9D9D9]"></div>
          </div>

          <div className="mt-9 text-center">
            <Link
              to="/apparel"
              className="inline-flex items-center justify-center px-11 py-2.5 bg-gradient-to-b from-black to-[#211278] text-white font-poppins text-xl font-medium rounded-[14px] shadow-[0px_0px_16px_rgba(0,0,0,0.40)] hover:shadow-lg transition-all"
            >
              Explore our Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
