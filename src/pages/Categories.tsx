import { useNavigate } from "react-router-dom";
import { GiMountainClimbing } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";
import { GiPoolDive } from "react-icons/gi";
// import { GiBeachBucket } from "react-icons/gi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { GiPineTree } from "react-icons/gi";
import { GiUndergroundCave } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";

export default function Home() {
  const navigate = useNavigate();

  // 🗺️ 2026 Premium Categories List
  //   const travelCategories = [
  //     {
  //       id: "mountain",
  //       title: "Mountains & Ridges",
  //       count: "12+ Peaks",
  //       icon: "⛰️",
  //       image: "/images/hero/slide3.jpg",
  //       desc: "Mist-covered summits and challenging ridge treks.",
  //     },
  //     {
  //       id: "waterfall",
  //       title: "Hidden Waterfalls",
  //       count: "18+ Falls",
  //       icon: "🌊",
  //       image: "/images/hero/slide3.jpg",
  //       desc: "Pristine natural pools and secret jungle cascades.",
  //     },
  //     {
  //       id: "beach",
  //       title: "Secret Beaches",
  //       count: "8+ Shores",
  //       icon: "🏖️",
  //       image: "/images/hero/slide3.jpg",
  //       desc: "Untouched coastal hideouts away from crowds.",
  //     },
  //     {
  //       id: "camping",
  //       title: "Wild Camping Sites",
  //       count: "15+ Spots",
  //       icon: "⛺",
  //       image: "/images/hero/slide3.jpg",
  //       desc: "Starry night flatlands and deep forest campsites.",
  //     },
  //   ];

  const travelCategories = [
    {
      id: "mountain",
      title: "Mountains & Cliffs",
      count: "12+ Peaks",
      // icon: "🏔️",
      icon: <GiMountainClimbing />,
      image: "/images/hero/slide1.jpg", // ⛰️ මීදුම් පිරුණු කඳු සහ ප්‍රපාත දර්ශනයක්
      desc: "Mist-covered summits, dangerous edge drops, and challenging ridge treks.",
    },
    {
      id: "waterfall",
      title: "Hidden Waterfalls",
      count: "18+ Falls",
      // icon: "🌊",
      icon: <GiWaterfall />,
      image: "/images/hero/slide2.jpg", // 🌊 කැලෑව මැද හැංගිච්ච දියඇලි දර්ශනයක්
      desc: "Pristine secret jungle cascades hidden away from commercial paths.",
    },
    {
      id: "pool",
      title: "Natural Rock Pools",
      count: "10+ Pools",
      // icon: "🏞️",
      icon: <GiPoolDive />,
      image: "/images/hero/slide3.jpg", // 🏞️ ගල් අතරින් හැදුණු පිරිසිදු දියකඩක්
      desc: "Crystal-clear infinity rock pools and safe swimming spots deep inside the wild.",
    },
    {
      id: "beach",
      title: "Secret Beaches",
      count: "8+ Shores",
      // icon: "🏖️",
      icon: <FaUmbrellaBeach />,
      image: "/images/hero/slide4.jpg", // 🏖️ නිස්කලංක සෙනඟ නැති වෙරළක්
      desc: "Untouched, serene coastal hideouts and wild shorelines away from crowds.",
    },
    {
      id: "pine",
      title: "Pine Forests",
      count: "6+ Woods",
      // icon: "🌲",
      icon: <GiPineTree />,
      image: "/images/hero/slide5.jpg", // 🌲 සීතල මීදුම් පිරුණු පයින් වනාන්තරයක්
      desc: "Lose yourself in the cold, silent, and misty depths of high-altitude woodlands.",
    },
    {
      id: "cave",
      title: "Mystical Caves",
      count: "7+ Secrets",
      // icon: "🕳️",
      icon: <GiUndergroundCave />,
      image: "/images/hero/caves.jpeg", // 🕳️ අඳුරු අභිරහස් ගල් කුළු සහ ගුහා දර්ශනයක්
      desc: "Unearth ancient history and subterranean trails buried deep within rock tunnels.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* ... (කලින් තිබ්බ Hero Slider, Trust Bar, Widgets ඔක්කොම එලෙසම තිබෙන්න හරින්න) ... */}

      {/* 🔮 2026 PREMIUM CATEGORY BENTO GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-12 text-center sm:text-left">
          <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">
             <HiLocationMarker /> Expedition Categories
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
            Select Your Vibe
          </h2>
          <p className="text-gray-400 text-xs md:text-sm font-light mt-1">
            Click on a category to explore all verified hidden locations across
            Sri Lanka.
          </p>
        </div>

        {/* Bento Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {travelCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/destinations?category=${cat.id}`)}
              className="relative h-64 rounded-[2.5rem] overflow-hidden border border-white/5 group cursor-pointer hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
              {/* Background Image Asset */}
              <div className="absolute inset-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
              </div>

              {/* Category Info Contents */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                  <span className="text-3xl bg-black/40 p-3 rounded-2xl border border-white/5 backdrop-blur-md">
                    {cat.icon}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest bg-emerald-500 text-black px-3 py-1.5 rounded-full shadow-lg font-mono">
                    {cat.count}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-gray-400 text-xs font-light max-w-sm leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
