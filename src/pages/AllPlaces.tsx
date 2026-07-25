import { useSearchParams, Link } from "react-router-dom";
import { mockPlaces } from "../data/places";

export default function AllPlaces() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category"); // URL එකෙන් category කෑල්ල කියවා ගනී

  // යූසර් හෝම් පේජ් එකෙන් තෝරාගෙන ආපු Category එකට අනුව විතරක් දත්ත Filter කරන ලොජික් එක
  const filteredPlaces = categoryFilter
    ? mockPlaces.filter((place) => place.category === categoryFilter)
    : mockPlaces;

  return (
    <div className="pt-32 min-h-screen bg-zinc-950 text-white pb-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
          📍 Destinations Archive
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-2">
          {categoryFilter ? `${categoryFilter} Expeditions` : "All Hidden Gems"}
        </h1>
        <p className="text-gray-400 text-xs md:text-sm font-light">
          Explore compiled field logs uploaded by verified scouts across the
          island.
        </p>
      </div>

      {/* Cards Compilation Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div
              key={place.id}
              className="bg-zinc-900/20 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-all duration-500 flex flex-col justify-between group">
              <div className="relative h-52 w-full bg-zinc-950">
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-black/60 border border-white/10 text-white text-[10px] font-black uppercase px-3 py-1.5 rounded-full">
                  🗺️ {place.district}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-black text-lg md:text-xl text-white uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                  {place.title}
                </h3>
                <p className="text-gray-400 text-xs font-light line-clamp-3 leading-relaxed">
                  {place.shortDescription}
                </p>
              </div>
              <div className="border-t border-white/5 px-6 py-4 bg-black/10 flex items-center justify-between text-xs text-gray-400">
                <span>❤️ {place.likes} Likes</span>
                <Link
                  to={`/places/${place.id}`}
                  className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide uppercase text-[11px] flex items-center gap-1 transition-all">
                  See Details →
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-gray-500 text-xs font-light col-span-full">
            ❌ No hidden locations found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
