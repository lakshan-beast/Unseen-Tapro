import { useState } from "react";
// 🎨 Font Awesome 6 Icons Import කිරීම
import {
  FaFacebookF,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaUser,
} from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

const contributors = [
  {
    name: "Sadun Kumara",
    role: "Photographer & Traveler",
    image: <FaUser />,
    fbUrl: "https://facebook.com",
    instaUrl: "https://instagram.com",
  },
  {
    name: "Sri Lanka Travel Culture",
    role: "Official Media Partner",
    image: <FaUser />,
    fbUrl: "https://facebook.com",
    instaUrl: "",
  },
  {
    name: "Ceylon Wild Explorers",
    role: "Wildlife Content Creator",
    image: <FaUser />,
    fbUrl: "https://facebook.com",
    instaUrl: "https://instagram.com",
  },
  {
    name: "Nimal Perera",
    role: "Drone Photographer",
    image: <FaUser />,
    fbUrl: "",
    instaUrl: "https://instagram.com",
  },
  {
    name: "Roaming Ceylon",
    role: "Travel Vlogger",
    image: <FaUser />,
    fbUrl: "https://facebook.com",
    instaUrl: "https://instagram.com",
  },
  {
    name: "Amali Silva",
    role: "Hiking Guide & Creator",
    image: <FaUser />,
    fbUrl: "https://facebook.com",
    instaUrl: "",
  },
];

export default function ContributorsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? contributors.length - 2 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= contributors.length - 2 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#01030f] py-24 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 flex gap-1 items-center ">
              <FaHandshakeSimple className="size-4.5 text-emerald-200 mr-1" /> The
              Minds Behind The Lens
            </span>
            {/* <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block"></span> */}
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
              Our Content <span className="text-emerald-400">Guardians</span>
            </h2>
          </div>

          {/* 🕹️ Slider Controller Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all cursor-pointer active:scale-95">
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-gray-400 hover:text-white hover:border-emerald-500/30 transition-all cursor-pointer active:scale-95">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* 🎴 Slider Viewport */}
        <div className="overflow-hidden w-full py-4">
          <div
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 2)}%) ` }}>
            {contributors.map((person, index) => (
              <div
                key={index}
                className="w-full md:w-[calc(50%-12px)] shrink-0 bg-zinc-900/40 border border-white/5 hover:border-emerald-500/20 rounded-[2rem] p-6 backdrop-blur-xl transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden border border-white/10 p-0.5 relative shrink-0">
                      <span
                        // alt={person.name}
                        className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500  flex justify-center items-center">
                        {person.image}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-white text-sm font-bold uppercase tracking-wide group-hover:text-emerald-400 transition-colors">
                        {person.name}
                      </h3>
                      <span className="text-[10px] text-gray-500 uppercase font-semibold tracking-wider block mt-0.5">
                        {person.role}
                      </span>
                    </div>
                  </div>

                  {/* Font Awesome Social Buttons */}
                  <div className="flex items-center gap-1.5 bg-black/30 p-1.5 rounded-xl border border-white/5">
                    {person.fbUrl && (
                      <a
                        href={person.fbUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-white/5 transition-all">
                        <FaFacebookF size={12} />
                      </a>
                    )}
                    {person.instaUrl && (
                      <a
                        href={person.instaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-white/5 transition-all">
                        <FaInstagram size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
