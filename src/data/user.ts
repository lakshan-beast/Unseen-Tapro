export type UserRole = "Tourist" | "Local Guide" | "Merchant";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  profilePic: string;
  // role: "Tourist" | "Tourist & Explorer" | "Local Guide";
  role: UserRole;
  explorerVotes: number; // Explorer Trust Score 
  ecoPoints: number; // Eco-Traveler Score 

  shopName?: string;
  inVerifiedMercant?: boolean;
  vehicleType?: string;
  inVerifiedGuide?: boolean;

  // Medical Passport
  medicalPassport?: {
    bloodGroup: string;
    allergies: string;
    conditions: string;
    emergencyContacts: { name: string; relation: string; phone: string }[];
  };
}
