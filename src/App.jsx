import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

import { Toaster } from "@/components/ui/toaster";
import Projects1 from "./pages/Projects1";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/project1" element={<Projects1 />} />
      </Routes>
    </>
  );
}

export default App;
