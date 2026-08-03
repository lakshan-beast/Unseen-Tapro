// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // දැනට ලොග් වෙලා ඉන්නවා කියලා මවාගන්න සරල Mock User කෙනෙක් (පසුව Firebase සම්බන්ධ කරමු)
//   const [user] = useState({
//     isLoggedIn: false,
//     profilePic: "https://dicebear.com",
//   });

//   // දැනට ඉන්න පිටුව අනුව ලින්ක් එක Active ද කියලා බලන Function එක
//   const isActive = (path: string) => location.pathname === path;

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Destinations', path: '/destinations' },
//     { name: 'Trip Planner', path: '/planner' },
//     { name: 'Services & SOS', path: '/services' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

//         {/* 🦁 LOGO: 2026 Bold Minimalist Style */}
//         <Link to="/" className="flex items-center gap-2 group">
//           <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors duration-300">
//             UNSEEN<span className="text-emerald-400 group-hover:text-white">.TAPRO</span>
//           </span>
//         </Link>

//         {/* 🗺️ NAVIGATION LINKS: Desktop View */}
//         <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-lg">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
//                 isActive(link.path)
//                   ? 'bg-emerald-500 text-black shadow-md shadow-emerald-500/20'
//                   : 'text-gray-300 hover:text-white hover:bg-white/5'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* 👤 USER SECTION / LOGIN: Desktop View */}
//         <div className="hidden md:flex items-center gap-4">
//           {user.isLoggedIn ? (
//             <Link to="/dashboard" className="relative group">
//               <div className="w-10 h-10 rounded-full border-2 border-emerald-400/50 p-0.5 overflow-hidden transition-transform duration-300 group-hover:scale-105">
//                 <img src={user.profilePic} alt="User Profile" className="w-full h-full object-cover rounded-full" />
//               </div>
//               <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-zinc-950 rounded-full"></span>
//             </Link>
//           ) : (
//             <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-xs font-bold tracking-wider uppercase text-white rounded-full group bg-gradient-to-br from-emerald-500 to-teal-400 group-hover:from-emerald-500 group-hover:to-teal-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-emerald-800 mt-2">
//               <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-zinc-950 rounded-full group-hover:bg-opacity-0 duration-300">
//                 Login
//               </span>
//             </button>
//           )}
//         </div>

//         {/* 📱 MOBILE HAMBURGER BUTTON */}
//         <div className="md:hidden flex items-center gap-4">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white hover:text-emerald-400 transition-colors focus:outline-none"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L12 12M4 4l16 16" />) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* 📱 MOBILE MENU: Smooth Slide Down */}
//       <div
//         className={`md:hidden absolute top-20 left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 ease-in-out ${
//           isOpen ? 'opacity-100 visible h-auto py-6' : 'opacity-0 invisible h-0 overflow-hidden'
//         }`}
//       >
//         <div className="flex flex-col gap-4 px-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`text-sm font-semibold tracking-wider uppercase p-3 rounded-xl transition-all ${
//                 isActive(link.path)
//                   ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
//                   : 'text-gray-400 hover:text-white hover:bg-white/5'
//               }`}
//             >
//               {link.name}
//             </Link>
//           ))}
//           <hr className="border-white/10 my-2" />
//           {user.isLoggedIn ? (
//             <Link
//               to="/dashboard"
//               onClick={() => setIsOpen(false)}
//               className="flex items-center gap-3 p-3 rounded-xl bg-white/5 text-white"
//             >
//               <img src={user.profilePic} className="w-8 h-8 rounded-full" alt="" />
//               <span className="text-sm font-semibold">My Dashboard</span>
//             </Link>
//           ) : (
//             <button className="w-full bg-emerald-500 text-black font-bold p-3 rounded-xl text-sm tracking-wider uppercase shadow-lg shadow-emerald-500/20">
//               Login
//             </button>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// import { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { auth, db, logoutUser } from '../lib/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import { doc, getDoc } from 'firebase/firestore';
// import type { UserProfile } from '../data/user';
// import LoginModal from './LoginModal';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoginOpen, setIsLoginOpen] = useState(false);
//   const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
//   const location = useLocation();

//   const isActive = (path: string) => location.pathname === path;

//   // 🔄 Firebase Auth එක සජීවීව යූසර් ලොග් වෙලාද නැද්ද කියා පරීක්ෂා කරනවා
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
//       if (firebaseUser) {
//         // යූසර් ලොග් වී ඇත්නම්, Firestore එකෙන් එයාගේ සැබෑ Role සහ ලකුණු විස්තර ලබා ගනී
//         const userDocRef = doc(db, 'users', firebaseUser.uid);
//         const userDocSnap = await getDoc(userDocRef);
//         if (userDocSnap.exists()) {
//           setUserProfile(userDocSnap.data() as UserProfile);
//         }
//       } else {
//         setUserProfile(null);
//       }
//     });
//     return () => unsubscribe();
//   }, []);

//   const navLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'Destinations', path: '/destinations' },
//     { name: 'Marketplace', path: '/marketplace' },
//     { name: 'Services & SOS', path: '/services' },
//   ];

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full z-50 bg-black/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

//           <Link to="/" className="flex items-center gap-2 group">
//             <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors duration-300">
//               UNSEEN<span className="text-emerald-400 group-hover:text-white">.TAPRO</span>
//             </span>
//           </Link>

//           <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-lg">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
//                   isActive(link.path)
//                     ? 'bg-emerald-500 text-black shadow-md'
//                     : 'text-gray-300 hover:text-white hover:bg-white/5'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>

