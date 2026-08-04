import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 🎨 Font Awesome 6 Icons පමණක් භාවිතා කර ඇත
import { FaPhone, FaTruckMedical, FaCopy, FaCheck } from "react-icons/fa6";

export default function EmergencyMobilityWidgets() {
  // 🌍 සජීවී Coordinates තබා ගැනීමට States
  const [coordinates, setCoordinates] = useState({
    lat: "6.9271",
    lon: "79.8612",
  }); // Default Colombo
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // 📡 Browser එකෙන් සජීවීව පරිශීලකයාගේ Coordinates ලබා ගැනීම
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            lat: position.coords.latitude.toFixed(4),
            lon: position.coords.longitude.toFixed(4),
          });
        },
        (error) => {
          console.warn(
            "Location access denied for coordinates:",
            error.message,
          );
        },
      );
    }
  }, []);

  // 📋 Coordinates ටික Clipboard එකට Copy කරන ශ්‍රිතය (Function)
  const handleCopy = () => {
    const textToCopy = `${coordinates.lat}, ${coordinates.lon}`;
    navigator.clipboard.writeText(textToCopy);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // තත්පර 2කින් ආයෙත් Normal තත්වයට පත් කරයි
  };

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 🔴 WIDGET 1: REAL-TIME EMERGENCY SOS KIT */}
        <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-2 backdrop-blur-xl flex flex-col justify-between gap-6 group hover:border-red-500/20 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              Emergency SOS Response
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
              In Trouble ? Act Fast.
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              Lost in a jungle, facing wildlife threats, or need immediate
              medical attention? Use these quick response buttons to contact
              direct lifelines instantly.
            </p>

            {/* Action Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Suwa Seriya Ambulance */}
              <a
                href="tel:1990"
                className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-black text-red-400 font-bold p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-red-500/5 cursor-pointer">
                <FaTruckMedical size={14} /> Call 1990 Ambulance
              </a>
              {/* Tourist Police Hotline */}
              <a
                href="tel:1912"
                className="bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer">
                <FaPhone size={12} /> Tourist Police (1912)
              </a>
            </div>
          </div>

          {/* 🎯 සජීවීව Coordinates පෙන්වන සහ Copy කරන කොටස */}
          <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider mb-1">
                Your Live Coordinates
              </p>
              <p className="text-emerald-400 font-mono text-xs tracking-wide">
                {coordinates.lat}° N, {coordinates.lon}° E
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wide transition-all border border-white/10 active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
              {isCopied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              {isCopied ? "Copied!" : "Copy Coordinates"}
            </button>
          </div>
        </div>

        {/* 🚖 WIDGET 2: SEAMLESS MOBILITY & TRAVEL HUB */}
        <div className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 rounded-2 backdrop-blur-xl flex flex-col justify-between gap-6 group hover:border-emerald-500/10 transition-all duration-300">
          <div>
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-4">
              Mobility Hub
            </div>
            <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
              Book Rides & Air Transit
            </h3>
            <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
              Need a quick ride to the nearest town or planning to bypass long
              roads entirely? Dispatch on-demand cabs or charter domestic
              flights right here.
            </p>

            {/* Mobility Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 ">
              <a
                href="pickme://ride"
                className="bg-yellow-600 hover:bg-yellow-500 h-20 text-black font-black px-2 py-1 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-between gap-2 transition-all duration-300 shadow-lg shadow-yellow-400/8 cursor-pointer ">
                <img
                  src="/images/hero/pick_me.png"
                  alt=""
                  width={"90px"}
                  height={"45px"}
                />
                Dispatch via PickMe
              </a>
              <a
                href="uber://?action=setPickup"
                className="bg-white text-black h-20 font-black px-2 py-1 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-between gap-2 transition-all duration-300 cursor-pointer">
                <img src="/images/hero/uber.png" alt="" width={"60px"} />
                Request an Uber
              </a>
            </div>
          </div>

          <Link to="/services" className="w-full md:w-auto bg-white/5 text-center hover:bg-emerald-800 hover:text-white/700 border border-white/10 text-white font-bold px-6 py-3 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-xl active:scale-95" >All Services</Link>

          {/* Premium Air Travel Integration */}
          {/* <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider mb-1 flex items-center justify-center sm:justify-start gap-2">
                <FaPlane className="text-emerald-400" size={12} /> Premium
                Domestic Aviation
              </p>
              <p className="text-gray-300 text-xs font-semibold">
                Helitours Charter & Cinnamon Air
              </p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <a
                href="http://helitours.lk"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase transition-all duration-300 cursor-pointer">
                Helitours
              </a>
              <a
                href="https://cinnamonair.com"
                target="_blank"
                rel="noreferrer"
                className="flex-1 text-center bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase transition-all duration-300 cursor-pointer">
                Cinnamon Air
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
