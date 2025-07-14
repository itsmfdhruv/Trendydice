import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const DeliveryAndBilling = () => (
  <div className="min-h-screen bg-[#FFF4DF] flex flex-col">
    <Navigation />
    <main className="flex-1 py-16 px-4 sm:px-8 flex items-center justify-center">
      <div className="relative w-full max-w-3xl">
        <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#FBDDCA] to-[#FFF4DF] rounded-l-xl animate-pulse" />
        <div
          className="bg-white rounded-xl shadow-[0_2px_16px_rgba(33,18,120,0.08)] p-8 sm:p-12 fade-in-up"
          style={{ animation: "fadeInUp 0.8s ease" }}
        >
          <h1 className="text-[#211278] font-poppins text-3xl sm:text-4xl font-semibold mb-8 text-center tracking-tight">
            Delivery and Billing Information
          </h1>
          <div className="space-y-6 text-black font-poppins text-base sm:text-lg">
            <p>We offer Pan India delivery across all states and cities.</p>
            <p>
              We cater to low minimum order quantities (MOQ) — even a single MOQ
              can be delivered.
            </p>
            <p>
              Paid sampling is available for quality assurance before bulk
              orders.
            </p>
            <p>Product pricing is exclusive of 5% GST and delivery charges.</p>
            <p>
              Delivery cost is additional and varies by location and delivery
              type.
            </p>
            <p>
              Doorstep delivery to individual members is available at an extra
              charge (for corporate employees).
            </p>
            <p>
              Delivery timelines are tentative and may vary due to location and
              external factors.
            </p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .fade-in-up { animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1); }
    `}</style>
  </div>
);

export default DeliveryAndBilling;
