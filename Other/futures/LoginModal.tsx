// import { useState } from "react";
// import { loginWithGoogle } from "../lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../lib/firebase";
// import type { UserProfile } from "../data/user";

// interface LoginModalProps {
//   onClose: () => void;
//   onLoginSuccess: (userProfile: UserProfile) => void;
// }

// export default function LoginModal({
//   onClose,
//   onLoginSuccess,
// }: LoginModalProps) {
//   const [selectedRole, setSelectedRole] = useState<"Tourist" | "Local Guide">(
//     "Tourist",
//   );
//   const [loading, setLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       // 1. Firebase Popup එක හරහා Google Login සිදුවේ
//       const result = await loginWithGoogle();
//       const user = result.user;

//       // 2. මේ යූසර් දැනටමත් අපේ Database එකේ ඉන්නවාද කියා පරීක්ෂා කිරීම
//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnap = await getDoc(userDocRef);

//       let finalProfile: UserProfile;

//       if (!userDocSnap.exists()) {
//         // 3. යූසර් අලුත් කෙනෙක් නම්, එයා තෝරාගත්තු Role එකත් එක්ක අලුත් Profile එකක් හදනවා
//         finalProfile = {
//           uid: user.uid,
//           name: user.displayName || "Anonymous Explorer",
//           email: user.email || "",
//           profilePic: user.photoURL || `https://dicebear.com{user.uid}`,
//           role: selectedRole, // යූසර් මුලින්ම තෝරන Role එක (Tourist හෝ Local Guide)
//           explorerVotes: 0,
//           ecoPoints: 0,
//         };
//         // Firestore එකට දත්ත ඇතුළත් කිරීම
//         await setDoc(userDocRef, finalProfile);
//       } else {
//         // 4. යූසර් කලින්ම Register වී ඇත්නම්, පරණ Profile විස්තර ඒ විදිහටම ලබා ගනී
//         finalProfile = userDocSnap.data() as UserProfile;
//       }

//       onLoginSuccess(finalProfile);
//       onClose(); // Popup එක වසා දැමීම
//     } catch (error) {
//       console.error("Authentication Error: ", error);
//       alert("Login failed. Please check your internet connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
//       {/* 🌑 Background Blur Black Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/60 backdrop-blur-md"
//         onClick={onClose}></div>

//       {/* 🔮 GLASSMORPHISM CARD: 2026 Layout */}
//       <div className="relative bg-zinc-900/80 border border-white/10 rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl backdrop-blur-2xl text-center z-10 animate-[fadeIn_0.3s_ease-out]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors font-bold text-sm">
//           ✕
//         </button>

//         <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
//           Join Unseen Tapro
//         </span>
//         <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
//           Choose Your Journey
//         </h2>

//         {/* 🎭 ROLE SELECTOR: ඔයා කියපු සුපිරි Logic එක */}
//         <div className="grid grid-cols-2 gap-3 mb-8 bg-black/40 p-1.5 rounded-2xl border border-white/5">
//           <button
//             onClick={() => setSelectedRole("Tourist")}
//             className={`py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
//               selectedRole === "Tourist"
//                 ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/10"
//                 : "text-gray-400 hover:text-white"
//             }`}>
//             🎒 Traveler
//           </button>
//           <button
//             onClick={() => setSelectedRole("Local Guide")}
//             className={`py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
//               selectedRole === "Local Guide"
//                 ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/10"
//                 : "text-gray-400 hover:text-white"
//             }`}>
//             🧭 Local Guide
//           </button>
//         </div>
//         {/* Brief description based on role selection */}
//         <p className="text-gray-400 text-xs font-light leading-relaxed mb-8 px-2 h-12">
//           {selectedRole === "Tourist"
//             ? "Log in to discover secret trails, plan custom trips with friends, and participate in eco-challenges."
//             : "Register as an official local guide, publish your vehicle rates (Jeep/Tuk), and accept tourist bookings directly."}
//         </p>

//         {/* 🌐 GOOGLE SIGN-IN BUTTON */}
//         <button
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full bg-white hover:bg-emerald-400 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
//           <svg className="w-4 h-4" viewBox="0 0 24 24">
//             <path
//               fill="currentColor"
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//             />
//             <path
//               fill="currentColor"
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//             />
//             <path
//               fill="currentColor"
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
//             />
//             <path
//               fill="currentColor"
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//             />
//           </svg>
//           {loading ? "Connecting..." : "Continue with Google"}
//         </button>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// // import { loginWithGoogle } from "../../lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "../../lib/firebase";
// import type { UserProfile } from "../../data/user";
// // 🎨 Lucide Icons Import කිරීම
// // import { Compass, Compass as TravelerIcon, Store, X } from 'lucide-react';

// import { GiCompass } from "react-icons/gi";
// import { IoStorefrontOutline } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import { MdOutlineShareLocation } from "react-icons/md";
// import { FcGoogle } from "react-icons/fc";

// interface LoginModalProps {
//   onClose: () => void;
//   onLoginSuccess: (userProfile: UserProfile) => void;
// }

// // 🎭 සාමාන්‍යයෙන් Roles 3ක් අපි මෙතන Define කරනවා
// type UserRole = "Tourist" | "Local Guide" | "Merchant";

// export default function LoginModal({
//   onClose,
//   onLoginSuccess,
// }: LoginModalProps) {
//   const [selectedRole, setSelectedRole] = useState<UserRole>("Tourist");
//   const [loading, setLoading] = useState(false);

//   const handleGoogleLogin = async () => {
//     setLoading(true);
//     try {
//       const result = await loginWithGoogle();
//       const user = result.user;

