export interface PlaceRoute {
  step: number;
  title: string;
  description: string;
}

export interface Place {
  id: string;
  title: string;
  district: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  likes: number;
  commentsCount: number;
  authorName: string;
  authorVotes: number;
  category: "waterfall" | "mountain" | "beach" | "camping";
  routes: PlaceRoute[];
  googleMapUrl: string;
  safetyAlerts: string[];
  vehicleAccessibility: string;
  facilities: string[];
}

export const mockPlaces: Place[] = [
  {
    id: "1",
    title: "Duwili Ella Waterfall",
    district: "Ratnapura",
    shortDescription:
      "A breathtaking hidden waterfall tucked deep inside the Kalthota wilderness, featuring a mystical hidden cave behind the water curtain.",
    longDescription:
      "Kalthota Duwili Ella is a pristine waterfall hidden within dense jungles. Its most unique feature is the natural cave located directly behind the falling water, offering hikers a mesmerizing, misty 360-degree view of the valley below.",
    image: "https://picsum.photos",
    likes: 142,
    commentsCount: 24,
    authorName: "Kasun Perera",
    authorVotes: 120, // Elite Guide
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Colombo to Balangoda",
        description:
          "Take the Colombo-Badulla highway via Ratnapura to reach Balangoda town.",
      },
      {
        step: 2,
        title: "Balangoda to Kalthota",
        description:
          "Drive 28km down the Kalthota Road (B38) until you reach the Kalthota junction.",
      },
      {
        step: 3,
        title: "Jungle Trekking",
        description:
          "Hike 3km through a challenging jungle path to reach the waterfall basin.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "Flash floods are highly common during rainy seasons. Do not swim.",
      "Leeches are abundant; wear protective gear.",
      "Wild elephants roam the area past 4:00 PM.",
    ],
    vehicleAccessibility:
      "Accessible by any vehicle up to Kalthota Junction. Strictly on foot from there.",
    facilities: [
      "Nearest Hospital: Balangoda Base Hospital",
      "Nearest ATM: Balangoda Town",
      "Camping: Small campsites available nearby.",
    ],
  },
  {
    id: "2",
    title: "Peacock Hill (Monaragala)",
    district: "Nuwara Eliya",
    shortDescription:
      "One of the highest viewpoints in Pussellawa, offering a panoramic 360-degree view of Kotmale reservoir and endless tea estates.",
    longDescription:
      "Rising 1,518 meters above sea level, Peacock Hill provides stunning unobstructed views of Kotmale Reservoir, Navalapitiya town, and mountain ranges. It is an ideal spot for early morning cloud chasing.",
    image: "https://picsum.photos",
    likes: 98,
    commentsCount: 11,
    authorName: "Chathura Silva",
    authorVotes: 65, // Pro Traveler
    category: "mountain",
    routes: [
      {
        step: 1,
        title: "Kandy to Pussellawa",
        description:
          "Drive along the Kandy-Nuwara Eliya (A5) road to Pussellawa town.",
      },
      {
        step: 2,
        title: "Tea Estate Climb",
        description:
          "Turn into Doragala Road and drive 6km up through lush tea plantations.",
      },
      {
        step: 3,
        title: "Final Ascent",
        description:
          "Park near the telecom tower and walk 500m to the rocky summit.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "Strong winds at the summit. Stand clear of rocky edges.",
      "Thick fog descends quickly after 3:00 PM, lowering visibility.",
    ],
    vehicleAccessibility:
      "Bikes and Three-wheelers can go to the top. Low clearance cars might struggle on estate tracks.",
    facilities: [
      "Nearest Hospital: Pussellawa Rural Hospital",
      "Nearest ATM: Pussellawa Town",
      "Accommodation: Hotels available in Gampola.",
    ],
  },
  {
    id: "3",
    title: "Kondagala Mountain",
    district: "Kandy",
    shortDescription:
      "A magnificent cliffside trek located inside the historic Loolkandura estate, the birthplace of Ceylon Tea.",
    longDescription:
      "Kondagala offers an adventurous hike through pine forests and misty cliffs within the Loolkandura Estate. Standing on the edge feels like standing at the end of the world, overlooking vast green valleys.",
    image: "https://picsum.photos",
    likes: 115,
    commentsCount: 14,
    authorName: "Amila Bandara",
    authorVotes: 105, // Elite Guide
    category: "mountain",
    routes: [
      {
        step: 1,
        title: "Kandy to Deltota",
        description: "Travel from Kandy to Deltota town via Galaha Road.",
      },
      {
        step: 2,
        title: "Loolkandura Entrance",
        description:
          "Proceed 5km from Deltota to the entrance of Loolkandura Estate.",
      },
      {
        step: 3,
        title: "Pine Forest Hike",
        description:
          "Hike upwards through the pine forest for about 1 hour to reach the peak.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "The cliff edge has a sheer drop; be extremely cautious when taking photos.",
      "Leech infestation is high during wet weather.",
    ],
    vehicleAccessibility:
      "Cars can reach the James Taylor seat. 4x4 or bikes recommended for higher trails.",
    facilities: [
      "Nearest ATM: Galaha Town",
      "Nearest Hospital: Deltota Hospital",
      "Food: Pack your own meals; no shops on top.",
    ],
  },
  {
    id: "4",
    title: "Secret Beach Kapaltiya",
    district: "Puttalam",
    shortDescription:
      "An untouched, serene coastal hideout away from the main kite-surfing crowds, perfect for dolphin watching and wild camping.",
    longDescription:
      "This hidden shoreline in Kalpitiya remains free of large commercial resorts. Surrounded by mangrove swamps and calm blue waters, it offers a peaceful retreat for camping directly under the stars.",
    image: "https://picsum.photos",
    likes: 89,
    commentsCount: 9,
    authorName: "Nisha Perera",
    authorVotes: 32, // Explorer
    category: "beach",
    routes: [
      {
        step: 1,
        title: "Colombo to Palaviya",
        description:
          "Drive up the Puttalam highway (A3) until you hit Palaviya Junction.",
      },
      {
        step: 2,
        title: "Palaviya to Kalpitiya",
        description:
          "Turn left onto Kalpitiya Road and drive 40km towards Kudawa.",
      },
      {
        step: 3,
        title: "Off-road Track",
        description:
          "Take the unpaved sandy trail through coconut patches to the hidden coast.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "Strong undercurrents during monsoon seasons. Swim inside the lagoon only.",
      "No lifeguards stationed around.",
    ],
    vehicleAccessibility:
      "Cars can reach Kudawa. Sandy tracks require a 4x4, Scooter, or a local tuk-tuk.",
    facilities: [
      "Nearest ATM: Kalpitiya Town",
      "Shops: Local fishermen stalls nearby",
      "Camping: Allowed directly on the beach.",
    ],
  },
  {
    id: "5",
    title: "Kabagala Peak",
    district: "Kegalle",
    shortDescription:
      "An off-the-beaten-path ridge trek in Nawalapitiya border, offering endless views of the Sabaragamuwa mountain range.",
    longDescription:
      "Kabagala is a hidden gem for campers looking to escape commercial trails. The summit features flat grassland ideal for pitching tents, surrounded by deep drop-offs and cold mountain winds.",
    image: "https://picsum.photos",
    likes: 76,
    commentsCount: 5,
    authorName: "Lahiru Silva",
    authorVotes: 52, // Pro Traveler
    category: "camping",
    routes: [
      {
        step: 1,
        title: "Kegalle to Bulathkohupitiya",
        description: "Travel to Bulathkohupitiya town from Kegalle.",
      },
      {
        step: 2,
        title: "Dolosbage Road",
        description:
          "Drive up the winding Dolosbage road up into the high hills.",
      },
      {
        step: 3,
        title: "Grassland Trek",
        description:
          "Hike for 45 minutes through rubber and tea patches onto the ridge.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "Sudden lightning storms occur frequently. Avoid camping during heavy storm warnings.",
      "Keep tents securely anchored due to heavy winds.",
    ],
    vehicleAccessibility:
      "Good road up to the trail base. Free parking spaces available at local village houses.",
    facilities: [
      "Nearest Hospital: Bulathkohupitiya Hospital",
      "Water: Natural spring water stream near trail base.",
    ],
  },
  {
    id: "6",
    title: "Bambarakanda Secret Pools",
    district: "Badulla",
    shortDescription:
      "Natural infinity rock pools hidden just above Sri Lanka's tallest waterfall, far away from the main observation platform.",
    longDescription:
      "While everyone visits the base of Bambarakanda, a secret trail leads to the very top cliff where cold mountain streams create natural crystal-clear swimming pools right on the edge of the drop.",
    image: "https://picsum.photos",
    likes: 164,
    commentsCount: 32,
    authorName: "Kasun Perera",
    authorVotes: 120, // Elite Guide
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Colombo to Kalupahana",
        description:
          "Drive along the Colombo-Badulla highway until you reach Kalupahana Junction.",
      },
      {
        step: 2,
        title: "Waterfall Road",
        description:
          "Turn left towards Bambarakanda falls and drive 3km to the base station.",
      },
      {
        step: 3,
        title: "The Upper Trail",
        description:
          "Take the steep pine forest trail that directly ascends to the top shelf of the falls.",
      },
    ],
    googleMapUrl: "https://google.com",
    safetyAlerts: [
      "Walking on the top rocks is extremely slippery. One slip can be fatal.",
      "Do not enter deep pools if water levels suddenly start turning muddy.",
    ],
    vehicleAccessibility:
      "Any vehicle can reach the Kalupahana base. Upper trail is strictly an intensive climb.",
    facilities: [
      "Nearest Towns: Haldummulla & Beragala",
      "Guides: Local villagers at base offer guiding services.",
    ],
  },
];
