// import { useParams, useNavigate } from "react-router-dom";
// import { mockPlaces } from "../../data/places";

// export default function CardDetails() {
//   const { id } = useParams<{ id: string }>();
//   const navigate = useNavigate();

//   // URL එකෙන් එන id එකට ගැලපෙන සැබෑ ස්ථානයේ විස්තර places.ts එකෙන් සොයා ගැනීම
//   const place = mockPlaces.find((p) => p.id === id);

//   // යම් හෙමකින් ඒ id එකට අදාළ තැනක් නැත්නම් පෙන්වන Error එක
//   if (!place) {
//     return (
//       <div className="pt-32 min-h-screen bg-zinc-950 text-white flex flex-col items-center justify-center gap-4">
//         <p className="text-sm font-light text-gray-400">
//           ❌ Hidden Gem intelligence file not found.
//         </p>
//         <button
//           onClick={() => navigate("/destinations")}
//           className="text-xs bg-white text-black font-black px-6 py-2.5 rounded-xl uppercase tracking-wider">
//           Back to Archives
//         </button>
//       </div>
//     );
//   }

//   // Author Badge Logic
//   const getBadge = (votes: number) => {
//     if (votes >= 100)
//       return {
//         title: "Elite Guide",
//         color: "border-red-500/30 bg-red-500/10 text-red-400",
//       };
//     if (votes >= 50)
//       return {
//         title: "Pro Traveler",
//         color: "border-orange-500/30 bg-orange-500/10 text-orange-400",
//       };
//     return {
//       title: "Explorer",
//       color: "border-green-500/30 bg-green-500/10 text-green-400",
//     };
//   };
//   const badge = getBadge(place.authorVotes);

//   return (
//     <div className="pt-24 min-h-screen bg-zinc-950 text-white pb-16">
//       {/* 🖼️ 1. HERO HEADER BANNER */}
//       <section className="relative h-[50vh] w-full overflow-hidden border-b border-white/5">
//         <img
//           src={place.image}
//           alt={place.title}
//           className="w-full h-full object-cover opacity-60"
//         />
//         <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>

//         {/* Floating Identity Content */}
//         <div className="absolute bottom-8 left-0 w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-4 ">
//           <div>
//             <span className="bg-emerald-500 text-black text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg font-mono">
//               📍 {place.district} District
//             </span>
//             <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mt-3">
//               {place.title}
//             </h1>
//             <p className="text-gray-400 text-xs font-light mt-1 uppercase tracking-wider">
//               Category: {place.category}
//             </p>
//           </div>
//           <button
//             onClick={() => navigate(-1)}
//             className="bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all self-start sm:self-auto">
//             ← Back
//           </button>
//         </div>
//       </section>

//       {/* MAIN TWO-COLUMN LAYOUT */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
//         {/* LEFT COLUMN: INTEL, ALERTS & TIMELINE ROUTES */}
//         <div className="lg:col-span-2 space-y-8">
//           {/* 📝 2. FIELD INTELLIGENCE (LONG DESCRIPTION) */}
//           <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-8 rounded-4xl backdrop-blur-xl">
//             <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-4">
//               Field Intelligence
//             </h3>
//             <p className="text-gray-300 text-xs md:text-sm font-light leading-relaxed mb-6">
//               {place.longDescription}
//             </p>

//             {/* Vehicle Accessibility Sub-box */}
//             <div className="bg-black/30 p-4 rounded-2xl border border-white/5 text-xs">
//               <span className="font-bold text-emerald-400 block mb-1">
//                 🚗 Vehicle Accessibility:
//               </span>
//               <p className="text-gray-400 font-light leading-normal">
//                 {place.vehicleAccessibility}
//               </p>
//             </div>
//           </div>
//           {/* 🚨 3. ENVIRONMENTAL RISK ALERTS (RED WARNING BOX) */}
//           <div className="bg-zinc-900/20 border border-red-500/10 p-6 md:p-8 rounded-4xl backdrop-blur-xl">
//             <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
//               <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
//               Critical Safety & Risk Guidelines
//             </div>
//             <ul className="space-y-3">
//               {place.safetyAlerts.map((alert, index) => (
//                 <li
//                   key={index}
//                   className="text-gray-300 text-xs font-light leading-relaxed flex gap-2">
//                   <span className="text-red-400 font-bold">•</span>
//                   {alert}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* 🗺️ 4. ROUTE MAPPING TIMELINE (STEP-BY-STEP PATH) */}
//           <div className="bg-zinc-900/20 border border-white/5 p-6 md:p-8  rounded-4xl backdrop-blur-xl">
//             <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">
//               Waypoint Expedition Track
//             </h3>

