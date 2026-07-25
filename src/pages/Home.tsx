import { useState, useEffect } from "react";
// import { HiOutlineSearch } from "react-icons/hi"; // 2026 Modern Search Icon එක සඳහා

// import { mockPlaces } from "../data/places";

import Categories from "./Categories";

import { BsStars } from "react-icons/bs";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { GiSiren } from "react-icons/gi";
import { VscRocketCompact } from "react-icons/vsc";
import { IoCarSport } from "react-icons/io5";
// import { HiLocationMarker } from "react-icons/hi";

import { FaCarSide } from "react-icons/fa";

// Slider එකේ මාරු වන ලංකාවේ සුන්දර ස්ථාන 3ක විස්තර සහ පින්තූර
// const sliderSlides = [
//   {
//     image: "/images/hero/slide1.jpg", // 👈 public/images/hero/slide1.jpg පින්තූරය කියවයි
//     title: "Unforgettable",
//     highlight: "Hidden Moments",
//     endText: "in Taprobane",
//     description:
//       "We take you beyond the ordinary, to places where cultures come alive and landscapes leave you breathless.",
//   },
//   {
//     image: "/images/hero/slide2.jpg", // 👈 public/images/hero/slide2.jpg පින්තූරය කියවයි
//     title: "Discover The",
//     highlight: "Deep Secrets",
//     endText: "of Nature",
//     description:
//       "Hike through pristine mist-covered mountains and find pristine waterfalls hidden deep inside Sri Lankan jungles.",
//   },
//   {
//     image: "/images/hero/slide3.jpg", // 👈 public/images/hero/slide3.jpg පින්තූරය කියවයි
//     title: "Tranquil Coasts",
//     highlight: "Sun-Kissed",
//     endText: "Shores",
//     description:
//       "Explore untouched secret beaches and golden coastal gems away from the tourist crowds.",
//   },
// ];

