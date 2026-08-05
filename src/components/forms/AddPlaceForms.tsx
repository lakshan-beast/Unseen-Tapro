// import React, { useState } from "react";
// import {
//   FaUpload,
//   FaPlus,
//   FaMapPin,
//   FaRoute,
//   FaRegTrashAlt,
// } from "react-icons/fa";
// import { FaX } from "react-icons/fa6";
// import { IoIosAlert } from "react-icons/io";

// import { db } from "../../lib/firebase";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// // --- ImgBB API Key  ---
// const IMGBB_API_KEY = "976fcddf394f0cfbc94f30913118ae4e";

// // ImgBB Upload Helper Function
// async function uploadToImgBB(file: File): Promise<string> {
//   const formData = new FormData();
//   formData.append("image", file);

//   const response = await fetch(
//     `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
//     {
//       method: "POST",
//       body: formData,
//     },
//   );

//   const data = await response.json();
//   if (data.success) {
//     return data.data.url;
//   } else {
//     throw new Error("Image upload failed");
//   }
// }

// interface AddPlaceModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export const AddPlaceModal: React.FC<AddPlaceModalProps> = ({
//   isOpen,
//   onClose,
// }) => {
//   // Form State Values
//   const [authorName, setAuthorName] = useState("");
//   const [title, setTitle] = useState("");
//   const [district, setDistrict] = useState("Ratnapura");
//   const [category, setCategory] = useState("waterfall");
//   const [shortDescription, setShortDescription] = useState("");
//   const [longDescription, setLongDescription] = useState("");
//   const [googleMapUrl, setGoogleMapUrl] = useState("");
//   const [vehicleAccessibility, setVehicleAccessibility] = useState("");

//   // Dynamic Fields State
//   const [routes, setRoutes] = useState([{ title: "", description: "" }]);
//   const [safetyAlerts, setSafetyAlerts] = useState([""]);
//   const [facilities, setFacilities] = useState([""]);

//   // Status States
//   const [imageFiles, setImageFiles] = useState<File[]>([]);
//   const [previewUrls, setPreviewUrls] = useState<string[]>([]);
//   const [isUploading, setIsUploading] = useState(false);

//   if (!isOpen) return null;

//   // Image Selection Handler
//   //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   //     if (e.target.files) {
//   //       const selectedFiles = Array.from(e.target.files);
//   //       setImageFiles((prev) => [...prev, ...selectedFiles]);

