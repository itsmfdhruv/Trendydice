import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TermsAndConditions = () => (
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
            Terms and Conditions
          </h1>
          <div className="space-y-6 text-black font-poppins text-base sm:text-lg">
            <p>
              <strong>Color availability</strong> is subject to current stock
              and may vary at the time of order confirmation.
            </p>
            <p>
              Final pricing is determined based on the design complexity, chosen
              color, fabric quality, and total order quantity.
            </p>
            <p>
              In case of any issues or errors, we ensure an instant resolution
              to avoid delays. A thorough investigation will follow, and
              responsibility will be assigned accordingly.
            </p>
            <p>
              <strong>Note:</strong> Product images are for reference purposes
              only—actual merchandise colors may vary slightly due to fabric
              dyeing and screen display differences.
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

export default TermsAndConditions;
