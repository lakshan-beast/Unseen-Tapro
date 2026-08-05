import { useState } from "react";

interface AddPlaceModalProps {
  onClose: () => void;
}

export default function AddPlaceModal({ onClose }: AddPlaceModalProps) {
  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("Colombo");
  const [category, setCategory] = useState("waterfall");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [routes, setRoutes] = useState([
    { step: 1, title: "", description: "" },
  ]);

  const [alerts, setAlerts] = useState([""]);


  const addRouteStep = () => {
    setRoutes([
      ...routes,
      { step: routes.length + 1, title: "", description: "" },
    ]);
  };


  const addAlertField = () => {
    setAlerts([...alerts, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Hidden Gem Data Sourced:", {
      title,
      district,
      category,
      shortDesc,
      longDesc,
      imageUrl,
      routes,
      alerts,
    });
    alert(
      "🚀 Hidden Gem submitted successfully! Your Role is now updated to Tourist & Explorer.",
    );
    onClose();
  };

  const sriLankaDistricts = [
    "Colombo",
    "Kandy",
    "Badulla",
    "Matale",
    "Galle",
    "Matara",
    "Hambantota",
    "Jaffna",
    "Ampara",
    "Anuradhapura",
    "Batticaloa",
    "Gampaha",
    "Kalutara",
    "Kegalle",
    "Kurunegala",
    "Mannar",
    "Monaragala",
    "Mullaitivu",
    "Nuwaraliya",
    "Polonnaruwa",
    "Puttalam",
    "Ratnapura",
    "Trincomalee",
    "Vavuniya",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
      {/* Backdrop Blur Overlays */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}></div>

      {/* 🔮 ULTRA-PREMIUM BENTO POST UPLOADER FORM */}
      <div className="relative bg-zinc-900/90 border border-white/10 rounded-[2.5rem] p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl backdrop-blur-2xl z-10 animate-[fadeIn_0.2s_ease-out] overflow-x-scroll scrollbar-none">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white font-bold text-sm">
          ✕
        </button>

        <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
          Gems Expedition Intel
        </span>
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
          Add New Hidden Gem
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Section 1: Basic Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black/20 p-4 rounded-2xl border border-white/5 ">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                Location Name
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Duwili Ella"
                className="bg-zinc-950 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none focus:border-emerald-500/40"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                District
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="bg-zinc-950 border border-white/10 rounded-xl p-2.5 text-xs font-semibold text-white outline-none focus:border-emerald-500/40 cursor-pointer">
                {sriLankaDistricts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="bg-zinc-950 border border-white/10 rounded-xl p-2.5 text-xs font-semibold text-white outline-none focus:border-emerald-500/40 cursor-pointer">
                <option value="waterfall">🌊 Waterfall</option>
                <option value="mountain">⛰️ Mountain</option>
                <option value="beach">🏖️ Secret Beach</option>
                <option value="camping">⛺ Camping Site</option>
              </select>
            </div>
          </div>

          {/* Section 2: Image URL Asset */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] text-gray-400 uppercase font-black">
              Cover Image URL
            </label>
            <input
              type="url"
              required
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://unsplash.com"
              className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500/40"
            />
          </div>

          {/* Section 3: Descriptions */}
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                Short Teaser Summary
              </label>
              <input
                type="text"
                required
                value={shortDesc}
                onChange={(e) => setShortDesc(e.target.value)}
                placeholder="A brief 1-line catchy preview of this hidden location..."
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500/40"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                Comprehensive Field Intelligence (Long Description)
              </label>
              <textarea
                required
                rows={4}
                value={longDesc}
                onChange={(e) => setLongDesc(e.target.value)}
                placeholder="Describe the history, layout, landscape, and why this unseen place holds magic..."
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500/40 resize-none"
              />
            </div>
          </div>

          {/* 🗺️ Section 4: Dynamic Step-by-Step Waypoint Tracks (2026 Layout) */}
          <div className="space-y-3 bg-black/20 p-4 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] text-emerald-400 uppercase font-black tracking-wide">
                Route Mapping (Step-by-Step Timeline)
              </label>
              <button
                type="button"
                onClick={addRouteStep}
                className="text-[10px] font-bold text-white hover:text-emerald-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg transition-colors">
                + Add Next Step
              </button>
            </div>
            <div className="space-y-3">
              {routes.map((route, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-zinc-950 p-3 rounded-xl border border-white/5 items-center">
                  <span className="text-[11px] font-mono text-gray-500 font-bold pl-1">
                    Step {route.step}
                  </span>
                  <input
                    type="text"
                    placeholder="Checkpoint Name"
                    value={route.title}
                    onChange={(e) => {
                      const newRoutes = [...routes];
                      newRoutes[index].title = e.target.value;
                      setRoutes(newRoutes);
                    }}
                    className="bg-zinc-900 border border-white/5 rounded-lg p-2 text-xs text-white outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Transit Direction Details"
                    value={route.description}
                    onChange={(e) => {
                      const newRoutes = [...routes];
                      newRoutes[index].description = e.target.value;
                      setRoutes(newRoutes);
                    }}
                    className="bg-zinc-900 border border-white/5 rounded-lg p-2 text-xs text-white outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 🛡️ Section 5: Dynamic Safety Risk Warning System */}
          <div className="space-y-3 bg-black/20 p-4 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] text-red-400 uppercase font-black tracking-wide">
                Environmental Risk Alerts (Safety Guidelines)
              </label>
              <button
                type="button"
                onClick={addAlertField}
                className="text-[10px] font-bold text-white hover:text-red-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg transition-colors">
                + Add Risk Alert
              </button>
            </div>
            <div className="space-y-2">
              {alerts.map((alert, index) => (
                <input
                  key={index}
                  type="text"
                  value={alert}
                  onChange={(e) => {
                    const newAlerts = [...alerts];
                    newAlerts[index] = e.target.value;
                    setAlerts(newAlerts);
                  }}
                  placeholder="e.g. Extreme slippery rock slopes near waterfall edge / Flash flood hazard area"
                  className="w-full bg-zinc-950 border border-white/5 rounded-xl p-2.5 text-xs text-white outline-none focus:border-red-500/20"
                />
              ))}
            </div>
          </div>

          {/* Submit Post Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl active:scale-95">
            Publish Hidden Gem Archive
          </button>
        </form>
      </div>
    </div>
  );
}
