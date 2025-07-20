import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import teamPhoto from "../assets/team-photo.png"; // Import the team photo from assets
import memories from "../assets/memories.jpg"; // Import the new image for the right side
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Trendydice</title>
        <meta
          name="description"
          content="Learn about Trendydice, founded by IIT Guwahati alumni, empowering businesses with custom merchandise, apparel, trophies, and more since 2016."
        />
        <meta
          name="keywords"
          content="about Trendydice, company info, B2B, custom merchandise, IIT Guwahati, business empowerment"
        />
      </Helmet>
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
                loading="lazy"
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
              {/* Team Photo - replaces placeholder collage */}
              <div className="w-full lg:w-[618px] flex justify-center mb-8 lg:mb-0">
                <img
                  src={teamPhoto}
                  alt="Trendydice Team"
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover w-full max-w-[618px] h-auto"
                />
              </div>

              {/* Content */}
              <div className="flex-1 max-w-[471px]">
                <p className="text-black font-poppins text-xl font-light leading-normal text-justify mb-8">
                  Founded by IIT Guwahati alumni, Trendydice is your trusted B2B
                  partner, bridging the gap between manufacturers and local
                  businesses. We leverage cutting-edge technology to streamline
                  supply chains, reducing costs and delivery times while
                  ensuring top-notch quality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Body 2 */}
        <section className="py-16 bg-[#FFF4DF]">
          <div className="max-w-6xl mx-auto px-6 lg:px-[120px]">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[100px]">
              {/* Our Offerings Section */}
              <div className="flex-1 mb-12 lg:mb-0">
                <h2 className="text-2xl font-bold text-[#211278] mb-4">
                  Our Offerings:
                </h2>
                <ul className="list-disc list-inside text-black font-poppins text-xl font-light space-y-2 mb-8">
                  <li>T-shirts</li>
                  <li>Hoodies</li>
                  <li>Mugs</li>
                  <li>Shippers</li>
                  <li>Keychains</li>
                  <li>Sports jerseys</li>
                  <li>Bags</li>
                  <li>Customisable products</li>
                </ul>
              </div>
              {/* Offerings Image on the right */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={memories}
                  alt="Trendydice Memories"
                  loading="lazy"
                  className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto"
                />
              </div>
            </div>

            {/* Embedded Paragraph - full width, above Explore our Products */}
            <div className="w-full mb-8">
              <p className="text-black font-poppins text-xl font-light leading-normal text-justify mb-4">
                We specialise in bulk sales, catering to both offline and online
                markets, including customised and gifting stores. Beyond raw
                materials, we provide exceptional customisation services,
                ensuring fast and reliable delivery.
              </p>
              <p className="text-black font-poppins text-xl font-light leading-normal text-justify">
                With warehouses in Delhi, Noida, and Tiruppur, we efficiently
                serve businesses across India. Our mission is to empower
                businesses with affordable products and drive growth through
                innovation.
              </p>
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
    </>
  );
};

export default About;
