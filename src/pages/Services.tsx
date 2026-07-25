import { useState } from "react";
import {
  mobilityServices,
  districtHelplines,
  sriLankaDistricts,
} from "../data/services";

import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { GiSiren } from "react-icons/gi";
import { MdOutlineShareLocation } from "react-icons/md";

export default function Services() {
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHelplines = districtHelplines.filter((item) => {
    const matchesDistrict =
      selectedDistrict === "All Districts" ||
      item.district === selectedDistrict;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDistrict && matchesSearch;
  });

  return (
    <div className="pt-32 min-h-screen bg-zinc-950 text-white pb-16">
      {/* 🗺️ PAGE HEADER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
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
        <div className="bg-zinc-900/40 border border-red-500/10 p-6 md:p-8 rounded-[2rem] flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
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
              className="flex-1 sm:flex-none text-center bg-red-500 hover:bg-red-600 text-black font-black px-6 py-3 rounded-xl text-xs tracking-wider uppercase transition-all shadow-lg shadow-red-500/10">
              <MdOutlineWifiCalling3 /> 1990 Ambulance
            </a>
            <a
              href="tel:1912"
              className="flex-1 sm:flex-none text-center bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold px-6 py-3 rounded-xl text-xs tracking-wider uppercase transition-all">
              <GiSiren /> Tourist Police
            </a>
          </div>
        </div>
      </section>

      {/* 🚖 SECTION 2: MOBILITY SERVICES BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mobilityServices.map((service) => (
          <div
            key={service.id}
            className="bg-zinc-900/20 border border-white/5 p-6 rounded-[2rem] flex flex-col justify-between gap-6 hover:border-white/10 transition-all duration-300 group">
            <div>
              <span
                className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded-md border ${
                  service.category === "Aviation"
                    ? "border-teal-500/30 bg-teal-500/10 text-teal-400"
                    : service.category === "Train"
                      ? "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                }`}>
                {service.category} Transit
              </span>
              <h3 className="text-lg font-black text-white uppercase tracking-tight mt-4 mb-2 group-hover:text-emerald-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <a
              href={service.link}
              target={service.type === "web" ? "_blank" : "_self"}
              rel="noreferrer"
              className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold py-3 px-4 rounded-xl text-xs tracking-wider uppercase text-center block transition-all">
              {service.type === "app"
                ? "Dispatch Application"
                : service.type === "call"
                  ? "Call Office"
                  : "Book Flights Online"}
            </a>
          </div>
        ))}
      </section>

      {/* 🏛️ SECTION 3: REGIONAL EMERGENCY DIRECTORY TABLE */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-20 border-t border-white/5 pt-16">
        <div className="mb-8">
          <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
            <IoSearchOutline />
            Regional Directories
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
            District Helpline Registry
          </h2>
          <p className="text-gray-400 text-xs font-light mt-1">
            Instantly query institutions across 25 administrative districts for
            localized emergency support.
          </p>
        </div>

        {/* Controls Panel */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-gray-300 outline-none focus:border-emerald-500/50 cursor-pointer min-w-[200px]">
            {sriLankaDistricts.map((district) => (
              <option
                key={district}
                value={district}
                className="bg-zinc-950 text-white">
                {district}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Filter by keyword (e.g., Hospital, Police, Wildlife, Navy, Disaster)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder:text-gray-500 outline-none focus:border-emerald-500/50"
          />
        </div>

        {/* Directory Grid/Table */}
        <div className="bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden backdrop-blur-xl">
          <div className="divide-y divide-white/5">
            {filteredHelplines.length > 0 ? (
              filteredHelplines.map((item) => (
                <div
                  key={item.id}
                  className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors duration-200">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                        item.category === "Hospital"
                          ? "border-red-500/30 bg-red-500/10 text-red-400"
                          : item.category === "Police"
                            ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                            : item.category === "Wildlife"
                              ? "border-green-500/30 bg-green-500/10 text-green-400"
                              : item.category === "Navy"
                                ? "border-teal-500/30 bg-teal-500/10 text-teal-400"
                                : item.category === "Disaster"
                                  ? "border-purple-500/30 bg-purple-500/10 text-purple-400"
                                  : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                      }`}>
                      {item.category}
                    </span>
                    <div>
                      <h4 className="text-white font-bold text-sm tracking-wide">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider mt-0.5">
                        <MdOutlineShareLocation /> {item.district} District
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-6 border-t border-white/5 sm:border-none pt-3 sm:pt-0">
                    <span className="font-mono text-xs sm:text-sm text-gray-300 font-bold tracking-wider">
                      {item.number}
                    </span>
                    <a
                      href={`tel:${item.number}`}
                      className="bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all duration-300 text-center active:scale-95 shadow-md">
                      Call Now
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-gray-500 text-xs font-light">
                ❌ No institutional helplines found matching your filter
                criteria.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
