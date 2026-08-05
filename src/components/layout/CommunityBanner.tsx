import { useState } from "react";

import { FaStar, FaShareFromSquare } from "react-icons/fa6";

import { UserAddPlaceModal } from "../forms/UsersForm";

export default function CommunityBanner() {
  const [isUserPlaceOpen, setIsUserPlaceOpen] = useState(false);

  const handleOpenModal1 = () => {
    setIsUserPlaceOpen(true);
  };

  return (
    <>
      {/* 🌟 NEON GLOW EXPEDITION BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden backdrop-blur-xl group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
          {/* Background Neon Glow Effects */}
          <div className="absolute top-0 right-0 w-75 h-75 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-50 h-50 bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                <FaStar className="animate-spin-slow size-4" /> Now Boarding
                Explorers
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase mb-4">
                Share Hidden Gems. <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
                  Protect Paradise.
                </span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                Become a verified explorer to upload undiscovered locations,
                review local guides, and earn Eco-Points by participating in
                sustainable travel challenges. Let's make travel meaningful.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex items-center">
              <button
                onClick={handleOpenModal1}
                className="w-full lg:w-auto bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black/70 font-black px-8 py-4 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer">
                <FaShareFromSquare size={16} /> Upload Place
              </button>
            </div>
          </div>
        </div>
      </section>

      {isUserPlaceOpen && (
        <UserAddPlaceModal
          isOpen={isUserPlaceOpen}
          onClose={() => setIsUserPlaceOpen(false)}
        />
      )}
    </>
  );
}
