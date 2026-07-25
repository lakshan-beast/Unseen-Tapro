import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [slTime, setSlTime] = useState("");

  // 🕒 Live Sri Lankan Time එක 2026 වසරට අනුව සජීවීව පෙන්වීමට සකසන Logic එක
  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Colombo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setSlTime(new Date().toLocaleTimeString("en-US", options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // return (
    // 🌟 FULL WIDTH BACKGROUND IMAGE FOOTER WITH MODERN OVERLAY
    <footer className="relative bg-zinc-950 text-gray-400 border-t border-white/5 pt-16 pb-8 mt-24 overflow-hidden w-full ">
      {/* 📸 Full Width Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/footer.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-0.95"
          //   className="w-full h-full object-cover opacity-0.55 grayscale contrast-125"
        />
        {/* පින්තූරය උඩින් කළු පාට Gradient එකක් දාලා අකුරු ලස්සනට කැපිලා පේන්න හදනවා */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40"></div>
      </div>

      {/* 🟢 Background Neon Glow Effect (අර කලින් තිබ්බ ලයිට් එක) */}
      <div className="absolute bottom-0 right-0 w-[100] h-[50] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none z-10"></div>

      {/* 🎛️ MAIN CONTENT CONTENT: (Z-10 දාලා පින්තූරයට උඩින් පෙන්වනවා) */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5">
        {/* ... (කලින් තිබ්බ Column 4ම සහ Bottom Legal Bar එක එලෙසම තිබෙන්න හරින්න) ... */}

        {/* </div>
  </footer>
); */}
        {/* Column 1: Brand Essence & Live Widget */}
        <div className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-lg font-black tracking-[0.25em] text-white">
            UNSEEN<span className="text-emerald-400">.TAPRO</span>
          </Link>
          <p className="text-xs font-light leading-relaxed text-gray-400">
            Sri Lanka's premier decentralized travel collective mapping
            undiscovered wilderness, protecting fragile ecosystems, and
            empowering native guides.
          </p>

          <Link to="/dashboard">Dashboard</Link>
          {/* Live Sri Lanka Tracker Widget */}
          <div className="mt-2 bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center justify-between backdrop-blur-md">
            <div>
              <p className="text-[9px] uppercase tracking-wider font-extrabold text-emerald-400">
                Local Time (SL)
              </p>
              <p className="text-white font-mono text-xs font-bold tracking-wide mt-0.5">
                {slTime || "Fetching..."}
              </p>
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
            Platform Core
          </h4>
          <ul className="flex flex-col gap-3 text-xs font-medium">
            <li>
              <Link
                to="/destinations"
                className="hover:text-emerald-400 transition-colors duration-200">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
                Hidden Expeditions
              </Link>
            </li>
            <li>
              <Link
                to="/planner"
                className="hover:text-emerald-400 transition-colors duration-200">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
                Collective Planner
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-emerald-400 transition-colors duration-200">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
                Mobility & Guides
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-emerald-400 transition-colors duration-200">
                <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
                Explorer Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Data Archives & Credits Sourced (Professional & Ethical) */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
            Data Sourcing & Integrity
          </h4>
          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
            We cross-reference historical tracks and safety logs from premium
            Sri Lankan travel repositories. Infinite gratitude to:
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="http://bestoflanka.com"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-semibold text-gray-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors group">
              <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
              Best of Lanka Archives
            </a>
            <a
              href="https://lakdasun.org"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-semibold text-gray-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors group">
              <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
              Lakdasun Field Guides
            </a>
            <a
              href="https://yamu.lk"
              target="_blank"
              rel="noreferrer"
              className="text-[11px] font-semibold text-gray-300 hover:text-emerald-400 flex items-center gap-1.5 transition-colors group">
              <span className="w-1 h-1 rounded-full bg-zinc-700 group-hover:bg-emerald-400"></span>{" "}
              Yamu Hospitality Intel
            </a>
          </div>
        </div>

        {/* Column 4: Premium Sustainability Updates (Newsletter) */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-5">
            Eco-Travel Dispatch
          </h4>
          <p className="text-gray-400 text-xs font-light leading-relaxed mb-4">
            Subscribe to receive sudden weather alerts, route condition changes,
            and newly discovered trails.
          </p>
          <div className="flex gap-2 bg-white/5 border border-white/10 p-1.5 rounded-xl focus-within:border-emerald-500/30 transition-all duration-300">
            <input
              type="email"
              placeholder="Enter corporate email..."
              className="bg-transparent text-white text-xs outline-none pl-2 w-full placeholder:text-gray-500 font-medium"
            />
            <button className="bg-white hover:bg-emerald-400 text-black font-black px-4 py-2 rounded-lg text-[10px] tracking-wider uppercase transition-colors duration-300 active:scale-95">
              Join
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-wide uppercase font-bold text-gray-500">
        <p>
          © {new Date().getFullYear()} Unseen Tapro Collective. Intellectual
          Property Protection.
        </p>
        <p className="font-mono text-gray-600">
          Built with React v19 · Tailwind v4 · Firebase Core
        </p>
      </div>
    </footer>
  );
}
