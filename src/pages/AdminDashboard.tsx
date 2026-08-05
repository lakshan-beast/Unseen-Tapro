import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaTrashCan,
  FaLocationDot,
  FaShieldCat,
  FaLock,
  FaArrowRotateRight,
  FaFlag,
  FaCircleExclamation,
  FaShareFromSquare,
} from "react-icons/fa6";
import { db } from "../lib/firebase";
import AddPlaceModal from "../components/forms/AddPlaceForm2";

import {
  collection,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

interface PendingPlace {
  id: string;
  title: string;
  district: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  imageUrls: string[];
  authorName: string;
  authorContact: string;
  googleMapUrl: string;
  vehicleAccessibility: string;
  routes: { step: number; title: string; description: string }[];
  safetyAlerts: string[];
  facilities: string[];
}

interface ReportItem {
  id: string;
  placeId: string;
  placeTitle: string;
  reason: string;
  status: "unread" | "resolved";
  createdAt?: any;
}

const ADMIN_PASSCODE = "function35";

export const AdminDashboard: React.FC = () => {
  const [isAddPlaceOpen, setIsAddPlaceOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAddPlaceOpen(true);
  };

  // Security State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState("");
  const [passError, setPassError] = useState("");

  // Tab State ('pending' | 'reports')
  const [activeTab, setActiveTab] = useState<"pending" | "reports">("pending");

  // Data States
  const [pendingPlaces, setPendingPlaces] = useState<PendingPlace[]>([]);
  const [reportsList, setReportsList] = useState<ReportItem[]>([]);
  const [loading, setLoading] = useState(false);

  // Preview Modal State
  const [selectedPlace, setSelectedPlace] = useState<PendingPlace | null>(null);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

  // 1. Fetch Pending Places
  const fetchPendingPlaces = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "pending_places"));
      const list: PendingPlace[] = [];
      querySnapshot.forEach((docSnap) => {
        list.push({ id: docSnap.id, ...docSnap.data() } as PendingPlace);
      });
      setPendingPlaces(list);
    } catch (err) {
      console.error("Error fetching pending places:", err);
    } finally {
      setLoading(false);
    }
  };

  // 2. Fetch User Reports
  const fetchReports = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "reports"));
      const list: ReportItem[] = [];
      querySnapshot.forEach((docSnap) => {
        list.push({ id: docSnap.id, ...docSnap.data() } as ReportItem);
      });
      setReportsList(list);
    } catch (err) {
      console.error("Error fetching reports:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === "pending") fetchPendingPlaces();
      if (activeTab === "reports") fetchReports();
    }
  }, [isAuthenticated, activeTab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === ADMIN_PASSCODE) {
      setIsAuthenticated(true);
      setPassError("");
    } else {
      setPassError("Incorrect Passcode!");
    }
  };

  // APPROVE PENDING PLACE
  const handleApprove = async (place: PendingPlace) => {
    if (!window.confirm(`"${place.title}" Approve?`)) return;
    setActionLoadingId(place.id);
    try {
      await addDoc(collection(db, "places"), {
        ...place,
        createdAt: serverTimestamp(),
      });
      await deleteDoc(doc(db, "pending_places", place.id));
      setPendingPlaces((prev) => prev.filter((item) => item.id !== place.id));
      if (selectedPlace?.id === place.id) setSelectedPlace(null);
      alert("✅ Location approved!");
    } catch (err) {
      alert("❌ An error occurred while approving.");
    } finally {
      setActionLoadingId(null);
    }
  };

  // REJECT PENDING PLACE
  const handleReject = async (placeId: string) => {
    if (!window.confirm("Reject and remove this submission?")) return;
    setActionLoadingId(placeId);
    try {
      await deleteDoc(doc(db, "pending_places", placeId));
      setPendingPlaces((prev) => prev.filter((item) => item.id !== placeId));
      alert("🗑️ The submission was removed.");
    } catch (err) {
      alert("❌ Unable to eject.");
    } finally {
      setActionLoadingId(null);
    }
  };

  // 🚩 MARK REPORT AS RESOLVED
  const handleResolveReport = async (reportId: string) => {
    try {
      await updateDoc(doc(db, "reports", reportId), { status: "resolved" });
      setReportsList((prev) =>
        prev.map((r) => (r.id === reportId ? { ...r, status: "resolved" } : r)),
      );
      alert("✅ Report marked as Resolved!");
    } catch (err) {
      alert("❌ Unable to update.");
    }
  };

  // 🚩 DELETE REPORT
  const handleDeleteReport = async (reportId: string) => {
    if (!window.confirm("Remove this complaint?")) return;
    try {
      await deleteDoc(doc(db, "reports", reportId));
      setReportsList((prev) => prev.filter((r) => r.id !== reportId));
    } catch (err) {
      alert("❌ Unable to delete");
    }
  };

  // 🚩 DELETE REPORTED PLACE DIRECTLY FROM 'places'
  const handleDeleteReportedPlace = async (
    placeId: string,
    reportId: string,
  ) => {
    if (
      !window.confirm(
        "🚨 Attention: Are you sure you want to completely delete this place from the Main Database?",
      )
    )
      return;
    try {
      await deleteDoc(doc(db, "places", placeId));
      await updateDoc(doc(db, "reports", reportId), { status: "resolved" });
      setReportsList((prev) =>
        prev.map((r) => (r.id === reportId ? { ...r, status: "resolved" } : r)),
      );
      alert("🗑️ The place has been removed from the main database!");
    } catch (err) {
      alert("❌ The place could not be deleted.");
    }
  };

  // PASSCODE GATE
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 text-white">
        <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
            <FaLock size={24} />
          </div>
          <h2 className="text-2xl font-black uppercase mb-2">Admin Portal</h2>
          <p className="text-xs text-zinc-400 mb-6">Enter the passcode.</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Enter Passcode..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-center text-lg font-mono text-white outline-none focus:border-emerald-500"
            />
            {passError && (
              <p className="text-xs text-red-400 font-bold">{passError}</p>
            )}
            <button
              type="submit"
              className="w-full bg-emerald-500 text-black font-black py-3 rounded-xl uppercase">
              Unlock
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4 md:p-8 ">
      {/* Header & Tabs */}
      <div className="max-w-7xl mx-auto mb-8 border-b border-white/10 pb-6 space-y-4 pt-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-emerald-400 flex items-center gap-3">
              <FaShieldCat /> Admin Dashboard
            </h1>
            <p className="text-xs text-zinc-400 mt-1">
              Check Submissions and manage User Reports here.
            </p>
          </div>

          <button
            onClick={
              activeTab === "pending" ? fetchPendingPlaces : fetchReports
            }
            disabled={loading}
            className="flex items-center gap-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 px-4 py-2 rounded-xl text-xs font-bold cursor-pointer">
            <FaArrowRotateRight className={loading ? "animate-spin" : ""} />{" "}
            Refresh
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={handleOpenModal}
            className="w-full lg:w-auto bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black px-8 py-4 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-400/10 hover:shadow-emerald-400/20 active:scale-95 flex items-center justify-center gap-2 group/btn cursor-pointer">
            <FaShareFromSquare size={16} /> Share Hidden Place
          </button>
        </div>

        {/* 🗂️ TABS NAVIGATION */}
        <div className="flex gap-3 pt-2">
          <button
            onClick={() => setActiveTab("pending")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "pending"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
            }`}>
            <FaLocationDot /> Pending Places
            <span className="bg-black/30 px-2 py-0.5 rounded-full text-[10px]">
              {pendingPlaces.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("reports")}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "reports"
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                : "bg-zinc-900 text-zinc-400 hover:text-white border border-white/10"
            }`}>
            <FaFlag /> User Reports
            <span className="bg-black/30 px-2 py-0.5 rounded-full text-[10px]">
              {reportsList.filter((r) => r.status === "unread").length} Unread
            </span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center py-20 text-zinc-500 text-sm font-bold">
            Loading...
          </div>
        ) : activeTab === "pending" ? (
          /* ================= 1. PENDING PLACES TAB ================= */
          pendingPlaces.length === 0 ? (
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 text-center text-zinc-500 font-bold text-sm">
              There are no submissions to review.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pendingPlaces.map((place) => (
                <div
                  key={place.id}
                  className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="p-5 space-y-3">
                    <h3 className="font-bold text-white text-lg">
                      {place.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {place.shortDescription}
                    </p>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                      <button
                        onClick={() => setSelectedPlace(place)}
                        className="bg-zinc-800 p-2 rounded-xl text-xs font-bold">
                        View
                      </button>
                      <button
                        onClick={() => handleApprove(place)}
                        className="bg-emerald-500 text-black p-2 rounded-xl text-xs font-bold">
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(place.id)}
                        className="bg-red-500/20 text-red-400 p-2 rounded-xl text-xs font-bold">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )
        ) : /* ================= 2. USER REPORTS TAB ================= */
        reportsList.length === 0 ? (
          <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 text-center text-zinc-500 font-bold text-sm">
            There are no reports.
          </div>
        ) : (
          <div className="space-y-4 max-w-4xl">
            {reportsList.map((report) => (
              <div
                key={report.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4 ${
                  report.status === "resolved"
                    ? "bg-zinc-900/40 border-white/5 opacity-60"
                    : "bg-zinc-900 border-amber-500/30 shadow-lg"
                }`}>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-base">
                      {report.placeTitle}
                    </span>
                    {report.status === "unread" ? (
                      <span className="bg-amber-500/20 text-amber-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-amber-500/30">
                        Unread
                      </span>
                    ) : (
                      <span className="bg-emerald-500/20 text-emerald-400 text-[10px] font-black uppercase px-2 py-0.5 rounded-md border border-emerald-500/30">
                        Resolved
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-amber-200/90 font-mono bg-amber-950/30 p-3 rounded-xl border border-amber-500/10">
                    💬 "{report.reason}"
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end">
                  {report.status === "unread" && (
                    <button
                      onClick={() => handleResolveReport(report.id)}
                      className="bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1">
                      <FaCheck /> Resolve
                    </button>
                  )}

                  <button
                    onClick={() =>
                      handleDeleteReportedPlace(report.placeId, report.id)
                    }
                    className="bg-red-500/20 hover:bg-red-500/30 text-red-400 border border-red-500/30 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1"
                    title="Delete place from main places collection">
                    <FaCircleExclamation /> Delete Place
                  </button>

                  <button
                    onClick={() => handleDeleteReport(report.id)}
                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white p-2 rounded-xl text-xs transition-all cursor-pointer"
                    title="Delete report entry">
                    <FaTrashCan />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {isAddPlaceOpen && (
          <AddPlaceModal
            // isOpen={isAddPlaceOpen}
            onClose={() => setIsAddPlaceOpen(false)}
          />
        )}
      </div>
    </div>
  );
};
