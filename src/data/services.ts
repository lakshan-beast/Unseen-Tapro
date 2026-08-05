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

// 🚖 
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

export const sriLankaDistricts = [
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
  "Kilinochciya",
];

export const districtHelplines: RegionalHelpline[] = [
  // === KANDY DISTRICT ===
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

  // === BADULLA DISTRICT ===
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

  // === MATALE DISTRICT ===
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

  // === COLOMBO DISTRICT ===
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

  // === GALLE DISTRICT ===
  {
    id: 15,
    name: "Karapitiya Teaching Hospital (Galle)",
    number: "0912232250",
    category: "Hospital",
    district: "Galle",
  },
  {
    id: 16,
    name: "Galle Fort Tourist Police Division",
    number: "0912232222",
    category: "Police",
    district: "Galle",
  },
  {
    id: 17,
    name: "Sri Lanka Navy Southern Command (Hikkaduwa Rescue)",
    number: "0912222621",
    category: "Navy",
    district: "Galle",
  },

  // === MATARA DISTRICT ===
  {
    id: 18,
    name: "Matara District General Hospital",
    number: "0412222261",
    category: "Hospital",
    district: "Matara",
  },
  {
    id: 19,
    name: "Mirissa Tourist Police Post",
    number: "0412250100",
    category: "Police",
    district: "Matara",
  },

  // === HAMBANTOTA DISTRICT ===
  {
    id: 20,
    name: "Hambantota District General Hospital",
    number: "0472220140",
    category: "Hospital",
    district: "Hambantota",
  },
  {
    id: 21,
    name: "DWC Yala National Park Ranger Office",
    number: "0473489297",
    category: "Wildlife",
    district: "Hambantota",
  },

  // === NUWARA ELIYA DISTRICT ===
  {
    id: 22,
    name: "Nuwara Eliya District General Hospital",
    number: "0522222261",
    category: "Hospital",
    district: "Nuwara Eliya",
  },
  {
    id: 23,
    name: "Nuwara Eliya Tourist Police Post",
    number: "0522222222",
    category: "Police",
    district: "Nuwara Eliya",
  },
  {
    id: 24,
    name: "DWC Horton Plains National Park Office",
    number: "0523539121",
    category: "Wildlife",
    district: "Nuwara Eliya",
  },

  // === TRINCOMALEE DISTRICT ===
  {
    id: 25,
    name: "Trincomalee District General Hospital",
    number: "0262222261",
    category: "Hospital",
    district: "Trincomalee",
  },
  {
    id: 26,
    name: "Nilaveli Tourist Police Post",
    number: "0262232222",
    category: "Police",
    district: "Trincomalee",
  },
  {
    id: 27,
    name: "Sri Lanka Navy Eastern Command (Sea Rescue)",
    number: "0262222241",
    category: "Navy",
    district: "Trincomalee",
  },

  // === AMPARA DISTRICT ===
  {
    id: 28,
    name: "Pottuvil Base Hospital (Arugam Bay Area)",
    number: "0632230261",
    category: "Hospital",
    district: "Ampara",
  },
  {
    id: 29,
    name: "Arugam Bay Tourist Police Post",
    number: "0632230222",
    category: "Police",
    district: "Ampara",
  },
  // === BATTICALOA DISTRICT ===
  {
    id: 30,
    name: "Batticaloa Teaching Hospital",
    number: "0652222261",
    category: "Hospital",
    district: "Batticaloa",
  },
  {
    id: 31,
    name: "Batticaloa HQ Police Station",
    number: "0652222222",
    category: "Police",
    district: "Batticaloa",
  },

  // === JAFFNA DISTRICT ===
  {
    id: 32,
    name: "Jaffna Teaching Hospital",
    number: "0212222261",
    category: "Hospital",
    district: "Jaffna",
  },
  {
    id: 33,
    name: "Jaffna HQ Police Station",
    number: "0212222222",
    category: "Police",
    district: "Jaffna",
  },
  {
    id: 34,
    name: "Sri Lanka Navy Northern Command (Islands Rescue)",
    number: "0212222441",
    category: "Navy",
    district: "Jaffna",
  },

  // === MANNAR DISTRICT ===
  {
    id: 35,
    name: "Mannar District General Hospital",
    number: "0212232261",
    category: "Hospital",
    district: "Mannar",
  },

  // === MULLAITIVU DISTRICT ===
  {
    id: 36,
    name: "Mullaitivu District General Hospital",
    number: "0212292261",
    category: "Hospital",
    district: "Mullaitivu",
  },

  // === VAVUNIYA DISTRICT ===
  {
    id: 37,
    name: "Vavuniya District General Hospital",
    number: "0242222261",
    category: "Hospital",
    district: "Vavuniya",
  },

  // === KILINOCHCHI DISTRICT ===
  {
    id: 38,
    name: "Kilinochchi District General Hospital",
    number: "0212285324",
    category: "Hospital",
    district: "Kilinochchi",
  },

  // === ANURADHAPURA DISTRICT ===
  {
    id: 39,
    name: "Anuradhapura Teaching Hospital",
    number: "0252222261",
    category: "Hospital",
    district: "Anuradhapura",
  },
  {
    id: 40,
    name: "Anuradhapura Tourist Police Division",
    number: "025223514",
    category: "Police",
    district: "Anuradhapura",
  },
  {
    id: 41,
    name: "Disaster Management Centre (DMC) - Anuradhapura",
    number: "0252234503",
    category: "Disaster",
    district: "Anuradhapura",
  },

  // === POLONNARUWA DISTRICT ===
  {
    id: 42,
    name: "Polonnaruwa General Hospital",
    number: "0272222261",
    category: "Hospital",
    district: "Polonnaruwa",
  },
  {
    id: 43,
    name: "Polonnaruwa HQ Police Station",
    number: "0272222222",
    category: "Police",
    district: "Polonnaruwa",
  },

  // === KURUNEGALA DISTRICT ===
  {
    id: 44,
    name: "Kurunegala Teaching Hospital",
    number: "0372222261",
    category: "Hospital",
    district: "Kurunegala",
  },
  {
    id: 45,
    name: "Kurunegala HQ Police Station",
    number: "0372222222",
    category: "Police",
    district: "Kurunegala",
  },

  // === PUTTALAM DISTRICT ===
  {
    id: 46,
    name: "Chilaw General Hospital (Puttalam District)",
    number: "0322222261",
    category: "Hospital",
    district: "Puttalam",
  },
  {
    id: 47,
    name: "Kalpitiya Marine Police & Coast Guard",
    number: "0322260655",
    category: "Police",
    district: "Puttalam",
  },
  {
    id: 48,
    name: "DWC Wilpattu National Park Office",
    number: "0253255155",
    category: "Wildlife",
    district: "Puttalam",
  },

  // === RATNAPURA DISTRICT ===
  {
    id: 49,
    name: "Ratnapura Provincial General Hospital",
    number: "0452222261",
    category: "Hospital",
    district: "Ratnapura",
  },
  {
    id: 50,
    name: "DWC Sinharaja Rain Forest Office (Kudawa)",
    number: "0453456333",
    category: "Wildlife",
    district: "Ratnapura",
  },

  // === KEGALLE DISTRICT ===
  {
    id: 51,
    name: "Kegalle District General Hospital",
    number: "0352222261",
    category: "Hospital",
    district: "Kegalle",
  },

  // === MONARAGALA DISTRICT ===
  {
    id: 52,
    name: "Monaragala District General Hospital",
    number: "0552276261",
    category: "Hospital",
    district: "Monaragala",
  },
  {
    id: 53,
    name: "Disaster Management Centre (DMC) - Monaragala",
    number: "0552277255",
    category: "Disaster",
    district: "Monaragala",
  },

  // === GAMPAHA DISTRICT ===
  {
    id: 54,
    name: "Gampaha District General Hospital",
    number: "0332222261",
    category: "Hospital",
    district: "Gampaha",
  },
  {
    id: 55,
    name: "Negombo Tourist Police Post",
    number: "0312222222",
    category: "Police",
    district: "Gampaha",
  },

  // === KALUTARA DISTRICT ===
  {
    id: 56,
    name: "Kalutara District General Hospital",
    number: "0342222261",
    category: "Hospital",
    district: "Kalutara",
  },
  {
    id: 57,
    name: "Kalutara HQ Police Station",
    number: "0342222222",
    category: "Police",
    district: "Kalutara",
  },
];

