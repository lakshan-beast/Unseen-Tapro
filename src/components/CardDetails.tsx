import { useParams, useNavigate } from "react-router-dom";
import { mockPlaces } from "../data/places";

export default function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // URL එකෙන් එන id එකට ගැලපෙන සැබෑ ස්ථානයේ විස්තර places.ts එකෙන් සොයා ගැනීම
  const place = mockPlaces.find((p) => p.id === id);

  // යම් හෙමකින් ඒ id එකට අදාළ තැනක් නැත්නම් පෙන්වන Error එක
  if (!place) {
    return (
      <div className="pt-32 min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4">
        <p className="text-sm font-light text-gray-400">
          ❌ Hidden Gem intelligence file not found.
        </p>
        <button
          onClick={() => navigate("/destinations")}
          className="text-xs bg-white text-black font-black px-6 py-2.5 rounded-xl uppercase tracking-wider">
          Back to Archives
        </button>
      </div>
    );
  }

  // Author Badge Logic
  const getBadge = (votes: number) => {
    if (votes >= 100)
      return {
        title: "Elite Guide",
        color: "border-red-500/30 bg-red-500/10 text-red-400",
      };
    if (votes >= 50)
      return {
        title: "Pro Traveler",
        color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
      };
    return {
      title: "Explorer",
      color: "border-green-500/30 bg-green-500/10 text-green-400",
    };
  };
  const badge = getBadge(place.authorVotes);

  return (
    <div className="pt-24 min-h-screen bg-zinc-950 text-white pb-16">
      {/* 🖼️ 1. HERO HEADER BANNER */}
      <section className="relative h-[50vh] w-full overflow-hidden border-b border-white/5">
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

        {/* Floating Identity Content */}
        <div className="absolute bottom-8 left-0 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 ">
          <div>
            <span className="bg-emerald-500 text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg font-mono">
              📍 {place.district} District
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
              {place.title}
            </h1>
            <p className="text-gray-400 text-xs font-light mt-1 uppercase tracking-wider">
              Category: {place.category}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto">
            ← Back
          </button>
        </div>
      </section>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN: INTEL, ALERTS & TIMELINE ROUTES */}
        <div className="lg:col-span-2 space-y-8">
          {/* 📝 2. FIELD INTELLIGENCE (LONG DESCRIPTION) */}
          <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
              Field Intelligence
            </h3>
            <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed mb-6">
              {place.longDescription}
            </p>

            {/* Vehicle Accessibility Sub-box */}
            <div className="bg-black/30 p-4 rounded-2xl border border-white/5 text-xs">
              <span className="font-bold text-emerald-400 block mb-1">
                🚗 Vehicle Accessibility:
              </span>
              <p className="text-gray-400 font-light leading-normal">
                {place.vehicleAccessibility}
              </p>
            </div>
          </div>
          {/* 🚨 3. ENVIRONMENTAL RISK ALERTS (RED WARNING BOX) */}
          <div className="bg-zinc-900/20 border border-red-500/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              Critical Safety & Risk Guidelines
            </div>
            <ul className="space-y-3">
              {place.safetyAlerts.map((alert, index) => (
                <li
                  key={index}
                  className="text-gray-300 text-xs font-light leading-relaxed flex gap-2">
                  <span className="text-red-400 font-bold">•</span>
                  {alert}
                </li>
              ))}
            </ul>
          </div>

          {/* 🗺️ 4. ROUTE MAPPING TIMELINE (STEP-BY-STEP PATH) */}
          <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl">
            <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">
              Waypoint Expedition Track
            </h3>

            {/* Vertical Timeline UI */}
            <div className="relative border-l border-white/5 ml-3 space-y-8 pb-2">
              {place.routes.map((route) => (
                <div key={route.step} className="relative pl-8 group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[9px] top-1 w-4 h-4 bg-zinc-950 border-2 border-emerald-400 rounded-full flex items-center justify-center text-[8px] font-black font-mono text-emerald-400 shadow-md">
                    {route.step}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-emerald-400 transition-colors">
                      {route.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-light leading-relaxed mt-1">
                      {route.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: AUTHOR INFO, SATELLITE LINKS & CREDITS */}
        <div className="space-y-6">
          {/* Scout Identity Box */}
          <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider mb-4">
              Sourced By Scout
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-white/5 flex items-center justify-center font-black text-emerald-400 text-sm">
                {place.authorName.charAt(0)}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm tracking-wide">
                  {place.authorName}
                </h4>
                <span
                  className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border mt-1 ${badge.color}`}>
                  {badge.title}
                </span>
              </div>
            </div>
          </div>

          {/* 📍 5. LIVE GPS COORDINATES BUTTON */}
          <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl space-y-4">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider">
              Satellite Navigation
            </p>
            <a
              href={place.googleMapUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-3 px-4 rounded-xl text-xs tracking-wider uppercase text-center block transition-all shadow-lg shadow-emerald-500/10 active:scale-95">
              🛰️ Launch Live Google Map
            </a>
          </div>

          {/* Sourced Resources/Credits Mention */}
          <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-[2rem] backdrop-blur-xl text-center">
            <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider mb-2">
              Archive Integrity Credits
            </p>
            <p className="text-gray-400 text-[11px] font-light leading-relaxed">
              Expedition path intelligence cross-referenced via reliable local
              travel logs from{" "}
              <span className="text-gray-300 font-semibold">
                Best of Lanka Archives
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
