import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Apparel from "./pages/Apparel";
import Accessories from "./pages/Accessories";
import Trophies from "./pages/Trophies";
import NotFound from "./pages/NotFound";
import TermsAndConditions from "./pages/TermsAndConditions";
import DeliveryAndBilling from "./pages/DeliveryAndBilling";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AnnouncementBar from "./components/AnnouncementBar";
import BulkTshirt from "./pages/BulkTshirt";
import Printing from "./pages/Printing";
import SportsTshirt from "./pages/SportsTshirt";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="overflow-x-hidden min-h-screen">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/apparel" element={<Apparel />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/trophies" element={<Trophies />} />
              <Route path="/bulk-tshirt" element={<BulkTshirt />} />
              <Route path="/printing" element={<Printing />} />
              <Route path="/sports-tshirt" element={<SportsTshirt />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/delivery-and-billing"
                element={<DeliveryAndBilling />}
              />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