//             {/* Vertical Timeline UI */}
//             <div className="relative border-l border-white/5 ml-3 space-y-8 pb-2">
//               {place.routes.map((route) => (
//                 <div key={route.step} className="relative pl-8 group">
//                   {/* Timeline Node Point */}
//                   <div className="absolute -left-2.25 top-1 w-4 h-4 bg-zinc-950 border-2 border-emerald-400 rounded-full flex items-center justify-center text-[8px] font-black font-mono text-emerald-400 shadow-md">
//                     {route.step}
//                   </div>
//                   <div>
//                     <h4 className="text-white font-bold text-sm tracking-wide group-hover:text-emerald-400 transition-colors">
//                       {route.title}
//                     </h4>
//                     <p className="text-gray-400 text-xs font-light leading-relaxed mt-1">
//                       {route.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: AUTHOR INFO, SATELLITE LINKS & CREDITS */}
//         <div className="space-y-6">
//           {/* Scout Identity Box */}
//           <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-4xl backdrop-blur-xl">
//             <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider mb-4">
//               Sourced By Scout
//             </p>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-white/5 flex items-center justify-center font-black text-emerald-400 text-sm">
//                 {place.authorName.charAt(0)}
//               </div>
//               <div>
//                 <h4 className="text-white font-bold text-sm tracking-wide">
//                   {place.authorName}
//                 </h4>
//                 <span
//                   className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border mt-1 ${badge.color}`}>
//                   {badge.title}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* 📍 5. LIVE GPS COORDINATES BUTTON */}
//           <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-4xl backdrop-blur-xl space-y-4">
//             <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider">
//               Satellite Navigation
//             </p>
//             <a
//               href={place.googleMapUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-black py-3 px-4 rounded-xl text-xs tracking-wider uppercase text-center block transition-all shadow-lg shadow-emerald-500/10 active:scale-95">
//               🛰️ Launch Live Google Map
//             </a>
//           </div>

//           {/* Sourced Resources/Credits Mention */}
//           <div className="bg-zinc-900/20 border border-white/5 p-6 rounded-4xl backdrop-blur-xl text-center">
//             <p className="text-[10px] text-gray-500 uppercase font-black tracking-wider mb-2">
//               Archive Integrity Credits
//             </p>
//             <p className="text-gray-400 text-[11px] font-light leading-relaxed">
//               Expedition path intelligence cross-referenced via reliable local
//               travel logs from{" "}
//               <span className="text-gray-300 font-semibold">
//                 Best of Lanka Archives
//               </span>
//               .
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useParams, useNavigate } from "react-router-dom";
import { mockPlaces } from "../../data/places";

import { IoWarning } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa6";
import { MdShareLocation } from "react-icons/md";

