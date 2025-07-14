import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
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
              <ol className="list-decimal pl-5 space-y-4">
                <li>
                  <strong>Customisation Details</strong>
                  <br />
                  Ensure all details (text, images, colours, sizes) are accurate
                  before placing your order. We print exactly what is submitted.
                  Mistakes in your design or spelling are not our
                  responsibility.
                </li>
                <li>
                  <strong>No Returns or Refunds</strong>
                  <br />
                  Customised items are made-to-order and cannot be returned or
                  refunded unless there is a clear manufacturing defect or a
                  mistake made by us.
                </li>
                <li>
                  <strong>Replacement for Errors</strong>
                  <br />
                  If there is an error on our part in printing or product
                  delivery, contact us within 48 hours of receiving the product.
                  We will provide a full replacement.
                </li>
                <li>
                  <strong>Image Quality</strong>
                  <br />
                  Upload only high-resolution images. We are not responsible for
                  poor print quality due to low-resolution or pixelated artwork
                  submitted by the customer.
                </li>
                <li>
                  <strong>Intellectual Property</strong>
                  <br />
                  By submitting artwork, you confirm you own or have the right
                  to use the content. We are not responsible for any legal
                  issues due to copyright infringement.
                </li>
                <li>
                  <strong>Production & Delivery Time</strong>
                  <br />
                  Once your order is confirmed, we begin production, and
                  delivery is completed within 15 days, depending on location,
                  customisation, and product availability.
                </li>
                <li>
                  <strong>Colour Variations</strong>
                  <br />
                  There may be slight variations in print or fabric colour due
                  to screen differences and print process. These are not
                  considered defects.
                </li>
                <li>
                  <strong>Size Accuracy</strong>
                  <br />
                  Please refer to our size chart before ordering. We do not
                  accept returns due to incorrect size selection.
                </li>
                <li>
                  <strong>Order Changes</strong>
                  <br />
                  Once an order is placed, changes or cancellations may not be
                  possible if the order is already in process.
                </li>
                <li>
                  <strong>Bulk Orders</strong>
                  <br />
                  For bulk/custom corporate orders, additional terms may apply.
                  Please contact our support team for details before ordering.
                </li>
                <li>
                  <strong>Proof Approval</strong>
                  <br />
                  In some cases, we may provide digital mockups for approval.
                  Once approved, no changes can be made.
                </li>
                <li>
                  <strong>Packaging & Branding</strong>
                  <br />
                  Products are delivered without branding unless requested. For
                  white-label or dropshipping services, please inform us at the
                  time of order.
                </li>
                <li>
                  <strong>Customer Communication</strong>
                  <br />
                  It is the customer's responsibility to provide valid contact
                  details for any clarification. Delays in response may affect
                  delivery timelines.
                </li>
                <li>
                  <strong>Use of Finished Designs</strong>
                  <br />
                  We may use your printed products for marketing or social media
                  display unless you request otherwise in writing.
                </li>
                <li>
                  <strong>Review of Terms</strong>
                  <br />
                  By placing an order, you agree to all terms mentioned here and
                  as updated on our website from time to time.
                </li>
                <li>
                  <strong>Payment Terms</strong>
                  <br />
                  Full payment is required before we begin processing your
                  order. No cash-on-delivery available for customised items.
                </li>
                <li>
                  <strong>Safe & Secure Payments</strong>
                  <br />
                  We use trusted payment gateways to ensure your transaction is
                  safe.
                </li>
                <li>
                  <strong>Care Instructions</strong>
                  <br />
                  Follow proper washing and care instructions to maintain print
                  and fabric quality. We are not responsible for damage caused
                  by improper care.
                </li>
                <li>
                  <strong>Policy Updates</strong>
                  <br />
                  These terms may change anytime. Always check our website for
                  the latest version before ordering.
                </li>
              </ol>
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
};

export default TermsAndConditions;