//   //       const newPreviews = selectedFiles.map((file) =>
//   //         URL.createObjectURL(file),
//   //       );
//   //       setPreviewUrls((prev) => [...prev, ...newPreviews]);
//   //     }
//   //   };

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files) {
//       const files = Array.from(e.target.files);
//       setImageFiles((prev) => [...prev, ...files]);
//       setPreviewUrls((prev) => [
//         ...prev,
//         ...files.map((file) => URL.createObjectURL(file)),
//       ]);
//     }
//   };

//   //   // Remove Selected Image
//   //   const handleRemoveImage = (index: number) => {
//   //     setImageFiles((prev) => prev.filter((_, i) => i !== index));
//   //     setPreviewUrls((prev) => prev.filter((_, i) => i !== index));
//   //   };

//   //   // Add Dynamic Route Row
//   //   const handleAddRoute = () => {
//   //     setRoutes((prev) => [...prev, { title: "", details: "" }]);
//   //   };

//   //   // Remove Route Row
//   //   const handleRemoveRoute = (index: number) => {
//   //     setRoutes((prev) => prev.filter((_, i) => i !== index));
//   //   };

//   //   // Add Dynamic Alert Row
//   //   const handleAddAlert = () => {
//   //     setAlerts((prev) => [...prev, ""]);
//   //   };

//   //   // Remove Alert Row
//   //   const handleRemoveAlert = (index: number) => {
//   //     setAlerts((prev) => prev.filter((_, i) => i !== index));
//   //   };

//   // Form Submission Logic
//   //   const handleSubmit = async (e: React.FormEvent) => {
//   //     e.preventDefault();

//   //     if (imageFiles.length === 0) {
//   //       alert("කරුණාකර අවම වශයෙන් ඡායාරූප එකක්වත් තෝරන්න!");
//   //       return;
//   //     }

//   //     setIsUploading(true);
//   //     setUploadProgress("ඡායාරූප ImgBB වෙත Upload වෙමින් පවතී...");

//   //     try {
//   //       // 1. Upload Images to ImgBB
//   //       const uploadedUrls: string[] = [];
//   //       for (let i = 0; i < imageFiles.length; i++) {
//   //         setUploadProgress(
//   //           `Upload වෙමින් පවතී... (${i + 1}/${imageFiles.length})`,
//   //         );
//   //         const url = await uploadToImgBB(imageFiles[i]);
//   //         uploadedUrls.push(url);
//   //       }

//   //       setUploadProgress("විස්තර Firebase වෙත සුරකිමින් පවතී...");

//   //       // 2. Filter empty routes and alerts
//   //       const validRoutes = routes.filter((r) => r.title.trim() !== "");
//   //       const validAlerts = alerts.filter((a) => a.trim() !== "");

//   //       // 3. Save Data to Firestore (places collection)
//   //       await addDoc(collection(db, "places"), {
//   //         userName: userName.trim() || "Anonymous",
//   //         title,
//   //         district,
//   //         category,
//   //         shortDesc,
//   //         longDesc,
//   //         imageUrls: uploadedUrls,
//   //         coverImage: uploadedUrls[0],
//   //         routes: validRoutes,
//   //         alerts: validAlerts,
//   //         createdAt: serverTimestamp(),
//   //       });

//   //       alert("🎉 ස්ථානය සාර්ථකව ඇතුළත් කරන ලදී!");
//   //       onClose();
//   //     } catch (error) {
//   //       console.error("Error submitting form:", error);
//   //       alert("❌ උඩුගත කිරීමට නොහැකි විය. කරුණාකර නැවත උත්සාහ කරන්න.");
//   //     } finally {
//   //       setIsUploading(false);
//   //       setUploadProgress("");
//   //     }
//   //   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (imageFiles.length === 0) {
//       alert("කරුණාකර අවම වශයෙන් ඡායාරූපයක් හෝ එකතු කරන්න!");
//       return;
//     }

//     setIsUploading(true);

//     try {
//       // Upload Images
//       const uploadedUrls: string[] = [];
//       for (const file of imageFiles) {
//         const url = await uploadToImgBB(file);
//         uploadedUrls.push(url);
//       }

//       // Structure data matching places.ts
//       const newPlaceData = {
//         title,
//         district,
//         category,
//         shortDescription,
//         longDescription,
//         image: uploadedUrls[0], // Main cover image
//         imageUrls: uploadedUrls, // Extra gallery images
//         likes: 0,
//         commentsCount: 0,
//         authorName: authorName.trim() || "Anonymous Explorer",
//         authorVotes: 1,
//         googleMapUrl,
//         vehicleAccessibility,
//         routes: routes
//           .filter((r) => r.title.trim() !== "")
//           .map((r, index) => ({
//             step: index + 1,
//             title: r.title,
//             description: r.description,
//           })),
//         safetyAlerts: safetyAlerts.filter((a) => a.trim() !== ""),
//         facilities: facilities.filter((f) => f.trim() !== ""),
//         createdAt: serverTimestamp(),
//       };

//       await addDoc(collection(db, "places"), newPlaceData);
//       alert("🎉 ස්ථානය සාර්ථකව Firestore වෙත එකතු කරන ලදී!");
//       onClose();
//     } catch (err) {
//       console.error(err);
//       alert("❌ Upload කිරීමේදී දෝෂයක් සිදු විය.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   //   return (
//   //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm overflow-y-auto">
//   //       <div className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-y-auto text-slate-100 p-6 md:p-8">
//   //         {/* Close Button */}
//   //         <button
//   //           onClick={onClose}
//   //           className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 transition">
//   //           <FaX size={20} />
//   //         </button>

//   //         <h2 className="text-2xl font-bold text-emerald-400 mb-6 flex items-center gap-2">
//   //           <FaMapPin className="text-emerald-400" /> අලුත් ස්ථානයක් එකතු කරන්න
//   //         </h2>

//   //         <form onSubmit={handleSubmit} className="space-y-6">
//   //           {/* User Name & Place Title */}
//   //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   //             <div>
//   //               <label className="block text-sm font-medium text-slate-300 mb-1">
//   //                 ඔබේ නම (Your Name)
//   //               </label>
//   //               <input
//   //                 type="text"
//   //                 required
//   //                 placeholder="උදා: කසුන් පෙරේරා"
//   //                 value={userName}
//   //                 onChange={(e) => setUserName(e.target.value)}
//   //                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
//   //               />
//   //             </div>
//   //             <div>
//   //               <label className="block text-sm font-medium text-slate-300 mb-1">
//   //                 ස්ථානයේ නම (Place Title)
//   //               </label>
//   //               <input
//   //                 type="text"
//   //                 required
//   //                 placeholder="උදා: Sera Ella Waterfall"
//   //                 value={title}
//   //                 onChange={(e) => setTitle(e.target.value)}
//   //                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
//   //               />
//   //             </div>
//   //           </div>

//   //           {/* District & Category */}
//   //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//   //             <div>
//   //               <label className="block text-sm font-medium text-slate-300 mb-1">
//   //                 දිස්ත්‍රික්කය (District)
//   //               </label>
//   //               <select
//   //                 value={district}
//   //                 onChange={(e) => setDistrict(e.target.value)}
//   //                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500">
//   //                 {[
//   //                   "Kandy",
//   //                   "Matale",
//   //                   "Nuwara Eliya",
//   //                   "Badulla",
//   //                   "Rathnapura",
//   //                   "Galle",
//   //                   "Matara",
//   //                   "Gampaha",
//   //                   "Colombo",
//   //                   "Kalutara",
//   //                   "Kegalle",
//   //                   "Anuradhapura",
//   //                   "Polonnaruwa",
//   //                   "Jaffna",
//   //                   "Trincomalee",
//   //                   "Hambantota",
//   //                   "Monaragala",
//   //                 ].map((d) => (
//   //                   <option key={d} value={d}>
//   //                     {d}
//   //                   </option>
//   //                 ))}
//   //               </select>
//   //             </div>
//   //             <div>
//   //               <label className="block text-sm font-medium text-slate-300 mb-1">
//   //                 වර්ගීකරණය (Category)
//   //               </label>
//   //               <select
//   //                 value={category}
//   //                 onChange={(e) => setCategory(e.target.value)}
//   //                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500">
//   //                 {[
//   //                   "Waterfalls",
//   //                   "Viewpoints",
//   //                   "Historical",
//   //                   "Camping Sites",
//   //                   "Hidden Gems",
//   //                   "Hiking Trails",
//   //                 ].map((c) => (
//   //                   <option key={c} value={c}>
//   //                     {c}
//   //                   </option>
//   //                 ))}
//   //               </select>
//   //             </div>
//   //           </div>

//   //           {/* Short Description */}
//   //           <div>
//   //             <label className="block text-sm font-medium text-slate-300 mb-1">
//   //               කෙටි විස්තරය (Short Description)
//   //             </label>
//   //             <input
//   //               type="text"
//   //               required
//   //               maxLength={150}
//   //               placeholder="Card එකේ පෙන්වීමට කෙටි හැඳින්වීමක් (Max 150 characters)"
//   //               value={shortDesc}
//   //               onChange={(e) => setShortDesc(e.target.value)}
//   //               className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500"
//   //             />
//   //           </div>

//   //           {/* Long Description */}
//   //           <div>
//   //             <label className="block text-sm font-medium text-slate-300 mb-1">
//   //               සම්පූර්ණ විස්තරය (Full Details)
//   //             </label>
//   //             <textarea
//   //               required
//   //               rows={4}
//   //               placeholder="ස්ථානය ගැන සම්පූර්ණ විස්තරය මෙතන ලියන්න..."
//   //               value={longDesc}
//   //               onChange={(e) => setLongDesc(e.target.value)}
//   //               className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:outline-none focus:border-emerald-500 resize-none"
//   //             />
//   //           </div>

//   //           {/* Image Upload Area */}
//   //           <div>
//   //             <label className="block text-sm font-medium text-slate-300 mb-2">
//   //               ඡායාරූප (Images - ImgBB)
//   //             </label>
//   //             <div className="border-2 border-dashed border-slate-700 rounded-xl p-4 text-center bg-slate-800/50 hover:border-emerald-500 transition">
//   //               <input
//   //                 type="file"
//   //                 multiple
//   //                 accept="image/*"
//   //                 id="file-upload"
//   //                 onChange={handleImageChange}
//   //                 className="hidden"
//   //               />
//   //               <label
//   //                 htmlFor="file-upload"
//   //                 className="cursor-pointer flex flex-col items-center justify-center gap-2">
//   //                 <FaUpload className="text-emerald-400" size={32} />
//   //                 <span className="text-sm text-slate-300">
//   //                   ඡායාරූප එකක් හෝ කිහිපයක් තෝරන්න
//   //                 </span>
//   //               </label>
//   //             </div>

//   //             {/* Image Previews */}
//   //             {previewUrls.length > 0 && (
//   //               <div className="grid grid-cols-4 gap-3 mt-4">
//   //                 {previewUrls.map((url, idx) => (
//   //                   <div
//   //                     key={idx}
//   //                     className="relative rounded-lg overflow-hidden border border-slate-700 h-20 group">
//   //                     <img
//   //                       src={url}
//   //                       alt="Preview"
//   //                       className="w-full h-full object-cover"
//   //                     />
//   //                     <button
//   //                       type="button"
//   //                       onClick={() => handleRemoveImage(idx)}
//   //                       className="absolute top-1 right-1 p-1 bg-red-600/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition">
//   //                       <FaX size={14} />
//   //                     </button>
//   //                   </div>
//   //                 ))}
//   //               </div>
//   //             )}
//   //           </div>

//   //           {/* Dynamic Routes */}
//   //           <div>
//   //             <div className="flex justify-between items-center mb-2">
//   //               <label className="text-sm font-medium text-slate-300 flex items-center gap-1">
//   //                 <FaRoute size={16} className="text-emerald-400" /> ළඟා වන මාර්ග
//   //                 (Routes)
//   //               </label>
//   //               <button
//   //                 type="button"
//   //                 onClick={handleAddRoute}
//   //                 className="text-xs text-emerald-400 hover:underline flex items-center gap-1">
//   //                 <FaPlus size={14} /> මාර්ගයක් එකතු කරන්න
//   //               </button>
//   //             </div>
//   //             {routes.map((route, idx) => (
//   //               <div key={idx} className="flex gap-2 mb-2">
//   //                 <input
//   //                   type="text"
//   //                   placeholder="මාර්ගයේ නම (උදා: Colombo සිට)"
//   //                   value={route.title}
//   //                   onChange={(e) => {
//   //                     const newRoutes = [...routes];
//   //                     newRoutes[idx].title = e.target.value;
//   //                     setRoutes(newRoutes);
//   //                   }}
//   //                   className="w-1/3 bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white"
//   //                 />
//   //                 <input
//   //                   type="text"
//   //                   placeholder="විස්තරය (උදා: A1 පාරෙන් නුවරට පැමිණ...)"
//   //                   value={route.details}
//   //                   onChange={(e) => {
//   //                     const newRoutes = [...routes];
//   //                     newRoutes[idx].details = e.target.value;
//   //                     setRoutes(newRoutes);
//   //                   }}
//   //                   className="w-2/3 bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white"
//   //                 />
//   //                 {routes.length > 1 && (
//   //                   <button
//   //                     type="button"
//   //                     onClick={() => handleRemoveRoute(idx)}
//   //                     className="p-2 text-red-400 hover:text-red-300">
//   //                     <FaRegTrashAlt size={16} />
//   //                   </button>
//   //                 )}
//   //               </div>
//   //             ))}
//   //           </div>

//   //           {/* Dynamic Special Alerts */}
//   //           <div>
//   //             <div className="flex justify-between items-center mb-2">
//   //               <label className="text-sm font-medium text-slate-300 flex items-center gap-1">
//   //                 <IoIosAlert size={16} className="text-amber-400" /> විශේෂ අනතුරු
//   //                 ඇඟවීම් (Alerts)
//   //               </label>
//   //               <button
//   //                 type="button"
//   //                 onClick={handleAddAlert}
//   //                 className="text-xs text-emerald-400 hover:underline flex items-center gap-1">
//   //                 <FaPlus size={14} /> අනතුරු ඇඟවීමක් එකතු කරන්න
//   //               </button>
//   //             </div>
//   //             {alerts.map((alert, idx) => (
//   //               <div key={idx} className="flex gap-2 mb-2">
//   //                 <input
//   //                   type="text"
//   //                   placeholder="උදා: වැසි දිනවල නෑමෙන් වළකින්න"
//   //                   value={alert}
//   //                   onChange={(e) => {
//   //                     const newAlerts = [...alerts];
//   //                     newAlerts[idx] = e.target.value;
//   //                     setAlerts(newAlerts);
//   //                   }}
//   //                   className="w-full bg-slate-800 border border-slate-700 rounded-lg p-2 text-sm text-white"
//   //                 />
//   //                 {alerts.length > 1 && (
//   //                   <button
//   //                     type="button"
//   //                     onClick={() => handleRemoveAlert(idx)}
//   //                     className="p-2 text-red-400 hover:text-red-300">
//   //                     <FaRegTrashAlt size={16} />
//   //                   </button>
//   //                 )}
//   //               </div>
//   //             ))}
//   //           </div>

//   //           {/* Progress Status Message */}
//   //           {uploadProgress && (
//   //             <p className="text-center text-sm font-medium text-emerald-400 animate-pulse">
//   //               {uploadProgress}
//   //             </p>
//   //           )}

//   //           {/* Submit Button */}
//   //           <button
//   //             type="submit"
//   //             disabled={isUploading}
//   //             className="w-full bg-emerald-500 hover:bg-emerald-600 disabled:bg-slate-700 text-slate-950 font-bold py-3.5 rounded-xl transition duration-200">
//   //             {isUploading
//   //               ? "ඇතුළත් කරමින් පවතී..."
//   //               : "ස්ථානය ඇතුළත් කරන්න (Save Place)"}
//   //           </button>
//   //         </form>
//   //       </div>
//   //     </div>
//   //   );

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
//       <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 text-white overflow-y-auto shadow-2xl">
//         <button
//           onClick={onClose}
//           className="absolute top-5 right-5 p-2 bg-zinc-900 rounded-full hover:bg-zinc-800">
//           <FaX size={18} />
//         </button>

//         <h2 className="text-2xl font-black uppercase text-emerald-400 mb-6 flex items-center gap-2">
//           <FaMapPin /> Add New Hidden Gem
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5 text-xs">
//           {/* Author & Title */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 YOUR NAME / EXPLORER HANDLE
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Ex: Kasun Perera"
//                 value={authorName}
//                 onChange={(e) => setAuthorName(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 DESTINATION TITLE
//               </label>
//               <input
//                 type="text"
//                 required
//                 placeholder="Ex: Duwili Ella Waterfall"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
//               />
//             </div>
//           </div>

//           {/* District & Category */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 DISTRICT
//               </label>
//               <select
//                 value={district}
//                 onChange={(e) => setDistrict(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none">
//                 {[
//                   "Ratnapura",
//                   "Kandy",
//                   "Matale",
//                   "Nuwara Eliya",
//                   "Badulla",
//                   "Galle",
//                   "Matara",
//                   "Hambantota",
//                   "Kegalle",
//                   "Anuradhapura",
//                   "Polonnaruwa",
//                   "Jaffna",
//                   "Trincomalee",
//                 ].map((d) => (
//                   <option key={d} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>
//             </div>
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 CATEGORY
//               </label>
//               <select
//                 value={category}
//                 onChange={(e) => setCategory(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none">
//                 <option value="waterfall">Waterfall</option>
//                 <option value="hiking">Hiking / Viewpoint</option>
//                 <option value="camping">Camping Site</option>
//                 <option value="historical">Historical</option>
//                 <option value="hidden_gem">Hidden Gem</option>
//               </select>
//             </div>
//           </div>

//           {/* Descriptions */}
//           <div>
//             <label className="block font-bold text-gray-400 mb-1">
//               SHORT DESCRIPTION (For Card View)
//             </label>
//             <input
//               type="text"
//               required
//               maxLength={160}
//               placeholder="A brief 1-2 sentence overview..."
//               value={shortDescription}
//               onChange={(e) => setShortDescription(e.target.value)}
//               className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
//             />
//           </div>

//           <div>
//             <label className="block font-bold text-gray-400 mb-1">
//               LONG DESCRIPTION (Detailed Story)
//             </label>
//             <textarea
//               required
//               rows={4}
//               placeholder="Full story, unique features, cave locations, history..."
//               value={longDescription}
//               onChange={(e) => setLongDescription(e.target.value)}
//               className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none resize-none"
//             />
//           </div>

//           {/* Map Link & Vehicle Access */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 GOOGLE MAPS URL
//               </label>
//               <input
//                 type="url"
//                 placeholder="https://maps.google.com/..."
//                 value={googleMapUrl}
//                 onChange={(e) => setGoogleMapUrl(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
//               />
//             </div>
//             <div>
//               <label className="block font-bold text-gray-400 mb-1">
//                 VEHICLE ACCESSIBILITY
//               </label>
//               <input
//                 type="text"
//                 placeholder="Ex: Accessible by 4WD/Bikes only from Kalthota"
//                 value={vehicleAccessibility}
//                 onChange={(e) => setVehicleAccessibility(e.target.value)}
//                 className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
//               />
//             </div>
//           </div>

//           {/* Image Upload Area */}
//           <div>
//             <label className="block font-bold text-gray-400 mb-1">
//               PHOTOS (Upload via ImgBB)
//             </label>
//             <input
//               type="file"
//               multiple
//               accept="image/*"
//               onChange={handleImageChange}
//               className="bg-zinc-900 p-2 rounded-xl w-full text-xs"
//             />
//             <div className="flex gap-2 mt-2">
//               {previewUrls.map((url, i) => (
//                 <img
//                   key={i}
//                   src={url}
//                   alt="preview"
//                   className="w-14 h-14 object-cover rounded-lg border border-white/10"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={isUploading}
//             className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black py-4 rounded-2xl uppercase tracking-wider transition duration-200 mt-4 cursor-pointer">
//             {isUploading
//               ? "Uploading to ImgBB & Firestore..."
//               : "Submit Destination"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };



import React, { useState } from "react";
import {
  FaXmark,
  FaLocationDot,
  FaPlus,
  FaTrashCan,
  FaRoute,
  FaShieldCat,
  FaCircleInfo,
} from "react-icons/fa6";
import { db } from "../../lib/firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const IMGBB_API_KEY = "976fcddf394f0cfbc94f30913118ae4e";

async function uploadToImgBB(file: File): Promise<string> {
  const formData = new FormData();
  formData.append("image", file);

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  if (data.success) return data.data.url;
  throw new Error("Image upload failed");
}

interface AddPlaceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddPlaceModal: React.FC<AddPlaceModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  // 1. Basic Info States
  const [authorName, setAuthorName] = useState("");
  const [title, setTitle] = useState("");
  const [district, setDistrict] = useState("Ratnapura");
  const [category, setCategory] = useState("waterfall");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [googleMapUrl, setGoogleMapUrl] = useState("");
  const [vehicleAccessibility, setVehicleAccessibility] = useState("");

  // 2. Dynamic Array States
  // Routes Step-by-Step
  const [routes, setRoutes] = useState([
    { title: "Colombo to Balangoda", description: "Take the Colombo-Badulla highway..." },
  ]);

  // Safety Alerts
  const [safetyAlerts, setSafetyAlerts] = useState<string[]>([
    "Flash floods are common during rainy seasons.",
  ]);

  // Facilities
  const [facilities, setFacilities] = useState<string[]>([
    "Nearest Hospital: Balangoda Base Hospital",
  ]);

  // 3. Images States
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  // --- Handlers for Dynamic Fields ---

  // Route Handlers
  const handleAddRoute = () => {
    setRoutes([...routes, { title: "", description: "" }]);
  };

  const handleRouteChange = (index: number, field: "title" | "description", value: string) => {
    const updated = [...routes];
    updated[index][field] = value;
    setRoutes(updated);
  };

  const handleRemoveRoute = (index: number) => {
    setRoutes(routes.filter((_, i) => i !== index));
  };

  // Safety Alerts Handlers
  const handleAddSafetyAlert = () => {
    setSafetyAlerts([...safetyAlerts, ""]);
  };

  const handleSafetyAlertChange = (index: number, value: string) => {
    const updated = [...safetyAlerts];
    updated[index] = value;
    setSafetyAlerts(updated);
  };

  const handleRemoveSafetyAlert = (index: number) => {
    setSafetyAlerts(safetyAlerts.filter((_, i) => i !== index));
  };

  // Facilities Handlers
  const handleAddFacility = () => {
    setFacilities([...facilities, ""]);
  };

  const handleFacilityChange = (index: number, value: string) => {
    const updated = [...facilities];
    updated[index] = value;
    setFacilities(updated);
  };

  const handleRemoveFacility = (index: number) => {
    setFacilities(facilities.filter((_, i) => i !== index));
  };

  // Image File Handler
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

  // Submit to ImgBB and Firestore
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      alert("Please add at least one photo!");
      return;
    }

    setIsUploading(true);

    try {
      // Upload Images to ImgBB
      const uploadedUrls: string[] = [];
      for (const file of imageFiles) {
        const url = await uploadToImgBB(file);
        uploadedUrls.push(url);
      }

      // Structure Document Matching places.ts
      const newPlaceData = {
        title,
        district,
        category,
        shortDescription,
        longDescription,
        image: uploadedUrls[0], // Main cover image
        imageUrls: uploadedUrls, // Gallery array
        likes: 0,
        commentsCount: 0,
        authorName: authorName.trim() || "Explorer",
        authorVotes: 100,
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
        createdAt: serverTimestamp(),
      };

      // Save to Firestore 'places' collection
      await addDoc(collection(db, "places"), newPlaceData);

      alert("🎉 Location successfully saved!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("❌ An error occurred while uploading. Please check the ImgBB API Key.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 text-white overflow-y-auto shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
          <FaXmark size={18} />
        </button>

        <h2 className="text-2xl font-black uppercase text-emerald-400 mb-6 flex items-center gap-2">
          <FaLocationDot /> Share Hidden Destination
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 text-xs">
          {/* 1. Author & Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                YOUR NAME / EXPLORER HANDLE
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Kasun Perera"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                DESTINATION TITLE
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
          </div>

          {/* 2. District & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">DISTRICT</label>
              <select
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none cursor-pointer"
              >
                {[
                  "Ratnapura", "Kandy", "Matale", "Nuwara Eliya", "Badulla",
                  "Galle", "Matara", "Hambantota", "Kegalle", "Anuradhapura",
                  "Polonnaruwa", "Jaffna", "Trincomalee", "Colombo", "Gampaha",
                  "Kalutara", "Kurunegala", "Puttalam", "Monaragala", "Ampara",
                  "Batticaloa", "Vavuniya", "Mullaitivu", "Mannar", "Kilinochchi",
                ].map((d) => (
                  <option key={d} value={d} className="bg-zinc-950">
                    {d}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-gray-400 mb-1">CATEGORY</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none cursor-pointer"
              >
                <option value="waterfall" className="bg-zinc-950">Waterfall</option>
                <option value="hiking" className="bg-zinc-950">Hiking / Viewpoint</option>
                <option value="camping" className="bg-zinc-950">Camping Site</option>
                <option value="historical" className="bg-zinc-950">Historical</option>
                <option value="hidden_gem" className="bg-zinc-950">Hidden Gem</option>
              </select>
            </div>
          </div>

          {/* 3. Short & Long Descriptions */}
          <div>
            <label className="block font-bold text-gray-400 mb-1">
              SHORT DESCRIPTION (Card View - Max 160 chars)
            </label>
            <input
              type="text"
              required
              maxLength={160}
              placeholder="A breathtaking hidden waterfall tucked deep inside..."
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-gray-400 mb-1">
              LONG DESCRIPTION (Full Story & Features)
            </label>
            <textarea
              required
              rows={3}
              placeholder="Detailed description about the place, history, scenery..."
              value={longDescription}
              onChange={(e) => setLongDescription(e.target.value)}
              className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none resize-none"
            />
          </div>

          {/* 4. Map & Vehicle Access */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-400 mb-1">
                GOOGLE MAPS URL
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
                placeholder="Ex: Accessible by 4WD/Bikes up to junction..."
                value={vehicleAccessibility}
                onChange={(e) => setVehicleAccessibility(e.target.value)}
                className="w-full bg-zinc-900 border border-white/10 rounded-xl p-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 5. DYNAMIC ROUTES SECTION (Step-by-Step Directions) */}
          {/* ---------------------------------------------------- */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-emerald-400 flex items-center gap-1.5 uppercase">
                <FaRoute /> Step-by-Step Route Guidance
              </label>
              <button
                type="button"
                onClick={handleAddRoute}
                className="flex items-center gap-1 bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-lg hover:bg-emerald-500/30 transition-colors font-bold cursor-pointer"
              >
                <FaPlus size={10} /> Add Step
              </button>
            </div>

            <div className="space-y-3">
              {routes.map((route, idx) => (
                <div key={idx} className="bg-zinc-900/80 p-3 rounded-xl border border-white/5 space-y-2 relative">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-gray-400 text-[10px] uppercase">
                      Step {idx + 1}
                    </span>
                    {routes.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveRoute(idx)}
                        className="text-red-400 hover:text-red-300 transition-colors p-1"
                      >
                        <FaTrashCan size={12} />
                      </button>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="Step Title (e.g., Colombo to Balangoda)"
                    value={route.title}
                    onChange={(e) => handleRouteChange(idx, "title", e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-white outline-none focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Step Instructions/Description..."
                    value={route.description}
                    onChange={(e) => handleRouteChange(idx, "description", e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-white outline-none focus:border-emerald-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 6. DYNAMIC SAFETY ALERTS SECTION */}
          {/* ---------------------------------------------------- */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-amber-400 flex items-center gap-1.5 uppercase">
                <FaShieldCat /> Safety Alerts & Risks
              </label>
              <button
                type="button"
                onClick={handleAddSafetyAlert}
                className="flex items-center gap-1 bg-amber-500/20 text-amber-400 px-3 py-1.5 rounded-lg hover:bg-amber-500/30 transition-colors font-bold cursor-pointer"
              >
                <FaPlus size={10} /> Add Alert
              </button>
            </div>

            <div className="space-y-2">
              {safetyAlerts.map((alert, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="e.g., Flash floods are common during rainy seasons."
                    value={alert}
                    onChange={(e) => handleSafetyAlertChange(idx, e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-white outline-none focus:border-amber-500"
                  />
                  {safetyAlerts.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSafetyAlert(idx)}
                      className="p-2.5 text-red-400 hover:text-red-300 bg-zinc-900 rounded-xl border border-white/10"
                    >
                      <FaTrashCan size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ---------------------------------------------------- */}
          {/* 7. DYNAMIC FACILITIES SECTION */}
          {/* ---------------------------------------------------- */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-teal-400 flex items-center gap-1.5 uppercase">
                <FaCircleInfo /> Nearby Facilities
              </label>
              <button
                type="button"
                onClick={handleAddFacility}
                className="flex items-center gap-1 bg-teal-500/20 text-teal-400 px-3 py-1.5 rounded-lg hover:bg-teal-500/30 transition-colors font-bold cursor-pointer"
              >
                <FaPlus size={10} /> Add Facility
              </button>
            </div>

            <div className="space-y-2">
              {facilities.map((facility, idx) => (
                <div key={idx} className="flex gap-2 items-center">
                  <input
                    type="text"
                    placeholder="e.g., Nearest Hospital: Balangoda Base Hospital"
                    value={facility}
                    onChange={(e) => handleFacilityChange(idx, e.target.value)}
                    className="w-full bg-zinc-900 border border-white/10 rounded-xl p-2.5 text-white outline-none focus:border-teal-500"
                  />
                  {facilities.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveFacility(idx)}
                      className="p-2.5 text-red-400 hover:text-red-300 bg-zinc-900 rounded-xl border border-white/10"
                    >
                      <FaTrashCan size={12} />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 8. Image Upload Section */}
          <div className="border-t border-white/10 pt-4">
            <label className="block font-bold text-gray-400 mb-2 uppercase">
              UPLOAD PHOTOS (ImgBB Integration)
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

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUploading}
            className="w-full bg-linear-to-r from-emerald-400 to-teal-400 hover:from-emerald-500 hover:to-teal-500 text-black font-black py-4 rounded-2xl uppercase tracking-wider transition-all duration-300 shadow-lg shadow-emerald-400/10 cursor-pointer disabled:opacity-50 mt-6"
          >
            {isUploading
              ? "Uploading to ImgBB & Saving Data..."
              : "Submit Hidden Gem"}
          </button>
        </form>
      </div>
    </div>
  );
};