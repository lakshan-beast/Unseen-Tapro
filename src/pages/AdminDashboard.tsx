// import React, { useState, useEffect } from "react";
// import {
//   FaCheck,
//   FaTrashCan,
//   FaEye,
//   //   FaLocationDot,
//   FaRoute,
//   FaShieldCat,
//   FaLock,
//   FaArrowRotateRight,
//   FaXmark,
//   FaClock,
//   FaUser,
// } from "react-icons/fa6";
// import { db } from "../lib/firebase"; // ඔබේ firebase configuration file path එක බලන්න
// import {
//   collection,
//   getDocs,
//   doc,
//   addDoc,
//   deleteDoc,
//   serverTimestamp,
// } from "firebase/firestore";

// interface PendingPlace {
//   id: string;
//   title: string;
//   district: string;
//   category: string;
//   shortDescription: string;
//   longDescription: string;
//   image: string;
//   imageUrls: string[];
//   authorName: string;
//   authorContact: string;
//   authorVotes?: number;
//   likes?: number;
//   commentsCount?: number;
//   googleMapUrl: string;
//   vehicleAccessibility: string;
//   routes: { step: number; title: string; description: string }[];
//   safetyAlerts: string[];
//   facilities: string[];
//   submittedAt?: any;
// }

// const ADMIN_PASSCODE = "1234"; // 🔑 ඔබගේ Admin Passcode එක මෙතැනට යොදන්න

// export const AdminDashboard: React.FC = () => {
//   // Security State
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [passcode, setPasscode] = useState("");
//   const [passError, setPassError] = useState("");

//   // Data States
//   const [pendingPlaces, setPendingPlaces] = useState<PendingPlace[]>([]);
//   const [loading, setLoading] = useState(false);

//   // Modal / Preview State
//   const [selectedPlace, setSelectedPlace] = useState<PendingPlace | null>(null);
//   const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);

//   // 1. Fetch Pending Places from Firestore
//   const fetchPendingPlaces = async () => {
//     setLoading(true);
//     try {
//       const querySnapshot = await getDocs(collection(db, "pending_places"));
//       const list: PendingPlace[] = [];
//       querySnapshot.forEach((docSnap) => {
//         list.push({ id: docSnap.id, ...docSnap.data() } as PendingPlace);
//       });
//       setPendingPlaces(list);
//     } catch (err) {
//       console.error("Error fetching pending places:", err);
//       alert("❌ Data ලබා ගැනීමට නොහැකි විය! no pending_palces");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isAuthenticated) {
//       fetchPendingPlaces();
//     }
//   }, [isAuthenticated]);

//   // Handle Passcode Submission
//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (passcode === ADMIN_PASSCODE) {
//       setIsAuthenticated(true);
//       setPassError("");
//     } else {
//       setPassError("වැරදි Passcode එකකි. නැවත උත්සාහ කරන්න!");
//     }
//   };

//   // 2. APPROVE ACTION
//   const handleApprove = async (place: PendingPlace) => {
//     if (
//       !window.confirm(
//         `"${place.title}" Approve කර Main List එකට එකතු කිරීමට අවශ්‍යද?`,
//       )
//     )
//       return;

//     setActionLoadingId(place.id);
//     try {
//       // Step A: Prepare data for 'places' collection
//       const finalPlaceData = {
//         title: place.title,
//         district: place.district,
//         category: place.category,
//         shortDescription: place.shortDescription,
//         longDescription: place.longDescription,
//         image: place.image,
//         imageUrls: place.imageUrls || [place.image],
//         authorName: place.authorName || "Explorer",
//         authorVotes: place.authorVotes || 10,
//         likes: 0,
//         commentsCount: 0,
//         googleMapUrl: place.googleMapUrl || "",
//         vehicleAccessibility: place.vehicleAccessibility || "",
//         routes: place.routes || [],
//         safetyAlerts: place.safetyAlerts || [],
//         facilities: place.facilities || [],
//         createdAt: serverTimestamp(),
//       };

//       // Step B: Write to 'places' collection
//       await addDoc(collection(db, "places"), finalPlaceData);

//       // Step C: Delete from 'pending_places' collection
//       await deleteDoc(doc(db, "pending_places", place.id));

//       // Step D: Update UI
//       setPendingPlaces((prev) => prev.filter((item) => item.id !== place.id));
//       if (selectedPlace?.id === place.id) setSelectedPlace(null);

//       alert("✅ ස්ථානය සාර්ථකව Approve කරන ලදී!");
//     } catch (err) {
//       console.error("Approve Failed:", err);
//       alert("❌ Approve කිරීමේදී දෝෂයක් සිදු විය.");
//     } finally {
//       setActionLoadingId(null);
//     }
//   };

