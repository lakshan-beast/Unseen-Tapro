import { useState } from "react";

import AddPlaceModal from "../components/futures/AddPlaceForm2";

export default function Dashboard() {
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);

  // 1. TikTok Style Tabs පාලනය කරන්න React State එකක්
  const [activeTab, setActiveTab] = useState<"uploaded" | "clean" | "saved">(
    "uploaded",
  );

  // 🎭 2. දැනට ලොග් වී ඉන්නා යූසර්ගේ දත්ත (Mock User Profile)
  const [userProfile] = useState({
    name: "Kasun Perera",
    email: "kasun.p@unseentapro.com",
    profilePic: "https://dicebear.com",
    role: "Tourist & Explorer", // කලින් පෝස්ට් එකක් දාපු නිසා Role එක මාරු වී ඇත
    explorerVotes: 120, // Elite Guide මට්ටමේ ඡන්ද ගණනක්
    ecoPoints: 450, // ලැබී ඇති Eco-Points
    totalPosts: 8, // ඔයා අලුතින්ම එකතු කරන්න කිව්ව පෝස්ට් ගණන 📊
    ecoRank: "#14 in Sri Lanka", // ප්‍රජා ශ්‍රේණිගත කිරීම
    medicalPassport: {
      bloodGroup: "O+",
      allergies: "Penicillin, Bee Stings",
      conditions: "Asthma (Mild)",
      iceContacts: [
        { name: "Amali Perera", relation: "Wife", phone: "0771234567" },
        { name: "N. Perera", relation: "Father", phone: "0719876543" },
      ],
    },
  });

  // 🏆 Trust Level සහ Badge තීරණය කරන Logic එක
  const getExplorerLevel = (votes: number) => {
    if (votes >= 100)
      return {
        lvl: 4,
        title: "Elite Guide",
        color: "border-red-500/30 bg-red-500/10 text-red-400",
      };
    if (votes >= 50)
      return {
        lvl: 3,
        title: "Pro Traveler",
        color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
      };
    return {
      lvl: 1,
      title: "Explorer",
      color: "border-green-500/30 bg-green-500/10 text-green-400",
    };
  };
  const expLvl = getExplorerLevel(userProfile.explorerVotes);

  return (
    <div className="pt-32 min-h-screen bg-[#01030f] text-white pb-16">
      {/* 👑 ROW 1: TOP PROFILE BENTO GRID (කොටස් 3) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Bento 1: User Profile Card */}
        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-4xl backdrop-blur-xl flex items-center gap-5">
          <div className="w-16 h-16 rounded-full border-2 border-emerald-400/50 p-0.5 overflow-hidden">
            <img
              src={userProfile.profilePic}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
              {userProfile.role}
            </span>
            <h2 className="text-xl font-black text-white uppercase tracking-tight mt-2">
              {userProfile.name}
            </h2>
            <p className="text-gray-500 text-xs font-light mt-0.5">
              {userProfile.email}
            </p>
          </div>
        </div>

        {/* Bento 2: Explorer Trust Level & Total Posts */}
        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-4xl backdrop-blur-xl flex justify-between items-center">
          <div>
            <p className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">
              Explorer Reputation
            </p>
            <h3 className="text-lg font-black text-white uppercase tracking-tight">
              Level {expLvl.lvl}
            </h3>
            <span
              className={`inline-block text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border mt-2 ${expLvl.color}`}>
              {expLvl.title}
            </span>
          </div>
          {/* ඔයා එකතු කරන්න කිව්ව පෝස්ට් ගණන පෙන්වන තැන 📊 */}
          <div className="text-right border-l border-white/5 pl-6">
            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-wider">
              Total Gems
            </p>
            <p className="text-3xl font-black text-emerald-400 font-mono mt-1">
              {userProfile.totalPosts}
            </p>
            <p className="text-[10px] text-gray-400 font-light mt-0.5">
              Sourced
            </p>
          </div>
        </div>

        {/* Bento 3: Eco-Traveler Scoreboard */}
        <div className="bg-zinc-900/30 border border-white/5 p-6 rounded-4xl backdrop-blur-xl flex justify-between items-center">
          <div>
            <p className="text-emerald-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">
              Sustainability Score
            </p>
            <h3 className="text-2xl font-black text-white font-mono tracking-wide">
              {userProfile.ecoPoints}{" "}
              <span className="text-xs text-gray-500">PTS</span>
            </h3>
            <p className="text-[11px] text-gray-400 font-light mt-1">
              Available for Gear Discounts
            </p>
          </div>
          <div className="text-right border-l border-white/5 pl-6">
            <p className="text-gray-500 text-[9px] font-bold uppercase tracking-wider">
              Eco Rank
            </p>
            <p className="text-sm font-black text-white tracking-tight mt-2">
              {userProfile.ecoRank}
            </p>
          </div>
        </div>
      </div>

      {/* 🏥 ROW 2: MEDICAL PASSPORT & EMERGENCY QR CODE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Left Side: Secure Medical Passport Form */}
        <div className="lg:col-span-2 bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-4xl backdrop-blur-xl">
          <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Medical Emergency Passport (Secure Logs)
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <label className="text-[10px] text-gray-500 uppercase font-black block mb-1">
                Blood Group
              </label>
              <p className="text-white font-mono text-sm font-bold">
                {userProfile.medicalPassport.bloodGroup}
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <label className="text-[10px] text-gray-500 uppercase font-black block mb-1">
                Allergies
              </label>
              <p className="text-white text-xs font-medium">
                {userProfile.medicalPassport.allergies}
              </p>
            </div>
            <div className="bg-black/20 p-4 rounded-xl border border-white/5">
              <label className="text-[10px] text-gray-500 uppercase font-black block mb-1">
                Chronic Illnesses
              </label>
              <p className="text-white text-xs font-medium">
                {userProfile.medicalPassport.conditions}
              </p>
            </div>
          </div>

          {/* ICE Emergency Numbers */}
          <div>
            <label className="text-[10px] text-gray-400 uppercase font-black block mb-3 tracking-wider">
              In Case of Emergency (ICE) Contacts
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {userProfile.medicalPassport.iceContacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-black/30 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
                  <div>
                    <h4 className="text-white font-bold text-xs">
                      {contact.name} ({contact.relation})
                    </h4>
                    <p className="text-gray-400 font-mono text-xs mt-1 tracking-wide">
                      {contact.phone}
                    </p>
                  </div>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-[10px] font-black uppercase bg-white/5 border border-white/10 text-white px-3 py-1.5 rounded-xl hover:bg-white hover:text-black transition-colors">
                    Call
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Downloadable Emergency QR Code */}
        <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-4xl backdrop-blur-xl flex flex-col justify-between items-center text-center gap-4">
          <div>
            <p className="text-gray-400 text-[10px] font-extrabold uppercase tracking-widest mb-1">
              Live Security Utility
            </p>
            <h3 className="text-sm font-black text-white uppercase tracking-tight">
              Your Emergency QR Pass
            </h3>
          </div>
          {/* QR Code Container Box */}
          <div className="w-40 h-40 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center">
            {/* සැබෑ QR එක සම්බන්ධ කරනකම් මෙතනට සරල QR placeholder පින්තූරයක් දානවා */}
            <img
              src="https://qrserver.com"
              alt="Emergency QR"
              className="w-full h-full"
            />
          </div>
          <button className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold py-2.5 rounded-xl text-xs uppercase tracking-wide transition-all active:scale-95">
            Download QR Code
          </button>
        </div>
      </div>

      {/* ➕ ROW 3: THE ACTION CORE - ADD PLACE BUTTON */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        {/* <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-600 hover:to-teal-500 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-emerald-500/5 hover:shadow-emerald-500/10 active:scale-[0.99] flex items-center justify-center gap-2">
          ➕ Add New Hidden Gem (Upload Post)
        </button> */}
        {/* පරණ බටන් එක වෙනුවට මේonClick එක දාන්න: */}
        <button
          onClick={() => setIsAddPlaceOpen(true)}
          className="w-full bg-linear-to-r from-emerald-500 to-teal-400 ...">
          ➕ Add New Hidden Gem (Upload Post)
        </button>
      </div>

      {/* {/* 🗂️ ROW 4: TIKTOK STYLE TAB CONTROL  */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        {/* {/* Tab Links Bar  */}
        {/* <div className="flex border-b border-white/5 gap-8 mb-8 relative justify-center sm:justify-start">
          <button 
            onClick={() => setActiveTab('uploaded')}
            className={pb-4 text-xs md:text-sm font-extrabold uppercase tracking-wider relative transition-colors duration-300 ${
              activeTab === 'uploaded' ? 'text-emerald-400' : 'text-gray-500 hover:text-white'
            }}
          >
            🗺️ Uploaded Gems
            {activeTab === 'uploaded' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-[slideIn_0.2s_ease-out]"></div>}
          </button>*} */}

        {/* 🗂️ ROW 4: TIKTOK STYLE TAB CONTROL */}
        <div className="flex border-b border-white/5 gap-8 mb-8 relative justify-center sm:justify-start">
          <button
            onClick={() => setActiveTab("uploaded")}
            className={`pb-4 text-xs md:text-sm font-extrabold uppercase tracking-wider relative transition-colors duration-300 ${
              activeTab === "uploaded"
                ? "text-emerald-400"
                : "text-gray-500 hover:text-white"
            }`}>
            🗺️ Uploaded Gems ({userProfile.totalPosts})
            {activeTab === "uploaded" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-[slideIn_0.2s_ease-out]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("clean")}
            className={`pb-4 text-xs md:text-sm font-extrabold uppercase tracking-wider relative transition-colors duration-300 ${
              activeTab === "clean"
                ? "text-emerald-400"
                : "text-gray-500 hover:text-white"
            }`}>
            🌱 Clean Challenges (0)
            {activeTab === "clean" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-[slideIn_0.2s_ease-out]"></div>
            )}
          </button>
          <button
            onClick={() => setActiveTab("saved")}
            className={`pb-4 text-xs md:text-sm font-extrabold uppercase tracking-wider relative transition-colors duration-300 ${
              activeTab === "saved"
                ? "text-emerald-400"
                : "text-gray-500 hover:text-white"
            }`}>
            🔖 Saved Gems (2)
            {activeTab === "saved" && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-400 animate-[slideIn_0.2s_ease-out]"></div>
            )}
          </button>
        </div>

        {/* 🎴 DYNAMIC CARDS DISPLAY GRID BASED ON SELECTED TAB */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Uploaded Gems Tab Content */}
          {activeTab === "uploaded" && (
            <>
              {/* යූසර් අප්ලෝඩ් කරපු තැන් විදිහට අපේ data වලින් පෝස්ට් 2ක් පෙන්වමු */}
              <div className="bg-zinc-900/20 border border-white/5 rounded-4xl overflow-hidden flex flex-col justify-between group">
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src="https://picsum.photos"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[9px] font-black px-2.5 py-1 rounded-full">
                    RATNAPURA
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-black text-white text-base uppercase mb-1">
                    Duwili Ella Waterfall
                  </h4>
                  <p className="text-gray-400 text-xs font-light line-clamp-2">
                    A breathtaking hidden waterfall tucked deep inside the
                    Kalthota wilderness...
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-emerald-400">
                    <span>👍 142 Verified Votes</span>
                    <button className="hover:underline">Edit Path →</button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/20 border border-white/5 rounded-4xl overflow-hidden flex flex-col justify-between group">
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src="https://picsum.photos"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[9px] font-black px-2.5 py-1 rounded-full">
                    KEGALLE
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-black text-white text-base uppercase mb-1">
                    Kabagala Peak Ridge
                  </h4>
                  <p className="text-gray-400 text-xs font-light line-clamp-2">
                    An off-the-beaten-path ridge trek in Nawalapitiya border
                    ideal for night camping...
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-emerald-400">
                    <span>👍 76 Verified Votes</span>
                    <button className="hover:underline">Edit Path →</button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* 2. Clean Challenges Tab Content */}
          {activeTab === "clean" && (
            <div className="bg-zinc-900/10 border border-white/5 border-dashed p-12 text-center text-gray-500 text-xs font-light rounded-4xl col-span-full py-16">
              🌱 No clean challenges logged yet. Snap a photo of your next trash
              cleanup to earn 150+ Eco-Points!
            </div>
          )}

          {/* 3. Saved Gems Tab Content */}
          {activeTab === "saved" && (
            <>
              {/* යූසර් පසුව යන්න Bookmark කරගත්තු තැන් */}
              <div className="bg-zinc-900/20 border border-white/5 rounded-4xl overflow-hidden flex flex-col justify-between group">
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src="https://picsum.photos"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[9px] font-black px-2.5 py-1 rounded-full">
                    NUWARA ELIYA
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-black text-white text-base uppercase mb-1">
                    Peacock Hill Viewpoint
                  </h4>
                  <p className="text-gray-400 text-xs font-light line-clamp-2">
                    One of the highest viewpoints in Pussellawa, offering
                    endless tea estate views...
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-emerald-400 font-bold text-[11px] uppercase hover:underline">
                      View Route →
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/20 border border-white/5 rounded-4xl overflow-hidden flex flex-col justify-between group">
                <div className="relative h-48 w-full bg-zinc-950">
                  <img
                    src="https://picsum.photos"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[9px] font-black px-2.5 py-1 rounded-full">
                    PUTTALAM
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-black text-white text-base uppercase mb-1">
                    Secret Beach Kalpitiya
                  </h4>
                  <p className="text-gray-400 text-xs font-light line-clamp-2">
                    An untouched, serene coastal hideout perfect for wild
                    camping under the stars...
                  </p>
                  <div className="mt-4 flex justify-end">
                    <button className="text-emerald-400 font-bold text-[11px] uppercase hover:underline">
                      View Route →
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* 🔮 EXECUTING COMPONENT FOR ADDING POSTS */}
      {isAddPlaceOpen && (
        <AddPlaceModal onClose={() => setIsAddPlaceOpen(false)} />
      )}
    </div> // 👈 Dashboard එක ඉවර වෙන අන්තිම div එක
  );
}
