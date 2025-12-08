import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { Toaster } from "@/components/ui/toaster";
import Projects1 from "./pages/Projects1";
import BikeSalesPortfolio from "./pages/BikeSalesPortfolio";

import EcommerceAnalytics from "./pages/EcommercePy";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/project1" element={<Projects1 />} />
        <Route path="/BikeSalesPortfolio" element={<BikeSalesPortfolio />} />
        <Route path="/EcommerceAnalytics" element={<EcommerceAnalytics />} />
      </Routes>
    </>
  );
}

export default App;
