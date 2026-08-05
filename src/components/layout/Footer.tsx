import { Link } from "react-router-dom";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";

import { GoHeartFill } from "react-icons/go";
import { RiCopyrightLine } from "react-icons/ri";

export default function Footer() {
  const contentCredits = [
    // { name: "Sri Lanka Travel Culture", url: "https://facebook.com" },
    // { name: "Ceylon Wild Photography", url: "https://Instagram.com" },
    // { name: "Unexplored LK Blog", url: "https://example3.com" },
    { name: "No Anyone", url: "https://example3.com" },
  ];

  return (
    <footer className="w-full relative bg-zinc-950 text-gray-400 border-t border-white/5 pt-16 pb-8 overflow-hidden ">
      {/* 📸 Full Width Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/footer.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-0.95"
          //   className="w-full h-full object-cover opacity-0.55 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
      </div>

      {/* 🟢 Background Neon Glow Effect  */}
      <div className="absolute bottom-0 right-0 w-[100] h-[50] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none z-10"></div>

      <div className=" mx-auto px-16 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12 relative z-10">
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-xl font-black tracking-[0.2em] text-white font-heading">
            UNSEEN
            <span className="text-emerald-400 lowercase tracking-[0.08rem]">
              .TAPRO
            </span>
          </Link>
          <p className="text-gray-400 text-xs font-light leading-relaxed">
            Exploring the untouched paradises of Sri Lanka while ensuring
            traveler safety and eco-friendly tourism.
          </p>
          {/* Social Icons */}
          <div className="flex items-center gap-1 mt-2">
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5">
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5">
              <FaInstagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-white/5">
              <FaYoutube size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            Explore
          </h4>
          <ul className="flex flex-col gap-2.5 text-xs text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition-colors">
                Home Base
              </Link>
            </li>
            <li>
              <Link
                to="/destinations"
                className="hover:text-white transition-colors">
                Secret Places
              </Link>
            </li>
            <li>
              <Link
                to="/marketplace"
                className="hover:text-white transition-colors">
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition-colors">
                Services & SOS
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Content Credits */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            Content Credits
          </h4>
          <p className="text-[12px] text-white-500 font-light mb-3 leading-relaxed">
            Special thanks to our media partners for authentic Sri Lankan travel
            imagery & data:
          </p>
          <ul className="flex flex-col gap-2 text-xs text-gray-400">
            {contentCredits.map((credit, i) => (
              <li key={i}>
                <a
                  href={credit.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 underline decoration-white/10 hover:decoration-emerald-400/40 transition-all block truncate">
                  {/* <MdPhotoCamera /> */}
                  {credit.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Emergency Assistance */}
        <div>
          <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
            Safety First
          </h4>
          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
            Stuck in an emergency or need immediate tourist police assistance?
          </p>
          <Link
            to="/services"
            className="inline-flex items-center justify-center bg-red-500/10 hover:bg-red-500/20  text-red-400 hover:text-white-600 font-bold border border-red-500/20 text-[10px] tracking-wider uppercase px-4 py-2.5 rounded-xl transition-all w-full text-center">
            Access SOS Hotlines
          </Link>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 border-t border-white/5 pt-6 flex flex-col items-center justify-between gap-4 text-[11px] text-gray-500 relative z-10">
        <p className="flex items-center">
          <RiCopyrightLine size={15} className="mr-2" />{" "}
          {new Date().getFullYear()} UNSEEN.TAPRO. All Rights Reserved
          <Link
            to="/admin-dashboard"
            className="text-white hover:text-zinc-600 ml-1">
            .
          </Link>
        </p>
        <p className="flex items-center gap-1">
          Made with{" "}
          <GoHeartFill
            size={15}
            className="text-emerald-400 fill-emerald-400"
          />
          for Sri Lankan Tourism.
        </p>
      </div>
    </footer>
  );
}
