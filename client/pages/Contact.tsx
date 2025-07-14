import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Contact = () => {
  useEffect(() => {
    if (window.location.hash === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

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
        <div className="max-w-5xl mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Contact Details */}
            <div className="flex-1 space-y-5">
              <h2 className="text-black font-poppins text-xl font-semibold">
                Contact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/31fe1152a227eda5cb7c847149124c9dc1bca3f8?width=38"
                      alt="Phone"
                      className="w-[19px] h-[19px]"
                    />
                    <span className="text-black font-poppins text-base">
                      97380-97381
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a3e6f145db3ae7f39110ff0a62ccf90c046eb6?width=44"
                      alt="Email"
                      className="w-[22px] h-[22px]"
                    />
                    <span className="text-black font-poppins text-base">
                      trendydice@gmail.com
                    </span>
                  </div>
                  <div className="pt-2 text-black font-poppins text-sm">
                    Join us at Trendydice and experience the future of B2B raw
                    material supply!
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b94a1a2e970fe668b37b4def97d849f8a2469?width=50"
                      alt="Location"
                      className="w-[25px] h-[25px] mt-1"
                    />
                    <div className="text-black font-poppins text-base leading-[1.69]">
                      <strong>Address 1</strong>
                      <br />
                      C-68, 1st Floor, Indira Enclave, Near IGNOU, Neb Sarai,
                      New Delhi, 110068
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b94a1a2e970fe668b37b4def97d849f8a2469?width=50"
                      alt="Location"
                      className="w-[25px] h-[25px] mt-1"
                    />
                    <div className="text-black font-poppins text-base leading-[1.69]">
                      <strong>Address 2</strong>
                      <br />
                      N0. 32/81, Process Server Street, Tiruppur, 641601
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc0b94a1a2e970fe668b37b4def97d849f8a2469?width=50"
                      alt="Location"
                      className="w-[25px] h-[25px] mt-1"
                    />
                    <div className="text-black font-poppins text-base leading-[1.69]">
                      <strong>Address 3</strong>
                      <br />
                      A120, Transport Nagar, Noida Sector 69, 201301
                    </div>
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

                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const name = (
                      form.elements.namedItem("name") as HTMLInputElement
                    )?.value;
                    const email = (
                      form.elements.namedItem("email") as HTMLInputElement
                    )?.value;
                    const contact = (
                      form.elements.namedItem(
                        "contactNumber",
                      ) as HTMLInputElement
                    )?.value;
                    const message = (
                      form.elements.namedItem("message") as HTMLTextAreaElement
                    )?.value;
                    if (!/^\d{10}$/.test(contact)) {
                      alert("Please enter a valid 10-digit contact number.");
                      return;
                    }
                    // WhatsApp number (change to your desired number)
                    const whatsappNumber = "919738097381";
                    const text =
                      `Hi Sir,%0A` +
                      `My name is ${name}. I recently filled out the contact form on your website.%0A` +
                      `You can reach me at ${email} or ${contact}.%0A%0A` +
                      `Here’s my message:%0A"${message}"`;
                    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
                    window.open(url, "_blank");
                    form.reset();
                  }}
                >
                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="w-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5">
                    <input
                      type="tel"
                      name="contactNumber"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                      placeholder="Contact Number (10 digits)"
                      className="w-full bg-transparent text-black font-poppins text-base font-light placeholder:text-black focus:outline-none"
                    />
                  </div>

                  <div className="bg-[#FFF4DF] rounded-[14px] shadow-[0px_0px_8px_rgba(0,0,0,0.25)] px-11 py-2.5 h-[179px]">
                    <textarea
                      name="message"
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
