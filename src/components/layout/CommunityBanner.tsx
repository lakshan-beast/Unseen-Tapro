import { useState } from "react";
// import { auth } from "../../lib/firebase"; // Firebase Auth සහ DB Import කිරීම
import { FaStar } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";

// import  from "./LoginModal";
// import LoginModal from "./LoginModal"; // අපි කලින් හදපු Login Modal එක
// import type { UserProfile } from "../../data/user";

import AddPlaceModal from "../forms/AddPlaceForm";

export default function CommunityBanner() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  // const [isLoginOpen, setIsLoginOpen] = useState(false);

  // 🖱️ බටන් එක ක්ලික් කරපු ගමන් මුලින්ම Login Status එක Check කරන ශ්‍රිතය (Function)
  // const handleJoinClick = () => {
  //   const currentUser = auth.currentUser;

  //   if (currentUser) {
  //     // 🟢 1. යූසර් කලින්ම ලොග් වෙලා ඉන්නවා නම් කෙළින්ම Form එක අරිනවා
  //     setIsFormOpen(true);
  //   } else {
  //     // 🔴 2. ලොග් වෙලා නැත්නම් මුලින්ම Login Modal එක පෙන්වනවා
  //     setIsLoginOpen(true);
  //   }
  // };

  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);

  // 🔐 ලොගින් එක සාර්ථක වූ පසු ක්‍රියාත්මක වන කොටස
  // const handleLoginSuccess = (_profile: UserProfile) => {
  //   setIsLoginOpen(false); // Login එක වහනවා
  //   setIsFormOpen(true); // කෙළින්ම Suggestion Form එක ඇරලා දෙනවා (සුපිරි UX!)
  // };

  return (
    <>
      {/* 🌟 2026 NEON GLOW EXPEDITION BANNER */}
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
              {/* <button
                onClick={handleJoinClick} // 🖱️ Handler එක Trigger කිරීම
                className="w-full lg:w-auto bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black px-8 py-4 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer">
                Join the Community
                <svg
                  xmlns="http://w3.org"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button> */}

              <button
                onClick={() => setIsAddPlaceOpen(true)}
                // className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 ...">
                className="w-full lg:w-auto bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-white font-black px-8 py-4 rounded-2xl text-xl md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer">
                <FaShareFromSquare /> Share Hidden Place
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🔮 1. LOGIN MODAL POPUP (ලොග් වී නැත්නම් විතරක් වැඩ කරයි) */}
      {/* {isLoginOpen && (
        <AddPlaceModal
          onClose={() => setIsLoginOpen(false)}
          // onLoginSuccess={handleLoginSuccess} // සාර්ථක වුණොත් ඊළඟ පියවරට යයි
        />
      )} */}

      {isAddPlaceOpen && (
        <AddPlaceModal onClose={() => setIsAddPlaceOpen(false)} />
      )}

      {/* 🔮 2. SUGGEST PLACE FORM MODAL (ලොග් වී ඇත්නම් විතරක් වැඩ කරයි) */}
      {isFormOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsFormOpen(false)}></div>

          <div className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-[2.5rem] bg-zinc-950 border border-white/10 shadow-2xl z-10 p-1">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-50 text-sm font-bold bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center border border-white/5 cursor-pointer">
              ✕
            </button>
            {/* <LoginModal /> */}
          </div>
        </div>
      )}
    </>
  );
}
