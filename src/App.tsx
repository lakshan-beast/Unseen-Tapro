import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Loader from "./components/ui/Loading";
import ScrollTop from "./components/ui/ScrolTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import CardDetails from "./components/layout/CardDetails";
import AllPlaces3 from "./pages/AllPlaces3";

const MarketPlaceMock = () => (
  <div className="pt-24 min-h-screen bg-zinc-950 text-white p-8 text-center flex justify-center items-center">
    <Loader />
  </div>
);

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<AllPlaces3 />} />
          <Route path="/marketplace" element={<MarketPlaceMock />} />
          <Route path="/services" element={<Services />} />

          <Route path="/places/:id" element={<CardDetails />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <ScrollTop />

      <Footer />
    </Router>
  );
}
