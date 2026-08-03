import { useState } from "react";
import { useNavigate } from "react-router-dom";

// store data
import { districtHelplines } from "../data/services";
import { sriLankaDistricts } from "../data/sriLankaDistricts";

// react icons
import { FaMagnifyingGlass, FaCarRear } from "react-icons/fa6";
import { GiSiren } from "react-icons/gi";
import { MdOutlineWifiCalling3, MdOutlineMyLocation } from "react-icons/md";

export default function Services() {
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [searchQuery, setSearchQuery] = useState("");

  // 🔍 Search සහ District Filter Logic එක
  const filteredHelplines = districtHelplines.filter((item) => {
    const matchesDistrict =
      selectedDistrict === "All Districts" ||
      item.district === selectedDistrict;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  const navigate = useNavigate();

  return (
    <div className="pt-28 min-h-screen bg-[#01030f] text-white pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 mt-0">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white-900/60 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:text-white text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all active:scale-95 mb-4 mt-0">
          ← Back to Home
        </button>

        <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
          Utility & Safety Command
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          Mobility & SOS Lifelines
        </h1>
        <p className="text-gray-400 text-xs md:text-sm font-light max-w-2xl leading-relaxed">
          Your centralized operations center. Access immediate emergency
          assistance, cross-reference district-wise hotlines, or activate
          instant flight and cab bookings.
        </p>
      </div>

      {/* 🔴 SECTION 1: GLOBAL EMERGENCY WIDGET */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="bg-zinc-900/40 border border-red-500/10 p-6 md:p-8 rounded-4xl flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-400">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-ping"></span>
            </div>
            <div>
              <h2 className="text-lg font-black uppercase tracking-tight">
                Immediate SOS Response
              </h2>
              <p className="text-gray-400 text-xs font-light mt-0.5">
                Direct 24/7 links to national ambulance and tourist security
                services.
              </p>
            </div>
          </div>
          <div className="flex gap-4 w-full sm:w-auto">
            <a
              href="tel:1990"
              className="flex-1 sm:flex-none text-center bg-red-500 hover:bg-red-600 text-white font-black px-6 py-3 rounded-xl text-xs tracking-wider uppercase transition-all shadow-lg shadow-red-500/10 flex items-center justify-center gap-2 cursor-pointer">
              <MdOutlineWifiCalling3 size={16} /> 1990 Ambulance
            </a>
            <a
              href="tel:1912"
              className="flex-1 sm:flex-none text-center bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold px-6 py-3 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer">
              <GiSiren size={20} className="text-red-500 animate-pulse" />{" "}
              Tourist Police
            </a>
          </div>
        </div>
      </section>

      {/* 🚖 SECTION 2: MOBILITY SERVICES GRID (අලුතින් පිරිසිදුව එක් කලා) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
          <FaCarRear className="text-emerald-400" /> Mobility & On-Demand
          Transit
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="https://pickme.lk/services/ride/"
            target="_blank"
            className="bg-zinc-900/40 border border-white/5 hover:border-yellow-400/30 p-5 rounded-2xl flex flex-col justify-between h-36 transition-all group cursor-pointer">
            <span className="bg-yellow-400 text-black font-black text-[10px] px-2.5 py-1 rounded-md uppercase w-max">
              PickMe
            </span>
            <p className="text-gray-400 text-xs font-light mt-2">
              Dispatch local tuk-tuks, cars, or food drops instantly.
            </p>
          </a>
          <a
            href="uber://?action=setPickup"
            className="bg-zinc-900/40 border border-white/5 hover:border-white/20 p-5 rounded-2xl flex flex-col justify-between h-36 transition-all group cursor-pointer">
            <span className="bg-white text-black font-black text-[10px] px-2.5 py-1 rounded-md uppercase w-max">
              Uber
            </span>
            <p className="text-gray-400 text-xs font-light mt-2">
              Request international standard rides and airport drops.
            </p>
          </a>
          {/* <a
            href="http://helitours.lk"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 p-5 rounded-2xl flex flex-col justify-between h-36 transition-all group cursor-pointer">
            <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-[10px] px-2.5 py-1 rounded-md uppercase w-max flex items-center gap-1">
              <GiHelicopter size={18} className="mr-1" /> Helitours
            </span>
            <p className="text-gray-400 text-xs font-light mt-2">
              Charter high-end domestic security helicopters.
            </p>
          </a>
          <a
            href="https://cinnamonair.com"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900/40 border border-white/5 hover:border-teal-500/20 p-5 rounded-2xl flex flex-col justify-between h-36 transition-all group cursor-pointer">
            <span className="bg-teal-500/10 border border-teal-500/20 text-teal-400 font-bold text-[10px] px-2.5 py-1 rounded-md uppercase w-max flex items-center gap-1">
              <GiCommercialAirplane size={14} className="mr-1" /> Cinnamon Air
            </span>
            <p className="text-gray-400 text-xs font-light mt-2">
              Book luxury domestic floatplanes to key water bays.
            </p>
          </a> */}
        </div>
      </section>

      {/* 🔍 SECTION 3: SEARCH & FILTER CONTROLS (අලුතින් ලියන ලදී) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-zinc-900/20 border border-white/5 p-4 rounded-2xl backdrop-blur-md">
          {/* Search Bar Input */}
          <div className="relative w-full md:flex-1">
            <FaMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
            <input
              type="text"
              placeholder="Search institutions (e.g., General Hospital, Wildlife Office)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors w-full"
            />
          </div>

          {/* District Dropdown Selector */}
          <div className="w-full md:w-64">
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-500 transition-colors w-full cursor-pointer">
              <option value="All Districts">All Districts</option>
              {sriLankaDistricts.map((dist, idx) => (
                <option key={idx} value={dist}>
                  {dist}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* 📋 SECTION 4: DIRECTORY GRID LIST */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 max-h-167.5 overflow-x-scroll scrollbar-none">
        <div className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="divide-y divide-white/5">
            {filteredHelplines.length > 0 ? (
              filteredHelplines.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/2 transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border shrink-0 w-30 ${
                        item.category === "Hospital"
                          ? "border-red-500/20 bg-red-500/5 text-red-400"
                          : item.category === "Police"
                            ? "border-blue-500/20 bg-blue-500/5 text-blue-400"
                            : item.category === "Wildlife"
                              ? "border-green-500/20 bg-green-500/5 text-green-400"
                              : item.category === "Navy"
                                ? "border-teal-500/20 bg-teal-500/5 text-teal-400"
                                : item.category === "Disaster"
                                  ? "border-purple-500/20 bg-purple-500/5 text-purple-400"
                                  : "border-amber-500/20 bg-amber-500/5 text-amber-400"
                      }`}>
                      {item.category}
                    </span>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide ">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-1 flex items-center gap-1.5">
                        <MdOutlineMyLocation size={16} />
                        {item.district} District
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/5 sm:border-none pt-3 sm:pt-0">
                    <span className="font-mono text-xs sm:text-sm text-gray-300 font-bold tracking-wider">
                      {item.number}
                    </span>
                    <a
                      href={`tel:${item.number}`}
                      className="bg-white/5 hover:bg-emerald-500/40 hover:text-white border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 text-center active:scale-95 shadow-md cursor-pointer">
                      Call Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-gray-500 text-xs font-light">
                No institutional helplines found matching your filter criteria.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