// 📞 2. දිස්ත්‍රික්ක අනුව රාජ්‍ය සහ හදිසි ආයතන වල දත්ත ලැයිස්තුව
// export const districtHelplines: RegionalHelpline[] = [
//   // Kandy District
//   {
//     id: 1,
//     name: "Kandy National Hospital (Teaching)",
//     number: "0812233337",
//     category: "Hospital",
//     district: "Kandy",
//   },
//   {
//     id: 2,
//     name: "Kandy Tourist Police Division",
//     number: "0812222222",
//     category: "Police",
//     district: "Kandy",
//   },
//   {
//     id: 3,
//     name: "DWC Wildlife Ranger Office - Kandy",
//     number: "0812388383",
//     category: "Wildlife",
//     district: "Kandy",
//   },
//   {
//     id: 4,
//     name: "Disaster Management Centre (DMC) - Kandy",
//     number: "0812384607",
//     category: "Disaster",
//     district: "Kandy",
//   },

//   // Badulla District (Ella area)
//   {
//     id: 5,
//     name: "Badulla Provincial General Hospital",
//     number: "0552222261",
//     category: "Hospital",
//     district: "Badulla",
//   },
//   {
//     id: 6,
//     name: "Ella Local Police Station",
//     number: "0572228522",
//     category: "Police",
//     district: "Badulla",
//   },
//   {
//     id: 7,
//     name: "DWC Wildlife Office - Ella Range",
//     number: "0573574100",
//     category: "Wildlife",
//     district: "Badulla",
//   },
//   {
//     id: 8,
//     name: "Sri Lanka Railways - Ella Station",
//     number: "0572228571",
//     category: "Transit",
//     district: "Badulla",
//   },

