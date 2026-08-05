import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.FIREBASE_API_KEY,
  authDomain: "unseen-tapro.firebaseapp.com",
  projectId: "unseen-tapro",
  storageBucket: "unseen-tapro.appspot.com",
  messagingSenderId: "499094199874",
  appId: "1:499094199874:web:072959056c24ebc91297db",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore & Storage instances
export const db = getFirestore(app);
export const storage = getStorage(app);
