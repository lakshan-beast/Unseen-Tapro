import { useState, useEffect } from "react";

// import { HiOutlineSearch } from "react-icons/hi"; // 2026 Modern Search Icon එක සඳහා

// import { mockPlaces } from "../data/places";

import Categories from "./Categories";
import Weather from "../components/Weather";
import BentoWidgets from "../components/BentoWidgets";

// import { BsStars } from "react-icons/bs";
// import { MdOutlineWifiCalling3 } from "react-icons/md";
// import { GiSiren } from "react-icons/gi";
// import { VscRocketCompact } from "react-icons/vsc";
// import { IoCarSport } from "react-icons/io5";
// import { HiLocationMarker } from "react-icons/hi";

// import { FaCarSide } from "react-icons/fa";
import ContributorsSlider from "../components/ContributorsSlider";
import CommunityBanner from "../components/CommunityBanner";

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
    image: "/images/hero/slide4.jpg",
    title: "Subterranean",
    highlight: "Mystical Caves",
    endText: "of the Past",
    description:
      "Unearth ancient secrets and historical echoes buried deep within hidden underground rock tunnels.",
  },
  {
    image: "/images/hero/slide5.jpg",
    title: "Whispering Trails",
    highlight: "Silent Pine Woods",
    endText: "in the Mist",
    description:
      "Lose yourself in the cold, misty embrace of Sri Lanka's high-altitude pine forests and camping flatlands.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

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
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-teal-950/10 to-zinc-950 z-20"></div>
        </div>

        <div className="relative z-30 px-6 md:px-12 max-w-5xl mb-auto mt-32 md:mt-40">
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

          <Weather />

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

      <div className="flex md:hidden items-center gap-4 bg-zinc-900/50 border border-white/5 p-5 mx-6 rounded-3xl backdrop-blur-md mt-6">
        <Weather />
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

      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-8"> */}
      <CommunityBanner />
      {/* </section> */}

      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-16"> */}
      <BentoWidgets />
      {/* </section> */}

      

      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-16"> */}
      <Categories />
      {/* </section> */}

      {/* <section className="max-w-7xl mx-auto px-6 md:px-12 py-16"> */}
      <ContributorsSlider />
      {/* </section> */}
    </div>
  );
}
