import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Dashboard from "./pages/Dashboard";
import CardDetails from "./components/CardDetails";
import AllPlaces from "./pages/AllPlaces";

// const AllPlacesMock = () => (
//   <div className="pt-24 min-h-screen bg-zinc-950 text-white p-8">
//     📍 Destinations - All Cards Page ළඟදීම...
//   </div>
// );
const PlannerMock = () => (
  <div className="pt-24 min-h-screen bg-zinc-950 text-white p-8 text-center flex justify-center items-center">
    Comming soon...
  </div>
);
// const DashboardMock = () => (
//   <div className="pt-24 min-h-screen bg-zinc-950 text-white p-8">
//     👤 User Dashboard & Medical Passport ළඟදීම...
//   </div>
// );

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen font-sans selection:bg-emerald-500 selection:text-black">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<AllPlaces />} />
          <Route path="/marcketplace" element={<PlannerMock />} />
          <Route path="/services" element={<Services />} />

          <Route path="/places/:id" element={<CardDetails />} />

          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}
