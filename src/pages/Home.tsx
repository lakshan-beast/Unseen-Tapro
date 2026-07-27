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
import TrustFeatures from "../components/TrustFeatures";

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
    <div className="relative min-h-screen bg-[#01030f] text-white overflow-hidden">
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden">
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
      <TrustFeatures />

      <CommunityBanner />

      <BentoWidgets />

      <Categories />

      <ContributorsSlider />
    </div>
  );
}
