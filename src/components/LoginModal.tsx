import { useState } from "react";
import { loginWithGoogle } from "../lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";
import type { UserProfile } from "../data/user";

interface LoginModalProps {
  onClose: () => void;
  onLoginSuccess: (userProfile: UserProfile) => void;
}

export default function LoginModal({
  onClose,
  onLoginSuccess,
}: LoginModalProps) {
  const [selectedRole, setSelectedRole] = useState<"Tourist" | "Local Guide">(
    "Tourist",
  );
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      // 1. Firebase Popup එක හරහා Google Login සිදුවේ
      const result = await loginWithGoogle();
      const user = result.user;

      // 2. මේ යූසර් දැනටමත් අපේ Database එකේ ඉන්නවාද කියා පරීක්ෂා කිරීම
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      let finalProfile: UserProfile;

      if (!userDocSnap.exists()) {
        // 3. යූසර් අලුත් කෙනෙක් නම්, එයා තෝරාගත්තු Role එකත් එක්ක අලුත් Profile එකක් හදනවා
        finalProfile = {
          uid: user.uid,
          name: user.displayName || "Anonymous Explorer",
          email: user.email || "",
          profilePic: user.photoURL || `https://dicebear.com{user.uid}`,
          role: selectedRole, // යූසර් මුලින්ම තෝරන Role එක (Tourist හෝ Local Guide)
          explorerVotes: 0,
          ecoPoints: 0,
        };
        // Firestore එකට දත්ත ඇතුළත් කිරීම
        await setDoc(userDocRef, finalProfile);
      } else {
        // 4. යූසර් කලින්ම Register වී ඇත්නම්, පරණ Profile විස්තර ඒ විදිහටම ලබා ගනී
        finalProfile = userDocSnap.data() as UserProfile;
      }

      onLoginSuccess(finalProfile);
      onClose(); // Popup එක වසා දැමීම
    } catch (error) {
      console.error("Authentication Error: ", error);
      alert("Login failed. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* 🌑 Background Blur Black Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}></div>

      {/* 🔮 GLASSMORPHISM CARD: 2026 Layout */}
      <div className="relative bg-zinc-900/80 border border-white/10 rounded-[2.5rem] p-8 max-w-md w-full shadow-2xl backdrop-blur-2xl text-center z-10 animate-[fadeIn_0.3s_ease-out]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors font-bold text-sm">
          ✕
        </button>

        <span className="text-emerald-400 font-bold text-[10px] tracking-widest uppercase mb-2 block">
          Join Unseen Tapro
        </span>
        <h2 className="text-2xl font-black text-white uppercase tracking-tight mb-6">
          Choose Your Journey
        </h2>

        {/* 🎭 ROLE SELECTOR: ඔයා කියපු සුපිරි Logic එක */}
        <div className="grid grid-cols-2 gap-3 mb-8 bg-black/40 p-1.5 rounded-2xl border border-white/5">
          <button
            onClick={() => setSelectedRole("Tourist")}
            className={`py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              selectedRole === "Tourist"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/10"
                : "text-gray-400 hover:text-white"
            }`}>
            🎒 Traveler
          </button>
          <button
            onClick={() => setSelectedRole("Local Guide")}
            className={`py-3 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 ${
              selectedRole === "Local Guide"
                ? "bg-emerald-500 text-black shadow-lg shadow-emerald-500/10"
                : "text-gray-400 hover:text-white"
            }`}>
            🧭 Local Guide
          </button>
        </div>
        {/* Brief description based on role selection */}
        <p className="text-gray-400 text-xs font-light leading-relaxed mb-8 px-2 h-12">
          {selectedRole === "Tourist"
            ? "Log in to discover secret trails, plan custom trips with friends, and participate in eco-challenges."
            : "Register as an official local guide, publish your vehicle rates (Jeep/Tuk), and accept tourist bookings directly."}
        </p>

        {/* 🌐 GOOGLE SIGN-IN BUTTON */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full bg-white hover:bg-emerald-400 text-black font-black py-4 px-6 rounded-2xl text-xs md:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          {loading ? "Connecting..." : "Continue with Google"}
        </button>
      </div>
    </div>
  );
}