//           {/* USER PROFILE SECTION / LOGIN BUTTON */}
//           <div className="hidden md:flex items-center gap-4">
//             {userProfile ? (
//               <div className="flex items-center gap-4">
//                 <Link to="/dashboard" className="w-10 h-10 rounded-full border-2 border-emerald-400/50 p-0.5 overflow-hidden block">
//                   <img src={userProfile.profilePic} alt="Profile" className="w-full h-full object-cover rounded-full" />
//                 </Link>
//                 <button onClick={logoutUser} className="text-gray-400 hover:text-red-400 text-xs uppercase tracking-wider font-bold transition-colors">
//                   Logout
//                 </button>
//               </div>
//             ) : (
//               <button
//                 onClick={() => setIsLoginOpen(true)}
//                 className="bg-emerald-500 text-black font-extrabold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-emerald-500/10"
//               >
//                 Login
//               </button>
//             )}
//           </div>{/* Mobile hamburger logic */}
//           <div className="md:hidden flex items-center gap-4">
//             <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L12 12M4 4l16 16" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* 🔮 EXECUTING POPUP MODAL COMPONENT */}
//       {isLoginOpen && (
//         <LoginModal
//           onClose={() => setIsLoginOpen(false)}
//           onLoginSuccess={(profile) => setUserProfile(profile)}
//         />
//       )}
//     </>
//   );
// }

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { auth, db, logoutUser } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import type { UserProfile } from "../../data/user";
import LoginModal from "./LoginModal";

import { FaUserCircle } from "react-icons/fa";
// import { TiThMenuOutline } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
{
  /* <TiThMenu /> */
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setUserProfile(userDocSnap.data() as UserProfile);
          // } else {
          //   // Firestore එකේ profile එක තවම නැත්නම් Firebase Auth එකෙන් data ගන්නවා
          //   setUserProfile({
          //     uid: firebaseUser.uid,
          //     name: firebaseUser.displayName || "Traveler",
          //     email: firebaseUser.email || "",
          //     profilePic: firebaseUser.photoURL || <FaUserCircle />,
          //     role: "user",
          //   } as UserProfile);
          // }
          // 🔄 Navbar.tsx ඇතුළේ useEffect එක මැද තියෙන else කොටස මේ විදිහට වෙනස් කරන්න:
        } else {
          // Firestore එකේ profile එක තවම නැත්නම් Firebase Auth එකෙන් data ගන්නවා
          setUserProfile({
            uid: firebaseUser.uid,
            name: firebaseUser.displayName || "Traveler",
            email: firebaseUser.email || "",
            profilePic: firebaseUser.photoURL || <FaUserCircle />,
            role: "Tourist", // 👈 'user' වෙනුවට 'Tourist' ලෙස නිවැරදි කලා
            explorerVotes: 0, // 👈 අලුතින් එක් කලා
            ecoPoints: 0, // 👈 අලුතින් එක් කලා
          } as UserProfile);
        }
      } else {
        setUserProfile(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Spelling නිවැරදි කලා: marketplace
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Marketplace", path: "/marketplace" },
    { name: "Services & SOS", path: "/services" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white/20 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className=" mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group font-heading">
            <span className="text-xl md:text-2xl font-black tracking-[0.2em] text-white group-hover:text-emerald-400 transition-colors duration-300">
              UNSEEN
              <span className="text-emerald-400 group-hover:text-white lowercase tracking-[0.08rem]">
                .TAPRO
              </span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-lg">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-emerald-500 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop User Profile / Login */}
          {/* <div className="hidden md:flex items-center gap-4">
            {userProfile ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className="w-10 h-10 rounded-full border-2 border-emerald-400/50 p-0.5 overflow-hidden block">
                  <img
                    src={userProfile.profilePic}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </Link>
                <button
                  onClick={logoutUser}
                  className="text-gray-400 hover:text-red-400 text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer">
                  Logout
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-emerald-500 text-white font-extrabold px-6 py-2.5 rounded-full text-xs tracking-wider uppercase hover:bg-emerald-400 transition-all active:scale-95 shadow-lg shadow-emerald-500/10 cursor-pointer">
                Login
              </button>
            )}
          </div> */}

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2">
              <TiThMenu className="size-8" />

               {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L12 12M4 4l16 16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              {/* <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L12 12M4 4l16 16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg> */}
            </button>
          </div>
        </div>

        {/* 📱 Mobile Menu Section (අලුතින් එකතු කලා) */}
        {isOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 absolute w-full left-0 dynamic-fade-in animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase ${
                    isActive(link.path)
                      ? "bg-emerald-500 text-black"
                      : "text-gray-300 hover:bg-white/5"
                  }`}>
                  {link.name}
                </Link>
              ))}

              <hr className="border-white/10 my-2" />

              {/* Mobile Profile / Login */}
              {userProfile ? (
                <div className="flex items-center justify-between px-4 py-2">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3">
                    <img
                      src={userProfile.profilePic}
                      alt="Profile"
                      className="w-10 h-10 rounded-full object-cover border border-emerald-400"
                    />
                    <span className="text-white text-sm font-medium">
                      {userProfile.name}
                    </span>
                  </Link>
                  <button
                    onClick={() => {
                      logoutUser();
                      setIsOpen(false);
                    }}
                    className="text-red-400 font-bold text-xs uppercase">
                    Logout
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsOpen(false);
                  }}
                  className="bg-emerald-500 text-black font-extrabold py-3 rounded-xl text-sm tracking-wider uppercase w-full text-center">
                  Login
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {isLoginOpen && (
        <LoginModal
          onClose={() => setIsLoginOpen(false)}
          onLoginSuccess={(profile) => setUserProfile(profile)}
        />
      )}
    </>
  );
}