//   // Matale District (Sigiriya / Knuckles)
//   {
//     id: 9,
//     name: "Matale District General Hospital",
//     number: "0662222261",
//     category: "Hospital",
//     district: "Matale",
//   },
//   {
//     id: 10,
//     name: "Sigiriya Tourist Police Station",
//     number: "0662286322",
//     category: "Police",
//     district: "Matale",
//   },
//   {
//     id: 11,
//     name: "Sri Lanka Navy Command (Inland Water Rescue)",
//     number: "0112445885",
//     category: "Navy",
//     district: "Matale",
//   },

//   // Colombo District
//   {
//     id: 12,
//     name: "National Hospital of Sri Lanka (Colombo)",
//     number: "0112691111",
//     category: "Hospital",
//     district: "Colombo",
//   },
//   {
//     id: 13,
//     name: "Sri Lanka Police Headquarters (Operations)",
//     number: "0112421111",
//     category: "Police",
//     district: "Colombo",
//   },
//   {
//     id: 14,
//     name: "DMC National Emergency Coordination Centre",
//     number: "0112136136",
//     category: "Disaster",
//     district: "Colombo",
//   },

//   // === SOUTHERN PROVINCE ===
//   // Galle District
//   {
//     id: 15,
//     name: "Karapitiya Teaching Hospital (Galle)",
//     number: "0912232250",
//     category: "Hospital",
//     district: "Galle",
//   },
//   {
//     id: 16,
//     name: "Galle Fort Tourist Police Division",
//     number: "0912232222",
//     category: "Police",
//     district: "Galle",
//   },
//   {
//     id: 17,
//     name: "Sri Lanka Navy Southern Command (Hikkaduwa Rescue)",
//     number: "0912222621",
//     category: "Navy",
//     district: "Galle",
//   },

