import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Loader from "./components/ui/Loading";
import ScrollTop from "./components/ui/ScrollTop";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import AllPlaces from "./pages/AllPlaces";
import { AdminDashboard } from "./pages/AdminDashboard";

import CardDetails from "./components/layout/CardDetails";

const MarketPlaceMock = () => (
  <div className="pt-24 min-h-screen bg-zinc-950 text-white p-8 text-center flex justify-center items-center">
    <Loader />
  </div>
);

export default function App() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + Shift + A එබූ විට
      if (e.ctrlKey && e.shiftKey && e.key === "L") {
        window.location.href = "/admin-dashboard";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen font-sans selection:bg-emerald-500 selection:text-black [.scroll-up_&]:mt-4]">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<AllPlaces />} />
          <Route path="/marketplace" element={<MarketPlaceMock />} />
          <Route path="/services" element={<Services />} />

          <Route path="/places/:id" element={<CardDetails />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>

      <ScrollTop />

      <Footer />
    </Router>
  );
}
