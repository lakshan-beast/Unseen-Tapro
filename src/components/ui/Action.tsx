import { useState, useEffect } from "react";
import { db } from "../../lib/firebase";
import {
  doc,
  updateDoc,
  increment,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import {
  FaTriangleExclamation,
  FaHeart,
  FaRegHeart,
  FaBookmark,
  FaRegBookmark,
} from "react-icons/fa6";

interface PlaceCardProps {
  id: string;
  title: string;
  likesCount?: number;
}

export function CardActions({ id, title, likesCount = 0 }: PlaceCardProps) {
  const [likes, setLikes] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [reportReason, setReportReason] = useState("");
  const [isSubmittingReport, setIsSubmittingReport] = useState(false);

  // 🔄 LocalStorage User Like/Save
  useEffect(() => {
    // Check if liked
    const likedPlaces = JSON.parse(
      localStorage.getItem("liked_places") || "[]",
    );
    if (likedPlaces.includes(id)) setIsLiked(true);

    // Check if saved
    const savedPlaces = JSON.parse(
      localStorage.getItem("saved_places") || "[]",
    );
    if (savedPlaces.includes(id)) setIsSaved(true);
  }, [id]);

  // ❤️ 1. LIKE HANDLER
  const handleLike = async () => {
    let likedPlaces = JSON.parse(localStorage.getItem("liked_places") || "[]");

    if (isLiked) {
      // Unlike Process
      setIsLiked(false);
      setLikes((prev) => prev - 1);
      likedPlaces = likedPlaces.filter((placeId: string) => placeId !== id);
      localStorage.setItem("liked_places", JSON.stringify(likedPlaces));

      await updateDoc(doc(db, "places", id), { likes: increment(-1) });
    } else {
      // Like Process
      setIsLiked(true);
      setLikes((prev) => prev + 1);
      likedPlaces.push(id);
      localStorage.setItem("liked_places", JSON.stringify(likedPlaces));

      await updateDoc(doc(db, "places", id), { likes: increment(1) });
    }
  };

  // 🔖 2. SAVE / BOOKMARK HANDLER
  const handleSave = () => {
    let savedPlaces = JSON.parse(localStorage.getItem("saved_places") || "[]");

    if (isSaved) {
      savedPlaces = savedPlaces.filter((placeId: string) => placeId !== id);
      setIsSaved(false);
      alert("🔖 Removed from saved places.");
    } else {
      savedPlaces.push(id);
      setIsSaved(true);
      alert("⭐ Successfully added to your saved places!");
    }

    localStorage.setItem("saved_places", JSON.stringify(savedPlaces));
  };

  // 🚩 3. REPORT SUBMIT HANDLER
  const handleReportSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reportReason.trim()) return;

    setIsSubmittingReport(true);
    try {
      // Firestore 'reports' collection  Save 
      await addDoc(collection(db, "reports"), {
        placeId: id,
        placeTitle: title,
        reason: reportReason,
        createdAt: serverTimestamp(),
        status: "unread",
      });

      alert("🚩 Your complaint has been forwarded to Admin. Thank you!");
      setShowReportModal(false);
      setReportReason("");
    } catch (err) {
      console.error(err);
      alert("❌ Report failed. Please try again.");
    } finally {
      setIsSubmittingReport(false);
    }
  };

  return (
    <div className="flex items-center gap-1.5 pt-3 border-none border-white/10 text-xs font-bold">
      {/* ❤️ Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-3.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
          isLiked
            ? "bg-red-500/20 text-red-400 border-red-500/40"
            : "bg-zinc-900 text-zinc-400 border-none hover:text-white"
        }`}>
        {/* ❤️ React Icons */}
        {isLiked ? (
          <FaHeart className="text-red-500 text-sm" />
        ) : (
          <FaRegHeart className="text-zinc-400 text-sm" />
        )}
        <span>{likes}</span>
      </button>

      {/* 🔖 Save Button */}
      <button
        onClick={handleSave}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
          isSaved
            ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
            : "bg-zinc-900 text-zinc-400 border-white/10 hover:text-white"
        }`}>
        {/* 🔖 Save/Bookmark  React Icons */}
        {isSaved ? (
          <FaBookmark className="text-emerald-400 text-xs" />
        ) : (
          <FaRegBookmark className="text-zinc-400 text-xs" />
        )}
        <span>{isSaved ? "Saved" : "Save"}</span>
      </button>

      {/* 🚩 Report Button */}
      <button
        onClick={() => setShowReportModal(true)}
        className="ml-auto text-zinc-500 hover:text-amber-400 transition-colors p-1.5 cursor-pointer flex justify-center items-center gap-2"
        title="Report issue">
        <FaTriangleExclamation size={15} />
        Report
      </button>

      {/* 🚩 Report Popup Modal */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-900 border border-white/10 p-6 rounded-2xl max-w-sm w-full text-white space-y-4 shadow-2xl">
            <h3 className="text-sm font-black uppercase text-amber-400 flex items-center gap-2">
              🚩 Report Place
            </h3>
            <p className="text-xs text-zinc-400">
              "{title}" Report a problem or incorrect information about the
              location.
            </p>

            <form onSubmit={handleReportSubmit} className="space-y-3">
              <textarea
                required
                rows={3}
                placeholder="Ex: Incorrect location / Closed permanently / Dangerous road..."
                value={reportReason}
                onChange={(e) => setReportReason(e.target.value)}
                className="w-full bg-zinc-950 border border-white/10 rounded-xl p-3 text-xs text-white outline-none focus:border-amber-400"
              />

              <div className="flex justify-end gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setShowReportModal(false)}
                  className="px-4 py-2 bg-zinc-800 rounded-xl font-bold hover:bg-zinc-700 cursor-pointer">
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingReport}
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-black rounded-xl cursor-pointer disabled:opacity-50">
                  {isSubmittingReport ? "Sending..." : "Submit Report"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