const sliderSlides = [
  {
    image: "/images/hero/slide1.jpg",
    title: "Unforgettable",
    highlight: "Hidden Moments",
    endText: "in Taprobane",
    description:
      "We take you beyond the ordinary, to places where cultures come alive and landscapes leave you breathless.",
  },
  {
    image: "/images/hero/slide2.jpg",
    title: "Discover The",
    highlight: "Deep Secrets",
    endText: "of Nature",
    description:
      "Hike through pristine mist-covered mountains and find pristine waterfalls hidden deep inside Sri Lankan jungles.",
  },
  {
    image: "/images/hero/slide3.jpg",
    title: "Tranquil Coasts",
    highlight: "Sun-Kissed",
    endText: "Shores",
    description:
      "Explore untouched secret beaches and golden coastal gems away from the tourist crowds.",
  },
  {
    image: "/images/hero/slide4.jpg", // 👈 public/images/hero/slide4.jpg (Caves Image)
    title: "Subterranean",
    highlight: "Mystical Caves",
    endText: "of the Past",
    description:
      "Unearth ancient secrets and historical echoes buried deep within hidden underground rock tunnels.",
  },
  {
    image: "/images/hero/slide5.jpg", // 👈 public/images/hero/slide5.jpg (Pine Forest Image)
    title: "Whispering Trails",
    highlight: "Silent Pine Woods",
    endText: "in the Mist",
    description:
      "Lose yourself in the cold, misty embrace of Sri Lanka's high-altitude pine forests and camping flatlands.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // තත්පර 5න් 5ට ස්වයංක්‍රීයවම පසුබිම් පින්තූරය මාරු වීමට සකසන අවස්ථාව
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white overflow-hidden">
      {/* 🌟 PREMIUM HERO BANNER WITH AUTO SLIDER */}
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
        {/* SLIDER IMAGES BACKGROUND */}
        <div className="absolute inset-0 z-0">
          {sliderSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}>
              <img
                src={slide.image}
                alt="Unseen Tapro Background"
                className={`w-full h-full object-cover transition-transform duration-[5000ms] ease-out ${
                  index === currentSlide ? "scale-100" : "scale-110"
                }`}
              />
            </div>
          ))}
          {/* රූප වලට උඩින් වැටෙන තද නිල්/කොළ Glass Overlay Gradient එක */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-teal-950/10 to-zinc-950 z-20"></div>
        </div>

        {/* 📝 HERO TEXT CONTENT & SEARCH BAR */}
        <div className="relative z-30 px-6 md:px-12 max-w-5xl mb-auto mt-32 md:mt-40">
          {/* Slide එක මාරු වෙද්දී Text එකටත් ලස්සන Fade Transition එකක් දෙනවා */}
          <div
            key={currentSlide}
            className="transition-all duration-700 ease-out">
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 uppercase">
              {sliderSlides[currentSlide].title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                {sliderSlides[currentSlide].highlight}
              </span>{" "}
              <br />
              {sliderSlides[currentSlide].endText}
            </h1>

            <p className="text-xs md:text-sm text-gray-300 max-w-md leading-relaxed font-light mb-8">
              {sliderSlides[currentSlide].description}
            </p>
          </div>

          <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-md max-w-sm mt-6 animate-[fadeIn_0.5s_ease-out]">
            <span className="text-3xl">🌦️</span>
            <div>
              <p className="text-[10px] font-extrabold text-emerald-400 uppercase tracking-widest">
                Live Weather (SL)
              </p>
              <p className="text-white text-xs font-bold mt-0.5">
                28°C · Monsoonal Showers Active
              </p>
              <p className="text-[11px] text-gray-400 font-light leading-none mt-1">
                Expect sudden rain inside high trails.
              </p>
            </div>
          </div>

          {/* 🔍 2026 BENTO STYLE SEARCH BAR */}
          {/* <div className="flex items-center gap-2 max-w-md bg-white/5 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-white/10 group focus-within:border-emerald-500/50 transition-all duration-300">
            <div className="pl-3 text-gray-400 group-focus-within:text-emerald-400 transition-colors">
              <HiOutlineSearch className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="හැංගිච්ච තැනක් හෝ දිස්ත්‍රික්කයක්..."
              className="w-full pl-2 text-white bg-transparent outline-none placeholder:text-gray-400 text-xs md:text-sm font-medium"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95">
              Search
            </button>
          </div> */}

          {/* SLIDER DOTS INDICATORS (යටින් තියෙන පොඩි ඉරි කෑලි 3) */}
          <div className="flex gap-2 mt-12">
            {sliderSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-10 bg-emerald-400"
                    : "w-3 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 🔽 SCROLL DOWN INDICATOR */}
        <div className="relative z-30 w-full flex justify-center pb-12">
          <a
            href="#trust-score"
            className="animate-bounce bg-white/5 p-2.5 rounded-full border border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all">
            <svg
              xmlns="http://w3.org"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 text-emerald-400">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* 🌤️ 2026 RESPONSIVE LIVE WEATHER WIDGET (Home.tsx ඇතුළත) */}

      {/* 🖥️ PC VERSION: පින්තූරය උඩින් Hero Text එකට යටින් පෙනේ */}

      {/* (අන්තිම </section> ටැග් එකෙන් Hero එක ඉවර වුණාට පස්සේ, Trust Bar එකට උඩින් මේක දාන්න) */}
      {/* 📱 MOBILE VERSION: Hero Section එකට පස්සේ වෙනම පේළියක් විදිහට පෙනේ */}
      <div className="flex md:hidden items-center gap-4 bg-zinc-900/50 border border-white/5 p-5 mx-6 rounded-3xl backdrop-blur-md mt-6">
        <span className="text-3xl">临🌦️</span>
        <div>
          <p className="text-[9px] font-extrabold text-emerald-400 uppercase tracking-widest">
            Live Weather Status
          </p>
          <p className="text-white text-xs font-bold mt-0.5">
            28°C · Southwest Monsoon Showers
          </p>
          <p className="text-[11px] text-gray-500 font-light mt-1">
            High trail trekking risk: Moderate.
          </p>
        </div>
      </div>

      {/* 🛡️ 2026 BENTO STYLE TRUST FEATURES BAR */}
      <section
        id="trust-score"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 100% Verified */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-wide mb-1">
                100% Verified Places
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Every hidden gem listed is verified and voted by our trustworthy
                explorer community.
              </p>
            </div>
          </div>

          {/* Card 2: Eco-Friendly */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A5.982 5.982 0 0012 18z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.605 11.23a8.974 8.974 0 00-2.285 4.318A8.995 8.995 0 0112 3v1.5a7.5 7.5 0 00-2.395 6.73z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-wide mb-1">
                Eco-Friendly Travel
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Protect nature while exploring. Participate in trash challenges
                and earn special Eco-Points.
              </p>
            </div>
          </div>

          {/* Card 3: 24/7 SOS Support */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.5 1.5 0 00-3.00 block M12 9.75v6.75m0 0l-3-3m3 3l3-3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.5 1.5 0 00-3 0v1.5m3 1.5H9m3-3h.008v.008H12V5.25zm0 2.25h.008v.008H12V7.5zm0 2.25h.008v.008H12V9.75zM3.75 18h16.5a1.5 1.5 0 001.5-1.5V6.75a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6.75v9.75A1.5 1.5 0 003.75 18z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-wide mb-1">
                24/7 SOS Support
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Access local hotlines, emergency contacts, and vital medical
                logs instantly from anywhere.
              </p>
            </div>
          </div>

          {/* Card 4: Community Driven */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
              <svg
                xmlns="http://w3.org"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base tracking-wide mb-1">
                Community Driven
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                Built exclusively by passionate adventurers for fellow explorers
                discovering Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 2026 NEON GLOW EXPEDITION BANNER */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="relative bg-zinc-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12 overflow-hidden backdrop-blur-xl group hover:border-emerald-500/20 transition-all duration-500 shadow-2xl">
          {/* 🟢 Background Neon Glow Effects */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left Content Column */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold tracking-widest uppercase mb-4">
                <BsStars /> Now Boarding Explorers
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-tight uppercase mb-4">
                Share Hidden Gems. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                  Protect Paradise.
                </span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed">
                Become a verified explorer to upload undiscovered locations,
                review local guides, and earn Eco-Points by participating in
                sustainable travel challenges. Let's make travel meaningful.
              </p>
            </div>

            {/* Right Button Column */}
            <div className="flex items-center">
              <button className="w-full lg:w-auto bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black px-8 py-4 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 group/btn">
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
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 🚨 2026 EMERGENCY SOS & MOBILITY BENTO WIDGETS */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 🔴 WIDGET 1: REAL-TIME EMERGENCY SOS KIT */}
          <div className="bg-zinc-900/30 border border-red-500/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl flex flex-col justify-between gap-6 group hover:border-red-500/20 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-red-400 font-bold text-xs tracking-widest uppercase mb-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                Emergency SOS Response
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                In Trouble ? Act Fast.
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                Lost in a jungle, facing wildlife threats, or need immediate
                medical attention? Use these quick response buttons to contact
                direct lifelines instantly.
              </p>

              {/* Action Buttons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Suwa Seriya Ambulance */}
                <a
                  href="tel:1990"
                  className="bg-red-500/10 border border-red-500/20 hover:bg-red-500 hover:text-black text-red-400 font-bold p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-red-500/5">
                  <MdOutlineWifiCalling3 /> Call 1990 Ambulance
                </a>
                {/* Tourist Police Hotline */}
                <a
                  href="tel:1912"
                  className="bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300">
                  <GiSiren /> Tourist Police (1912)
                </a>
              </div>
            </div>

            {/* Copy Location Utility */}
            <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider mb-1">
                  Your Live Coordinates
                </p>
                <p className="text-emerald-400 font-mono text-xs tracking-wide">
                  6.8437° N, 80.0024° E
                </p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText("6.8437, 80.0024")}
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-bold px-5 py-2.5 rounded-xl text-xs tracking-wide transition-all border border-white/10 active:scale-95">
                Copy Coordinates
              </button>
            </div>
          </div>

          {/* 🚖 WIDGET 2: SEAMLESS MOBILITY & TRAVEL HUB */}
          <div className="bg-zinc-900/30 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl flex flex-col justify-between gap-6 group hover:border-emerald-500/10 transition-all duration-300">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs tracking-widest uppercase mb-4">
                <VscRocketCompact />
                Mobility Hub
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                Book Rides & Air Transit
              </h3>
              <p className="text-gray-400 text-xs font-light leading-relaxed mb-6">
                Need a quick ride to the nearest town or planning to bypass long
                roads entirely? Dispatch on-demand cabs or charter domestic
                flights right here.
              </p>

              {/* Mobility Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* PickMe Deep Link */}
                <a
                  href="pickme://ride"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-black p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-yellow-400/5">
                  <IoCarSport /> Dispatch via PickMe
                </a>
                {/* Uber Deep Link */}
                <a
                  href="uber://?action=setPickup"
                  className="bg-white text-black font-black p-4 rounded-2xl text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all duration-300">
                  <FaCarSide />
                  Request an Uber
                </a>
              </div>
            </div>

            {/* Premium Air Travel Integration (Helitours / Cinnamon Air) */}
            <div className="bg-black/20 p-4 rounded-2xl border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider mb-1">
                  Premium Domestic Aviation
                </p>
                <p className="text-gray-300 text-xs font-semibold">
                  Helitours Charter & Cinnamon Air
                </p>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href="http://helitours.lk"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500 hover:text-black text-emerald-400 font-bold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase transition-all duration-300">
                  Helitours
                </a>
                <a
                  href="https://cinnamonair.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center bg-white/5 border border-white/10 hover:bg-white hover:text-black text-white font-bold px-4 py-2.5 rounded-xl text-[10px] tracking-wider uppercase transition-all duration-300">
                  Cinnamon Air
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎴 2026 ASYMMETRIC BENTO GRID: 6 TRAVEL CARDS SECTION */}
      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Section Header *
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2">
              <HiLocationMarker /> Undiscovered Expeditions
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tight">
              Latest Hidden Gems
            </h2>
          </div>
          <button className="w-full md:w-auto bg-white/5 hover:bg-emerald-500 hover:text-black border border-white/10 text-white font-bold px-6 py-3 rounded-2xl text-xs tracking-wider uppercase transition-all duration-300 shadow-xl active:scale-95">
            Explore All Places →
          </button>
        </div>

        {/* Bento Grid 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPlaces.map((place) => {
            // Trust Score Badge Logic
            const getBadge = (votes: number) => {
              if (votes >= 100)
                return {
                  title: "Elite Guide",
                  color: "border-red-500/30 bg-red-500/10 text-red-400",
                };
              if (votes >= 50)
                return {
                  title: "Pro Traveler",
                  color:
                    "border-orange-500/30 bg-orange-500/10 text-orange-400",
                };
              return {
                title: "Explorer",
                color: "border-green-500/30 bg-green-500/10 text-green-400",
              };
            };
            const badge = getBadge(place.authorVotes);

            return (
              <div
                key={place.id}
                className="bg-zinc-900/20 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 hover:shadow-[0_0_50px_rgba(255,255,255,0.02)] transition-all duration-500 flex flex-col justify-between group">
                {/* Card Top: Image & Info 
                <div>
                  {/* Main Image *
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-950">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-xl">
                      🗺️ {place.district}
                    </span>
                  </div>

                  {/* Content Details *
                  <div className="p-6">
                    {/* Author & Trust Score Badge *
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[11px] text-gray-500 font-light">
                        By {place.authorName}
                      </span>
                      <span
                        className={`text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md border ${badge.color}`}>
                        {badge.title}
                      </span>
                    </div>

                    {/* Title *
                    <h3 className="font-black text-lg md:text-xl text-white uppercase tracking-tight mb-2 group-hover:text-emerald-400 transition-colors duration-300 cursor-pointer">
                      {place.title}
                    </h3>

                    {/* Short Description 
                    <p className="text-gray-400 text-xs font-light leading-relaxed line-clamp-3">
                      {place.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Card Bottom: Quick Actions Bar 
                <div className="border-t border-white/5 px-6 py-4 bg-black/10 flex items-center justify-between text-xs font-semibold text-gray-400">
                  {/* Likes & Comments 
                  <div className="flex gap-4">
                    <button className="hover:text-red-500 flex items-center gap-1.5 transition-colors duration-300">
                      ❤️{" "}
                      <span className="font-mono text-gray-300 text-xs">
                        {place.likes}
                      </span>
                    </button>
                    <button className="hover:text-blue-400 flex items-center gap-1.5 transition-colors duration-300">
                      💬{" "}
                      <span className="font-mono text-gray-300 text-xs">
                        {place.commentsCount}
                      </span>
                    </button>
                  </div>

                  {/* See More Link 
                  <button className="text-emerald-400 hover:text-emerald-300 font-bold tracking-wide uppercase text-[11px] hover:underline flex items-center gap-1 transition-all">
                    See More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section> */}

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <Categories />
      </section>

      {/* 🛑 ඊළඟ කොටස් (Zestara Features Bar එක) මීළඟ පියවරේදී මෙතනට එකතු කරමු */}
    </div>
  );
}