//   // 3. REJECT ACTION
//   const handleReject = async (placeId: string, title: string) => {
//     if (!window.confirm(`"${title}" Reject කර ඉවත් කර දැමීමට තහවුරු කරන්න?`))
//       return;

//     setActionLoadingId(placeId);
//     try {
//       await deleteDoc(doc(db, "pending_places", placeId));
//       setPendingPlaces((prev) => prev.filter((item) => item.id !== placeId));
//       if (selectedPlace?.id === placeId) setSelectedPlace(null);

//       alert("🗑️ ස්ථානය ඉවත් කරන ලදී.");
//     } catch (err) {
//       console.error("Reject Failed:", err);
//       alert("❌ Reject කිරීමේදී දෝෂයක් සිදු විය.");
//     } finally {
//       setActionLoadingId(null);
//     }
//   };

//   // PASSCODE SCREEN
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-4 text-white">
//         <div className="w-full max-w-md bg-zinc-900 border border-white/10 rounded-3xl p-8 text-center shadow-2xl">
//           <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
//             <FaLock size={24} />
//           </div>
//           <h2 className="text-2xl font-black uppercase tracking-wider mb-2">
//             Admin Portal
//           </h2>
//           <p className="text-xs text-zinc-400 mb-6">
//             Admin Dashboard එකට පිවිසීමට Passcode එක ඇතුලත් කරන්න.
//           </p>

//           <form onSubmit={handleLogin} className="space-y-4">
//             <input
//               type="password"
//               placeholder="Enter Passcode..."
//               value={passcode}
//               onChange={(e) => setPasscode(e.target.value)}
//               className="w-full bg-black/50 border border-white/10 rounded-xl p-3 text-center text-lg font-mono text-white outline-none focus:border-emerald-500"
//             />
//             {passError && (
//               <p className="text-xs text-red-400 font-bold">{passError}</p>
//             )}
//             <button
//               type="submit"
//               className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 rounded-xl uppercase tracking-wider transition-all cursor-pointer">
//               Unlock Dashboard
//             </button>
//           </form>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-5 bg-zinc-950 text-white p-4 md:p-8">
//       {/* Dashboard Header */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-white/10 pb-6 pt-16">
//         <div>
//           <h1 className="text-2xl md:text-3xl font-black uppercase tracking-wider text-emerald-400 flex items-center gap-3">
//             <FaShieldCat /> Admin Submissions Review
//           </h1>
//           <p className="text-xs text-zinc-400 mt-1">
//             Usersලා විසින් යොමු කරන ලද Hidden Spots පරීක්ෂා කර Publish කරන්න.
//           </p>
//         </div>

//         <div className="flex items-center gap-3">
//           <button
//             onClick={fetchPendingPlaces}
//             disabled={loading}
//             className="flex items-center gap-2 bg-zinc-900 border border-white/10 hover:bg-zinc-800 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer">
//             <FaArrowRotateRight className={loading ? "animate-spin" : ""} />{" "}
//             Refresh List
//           </button>
//           <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded-xl text-xs font-black">
//             {pendingPlaces.length} Pending
//           </span>
//         </div>
//       </div>

//       {/* Main Content Grid */}
//       <div className="max-w-7xl mx-auto">
//         {loading ? (
//           <div className="text-center py-20 text-zinc-500 text-sm font-bold">
//             ලෝඩ් වෙමින් පවතී...
//           </div>
//         ) : pendingPlaces.length === 0 ? (
//           <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 text-center text-zinc-500">
//             <FaClock size={36} className="mx-auto mb-3 opacity-40" />
//             <p className="font-bold text-sm">
//               පරීක්ෂා කිරීමට කිසිදු Submission එකක් නොමැත.
//             </p>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {pendingPlaces.map((place) => (
//               <div
//                 key={place.id}
//                 className="bg-zinc-900/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all shadow-lg">
//                 {/* Image & Quick Badge */}
//                 <div className="relative h-48 w-full bg-zinc-950 overflow-hidden">
//                   <img
//                     src={place.image}
//                     alt={place.title}
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-emerald-400 border border-white/10">
//                     {place.district}
//                   </div>
//                   <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-amber-400 border border-white/10">
//                     {place.category}
//                   </div>
//                 </div>

//                 {/* Body Content */}
//                 <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
//                   <div>
//                     <h3 className="text-lg font-bold text-white mb-1 line-clamp-1">
//                       {place.title}
//                     </h3>
//                     <p className="text-xs text-zinc-400 line-clamp-2 mb-3">
//                       {place.shortDescription}
//                     </p>

