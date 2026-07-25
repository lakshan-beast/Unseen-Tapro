export interface RegionalHelpline {
  id: number;
  name: string;
  number: string;
  category:
    | "Hospital"
    | "Police"
    | "Wildlife"
    | "Navy"
    | "Disaster"
    | "Transit";
  district: string;
}

export interface MobilityService {
  id: number;
  name: string;
  description: string;
  link: string;
  type: "app" | "web" | "call";
  category: "Cab" | "Aviation" | "Train";
}

// 🚖 1. ප්‍රධාන ප්‍රවාහන ආයතන වල දත්ත ලැයිස්තුව
export const mobilityServices: MobilityService[] = [
  {
    id: 1,
    name: "PickMe Application",
    description:
      "Sri Lanka's leading app to instantly hail Tuk-tuks, Cars, and Bikes at transparent regional prices.",
    link: "pickme://ride",
    type: "app",
    category: "Cab",
  },
  {
    id: 2,
    name: "Uber Application",
    description:
      "Global ride-hailing services heavily active within Colombo, Kandy, and major coastal tourist zones.",
    link: "uber://?action=setPickup",
    type: "app",
    category: "Cab",
  },
  {
    id: 3,
    name: "Kangaroo Cabs",
    description:
      "One of the oldest and most reliable cab services in Sri Lanka, specialized in long-distance inter-district drops.",
    link: "tel:0112588588",
    type: "call",
    category: "Cab",
  },
  {
    id: 4,
    name: "Helitours Charter",
    description:
      "Operated by the Sri Lanka Air Force, providing reliable helicopter and fixed-wing commercial charter flights.",
    link: "http://helitours.lk",
    type: "web",
    category: "Aviation",
  },
  {
    id: 5,
    name: "Cinnamon Air Seaplanes",
    description:
      "Luxury scheduled and private charter seaplanes landing directly on rivers, lakes, and pristine shores.",
    link: "https://cinnamonair.com",
    type: "web",
    category: "Aviation",
  },
  {
    id: 6,
    name: "Sri Lanka Railways (Fort Station)",
    description:
      "Contact the central railway hub for live train scheduling, seat reservations, and emergency delay updates.",
    link: "tel:0112421281",
    type: "call",
    category: "Train",
  },
];

// 📞 2. දිස්ත්‍රික්ක අනුව රාජ්‍ය සහ හදිසි ආයතන වල දත්ත ලැයිස්තුව
export const districtHelplines: RegionalHelpline[] = [
  // Kandy District
  {
    id: 1,
    name: "Kandy National Hospital (Teaching)",
    number: "0812233337",
    category: "Hospital",
    district: "Kandy",
  },
  {
    id: 2,
    name: "Kandy Tourist Police Division",
    number: "0812222222",
    category: "Police",
    district: "Kandy",
  },
  {
    id: 3,
    name: "DWC Wildlife Ranger Office - Kandy",
    number: "0812388383",
    category: "Wildlife",
    district: "Kandy",
  },
  {
    id: 4,
    name: "Disaster Management Centre (DMC) - Kandy",
    number: "0812384607",
    category: "Disaster",
    district: "Kandy",
  },

  // Badulla District (Ella area)
  {
    id: 5,
    name: "Badulla Provincial General Hospital",
    number: "0552222261",
    category: "Hospital",
    district: "Badulla",
  },
  {
    id: 6,
    name: "Ella Local Police Station",
    number: "0572228522",
    category: "Police",
    district: "Badulla",
  },
  {
    id: 7,
    name: "DWC Wildlife Office - Ella Range",
    number: "0573574100",
    category: "Wildlife",
    district: "Badulla",
  },
  {
    id: 8,
    name: "Sri Lanka Railways - Ella Station",
    number: "0572228571",
    category: "Transit",
    district: "Badulla",
  },

  // Matale District (Sigiriya / Knuckles)
  {
    id: 9,
    name: "Matale District General Hospital",
    number: "0662222261",
    category: "Hospital",
    district: "Matale",
  },
  {
    id: 10,
    name: "Sigiriya Tourist Police Station",
    number: "0662286322",
    category: "Police",
    district: "Matale",
  },
  {
    id: 11,
    name: "Sri Lanka Navy Command (Inland Water Rescue)",
    number: "0112445885",
    category: "Navy",
    district: "Matale",
  },

  // Colombo District
  {
    id: 12,
    name: "National Hospital of Sri Lanka (Colombo)",
    number: "0112691111",
    category: "Hospital",
    district: "Colombo",
  },
  {
    id: 13,
    name: "Sri Lanka Police Headquarters (Operations)",
    number: "0112421111",
    category: "Police",
    district: "Colombo",
  },
  {
    id: 14,
    name: "DMC National Emergency Coordination Centre",
    number: "0112136136",
    category: "Disaster",
    district: "Colombo",
  },
];

export const sriLankaDistricts = [
  "All Districts",
  "Colombo",
  "Kandy",
  "Badulla",
  "Matale",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Ampara",
  "Anuradhapura",
  "Batticaloa",
  "Gampaha",
  "Kalutara",
  "Kegalle",
  "Kurunegala",
  "Mannar",
  "Monaragala",
  "Mullaitivu",
  "Nuwaraliya",
  "Polonnaruwa",
  "Puttalam",
  "Ratnapura",
  "Trincomalee",
  "Vavuniya",
];
