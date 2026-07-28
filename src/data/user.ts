export type UserRole = "Tourist" | "Local Guide" | "Merchant";

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  profilePic: string;
  // role: "Tourist" | "Tourist & Explorer" | "Local Guide";
  role: UserRole;
  explorerVotes: number; // Explorer Trust Score එක සඳහා ලැබී ඇති ඡන්ද
  ecoPoints: number; // Eco-Traveler Score එක සඳහා ලැබී ඇති ලකුණු

  shopName?: string;
  inVerifiedMercant?: boolean;
  vehicleType?: string;
  inVerifiedGuide?: boolean;

  // Medical Passport විස්තර (Dashboard එකෙන් පසුව සේව් කිරීමට)
  medicalPassport?: {
    bloodGroup: string;
    allergies: string;
    conditions: string;
    emergencyContacts: { name: string; relation: string; phone: string }[];
  };
}
