import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { mockPlaces } from "../src/data/places";
import { sriLankaDistricts } from "../src/data/sriLankaDistricts";

// 🎨 Font Awesome 6 Icons පමණක් පාවිච්චි කර ඇත
import { 
  FaHeart, 
  FaRegHeart, 
  FaBookmark, 
  FaRegBookmark, 
  FaTriangleExclamation, 
  FaTrashCan 
} from "react-icons/fa6";

export default function AllPlaces() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  // 🎛 Filter & Sort States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [sortBy, setSortBy] = useState("newest");

  // 🏪 Like & Save Frontend States (State Arrays)
  const [likedPlaces, setLikedPlaces] = useState<number[]>([]);
  const [savedPlaces, setSavedPlaces] = useState<number[]>([]);

  // 🚨 Report Modal States
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<number | null>(null);
  const [reportText, setReportText] = useState("");
  const [reportLoading, setReportLoading] = useState(false);

  // ⚡️ Clear Filters Function
  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDistrict("All Districts");
    setSortBy("newest");
    setSearchParams({});
  };

  // ❤️ Like Toggle Logic
  const handleLike = (id: number) => {
    if (likedPlaces.includes(id)) {
      setLikedPlaces(likedPlaces.filter((pId) => pId !== id));
    } else {
      setLikedPlaces([...likedPlaces, id]);
    }
  };

  // 🔖 Save/Bookmark Toggle Logic
  const handleSave = (id: number) => {
    if (savedPlaces.includes(id)) {
      setSavedPlaces(savedPlaces.filter((pId) => pId !== id));
    } else {
      setSavedPlaces([...savedPlaces, id]);
    }
  };

  // 📥 Report Submit Handler
  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportLoading(true);
    
    setTimeout(() => {
      alert(`Report submitted successfully for Place ID: ${selectedPlaceId}`);
      setReportText("");
      setReportLoading(false);
      setIsReportOpen(false);
    }, 1000);
  };

  // 🔍 Data Filtering & Sorting Logic (Property Names Fixed)
  const filteredAndSortedPlaces = mockPlaces
    .filter((place) => {
      const matchesCategory = !categoryFilter || place.category === categoryFilter;
      const matchesDistrict = selectedDistrict === "All Districts" || place.district === selectedDistrict;
      const matchesSearch =
        place.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesDistrict && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "liked") {
        const aLikes = likedPlaces.includes(a.id) ? a.likes + 1 : a.likes;
        const bLikes = likedPlaces.includes(b.id) ? b.likes + 1 : b.likes;
        return bLikes - aLikes;
      }
      return b.id - a.id;
    });
    return (
    <div className="pt-32 min-h-screen bg-[#01030f] text-white pb-16">
      
      {/* 🗺 PAGE HEADER & SAFETY ALERT BOX */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
          📍 Destinations Archive
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          {categoryFilter ? `${categoryFilter} Expeditions` : "All Hidden Gems"}
        </h1>

        {/* Dynamic Counter Bar */}
        <p className="text-gray-400 text-xs font-light mb-6">
          Showing{" "}
          <span className="text-emerald-400 font-mono font-bold">
            {filteredAndSortedPlaces.length}
          </span>{" "}
          verified hidden locations across the island.
        </p>

        {/* 🚨 CRITICAL ENVIRONMENTAL SAFETY ALERT BOX */}
        <div className="bg-zinc-900/40 border border-amber-500/20 p-4 rounded-2xl flex items-center gap-4 backdrop-blur-xl mb-8">
          <span className="text-2xl bg-amber-500/10 p-2 rounded-xl border border-amber-500/20 text-amber-400 animate-pulse flex shrink-0 items-center justify-center">
            <FaTriangleExclamation />
          </span>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wide">
              Southwest Monsoon Alert (July 2026)
            </h4>
            <p className="text-gray-400 text-[11px] font-light mt-0.5 leading-relaxed">
              Heavy rainfalls are currently active. Flash floods around waterfalls and thick mist on mountain ridges (Knuckles/Ella) are expected. Cross-reference regional helplines before leaving.
            </p>
          </div>
        </div>
      </div>

      {/* 🎛 MULTI-CONTROL FILTER PANEL */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Input Search */}
        <input
          type="text"
          placeholder="Search by gem name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder:text-gray-500 outline-none focus:border-emerald-500/50"
        />

        {/* District Filter */}
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-gray-300 outline-none focus:border-emerald-500/50 cursor-pointer"
        >
          <option value="All Districts">All 25 Districts</option>
          {sriLankaDistricts.map((d) => (
            <option key={d} value={d} className="bg-zinc-950 text-white">
              {d}
            </option>
          ))}
        </select>

        {/* Sort Filter */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-gray-300 outline-none focus:border-emerald-500/50 cursor-pointer"
        >
          <option value="newest">Sort: Newest First</option>
          <option value="liked">Sort: Most Popular (Liked)</option>
        </select>

        {/* ⚡️ CLEAR FILTERS BUTTON */}
        <button
          onClick={handleClearFilters}
          className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FaTrashCan size={12} /> Clear All Filters
        </button>
      </section>
      {/* 🎴 CARDS COMPILATION GRID */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAndSortedPlaces.length > 0 ? (
          filteredAndSortedPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-zinc-900/20 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col justify-between group"
            >
              {/* Card Thumbnail Image */}
              <div className="relative h-52 w-full bg-zinc-950">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                  {place.district}
                </span>
              </div>

              {/* Card Descriptions */}
              <div className="p-6 flex-1">
                <h3 className="font-black text-lg md:text-xl text-white uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  {place.title}
                </h3>
                <p className="text-gray-400 text-xs font-light line-clamp-3 leading-relaxed">
                  {place.shortDescription}
                </p>
              </div>

              {/* ⚡️ INTERACTIVE BOTTOM BAR ACTIONS */}
              <div className="border-t border-white/5 px-6 py-4 bg-black/10 flex items-center justify-between text-xs text-gray-400">
                
                {/* 1. Like Action Toggle */}
                <button 
                  onClick={() => handleLike(place.id)}
                  className={flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                    likedPlaces.includes(place.id) ? 'text-red-400' : 'hover:text-white'
                  }}
                >
                  {likedPlaces.includes(place.id) ? <FaHeart size={14} /> : <FaRegHeart size={14} />}
                  <span>{likedPlaces.includes(place.id) ? place.likes + 1 : place.likes}</span>
                </button>

                {/* 2. Bookmark / Save Action Toggle */}
                <button 
                  onClick={() => handleSave(place.id)}
                  className={flex items-center gap-1.5 font-semibold transition-colors cursor-pointer ${
                    savedPlaces.includes(place.id) ? 'text-emerald-400' : 'hover:text-white'
                  }}
                >
                  {savedPlaces.includes(place.id) ? <FaBookmark size={13} /> : <FaRegBookmark size={13} />}
                  <span>{savedPlaces.includes(place.id) ? "Saved" : "Save"}</span>
                </button>

                {/* 3. Report Error / Suggest Fix (Comments වෙනුවට දාපු සුපිරි කොටස) */}
                <button 
                  onClick={() => {
                    setSelectedPlaceId(place.id);
                    setIsReportOpen(true);
                  }}
                  className="flex items-center gap-1.5 hover:text-amber-400 font-semibold transition-colors cursor-pointer"
                >
                  <FaTriangleExclamation size={13} />
                  <span>Report</span>
                </button>

                {/* 4. Navigation to Detailed Page */}
                <Link
                  to={`/places/${place.id}`}
                  className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide uppercase text-[11px] hover:underline"
                >
                  Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-gray-500 text-xs font-light col-span-full">
            ❌ No hidden gems found matching your query. Try clearing filters.
          </div>
        )}
      </section>
      {/* 🔮 REPORT ERROR MODAL POPUP (HTML Closing Tags Fixed) */}
      {isReportOpen && selectedPlaceId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md" 
            onClick={() => setIsReportOpen(false)}
          ></div>
          
          {/* Modal Form Content */}
          <div className="relative bg-zinc-950/90 border border-white/10 rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl backdrop-blur-2xl text-center z-10 animate-[fadeIn_0.2s_ease-out]">
            <button 
              onClick={() => setIsReportOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors font-bold text-sm bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center border border-white/5 cursor-pointer"
            >
              ✕
            </button>

            <span className="text-amber-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
              Data Integrity Hub
            </span>
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Report Data Error
            </h2>
            <p className="text-gray-400 text-xs font-light mb-6 leading-relaxed">
              Found incorrect roads, seasonal risks, or private lands listed? Inform our administration.
            </p>

            <form onSubmit={handleReportSubmit} className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                  Describe the issue / Fix
                </label>
                <textarea
                  required
                  rows={4}
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Explain exactly what is wrong or need to be updated safely..."
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors w-full source-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={reportLoading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-black py-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/10 active:scale-95"
              >
                <FaTriangleExclamation size={12} />
                {reportLoading ? "Submitting Report..." : "Submit to Verification"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}