//                     <div className="flex items-center gap-2 text-[11px] text-zinc-500 border-t border-white/5 pt-3">
//                       <FaUser className="text-emerald-400" />
//                       <span>
//                         Submitted by: <strong>{place.authorName}</strong>
//                       </span>
//                       {place.authorContact && (
//                         <span className="text-zinc-600">
//                           ({place.authorContact})
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Actions Bar */}
//                   <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
//                     <button
//                       onClick={() => setSelectedPlace(place)}
//                       className="flex items-center justify-center gap-1.5 bg-zinc-800 hover:bg-zinc-700 text-white p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer">
//                       <FaEye /> View
//                     </button>
//                     <button
//                       onClick={() => handleApprove(place)}
//                       disabled={actionLoadingId === place.id}
//                       className="flex items-center justify-center gap-1.5 bg-emerald-500 hover:bg-emerald-400 text-black p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50">
//                       <FaCheck /> Approve
//                     </button>
//                     <button
//                       onClick={() => handleReject(place.id, place.title)}
//                       disabled={actionLoadingId === place.id}
//                       className="flex items-center justify-center gap-1.5 bg-red-500/20 hover:bg-red-500/30 text-red-400 p-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer disabled:opacity-50">
//                       <FaTrashCan /> Reject
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* FULL PREVIEW MODAL */}
//       {selectedPlace && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
//           <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 text-white overflow-y-auto shadow-2xl space-y-6">
//             <button
//               onClick={() => setSelectedPlace(null)}
//               className="absolute top-5 right-5 p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors cursor-pointer">
//               <FaXmark size={18} />
//             </button>

//             <div>
//               <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
//                 Submission Preview
//               </span>
//               <h2 className="text-2xl font-black text-white">
//                 {selectedPlace.title}
//               </h2>
//               <p className="text-xs text-zinc-400">
//                 {selectedPlace.district} • {selectedPlace.category}
//               </p>
//             </div>

//             {/* Submitter Details */}
//             <div className="bg-zinc-900 p-4 rounded-2xl border border-white/5 text-xs grid grid-cols-2 gap-2">
//               <div>
//                 <strong>Submitted By:</strong> {selectedPlace.authorName}
//               </div>
//               <div>
//                 <strong>Contact Details:</strong> {selectedPlace.authorContact}
//               </div>
//             </div>

//             {/* Images */}
//             {selectedPlace.imageUrls && selectedPlace.imageUrls.length > 0 && (
//               <div>
//                 <h4 className="text-xs font-bold text-zinc-400 uppercase mb-2">
//                   Uploaded Images
//                 </h4>
//                 <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                   {selectedPlace.imageUrls.map((url, idx) => (
//                     <img
//                       key={idx}
//                       src={url}
//                       alt="submission"
//                       className="w-full h-32 object-cover rounded-xl border border-white/10"
//                     />
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Description */}
//             <div className="space-y-2">
//               <h4 className="text-xs font-bold text-zinc-400 uppercase">
//                 Long Description
//               </h4>
//               <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-900/50 p-4 rounded-xl border border-white/5">
//                 {selectedPlace.longDescription}
//               </p>
//             </div>

//             {/* Routes */}
//             {selectedPlace.routes && selectedPlace.routes.length > 0 && (
//               <div className="space-y-2">
//                 <h4 className="text-xs font-bold text-emerald-400 uppercase flex items-center gap-1.5">
//                   <FaRoute /> Routes ({selectedPlace.routes.length})
//                 </h4>
//                 <div className="space-y-2">
//                   {selectedPlace.routes.map((r, i) => (
//                     <div
//                       key={i}
//                       className="bg-zinc-900 p-3 rounded-xl text-xs border border-white/5">
//                       <div className="font-bold text-white">
//                         Step {r.step}: {r.title}
//                       </div>
//                       <div className="text-zinc-400 text-[11px]">
//                         {r.description}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Safety Alerts */}
//             {selectedPlace.safetyAlerts &&
//               selectedPlace.safetyAlerts.length > 0 && (
//                 <div className="space-y-2">
//                   <h4 className="text-xs font-bold text-amber-400 uppercase flex items-center gap-1.5">
//                     <FaShieldCat /> Safety Alerts
//                   </h4>
//                   <ul className="list-disc list-inside text-xs text-amber-200 bg-amber-950/20 p-3 rounded-xl border border-amber-500/20">
//                     {selectedPlace.safetyAlerts.map((alert, i) => (
//                       <li key={i}>{alert}</li>
//                     ))}
//                   </ul>
//                 </div>
//               )}

