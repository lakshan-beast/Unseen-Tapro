import { useState, useEffect } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
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
              className={`w-full h-full object-cover transition-transform duration-5000 ease-out ${
                index === currentSlide ? "scale-100" : "scale-110"
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-linear-to-b from-black/50 via-teal-950/10 to-zinc-950 z-20"></div>
      </div>

      <div className="relative z-30 px-6 md:px-12 max-w-5xl mb-auto mt-32 md:mt-40">
        <div
          key={currentSlide}
          className="transition-all duration-700 ease-out">
          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 uppercase font-heading ">
            {sliderSlides[currentSlide].title} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">
              {sliderSlides[currentSlide].highlight}
            </span>{" "}
            <br />
            {sliderSlides[currentSlide].endText}
          </h1>

          <p className="text-xs md:text-sm text-white-300 max-w-md leading-relaxed font-light mb-8">
            {sliderSlides[currentSlide].description}
          </p>
        </div>

        {/* SLIDER DOTS INDICATORS  */}
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
      <div className="relative z-30 w-full flex justify-center pb-14">
        <a
          href="#trust-score"
          className="animate-bounce bg-white/5 p-2.5 rounded-full border border-white/10 backdrop-blur-md cursor-pointer hover:bg-white/10 hover:border-white/20 transition-all">
          <IoIosArrowDropdownCircle className="text-emerald-400 text-2xl" />
        </a>
      </div>
    </section>
  );
}