//   // Matara District
//   {
//     id: 18,
//     name: "Matara District General Hospital",
//     number: "0412222261",
//     category: "Hospital",
//     district: "Matara",
//   },
//   {
//     id: 19,
//     name: "Mirissa Tourist Police Post",
//     number: "0412250100",
//     category: "Police",
//     district: "Matara",
//   },

//   // Hambantota District
//   {
//     id: 20,
//     name: "Hambantota District General Hospital",
//     number: "0472220140",
//     category: "Hospital",
//     district: "Hambantota",
//   },
//   {
//     id: 21,
//     name: "DWC Yala National Park Ranger Office",
//     number: "0473489297",
//     category: "Wildlife",
//     district: "Hambantota",
//   },

//   // === CENTRAL PROVINCE (REMAINING) ===
//   // Nuwara Eliya District
//   {
//     id: 22,
//     name: "Nuwara Eliya District General Hospital",
//     number: "0522222261",
//     category: "Hospital",
//     district: "Nuwara Eliya",
//   },
//   {
//     id: 23,
//     name: "Nuwara Eliya Tourist Police Post",
//     number: "0522222222",
//     category: "Police",
//     district: "Nuwara Eliya",
//   },
//   {
//     id: 24,
//     name: "DWC Horton Plains National Park Office",
//     number: "0523539121",
//     category: "Wildlife",
//     district: "Nuwara Eliya",
//   },

//   // === EASTERN PROVINCE ===
//   // Trincomalee District
//   {
//     id: 25,
//     name: "Trincomalee District General Hospital",
//     number: "0262222261",
//     category: "Hospital",
//     district: "Trincomalee",
//   },
//   {
//     id: 26,
//     name: "Nilaveli Tourist Police Post",
//     number: "0262232222",
//     category: "Police",
//     district: "Trincomalee",
//   },
//   {
//     id: 27,
//     name: "Sri Lanka Navy Eastern Command (Sea Rescue)",
//     number: "0262222241",
//     category: "Navy",
//     district: "Trincomalee",
//   },

//   // Ampara District
//   {
//     id: 28,
//     name: "Pottuvil Base Hospital (Arugam Bay Area)",
//     number: "0632230261",
//     category: "Hospital",
//     district: "Ampara",
//   },
//   {
//     id: 29,
//     name: "Arugam Bay Tourist Police Post",
//     number: "0632230222",
//     category: "Police",
//     district: "Ampara",
//   },

//   // Batticaloa District
//   {
//     id: 30,
//     name: "Batticaloa Teaching Hospital",
//     number: "0652222261",
//     category: "Hospital",
//     district: "Batticaloa",
//   },
//   {
//     id: 31,
//     name: "Batticaloa HQ Police Station",
//     number: "0652222222",
//     category: "Police",
//     district: "Batticaloa",
//   },

//   // === NORTHERN PROVINCE ===
//   // Jaffna District
//   {
//     id: 32,
//     name: "Jaffna Teaching Hospital",
//     number: "0212222261",
//     category: "Hospital",
//     district: "Jaffna",
//   },
//   {
//     id: 33,
//     name: "Jaffna HQ Police Station",
//     number: "0212222222",
//     category: "Police",
//     district: "Jaffna",
//   },
//   {
//     id: 34,
//     name: "Sri Lanka Navy Northern Command (Islands Rescue)",
//     number: "0212222441",
//     category: "Navy",
//     district: "Jaffna",
//   },

//   // Mannar District
//   {
//     id: 35,
//     name: "Mannar District General Hospital",
//     number: "0212232261",
//     category: "Hospital",
//     district: "Mannar",
//   },

//   // Mullaitivu District
//   {
//     id: 36,
//     name: "Mullaitivu District General Hospital",
//     number: "0212292261",
//     category: "Hospital",
//     district: "Mullaitivu",
//   },

//   // Vavuniya District
//   {
//     id: 37,
//     name: "Vavuniya District General Hospital",
//     number: "0242222261",
//     category: "Hospital",
//     district: "Vavuniya",
//   },

