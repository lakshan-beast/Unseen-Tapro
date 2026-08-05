import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import { IoWarning } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa6";
import { MdShareLocation } from "react-icons/md";
import { FaCircleInfo, FaRoute } from "react-icons/fa6";

// Firestore Place Type Definition
interface RouteStep {
  step: number;
  title: string;
  description: string;
}

interface PlaceData {
  id: string;
  title: string;
  district: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageUrls?: string[];
  vehicleAccessibility?: string;
  googleMapUrl?: string;
  authorName?: string;
  authorVotes?: number;
  safetyAlerts?: string[];
  routes?: RouteStep[];
  facilities?: string[];
}

export default function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [place, setPlace] = useState<PlaceData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 🔄 Fetch Place Data from Firestore
  useEffect(() => {
    if (!id) return;

    const fetchPlaceDetails = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "places", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setPlace({ id: docSnap.id, ...docSnap.data() } as PlaceData);
        } else {
          setPlace(null);
        }
      } catch (error) {
        console.error("Error fetching destination details:", error);
        setPlace(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaceDetails();
  }, [id]);

  // Author Badge Logic
  const getBadge = (votes: number = 0) => {
    if (votes >= 100)
      return {
        title: "Elite Guide",
        color: "border-red-500/30 bg-red-500/10 text-red-400",
      };
    if (votes >= 50)
      return {
        title: "Pro Traveler",
        color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      };
    return {
      title: "Explorer",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    };
  };

  // ⏳ Loading Spinner
  if (loading) {
    return (
      <div className="pt-32 min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin mb-4" />
        <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">
          Fetching Field Intelligence...
        </p>
      </div>
    );
  }

  // ❌ 404 / Not Found State
  if (!place) {
    return (
      <div className="pt-32 min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center p-6 text-center">
        <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center justify-center text-red-400 text-2xl mb-4">
          <IoWarning />
        </div>
        <h2 className="text-xl font-bold tracking-tight">
          Intelligence File Not Found
        </h2>
        <p className="text-xs text-zinc-400 mt-1 max-w-sm">
          The destination route you are looking for might have been archived or
          removed from Firestore database.
        </p>
        <button
          onClick={() => navigate("/destinations")}
          className="mt-6 text-xs bg-white text-zinc-950 font-bold px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-95 cursor-pointer">
          Back to Archives
        </button>
      </div>
    );
  }

  const badge = getBadge(place.authorVotes || 0);

  return (
    <div className="pt-20 min-h-screen max-w-7xl m-auto bg-zinc-950 text-zinc-100 pb-24">
      {/* 🖼️ HERO HEADER BANNER */}
      <section className="relative h-[95vh] md:h-[65vh] w-full overflow-hidden border border-white/10 shadow-2xl group">
        <img
          src={place.image || "https://placehold.co/1200x800?text=No+Image"}
          alt={place.title}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-transparent to-transparent z-10" />

        <div className="absolute top-6 left-6 md:left-10 z-20 flex items-center justify-between w-[calc(100%-3rem)] md:w-[calc(100%-5rem)]">
          <button
            onClick={() => navigate(-1)}
            className="group/btn flex items-center gap-2 bg-zinc-900/40 hover:bg-emerald-500 hover:text-zinc-950 text-white/90 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-lg cursor-pointer">
            <span className="transition-transform group-hover/btn:-translate-x-1">
              ←
            </span>{" "}
            Back
          </button>
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto z-20">
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-emerald-500 text-black/90 text-[10px] font-black tracking-widest uppercase px-4.5 py-1.5 rounded-md shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 border border-white/60">
                <MdShareLocation size={18} className="text-black/80" />
                {place.district} District
              </span>
              <span className="bg-zinc-900/80 border border-white/15 text-white/80 text-[10px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-2xl backdrop-blur-md shadow-md">
                {place.category}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
              {place.title}
            </h1>

            <div className="w-16 h-1 bg-linear-to-r from-emerald-500 to-transparent rounded-full mt-1" />
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT COLUMN: MAIN INTEL & TIMELINE */}
        <div className="lg:col-span-8 space-y-4">
          {/* FIELD INTELLIGENCE CARD */}
          <article className="bg-black border-2 border-white/12 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Field Intelligence
              </h2>
            </div>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
              {place.longDescription || place.shortDescription}
            </p>

            {/* Vehicle Accessibility */}
            {place.vehicleAccessibility && (
              <div className="mt-6 bg-zinc-950/60 p-4 rounded-2xl border-2 border-white/7 flex gap-3 items-start">
                <span className="text-xl leading-none text-emerald-400 mt-0.5">
                  <FaCarSide />
                </span>
                <div className="text-xs">
                  <span className="font-bold text-zinc-200 block mb-0.5">
                    Vehicle Accessibility
                  </span>
                  <p className="text-zinc-400 leading-normal font-light">
                    {place.vehicleAccessibility}
                  </p>
                </div>
              </div>
            )}
          </article>

          {/* CRITICAL RISK ALERTS */}
          {place.safetyAlerts && place.safetyAlerts.length > 0 && (
            <article className="bg-red-900/5 border-2 border-red-500/15 p-6 md:p-8 rounded-3xl backdrop-blur-md">
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
                <IoWarning className="size-5" />
                Safety & Environmental Advisory
              </div>
              <ul className="space-y-3">
                {place.safetyAlerts.map((alert, index) => (
                  <li
                    key={index}
                    className="text-zinc-300 text-xs md:text-sm font-light leading-relaxed flex items-start gap-3">
                    <span className="text-red-400 font-bold text-base leading-none">
                      •
                    </span>
                    <span>{alert}</span>
                  </li>
                ))}
              </ul>
            </article>
          )}

          {/* WAYPOINT EXPEDITION TIMELINE */}
          {place.routes && place.routes.length > 0 && (
            <article className="bg-emerald-900/5 border-2 border-emerald-400/15 p-6 md:p-8 rounded-3xl backdrop-blur-md">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8 flex items-center gap-2">
                <FaRoute className="text-emerald-400" /> Expedition Route Track
              </h2>

              <div className="relative border-l-2 border-zinc-800 ml-4 space-y-8 pl-6">
                {place.routes.map((route, idx) => (
                  <div key={idx} className="relative group">
                    <div className="absolute -left-8.75 top-0.5 w-6 h-6 bg-zinc-950 border-2 border-emerald-400 rounded-full flex items-center justify-center text-[10px] font-extrabold text-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950 transition-colors">
                      {route.step || idx + 1}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base tracking-wide group-hover:text-emerald-400 transition-colors">
                        {route.title}
                      </h3>
                      <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed mt-1">
                        {route.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}

          {/* NEARBY FACILITIES */}
          {place.facilities && place.facilities.length > 0 && (
            <article className="bg-teal-900/5 border-2 border-teal-400/15 p-6 md:p-8 rounded-3xl backdrop-blur-md">
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4 flex items-center gap-2">
                <FaCircleInfo className="text-teal-400" /> Key Facilities &
                Nearby Essentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {place.facilities.map((facility, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/60 border border-white/5 p-3.5 rounded-xl text-xs text-zinc-300 font-medium flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                    {facility}
                  </div>
                ))}
              </div>
            </article>
          )}
        </div>

        {/* RIGHT COLUMN: SCOUT INFO & SATELLITE MAP */}
        <aside className="lg:col-span-4 space-y-3 lg:sticky lg:top-8 self-start">
          {/* Scout Identity Box */}
          <div className="bg-amber-900/5 border-2 border-amber-400/15 p-6 rounded-3xl backdrop-blur-md">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-4">
              Intel Provided By
            </span>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-black text-emerald-400 text-lg ${badge.color}`}>
                {(place.authorName || "E").charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  {place.authorName || "Anonymous Scout"}
                </h3>
                <span
                  className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-1 ${badge.color}`}>
                  {badge.title}
                </span>
              </div>
            </div>
          </div>

          {/* Map / Google Maps Link */}
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">
              Live Navigation & Map
            </span>

            {place.googleMapUrl ? (
              <iframe
                src={place.googleMapUrl}
                width="300"
                height="300"
                className="w-full border-0 rounded-2xl"
                loading="lazy"></iframe>
            ) : (
              <p className="text-xs text-zinc-500 italic">
                No direct map URL provided.
              </p>
            )}
          </div>

          {/* Credits */}
          <div className="bg-zinc-900/20 border border-white/8 p-5 rounded-2xl text-center">
            <p className="text-zinc-400 text-[11px] font-medium leading-relaxed">
              Expedition intelligence verified via{" "}
              <span className="text-zinc-300 font-medium">
                Unseen Tapro Archives
              </span>
              .
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
