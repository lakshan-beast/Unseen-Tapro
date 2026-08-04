import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../lib/firebase";

export interface Place {
  id: string;
  userName: string;
  title: string;
  district: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  imageUrls: string[];
  coverImage: string;
  routes: { step: number; title: string; description: string }[];
  alerts: string[];
  createdAt?: any;
}

export async function fetchAllPlaces(): Promise<Place[]> {
  try {
    const placesRef = collection(db, "places");
    // Sort places by creation date (newest first)
    const q = query(placesRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    const places: Place[] = [];
    querySnapshot.forEach((doc) => {
      places.push({ id: doc.id, ...doc.data() } as Place);
    });

    return places;
  } catch (error) {
    console.error("Error fetching places: ", error);
    return [];
  }
}
