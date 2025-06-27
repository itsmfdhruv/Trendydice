import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FFF4DF]">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-black font-poppins text-5xl lg:text-[75px] font-light leading-normal">
            LET'S GET IN TOUCH!
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#FFF4DF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-[192px]">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Contact Details */}
            <div className="flex-1 space-y-5">
              <h2 className="text-black font-poppins text-xl font-semibold">
                Contact
              </h2>

              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d225c18c8fb064b0833281892a54fff562c604e5?width=38"
                    alt="Phone"
                    className="w-[19px] h-[19px]"
                  />
                  <span className="text-black font-poppins text-base">
                    97380-97381
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a23447ac906682f50100472463884addfe7706f5?width=44"
                    alt="Email"
                    className="w-[22px] h-[22px]"
                  />
                  <span className="text-black font-poppins text-base">
                    trendydice@gmail.com
                  </span>
                </div>

                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd5c4bf384a08027fa6eead109e2f3c613789dcc?width=50"
                    alt="Location"
                    className="w-[25px] h-[25px] mt-1"
                  />
                  <div className="text-black font-poppins text-base leading-[1.69] max-w-[352px]">
                    <strong>Delhi Office</strong>
                    <br />
                    C-68, 1st Floor, Indira Enclave,Near IGNOU, Neb Sarai,New
                    Delhi, 110068
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd5c4bf384a08027fa6eead109e2f3c613789dcc?width=50"
                    alt="Location"
                    className="w-[25px] h-[25px] mt-1"
                  />
                  <div className="text-black font-poppins text-base leading-[1.37] max-w-[292px]">
                    <strong>Tiruppur Office</strong>
                    <br />
                    No. 32/81, Process Server Street,Tiruppur, 641601
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <div className="bg-[#FFF4DF] rounded-lg shadow-[0px_0px_8px_rgba(0,0,0,0.16)] p-7">
                <h3 className="text-black font-poppins text-xl font-semibold mb-6">
                  Send us a Message
                </h3>

                <form className="space-y-6">
                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5 h-[179px]">
                    <textarea
                      placeholder="Any message"
                      rows={8}
                      className="w-full h-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-b from-black to-[#211278] text-white font-poppins text-xl font-medium rounded-[14px] shadow-[0px_0px_16px_rgba(0,0,0,0.40)] px-11 py-2.5 hover:shadow-lg transition-all"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
