import React, { useState } from "react";
import {
  FaXmark,
  FaLocationDot,
  FaPlus,
  FaTrashCan,
  FaRoute,
  FaShieldCat,
} from "react-icons/fa6";
import { db } from "../../lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// ⚠️ ImgBB API Key එක මෙතැනට යොදන්න
const IMGBB_API_KEY = "976fcddf394f0cfbc94f30913118ae4e";

async function uploadToImgBB(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    },
  );

  const data = await response.json();
  if (data.success) return data.data.url;
  throw new Error("Image upload failed");
}

interface UserAddPlaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserAddPlaceModal: React.FC<UserAddPlaceModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // Form States
  const [authorName, setAuthorName] = useState("");
  const [authorContact, setAuthorContact] = useState(""); // Email or Phone for admin reference
  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("Ratnapura");
  const [category, setCategory] = useState("waterfall");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [googleMapUrl, setGoogleMapUrl] = useState("");
  const [vehicleAccessibility, setVehicleAccessibility] = useState("");

  // Dynamic Array States
  const [routes, setRoutes] = useState([{ title: "", description: "" }]);
  const [safetyAlerts, setSafetyAlerts] = useState<string[]>([""]);
  const [facilities] = useState<string[]>([""]);

  // Images States
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handlers for Dynamic Inputs
  const handleAddRoute = () =>
    setRoutes([...routes, { title: "", description: "" }]);
  const handleRouteChange = (
    index: number,
    field: "title" | "description",
    value: string,
  ) => {
    const updated = [...routes];
    updated[index][field] = value;
    setRoutes(updated);
  };
  const handleRemoveRoute = (index: number) =>
    setRoutes(routes.filter((_, i) => i !== index));

  const handleAddSafetyAlert = () => setSafetyAlerts([...safetyAlerts, ""]);
  const handleSafetyAlertChange = (index: number, value: string) => {
    const updated = [...safetyAlerts];
    updated[index] = value;
    setSafetyAlerts(updated);
  };
  const handleRemoveSafetyAlert = (index: number) =>
    setSafetyAlerts(safetyAlerts.filter((_, i) => i !== index));

  //   const handleAddFacility = () => setFacilities([...facilities, ""]);
  //   const handleFacilityChange = (index: number, value: string) => {
  //     const updated = [...facilities];
  //     updated[index] = value;
  //     setFacilities(updated);
  //   };
  //   const handleRemoveFacility = (index: number) =>
  //     setFacilities(facilities.filter((_, i) => i !== index));

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setImageFiles((prev) => [...prev, ...files]);
      setPreviewUrls((prev) => [
        ...prev,
        ...files.map((file) => URL.createObjectURL(file)),
      ]);
    }
  };

  // Submit to Firestore 'pending_places' Collection
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      alert("Please add at least one photo!");
      return;
    }

    setIsSubmitting(true);

    try {
      // 1. Upload Images to ImgBB
      const uploadedUrls: string[] = [];
      for (const file of imageFiles) {
        const url = await uploadToImgBB(file);
        uploadedUrls.push(url);
      }

      // 2. Draft Data Structure for Approval
      const pendingPlaceData = {
        title,
        district,
        category,
        shortDescription,
        longDescription,
        image: uploadedUrls[0],
        imageUrls: uploadedUrls,
        authorName: authorName.trim() || "Anonymous Explorer",
        authorContact: authorContact.trim() || "N/A",
        authorVotes: 10,
        likes: 0,
        commentsCount: 0,
        googleMapUrl,
        vehicleAccessibility,
        routes: routes
          .filter((r) => r.title.trim() !== "")
          .map((r, index) => ({
            step: index + 1,
            title: r.title,
            description: r.description,
          })),
        safetyAlerts: safetyAlerts.filter((a) => a.trim() !== ""),
        facilities: facilities.filter((f) => f.trim() !== ""),
        status: "pending", // 🟢 Important: Status flag for Admin review
        submittedAt: serverTimestamp(),
      };

      // 3. Save to 'pending_places' collection
      await addDoc(collection(db, "pending_places"), pendingPlaceData);

      alert(
        "🎉 Your suggestion has been submitted successfully! It will be posted after admin review.",
      );
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 text-white overflow-y-auto shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors cursor-pointer">
          <FaXmark size={18} />
        </button>

        <h2 className="text-xl md:text-2xl font-black uppercase text-emerald-400 mb-2 flex items-center gap-2">
          <FaLocationDot /> Submit a Hidden Spot
        </h2>
        <p className="text-xs text-zinc-400 mb-6">
          Your suggestion will be posted on the website after our review.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          {/* 1. Author Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                YOUR NAME
              </label>
              <input
                type="text"
                required
                placeholder="Kasun Perera"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                CONTACT (EMAIL / PHONE)
              </label>
              <input
                type="text"
                placeholder="07x-xxxxxxx or email@example.com"
                value={authorContact}
                onChange={(e) => setAuthorContact(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* 2. Destination Title & District */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                PLACE TITLE
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Duwili Ella Waterfall"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                DISTRICT
              </label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none cursor-pointer">
                {[
                  "Ratnapura",
                  "Kandy",
                  "Matale",
                  "Nuwara Eliya",
                  "Badulla",
                  "Galle",
                  "Matara",
                  "Hambantota",
                  "Kegalle",
                  "Anuradhapura",
                  "Polonnaruwa",
                  "Jaffna",
                  "Trincomalee",
                  "Colombo",
                  "Gampaha",
                  "Kalutara",
                  "Kurunegala",
                  "Puttalam",
                  "Monaragala",
                  "Ampara",
                  "Batticaloa",
                  "Vavuniya",
                  "Mullaitivu",
                  "Mannar",
                  "Kilinochchi",
                ].map((d) => (
                  <option key={d} value={d} className="bg-zinc-950">
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block font-bold text-gray-400 mb-1">
              CATEGORY
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none cursor-pointer">
              <option value="waterfall" className="bg-zinc-950">
                Waterfall
              </option>
              <option value="hiking" className="bg-zinc-950">
                Hiking / Viewpoint
              </option>
              <option value="camping" className="bg-zinc-950">
                Camping Site
              </option>
              <option value="historical" className="bg-zinc-950">
                Historical
              </option>
              <option value="hidden_gem" className="bg-zinc-950">
                Hidden Gem
              </option>
            </select>
          </div>

          {/* Descriptions */}
          <div>
            <label className="block font-bold text-gray-400 mb-1">
              SHORT DESCRIPTION (Max 160 chars)
            </label>
            <input
              type="text"
              required
              maxLength={160}
              placeholder="Brief description for card view..."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-400 mb-1">
              DETAILED STORY & INFORMATION
            </label>
            <textarea
              required
              rows={3}
              placeholder="Full details about the location, history, beauty..."
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none resize-none"
            />
          </div>

          {/* Google Maps & Vehicle Access */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                GOOGLE MAPS LINK
              </label>
              <input
                type="url"
                placeholder="https://maps.google.com/..."
                value={googleMapUrl}
                onChange={(e) => setGoogleMapUrl(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                VEHICLE ACCESSIBILITY
              </label>
              <input
                type="text"
                placeholder="Ex: Bike or 4WD needed for last 2km"
                value={vehicleAccessibility}
                onChange={(e) => setVehicleAccessibility(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* Routes */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                <FaRoute /> Route Steps
              </label>
              <button
                type="button"
                onClick={handleAddRoute}
                className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg font-bold cursor-pointer">
                <FaPlus size={10} /> Add Step
              </button>
            </div>
            <div className="space-y-3">
              {routes.map((route, idx) => (
                <div
                  key={idx}
                  className="bg-zinc-900/80 p-3 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-400 text-[10px]">
                      STEP {idx + 1}
                    </span>
                    {routes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveRoute(idx)}
                        className="text-red-400">
                        <FaTrashCan size={12} />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Title (e.g. Turn right at Colombo town)"
                    value={route.title}
                    onChange={(e) =>
                      handleRouteChange(idx, "title", e.target.value)
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-white outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Instructions..."
                    value={route.description}
                    onChange={(e) =>
                      handleRouteChange(idx, "description", e.target.value)
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-white outline-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Safety Alerts */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                <FaShieldCat /> Safety Advisories
              </label>
              <button
                type="button"
                onClick={handleAddSafetyAlert}
                className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-lg font-bold cursor-pointer">
                <FaPlus size={10} /> Add Advisory
              </button>
            </div>
            <div className="space-y-2">
              {safetyAlerts.map((alert, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="e.g. Water stream rises rapidly in rain"
                    value={alert}
                    onChange={(e) =>
                      handleSafetyAlertChange(idx, e.target.value)
                    }
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-white outline-none"
                  />
                  {safetyAlerts.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSafetyAlert(idx)}
                      className="text-red-400 p-2">
                      <FaTrashCan size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image Upload */}
          <div className="border-t border-white/10 pt-4">
            <label className="block font-bold text-gray-400 mb-2 uppercase">
              UPLOAD PHOTOS
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="bg-zinc-900 border border-white/10 p-3 rounded-xl w-full text-xs text-gray-300 cursor-pointer"
            />
            {previewUrls.length > 0 && (
              <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                {previewUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="preview"
                    className="w-16 h-16 object-cover rounded-xl border border-white/20"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-linear-to-r from-emerald-400 to-teal-400 text-black font-black py-4 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer disabled:opacity-50 mt-6">
            {isSubmitting
              ? "Uploading & Submitting..."
              : "Submit Destination for Review"}
          </button>
        </form>
      </div>
    </div>
  );
};