//             {/* Footer Modal Actions */}
//             <div className="flex gap-3 pt-4 border-t border-white/10">
//               <button
//                 onClick={() => handleApprove(selectedPlace)}
//                 disabled={actionLoadingId === selectedPlace.id}
//                 className="flex-1 bg-emerald-500 hover:bg-emerald-400 text-black font-black py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer">
//                 Approve & Publish
//               </button>
//               <button
//                 onClick={() =>
//                   handleReject(selectedPlace.id, selectedPlace.title)
//                 }
//                 disabled={actionLoadingId === selectedPlace.id}
//                 className="flex-1 bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold py-3 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer">
//                 Reject & Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaTrashCan,
  //   FaEye,
  FaLocationDot,
  //   FaRoute,
  FaShieldCat,
  FaLock,
  FaArrowRotateRight,
  //   FaXmark,
  //   FaClock,
  //   FaUser,
  FaFlag,
  FaCircleExclamation,
  FaShareFromSquare,
} from "react-icons/fa6";
import { db } from "../lib/firebase"; // ඔබේ firebase configuration path එක පරීක්ෂා කරන්න

import { AddPlaceModal } from "../components/forms/AddPlaceForms";

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

const ADMIN_PASSCODE = "1234"; // 🔑 ඔබගේ Admin Passcode එක

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
      setPassError("වැරදි Passcode එකකි!");
    }
  };

  // APPROVE PENDING PLACE
  const handleApprove = async (place: PendingPlace) => {
    if (!window.confirm(`"${place.title}" Approve කරන්නද?`)) return;
    setActionLoadingId(place.id);
    try {
      await addDoc(collection(db, "places"), {
        ...place,
        createdAt: serverTimestamp(),
      });
      await deleteDoc(doc(db, "pending_places", place.id));
      setPendingPlaces((prev) => prev.filter((item) => item.id !== place.id));
      if (selectedPlace?.id === place.id) setSelectedPlace(null);
      alert("✅ ස්ථානය Approve කරන ලදී!");
    } catch (err) {
      alert("❌ Approve කිරීමේදී දෝෂයක් සිදු විය.");
    } finally {
      setActionLoadingId(null);
    }
  };

  // REJECT PENDING PLACE
  const handleReject = async (placeId: string) => {
    if (!window.confirm("මෙම Submission එක Reject කර ඉවත් කරන්නද?")) return;
    setActionLoadingId(placeId);
    try {
      await deleteDoc(doc(db, "pending_places", placeId));
      setPendingPlaces((prev) => prev.filter((item) => item.id !== placeId));
      alert("🗑️ Submission එක ඉවත් කරන ලදී.");
    } catch (err) {
      alert("❌ Reject කිරීමට නොහැකි විය.");
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
      alert("✅ Report එක Resolved ලෙස Mark කළා!");
    } catch (err) {
      alert("❌ Update කිරීමට නොහැකි විය.");
    }
  };

  // 🚩 DELETE REPORT
  const handleDeleteReport = async (reportId: string) => {
    if (!window.confirm("මෙම පැමිණිල්ල ඉවත් කරන්නද?")) return;
    try {
      await deleteDoc(doc(db, "reports", reportId));
      setReportsList((prev) => prev.filter((r) => r.id !== reportId));
    } catch (err) {
      alert("❌ Delete කිරීමට නොහැකි විය.");
    }
  };

  // 🚩 DELETE REPORTED PLACE DIRECTLY FROM 'places'
  const handleDeleteReportedPlace = async (
    placeId: string,
    reportId: string,
  ) => {
    if (
      !window.confirm(
        "🚨 අවධානයයි: මෙම Place එක Main Database එකෙන් සම්පූර්ණයෙන්ම Delete කිරීමට තහවුරු කරන්නද?",
      )
    )
      return;
    try {
      await deleteDoc(doc(db, "places", placeId));
      await updateDoc(doc(db, "reports", reportId), { status: "resolved" });
      setReportsList((prev) =>
        prev.map((r) => (r.id === reportId ? { ...r, status: "resolved" } : r)),
      );
      alert("🗑️ Place එක Main Database එකෙන් ඉවත් කළා!");
    } catch (err) {
      alert("❌ Place එක Delete කිරීමට නොහැකි විය.");
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
          <p className="text-xs text-zinc-400 mb-6">
            Passcode එක ඇතුලත් කරන්න.
          </p>
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
              Submissions පරීක්ෂා කිරීම සහ User Reports පාලනය කිරීම මෙතැනින්
              සිදුකරන්න.
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
            ලෝඩ් වෙමින් පවතී...
          </div>
        ) : activeTab === "pending" ? (
          /* ================= 1. PENDING PLACES TAB ================= */
          pendingPlaces.length === 0 ? (
            <div className="bg-zinc-900/50 border border-white/5 rounded-3xl p-12 text-center text-zinc-500 font-bold text-sm">
              පරීක්ෂා කිරීමට කිසිදු Submission එකක් නොමැත.
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
            කිසිදු පැමිණිල්ලක් (Reports) නොමැත.
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
            isOpen={isAddPlaceOpen}
            onClose={() => setIsAddPlaceOpen(false)}
          />
        )}
      </div>
    </div>
  );
};