export default function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const place = mockPlaces.find((p) => p.id === id);

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
          removed.
        </p>
        <button
          onClick={() => navigate("/destinations")}
          className="mt-6 text-xs bg-white text-zinc-950 font-bold px-6 py-3 rounded-xl uppercase tracking-wider hover:bg-zinc-200 transition-all active:scale-95">
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
        color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      };
    return {
      title: "Explorer",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    };
  };

  const badge = getBadge(place.authorVotes);

  return (
    <div className="pt-20 min-h-screen max-w-7xl m-auto bg-zinc-950 text-zinc-100 pb-24">
      {/* 🖼️ HERO HEADER BANNER */}
      {/* <section className="relative h-[65vh] md:h-[60vh] w-full overflow-hidden rounded-2xl">
        <img
          src={place.image}
          alt={place.title}
          className="w-full max-h-full h-full object-cover transition-transform duration-700 hover:scale-100 m-auto "
        />
        {/* Soft Multi-Layer Gradient Overlay 
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/40 via-transparent to-transparent" />

        {/* Back Button 

        {/* Floating Title Container 

        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto">
          {/* <div className=" px-6 md:px-12 max-w-7xl mx-auto"> 
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-emerald-500 text-zinc-950 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md shadow-lg">
              {place.district} District
            </span>
            <span className="bg-zinc-800/80 border border-white/10 text-zinc-300 text-[10px] font-medium tracking-wider uppercase px-3 py-1 rounded-md backdrop-blur-md">
              {place.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-none uppercase">
            {place.title}
          </h1>
        </div>

        <div className="absolute top-8 left-6 md:left-12 z-10">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-white-900/60 backdrop-blur-md border border-white/10 hover:bg-white hover:text-zinc-950 text-white px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all active:scale-95">
            ← Back
          </button>
        </div>
      </section> */}

      <section className="relative h-[95vh] md:h-[65vh] w-full overflow-hidden border border-white/10 shadow-2xl group">
        {/* Background Image with Zoom Effect */}
        <img
          src={place.image}
          alt={place.title}
          className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
        />

        {/* Multi-Layered Cinematic Gradients */}
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-b from-zinc-950/60 via-transparent to-transparent z-10" />

        {/* Top Navigation Bar / Back Button */}
        <div className="absolute top-6 left-6 md:left-10 z-20 flex items-center justify-between w-[calc(100%-3rem)] md:w-[calc(100%-5rem)]">
          <button
            onClick={() => navigate(-1)}
            className="group/btn flex items-center gap-2 bg-zinc-900/40 hover:bg-emerald-500 hover:text-zinc-950 text-white/90 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 shadow-lg">
            <span className="transition-transform group-hover/btn:-translate-x-1">
              ←
            </span>{" "}
            Back
          </button>
        </div>

        {/* Floating Main Content Container */}
        <div className="absolute bottom-8 left-0 right-0 px-6 md:px-12 max-w-7xl mx-auto z-20">
          <div className="flex flex-col gap-3">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-emerald-500 text-black/60 text-[10px] font-black tracking-widest uppercase px-4.5 py-1.5 rounded-md shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 border border-white/60">
                <MdShareLocation size={18} className="text-white/80 *:" />
                {place.district} District
              </span>
              <span className="bg-zinc-900/80 border border-white/15 text-white/60 text-[10px] font-bold tracking-widest uppercase px-4.5 py-1.5 rounded-2xl backdrop-blur-md shadow-md">
                {place.category}
              </span>
            </div>

            {/* Main Title with Text Shadow & Gradient Accent */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
              {place.title}
            </h1>

            {/* Decorative Accent Line */}
            <div className="w-16 h-1 bg-linear-to-r from-emerald-500 to-transparent rounded-full mt-1" />
          </div>
        </div>
      </section>

      {/* MAIN LAYOUT (8-Column / 4-Column Split) */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* LEFT COLUMN: MAIN INTEL & TIMELINE (8 Cols) */}
        <div className="lg:col-span-8 space-y-3">
          {/* FIELD INTELLIGENCE CARD */}
          <article className="bg-black border-2 border-white/12 p-6 md:p-8 rounded-3xl backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                Field Intelligence
              </h2>
            </div>

            <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-normal">
              {place.longDescription}
            </p>

            {/* Vehicle Accessibility Highlight Box */}
            <div className="mt-6 bg-zinc-950/60 p-4 rounded-2xl border-2 border-white/7 flex gap-3 items-start">
              <span className="text-xl leading-none">
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
          </article>

          {/* CRITICAL RISK ALERTS (Red Highlight Card) */}
          <article className="bg-red-900/5 border-2 border-red-500/15 p-6 md:p-8 rounded-3xl backdrop-blur-md">
            <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
              <span>
                <IoWarning className="size-5" />
              </span>
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

          {/* WAYPOINT EXPEDITION TIMELINE */}
          <article className="bg-emerald-900/5 border-2 border-emerald-400/15 p-6 md:p-8 rounded-3xl backdrop-blur-md">
            <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-8">
              Expedition Route Track
            </h2>

            {/* Vertical Timeline Stream */}
            <div className="relative border-l-2 border-zinc-800 ml-4 space-y-8 pl-6">
              {place.routes.map((route) => (
                <div key={route.step} className="relative group">
                  {/* Step Node */}
                  <div className="absolute -left-8.75 top-0.5 w-6 h-6 bg-zinc-950 border-2 border-emerald-400 rounded-full flex items-center justify-center text-[10px] font-extrabold text-emerald-400 group-hover:bg-emerald-400 group-hover:text-zinc-950 transition-colors">
                    {route.step}
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
        </div>

        {/* RIGHT COLUMN: SCOUT INFO & SATELLITE ACTION (4 Cols Sticky) */}
        <aside className="lg:col-span-4 space-y-3 lg:sticky lg:top-8 self-start">
          {/* Scout Identity Box */}
          <div className="bg-amber-900/5  border-2 border-amber-400/15 p-6 rounded-3xl backdrop-blur-md">
            {/* <div className="`inline-block text-[9px] font-bold uppercase tracking-wider rounded-2xl border mt-1 bg-zinc-900/40 border-white/10 p-6 backdrop-blur-md ${badge.color}` "> */}
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-4">
              Intel Provided By
            </span>
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-black text-emerald-400 text-lg ${badge.color}`}>
                {place.authorName.charAt(0)}
              </div>
              <div>
                <h3 className="text-white font-bold text-base">
                  {place.authorName}
                </h3>
                <span
                  className={`inline-block text-[9px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border mt-1 ${badge.color}`}>
                  {badge.title}
                </span>
              </div>
            </div>
          </div>

          {/* Action Box / Google Map Link */}
          <div className="bg-zinc-900/40 border border-white/10 p-6 rounded-3xl backdrop-blur-md space-y-3">
            <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block">
              Live Satellite Navigation
            </span>
            {/* <a
              href={place.googleMapUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-extrabold py-3.5 px-4 rounded-xl text-xs tracking-wider uppercase text-center flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/10 active:scale-95"> */}
            {/* <span>🛰️</span> Launch Google Maps
            </a> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10368.657034104852!2d80.61518731646036!3d7.0838703741378986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae370aabbb4a969%3A0x80d4504592d49848!2sMonara%20Gala%20Mountain%20(Peacock%20Hill)!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk"
              width="300"
              height="300"
              className="w-full border-0 rounded-2xl"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* Credits / Metadata */}
          <div className="bg-zinc-900/20 border border-white/8 p-5 rounded-2xl text-center">
            <p className="text-zinc-400 text-[11px] font-medium leading-relaxed">
              Expedition intelligence cross-referenced via{" "}
              <span className="text-zinc-300 font-medium">
                Best of Lanka Archives
              </span>
              .
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}
