// 🎨 Font Awesome 6 ප්‍රධාන අයිකන එකතුව Import කිරීම
import { FaCircleCheck, FaLeaf, FaLifeRing, FaUsers } from "react-icons/fa6";

export default function TrustFeatures() {
  return (
    <>
      {/* 🛡 2026 BENTO STYLE TRUST FEATURES BAR */}
      <section
        id="trust-score"
        className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 100% Verified */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.05)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all duration-300">
              <FaCircleCheck size={20} />
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
              <FaLeaf size={18} />
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
              <FaLifeRing size={18} />
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
              <FaUsers size={18} />
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
    </>
  );
}
