import { useState } from "react";
import { db, storage } from "../../lib/firebase"; // Path to your updated firebase.ts
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

interface AddPlaceModalProps {
  onClose: () => void;
}

export default function AddPlaceModal({ onClose }: AddPlaceModalProps) {
  // 📝 Form States
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("Colombo");
  const [category, setCategory] = useState("waterfall");
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");

  // 📸 Multiple Image Files State
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  // 🗺️ Dynamic Routes
  const [routes, setRoutes] = useState([
    { step: 1, title: "", description: "" },
  ]);

  // 🛡️ Safety Risk Alerts
  const [alerts, setAlerts] = useState([""]);

  // ⏳ Loading state for upload
  const [isUploading, setIsUploading] = useState(false);

  // File Input Handler for Multiple Images
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles(Array.from(e.target.files));
    }
  };

  // Dynamic Route & Alert Handlers
  const addRouteStep = () => {
    setRoutes([
      ...routes,
      { step: routes.length + 1, title: "", description: "" },
    ]);
  };

  const addAlertField = () => {
    setAlerts([...alerts, ""]);
  };

  // 🚀 Firebase Upload Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      alert("Please select at least one image file!");
      return;
    }

    setIsUploading(true);

    try {
      // 1. Upload Images to Firebase Storage and get URLs
      const uploadedImageUrls: string[] = [];

      for (const file of imageFiles) {
        const uniqueFileName = `${Date.now()}_${file.name}`;
        const storageRef = ref(storage, `places/${uniqueFileName}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        uploadedImageUrls.push(downloadUrl);
      }

      // 2. Save Document Data to Firestore
      await addDoc(collection(db, "places"), {
        userName,
        title,
        district,
        category,
        shortDesc,
        longDesc,
        imageUrls: uploadedImageUrls, // Save multiple uploaded URLs array
        coverImage: uploadedImageUrls[0], // First image as main cover
        routes: routes.filter((r) => r.title.trim() !== ""), // Clean empty routes
        alerts: alerts.filter((a) => a.trim() !== ""), // Clean empty alerts
        createdAt: serverTimestamp(),
      });

      alert("🚀 Hidden Gem published successfully!");
      onClose();
    } catch (error) {
      console.error("Error adding document to Firebase: ", error);
      alert(
        "❌ Upload failed. Please check your Firebase rules and internet connection.",
      );
    } finally {
      setIsUploading(false);
    }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}></div>

      {/* Form Container */}
      <div className="relative bg-zinc-900/90 border border-white/10 rounded-[2.5rem] p-6 md:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl backdrop-blur-2xl z-10 scrollbar-none">
        <button
          onClick={onClose}
          disabled={isUploading}
          className="absolute top-6 right-6 text-gray-400 hover:text-white font-bold text-sm disabled:opacity-50">
          ✕
        </button>

        <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
          Gems Expedition Intel
        </span>
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
          Add New Hidden Gem
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Section 0: Contributor Username */}
          <div className="flex flex-col gap-1.5 bg-black/20 p-4 rounded-2xl border border-white/5">
            <label className="text-[10px] text-gray-400 uppercase font-black">
              Explorer / Contributor Name
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Kasun Perera"
              className="bg-zinc-950 border border-white/10 rounded-xl p-2.5 text-xs text-white outline-none focus:border-emerald-500/40"
            />
          </div>

          {/* Section 1: Basic Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black/20 p-4 rounded-2xl border border-white/5">
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

          {/* Section 2: Multiple Image File Upload */}
          <div className="flex flex-col gap-1.5 bg-black/20 p-4 rounded-2xl border border-white/5">
            <label className="text-[10px] text-gray-400 uppercase font-black">
              Upload Images (Select Multiple Files)
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              required
              onChange={handleImageChange}
              className="bg-zinc-950 border border-white/10 rounded-xl p-2 text-xs text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-emerald-500/10 file:text-emerald-400 hover:file:bg-emerald-500/20 cursor-pointer"
            />
            {imageFiles.length > 0 && (
              <p className="text-[10px] text-emerald-400 mt-1">
                ✓ {imageFiles.length} file(s) selected
              </p>
            )}
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
                placeholder="A brief 1-line catchy preview..."
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500/40"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] text-gray-400 uppercase font-black">
                Long Description
              </label>
              <textarea
                required
                rows={4}
                value={longDesc}
                onChange={(e) => setLongDesc(e.target.value)}
                placeholder="Describe history, landscape, route details..."
                className="w-full bg-black/20 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-emerald-500/40 resize-none"
              />
            </div>
          </div>

          {/* Section 4: Dynamic Routes */}
          <div className="space-y-3 bg-black/20 p-4 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] text-emerald-400 uppercase font-black tracking-wide">
                Route Mapping
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
                    placeholder="Transit Details"
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

          {/* Section 5: Risk Alerts */}
          <div className="space-y-3 bg-black/20 p-4 rounded-3xl border border-white/5">
            <div className="flex items-center justify-between">
              <label className="text-[10px] text-red-400 uppercase font-black tracking-wide">
                Environmental Risk Alerts
              </label>
              <button
                type="button"
                onClick={addAlertField}
                className="text-[10px] font-bold text-white hover:text-red-400 bg-white/5 border border-white/10 px-3 py-1 rounded-lg transition-colors">
                + Add Risk Alert
              </button>
            </div>

            <div className="space-y-2">
              {alerts.map((alertItem, index) => (
                <input
                  key={index}
                  type="text"
                  value={alertItem}
                  onChange={(e) => {
                    const newAlerts = [...alerts];
                    newAlerts[index] = e.target.value;
                    setAlerts(newAlerts);
                  }}
                  placeholder="e.g. Extreme slippery rock slopes near waterfall"
                  className="w-full bg-zinc-950 border border-white/5 rounded-xl p-2.5 text-xs text-white outline-none focus:border-red-500/20"
                />
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUploading}
            className="w-full bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
            {isUploading
              ? "Uploading Data & Images..."
              : "Publish Hidden Gem Archive"}
          </button>
        </form>
      </div>
    </div>
  );
}
