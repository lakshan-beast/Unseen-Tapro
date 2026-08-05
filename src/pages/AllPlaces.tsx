import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { CardActions } from "../components/ui/Action";
import { sriLankaDistricts } from "../data/sriLankaDistricts";
import { db } from "../lib/firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

import { FaTriangleExclamation, FaTrashCan } from "react-icons/fa6";

// Firestore Document Interface
interface PlaceItem {
  id: string;
  title: string;
  district: string;
  category: string;
  shortDesc?: string;
  shortDescription?: string;
  longDesc?: string;
  coverImage?: string;
  imageUrls?: string[];
  image?: string;
  likes?: number;
  createdAt?: any;
}

export default function AllPlaces() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  // Firebase Data State
  const [places, setPlaces] = useState<PlaceItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Filter & sort state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("All Districts");
  const [sortBy, setSortBy] = useState("newest");

  // Like & save state
  const [likedPlaces, setLikedPlaces] = useState<Set<string>>(new Set());
  const [savedPlaces, setSavedPlaces] = useState<Set<string>>(new Set());

  // Report modal state
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string | null>(null);
  const [reportText, setReportText] = useState("");
  const [reportLoading, setReportLoading] = useState(false);

  const navigate = useNavigate();

  // ----------------------------------------------------
  // Fetch Real-time Places Data from Firebase Firestore
  // ----------------------------------------------------
  useEffect(() => {
    setLoading(true);
    const q = query(collection(db, "places"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedPlaces: PlaceItem[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as PlaceItem[];

        setPlaces(fetchedPlaces);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching places from Firestore:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedDistrict("All Districts");
    setSortBy("newest");
    setSearchParams({});
  };

  const toggleId = (
    setter: React.Dispatch<React.SetStateAction<Set<string>>>,
    id: string,
  ) => {
    setter((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleLike = (id: string) => toggleId(setLikedPlaces, id);
  const handleSave = (id: string) => toggleId(setSavedPlaces, id);

  const handleReportSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReportLoading(true);

    setTimeout(() => {
      alert(`Report submitted successfully for Place ID: ${selectedPlaceId}`);
      setReportText("");
      setReportLoading(false);
      setIsReportOpen(false);
    }, 1000);
  };

  // Filter and Sort Firestore Places
  const filteredAndSortedPlaces = places
    .filter((place) => {
      const matchesCategory =
        !categoryFilter || place.category === categoryFilter;
      const matchesDistrict =
        selectedDistrict === "All Districts" ||
        place.district === selectedDistrict;

      const title = place.title || "";
      const description = place.shortDesc || place.shortDescription || "";

      const matchesSearch =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesDistrict && matchesSearch;
    })
    .sort((a, b) => {
      const aLikesCount = a.likes || 0;
      const bLikesCount = b.likes || 0;

      if (sortBy === "liked") {
        const aLikes = likedPlaces.has(a.id) ? aLikesCount + 1 : aLikesCount;
        const bLikes = likedPlaces.has(b.id) ? bLikesCount + 1 : bLikesCount;
        return bLikes - aLikes;
      }
      return 0; // Firestore න් orderBy('createdAt', 'desc') කර ඇති නිසා මුලින්ම Newest First පෙන්වයි
    });

  return (
    <div className="pt-26 min-h-screen bg-[#01030f] text-white pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-white-900/60 backdrop-blur-md border border-white/30 hover:bg-white/20 hover:text-white text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all active:scale-95 mb-3">
          ← Back to Home
        </button>

        <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
          Destinations Archive
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
          {categoryFilter ? `${categoryFilter} Expeditions` : "All Hidden Gems"}
        </h1>

        <p className="text-gray-400 text-xs font-light mb-6">
          Showing{" "}
          <span className="text-emerald-400 font-mono font-bold">
            {filteredAndSortedPlaces.length}
          </span>{" "}
          verified hidden locations across the island.
        </p>
      </div>

      {/* Filter Panel */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          placeholder="Search by gem name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm text-white placeholder:text-gray-500 outline-none focus:border-emerald-500/50"
        />

        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-gray-300 outline-none focus:border-emerald-500/50 cursor-pointer">
          <option value="All Districts">All 25 Districts</option>
          {sriLankaDistricts.map((d) => (
            <option key={d} value={d} className="bg-zinc-950 text-white">
              {d}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-xs md:text-sm font-semibold text-gray-300 outline-none focus:border-emerald-500/50 cursor-pointer">
          <option value="newest">Sort: Newest First</option>
          <option value="liked">Sort: Most Popular (Liked)</option>
        </select>

        <button
          onClick={handleClearFilters}
          className="w-full bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer">
          <FaTrashCan size={12} /> Clear All Filters
        </button>
      </section>

      {/* Places Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <div className="p-12 text-center text-emerald-400 text-sm font-semibold col-span-full animate-pulse">
            Loading hidden gems from Firestore...
          </div>
        ) : filteredAndSortedPlaces.length > 0 ? (
          filteredAndSortedPlaces.map((place) => {
            // ImgBB / Firestore Photo display logic
            const displayImage =
              place.coverImage ||
              (place.imageUrls && place.imageUrls[0]) ||
              place.image ||
              "https://via.placeholder.com/600x400?text=No+Image";

            const baseLikes = place.likes || 0;

            return (
              <div
                key={place.id}
                className="relative h-112.5 border-2 border-white/20 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-500 flex flex-col justify-end group cursor-pointer">
                {/* Background Image */}
                <img
                  src={displayImage}
                  alt={place.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 z-0"
                />

                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />

                <div className="relative z-20 p-6 w-full flex flex-col justify-between h-full">
                  <div className="flex justify-between items-start">
                    <span className="bg-black/60 backdrop-blur-md border border-white/80 text-white/80 text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                      {place.district}
                    </span>
                  </div>

                  <div className="mt-auto">
                    <h3 className="font-black text-lg md:text-xl text-white uppercase mt-0.5 tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                      {place.title}
                    </h3>

                    <p className="text-gray-300 text-xs font-light line-clamp-3 leading-relaxed mb-4">
                      {place.shortDesc || place.shortDescription}
                    </p>

                    <div className="flex flex-col gap-1 ">
                      <CardActions
                        id={place.id}
                        title={place.title}
                        likesCount={place.likes || 0}
                      />

                      <Link
                        to={`/places/${place.id}`}
                        className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide uppercase text-[11px] bg-white/0 py-1 px-2 text-right border-t-2 border-white/10">
                        See More Details →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-12 text-center text-gray-500 text-xs font-light col-span-full">
            No hidden gems found matching your query. Try clearing filters.
          </div>
        )}
      </section>

      {/* Report Modal */}
      {isReportOpen && selectedPlaceId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            onClick={() => setIsReportOpen(false)}></div>

          <div className="relative bg-zinc-950/90 border border-white/10 rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl backdrop-blur-2xl text-center z-10 animate-[fadeIn_0.2s_ease-out]">
            <button
              onClick={() => setIsReportOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors font-bold text-sm bg-zinc-900 w-8 h-8 rounded-full flex items-center justify-center border border-white/5 cursor-pointer">
              ✕
            </button>

            <span className="text-amber-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
              Data Integrity Hub
            </span>
            <h2 className="text-xl font-black text-white uppercase tracking-tight mb-2">
              Report Data Error
            </h2>
            <p className="text-gray-400 text-xs font-light mb-6 leading-relaxed">
              Found incorrect roads, seasonal risks, or private lands listed?
              Inform our administration.
            </p>

            <form
              onSubmit={handleReportSubmit}
              className="flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-gray-400 text-[10px] uppercase font-bold tracking-wider">
                  Describe the issue / Fix
                </label>
                <textarea
                  required
                  rows={4}
                  value={reportText}
                  onChange={(e) => setReportText(e.target.value)}
                  placeholder="Explain exactly what is wrong or needs to be updated..."
                  className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors w-full resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={reportLoading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-black py-4 rounded-xl text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xl shadow-amber-500/10 active:scale-95">
                <FaTriangleExclamation size={12} />
                {reportLoading
                  ? "Submitting Report..."
                  : "Submit to Verification"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
