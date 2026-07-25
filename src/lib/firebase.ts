import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ⚠️ ඔයාගේ Firebase Console එකෙන් ලැබුණු Keys ටික මෙතනට ආදේශ කරන්න
const firebaseConfig = {
  apiKey: "AIzaSyBYnDd9KX9oIBidbvAZ2Mr2RQIrXsy-kSw",
  authDomain: "://firebaseapp.com",
  projectId: "unseen-tapro-2",
  storageBucket: "://appspot.com",
  messagingSenderId: "499094199874",
  appId: "1:499094199874:web:072959056c24ebc91297db",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Google හරහා ලොග් වීමේ සරල පහසුකම
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logoutUser = () => signOut(auth);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBYnDd9KX9oIBidbvAZ2Mr2RQIrXsy-kSw",
//   authDomain: "unseen-tapro.firebaseapp.com",
//   projectId: "unseen-tapro",
//   storageBucket: "unseen-tapro.firebasestorage.app",
//   messagingSenderId: "499094199874",
//   appId: "1:499094199874:web:072959056c24ebc91297db",
//   measurementId: "G-P64S0P1X22"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