//   // Kilinochchi District
//   {
//     id: 38,
//     name: "Kilinochchi District General Hospital",
//     number: "0212285324",
//     category: "Hospital",
//     district: "Kilinochchi",
//   },
//   // === NORTH CENTRAL PROVINCE ===
//   // Anuradhapura District
//   {
//     id: 39,
//     name: "Anuradhapura Teaching Hospital",
//     number: "0252222261",
//     category: "Hospital",
//     district: "Anuradhapura",
//   },
//   {
//     id: 40,
//     name: "Anuradhapura Tourist Police Division",
//     number: "0252223514",
//     category: "Police",
//     district: "Anuradhapura",
//   },
//   {
//     id: 41,
//     name: "Disaster Management Centre (DMC) - Anuradhapura",
//     number: "0252234503",
//     category: "Disaster",
//     district: "Anuradhapura",
//   },

//   // Polonnaruwa District
//   {
//     id: 42,
//     name: "Polonnaruwa General Hospital",
//     number: "0272222261",
//     category: "Hospital",
//     district: "Polonnaruwa",
//   },
//   {
//     id: 43,
//     name: "Polonnaruwa HQ Police Station",
//     number: "0272222222",
//     category: "Police",
//     district: "Polonnaruwa",
//   },

//   // === NORTH WESTERN PROVINCE ===
//   // Kurunegala District
//   {
//     id: 44,
//     name: "Kurunegala Teaching Hospital",
//     number: "0372222261",
//     category: "Hospital",
//     district: "Kurunegala",
//   },
//   {
//     id: 45,
//     name: "Kurunegala HQ Police Station",
//     number: "0372222222",
//     category: "Police",
//     district: "Kurunegala",
//   },

//   // Puttalam District
//   {
//     id: 46,
//     name: "Chilaw General Hospital (Puttalam District)",
//     number: "0322222261",
//     category: "Hospital",
//     district: "Puttalam",
//   },
//   {
//     id: 47,
//     name: "Kalpitiya Marine Police & Coast Guard",
//     number: "0322260655",
//     category: "Police",
//     district: "Puttalam",
//   },
//   {
//     id: 48,
//     name: "DWC Wilpattu National Park Office",
//     number: "0253255155",
//     category: "Wildlife",
//     district: "Puttalam",
//   },

//   // === SABARAGAMUWA PROVINCE ===
//   // Ratnapura District
//   {
//     id: 49,
//     name: "Ratnapura Provincial General Hospital",
//     number: "0452222261",
//     category: "Hospital",
//     district: "Ratnapura",
//   },
//   {
//     id: 50,
//     name: "DWC Sinharaja Rain Forest Office (Kudawa)",
//     number: "0453456333",
//     category: "Wildlife",
//     district: "Ratnapura",
//   },

//   // Kegalle District
//   {
//     id: 51,
//     name: "Kegalle District General Hospital",
//     number: "0352222261",
//     category: "Hospital",
//     district: "Kegalle",
//   },

//   // === UVA PROVINCE (REMAINING) ===
//   // Monaragala District
//   {
//     id: 52,
//     name: "Monaragala District General Hospital",
//     number: "0552276261",
//     category: "Hospital",
//     district: "Monaragala",
//   },
//   {
//     id: 53,
//     name: "Disaster Management Centre (DMC) - Monaragala",
//     number: "0552277255",
//     category: "Disaster",
//     district: "Monaragala",
//   },

//   // === WESTERN PROVINCE (REMAINING) ===
//   // Gampaha District
//   {
//     id: 54,
//     name: "Gampaha District General Hospital",
//     number: "0332222261",
//     category: "Hospital",
//     district: "Gampaha",
//   },
//   {
//     id: 55,
//     name: "Negombo Tourist Police Post",
//     number: "0312222222",
//     category: "Police",
//     district: "Gampaha",
//   },

//   // Kalutara District
//   {
//     id: 56,
//     name: "Kalutara District General Hospital",
//     number: "0342222261",
//     category: "Hospital",
//     district: "Kalutara",
//   },
//   {
//     id: 57,
//     name: "Kalutara HQ Police Station",
//     number: "0342222222",
//     category: "Police",
//     district: "Kalutara",
//   },
// ];