//       const userDocRef = doc(db, "users", user.uid);
//       const userDocSnap = await getDoc(userDocRef);

//       let finalProfile: UserProfile;

//       if (!userDocSnap.exists()) {
//         // 🆕 නව යූසර් කෙනෙක් නම් තෝරාගත් Role එකත් එක්ක Firestore එකේ Save වෙනවා
//         finalProfile = {
//           uid: user.uid,
//           name: user.displayName || "Anonymous Explorer",
//           email: user.email || "",
//           profilePic: user.photoURL || `https://dicebear.com{user.uid}`,
//           role: selectedRole,
//           explorerVotes: 0,
//           ecoPoints: 0,
//           // Merchant කෙනෙක් නම් පසුව පුරවා ගැනීමට default හිස් අගයන් දමමු
//           ...(selectedRole === "Merchant" && {
//             shopName: "",
//             isVerifiedMerchant: false,
//           }),
//           // Guide කෙනෙක් නම් පසුව පුරවා ගැනීමට default හිස් අගයන් දමමු
//           ...(selectedRole === "Local Guide" && {
//             vehicleType: "",
//             isVerifiedGuide: false,
//           }),
//         };
//         await setDoc(userDocRef, finalProfile);
//       } else {
//         // 🔄 පරණ යූසර් කෙනෙක් නම් කලින් තිබුණු දත්තම ලබාගන්නවා
//         finalProfile = userDocSnap.data() as UserProfile;
//       }

//       onLoginSuccess(finalProfile);
//       onClose();
//     } catch (error) {
//       console.error("Authentication Error: ", error);
//       alert("Login failed. Please check your internet connection.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center p-4 ">
//       {/* 🌑 Background Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/70 backdrop-blur-md"
//         onClick={onClose}></div>

//       {/* 🔮 GLASSMORPHISM CARD */}
//       <div className="relative bg-[#01030f] border border-white/10 rounded-[2.5rem] p-8 max-w-lg w-full shadow-2xl backdrop-blur-lg text-center z-10 animate-[fadeIn_0.2s_ease-out]">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5 cursor-pointer">
//           <IoClose size={18} />
//         </button>

//         <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block animate-pulse">
//           Join Unseen Tapro
//         </span>
//         <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
//           Choose Your Journey
//         </h2>

//         {/* 🎭 ROLE SELECTOR: බටන් 3ක් ඇති නව සැකැස්ම */}
//         <div className="grid grid-cols-3 gap-2 mb-6 bg-black/40 p-1.5 rounded-2xl border border-white/5">
//           {/* 1. Traveler Button */}
//           <button
//             onClick={() => setSelectedRole("Tourist")}
//             className={`py-3 px-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 flex flex-col items-center gap-1.5 cursor-pointer ${
//               selectedRole === "Tourist"
//                 ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
//                 : "text-gray-400 hover:text-white hover:bg-white/5"
//             }`}>
//             <MdOutlineShareLocation
//               size={16}
//               className={selectedRole === "Tourist" ? "animate-spin-slow" : ""}
//             />
//             Traveler
//           </button>

//           {/* 2. Local Guide Button */}
//           <button
//             onClick={() => setSelectedRole("Local Guide")}
//             className={`py-3 px-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 flex flex-col items-center gap-1.5 cursor-pointer ${
//               selectedRole === "Local Guide"
//                 ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
//                 : "text-gray-400 hover:text-white hover:bg-white/5"
//             }`}>
//             <GiCompass size={16} />
//             Local Guide
//           </button>

//           {/* 3. Shop/Hotel Owner Button */}
//           <button
//             onClick={() => setSelectedRole("Merchant")}
//             className={`py-3 px-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-wider transition-all duration-300 flex flex-col items-center gap-1.5 cursor-pointer ${
//               selectedRole === "Merchant"
//                 ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/20"
//                 : "text-gray-400 hover:text-white hover:bg-white/5"
//             }`}>
//             <IoStorefrontOutline size={16} />
//             Business
//           </button>
//         </div>

//         {/* 📝 තෝරන Role එක අනුව මාරු වෙන ලස්සන Descriptions */}
//         <div className="text-gray-400 text-xs font-light leading-relaxed mb-8 px-2 h-14 flex items-center justify-center">
//           {selectedRole === "Tourist" && (
//             <p className="animate-fadeIn">
//               Discover hidden paradise spots, save your favorite trails, and
//               connect with fellow explorers safely.
//             </p>
//           )}
//           {selectedRole === "Local Guide" && (
//             <p className="animate-fadeIn">
//               List your Tuk/Jeep tours, share expert location knowledge, and get
//               direct bookings from global tourists.
//             </p>
//           )}
//           {selectedRole === "Merchant" && (
//             <p className="animate-fadeIn">
//               Sell camping gears, travel equipment, or promote your
//               hotel/homestay rooms directly on our marketplace.
//             </p>
//           )}
//         </div>

//         {/* 🌐 GOOGLE SIGN-IN BUTTON */}
//         <button
//           onClick={handleGoogleLogin}
//           disabled={loading}
//           className="w-full bg-white hover:bg-emerald-400 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50 cursor-pointer">
//           {/* <svg className="w-4 h-4" viewBox="0 0 24 24">
//             <path
//               fill="currentColor"
//               d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//             />
//             <path
//               fill="currentColor"
//               d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//             />
//             <path
//               fill="currentColor"
//               d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
//             />
//             <path
//               fill="currentColor"
//               d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//             />
//           </svg> */}
//           <FcGoogle />
//           {loading ? "Connecting Unseen..." : "Continue with Google"}
//         </button>
//       </div>
//     </div>
//   );
// }
