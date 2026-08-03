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
  category:
    | "waterfall"
    | "mountain"
    | "beach"
    | "camping"
    | "historical"
    | "coastal"
    | "nature";
  routes: PlaceRoute[];
  googleMapUrl: string;
  // googleIframe: string;
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
    image: "places/duwili-ella.jpg",
    likes: 142,
    commentsCount: 24,
    authorName: "",
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

  // peacock hill
  {
    id: "2",
    title: "Peacock Hill (Monaragala)",
    district: "Nuwara Eliya",
    shortDescription:
      "One of the highest viewpoints in Pussellawa, offering a panoramic 360-degree view of Kotmale reservoir and endless tea estates.",
    longDescription:
      "Rising 1,518 meters above sea level, Peacock Hill provides stunning unobstructed views of Kotmale Reservoir, Navalapitiya town, and mountain ranges. It is an ideal spot for early morning cloud chasing.",
    image: "places/peacock-hill.jpg",
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
    // googleMapUrl: "https://maps.app.goo.gl/B9Sk94KGrEFz3pBk6",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10368.657034104852!2d80.61518731646036!3d7.0838703741378986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae370aabbb4a969%3A0x80d4504592d49848!2sMonara%20Gala%20Mountain%20(Peacock%20Hill)!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10368.657034104852!2d80.61518731646036!3d7.0838703741378986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae370aabbb4a969%3A0x80d4504592d49848!2sMonara%20Gala%20Mountain%20(Peacock%20Hill)!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
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

  // Kondagala Mountain
  {
    id: "3",
    title: "Kondagala Mountain",
    district: "Kandy",
    shortDescription:
      "A magnificent cliffside trek located inside the historic Loolkandura estate, the birthplace of Ceylon Tea.",
    longDescription:
      "Kondagala offers an adventurous hike through pine forests and misty cliffs within the Loolkandura Estate. Standing on the edge feels like standing at the end of the world, overlooking vast green valleys.",
    image: "places/kondagala-peak.JPG",
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

  // kalpitiya-kite_surfing
  {
    id: "4",
    title: "Secret Beach Kapaltiya",
    district: "Puttalam",
    shortDescription:
      "An untouched, serene coastal hideout away from the main kite-surfing crowds, perfect for dolphin watching and wild camping.",
    longDescription:
      "This hidden shoreline in Kalpitiya remains free of large commercial resorts. Surrounded by mangrove swamps and calm blue waters, it offers a peaceful retreat for camping directly under the stars.",
    image: "places/kalpitiya-kite_surfing.jpg",
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

  // kabaragala peak
  {
    id: "5",
    title: "Kabaragala Peak",
    district: "Kegalle",
    shortDescription:
      "An off-the-beaten-path ridge trek in Nawalapitiya border, offering endless views of the Sabaragamuwa mountain range.",
    longDescription:
      "Kabagala is a hidden gem for campers looking to escape commercial trails. The summit features flat grassland ideal for pitching tents, surrounded by deep drop-offs and cold mountain winds.",
    image: "places/kabaragala-peak.jpg",
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

  // Bambarakanda Secret Waterfall
  {
    id: "6",
    title: "Bambarakanda Secret Waterfall",
    district: "Badulla",
    shortDescription:
      "Natural infinity rock pools hidden just above Sri Lanka's tallest waterfall, far away from the main observation platform.",
    longDescription:
      "While everyone visits the base of Bambarakanda, a secret trail leads to the very top cliff where cold mountain streams create natural crystal-clear swimming pools right on the edge of the drop.",
    image: "places/bambarakanda-falls2.jpg",
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

  // diyaluma falls
  {
    id: "7",
    title: "Diyaluma Falls",
    district: "Badulla",
    shortDescription:
      "Sri Lanka's second highest waterfall, famous for its epic natural infinity pools at the top.",
    longDescription:
      "Standing 220 meters high, Diyaluma Falls drops down over impressive rock faces near Koslanda. Hiking to the top rewards adventurers with a series of pristine natural rock pools and stunning views over the valleys below.",
    image: "places/diyaluma-falls.jpg",
    likes: 142,
    commentsCount: 18,
    authorName: "Kasun Perera",
    authorVotes: 82, // Pro Traveler
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Ella to Makaldeniya",
        description:
          "Take the A23 road from Ella towards Wellawaya, turning towards Makaldeniya Junction.",
      },
      {
        step: 2,
        title: "Rubber Estate Walk",
        description:
          "Start the trek from the upper access point passing through village paths and rubber trees.",
      },
      {
        step: 3,
        title: "Top Pools Reach",
        description:
          "Walk 30 minutes downhill along the clear path until you hit the natural rock pools.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/9Z84J5yM1Z7X8Y9K9",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.337034104852!2d81.0286!3d6.7328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f1445555555%3A0x123456789abcdef!2sDiyaluma%20Falls!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.337034104852!2d81.0286!3d6.7328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f1445555555%3A0x123456789abcdef!2sDiyaluma%20Falls!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Extremely slippery rocks near the pool edges. Exercise extreme caution when taking photos.",
      "Flash floods can occur during the monsoon season. Avoid swimming if water turns muddy.",
    ],
    vehicleAccessibility:
      "All vehicles can reach the base of the waterfall. The upper trail starts from a narrow estate road best suited for tuk-tuks or bikes.",
    facilities: [
      "Nearest Hospital: Wellawaya Base Hospital",
      "Nearest ATM: Koslanda Town / Wellawaya",
      "Accommodation: Guesthouses and homestays nearby in Koslanda and Ella.",
    ],
  },

  // sigiriya rock fortress
  {
    id: "8",
    title: "Sigiriya Rock Fortress",
    district: "Matale",
    shortDescription:
      "An ancient rock fortress and palace ruin dominated by a massive column of rock nearly 200 meters high.",
    longDescription:
      "Designated a UNESCO World Heritage site, Sigiriya (Lion Rock) features fifth-century palace ruins, intricate water gardens, famous fresco paintings, and the massive Lion Gate carved directly into the rock face.",
    image: "places/sigiriya-rock.jpg",
    likes: 215,
    commentsCount: 34,
    authorName: "Nimali Wickramasinghe",
    authorVotes: 110, // Pro Traveler
    category: "mountain",
    routes: [
      {
        step: 1,
        title: "Dambulla to Sigiriya",
        description:
          "Take the Inamaluwa-Sigiriya Road from Dambulla for about 15km to the main entrance.",
      },
      {
        step: 2,
        title: "Water Gardens Walk",
        description:
          "Pass through the ticketing office and walk across the ancient royal water gardens.",
      },
      {
        step: 3,
        title: "Staircase Ascent",
        description:
          "Climb the 1,200 steps passing the Frescoes, Mirror Wall, and Lion Paw platform to reach the summit.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/X74K29L8M12345678",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.123456789!2d80.7597!3d7.9570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0d012345678%3A0x87654321fedcba!2sSigiriya!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.123456789!2d80.7597!3d7.9570!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0d012345678%3A0x87654321fedcba!2sSigiriya!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Hornet nests are present along the rock face. Remain quiet and follow safety signs in marked zones.",
      "High midday heat. Start your climb early around 6:30 AM to avoid heat stroke and heavy crowds.",
    ],
    vehicleAccessibility:
      "All vehicles, including cars and buses, can comfortably park at the main visitor center parking area.",
    facilities: [
      "Nearest Hospital: Dambulla Base Hospital",
      "Nearest ATM: Sigiriya Town / Inamaluwa Junction",
      "Accommodation: Wide variety of resorts, boutique hotels, and homestays nearby.",
    ],
  },

  // kitulgala
  {
    id: "9",
    title: "Kitulgala White Water Rafting",
    district: "Kegalle",
    shortDescription:
      "Sri Lanka's ultimate adventure hub, famous for white-water rafting down the Kelani River.",
    longDescription:
      "Nestled in the wet zone, Kitulgala is renowned as Sri Lanka's adventure capital. Visitors flock here for thrilling white-water rafting, confidence jumps, jungle trekking, and exploring picturesque rain forest streams.",
    image: "places/kithulgala-water_rafting.jpg",
    likes: 178,
    commentsCount: 22,
    authorName: "Sahan Jayasuriya",
    authorVotes: 95, // Pro Traveler
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Colombo to Kitulgala",
        description:
          "Take the Avissawella-Hatton (A7) highway straight to Kitulgala town.",
      },
      {
        step: 2,
        title: "Base Camp Briefing",
        description:
          "Head to one of the local adventure camps near the riverbank for gear fitting and safety instructions.",
      },
      {
        step: 3,
        title: "River Launch",
        description:
          "Board the raft and navigate the 5km stretch featuring major and minor rapids on the Kelani River.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/K81L92M7P12345678",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.123456789!2d80.4132!3d6.9982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a1d012345678%3A0x987654321fedcba!2sKitulgala!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.123456789!2d80.4132!3d6.9982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3a1d012345678%3A0x987654321fedcba!2sKitulgala!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Water levels can swell rapidly after heavy rainfall in the central hills. Always wear standard life jackets and helmets.",
      "Follow instructor directions strictly during river rapids navigation.",
    ],
    vehicleAccessibility:
      "Easily accessible via main A7 road for all vehicle types, including cars and buses, with parking at most river activity centers.",
    facilities: [
      "Nearest Hospital: Kitulgala Divisional Hospital",
      "Nearest ATM: Kitulgala Town",
      "Accommodation: Numerous riverfront campsites, eco-lodges, and resorts available along the riverbank.",
    ],
  },

  // ihalakotte
  {
    id: "10",
    title: "Ihalakotte Railway Station & Green Valley",
    district: "Kandy",
    shortDescription:
      "A scenic rural railway halt surrounded by misty mountains, historical railway tunnels, and lush greenery.",
    longDescription:
      "Located along the Main Line railway between Rambukkana and Kadugannawa, Ihalakotte is a picturesque country village renowned for its serene railway setting, historic tunnels built during the British era, and scenic trekking routes towards Alagalla Mountain Range.",
    image: "places/ihalakotte.jpg",
    likes: 124,
    commentsCount: 15,
    authorName: "Ruwan Bandara",
    authorVotes: 72, // Pro Traveler
    category: "mountain",
    routes: [
      {
        step: 1,
        title: "Colombo / Kandy Train to Ihalakotte",
        description:
          "Take a slow local train along the Main Line and get off directly at Ihalakotte Railway Station.",
      },
      {
        step: 2,
        title: "Tunnel Exploration Walk",
        description:
          "Walk along designated footpaths near the historic railway tunnel under local guide advice.",
      },
      {
        step: 3,
        title: "Village & Nature Hike",
        description:
          "Trek through surrounding spice gardens and countryside trails leading towards the base of Alagalla.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/I3K498M123456789",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.123456789!2d80.4721!3d7.2435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36e1445555555%3A0x987654321abcdef!2sIhalakotte!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.123456789!2d80.4721!3d7.2435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36e1445555555%3A0x987654321abcdef!2sIhalakotte!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Always stay off the active train tracks and listen out for approaching trains when walking near the railway line.",
      "Leeches are common on damp grassy trails, especially during or after rainfall.",
    ],
    vehicleAccessibility:
      "Accessible by train or narrow village roads. Cars can reach the village, but public train transport is recommended for the full experience.",
    facilities: [
      "Nearest Hospital: Rambukkana Base Hospital / Mawanella General Hospital",
      "Nearest ATM: Rambukkana Town / Kadugannawa",
      "Accommodation: Small local homestays nearby or hotels in Kadugannawa and Kandy.",
    ],
  },

  // knuckles mountain range
  {
    id: "11",
    title: "Knuckles Mountain Range",
    district: "Matale",
    shortDescription:
      "A UNESCO World Heritage biodiversity hotspot featuring dramatic cloud forests, hidden waterfalls, and mountain peaks.",
    longDescription:
      "Named after its resemblance to a folded fist, the Knuckles Range features 34 mountain peaks ranging from 900m to 1,900m. It is a premier trekking destination offering breathtaking scenery, rare endemic wildlife, cascading waterfalls, and traditional isolated mountain villages.",
    image: "places/knuckels-mountain.jpg",
    likes: 195,
    commentsCount: 27,
    authorName: "Tharindu Dilshan",
    authorVotes: 88, // Pro Traveler
    category: "mountain",
    routes: [
      {
        step: 1,
        title: "Kandy to Matale / Teldeniya",
        description:
          "Travel from Kandy towards Matale (via Rattota) or Teldeniya depending on your targeted trail entrance.",
      },
      {
        step: 2,
        title: "Riverston or Deanston Entrance",
        description:
          "Drive up the winding mountain roads to the main trailheads at Riverston Gap or Deanston Conservation Center.",
      },
      {
        step: 3,
        title: "Guided Wilderness Trek",
        description:
          "Hike along designated trails such as Mini World's End, Pitawala Pathana, or Five Peaks with a certified local guide.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/K39N41M8L12345678",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.123456789!2d80.7833!3d7.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35e1445555555%3A0x123456789abcdef!2sKnuckles%20Mountain%20Range!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.123456789!2d80.7833!3d7.4500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35e1445555555%3A0x123456789abcdef!2sKnuckles%20Mountain%20Range!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Weather conditions change rapidly; heavy mist and strong wind gusts can cause severe disorientation. Always trek with a local guide.",
      "Leeches are extremely abundant throughout the forest trails, especially during wet weather.",
    ],
    vehicleAccessibility:
      "Four-wheel drives, motorbikes, or tuk-tuks are best suited for deep forest roads. Standard cars can reach main base points like Riverston Gap.",
    facilities: [
      "Nearest Hospital: Matale District General Hospital / Teldeniya Base Hospital",
      "Nearest ATM: Rattota Town / Teldeniya",
      "Accommodation: Eco-lodges, campsites, and forest bungalows available nearby.",
    ],
  },

  // meemure
  {
    id: "12",
    title: "Meemure Village",
    district: "Kandy",
    shortDescription:
      "A remote traditional village hidden deep within the Knuckles Range, dominated by the majestic Lakegala Peak.",
    longDescription:
      "Meemure is one of Sri Lanka's most isolated villages, known for maintaining its traditional rural culture, pristine mountain streams, and dramatic backdrop of Lakegala Mountain. It is a favorite destination for eco-tourism, camping, and natural stream water jumps.",
    image: "places/meemure-village.jpg",
    likes: 167,
    commentsCount: 21,
    authorName: "Sanjeewa Bandara",
    authorVotes: 79, // Pro Traveler
    category: "camping",
    routes: [
      {
        step: 1,
        title: "Kandy to Hunasgiriya",
        description:
          "Drive along the Kandy-Mahiyangana (A26) road until you reach Hunasgiriya junction.",
      },
      {
        step: 2,
        title: "Hunasgiriya to Loolwatte",
        description:
          "Turn onto the narrow Meemure road, driving past Deanston and Loolwatte through misty tea estates.",
      },
      {
        step: 3,
        title: "Descend to Meemure",
        description:
          "Navigate the winding, rugged 14km gravel descent down into the secluded Meemure valley.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/M84J5yM1Z7X8Y9K91",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.123456789!2d80.8465!3d7.4328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35f1445555555%3A0x87654321fedcba!2sMeemure!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.123456789!2d80.8465!3d7.4328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35f1445555555%3A0x87654321fedcba!2sMeemure!5e0!3m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Very weak or zero mobile network coverage. Inform family members of your plan prior to entering the valley.",
      "The road from Hunasgiriya is narrow and steep; exercise caution and drive slowly, especially in bad weather.",
    ],
    vehicleAccessibility:
      "Four-wheel drives, three-wheelers, or motorbikes are strongly recommended due to rough, unpaved estate tracks. Low clearance sedans should be avoided.",
    facilities: [
      "Nearest Hospital: Medamahanuwara / Uda Dumbara Divisional Hospital",
      "Nearest ATM: Hunasgiriya / Teldeniya Town",
      "Accommodation: Traditional village homestays and riverside campsites.",
    ],
  },

  // bomburu ella
  {
    id: "13",
    title: "Bomburu Ella Waterfall",
    district: "Nuwara Eliya",
    shortDescription:
      "The widest waterfall in Sri Lanka, consisting of a collection of several cascading jungle waterfalls.",
    longDescription:
      "Situated in the Uva-Paranagama region near the border of Nuwara Eliya and Badulla districts, Bomburu Ella (Perawella Falls) is famous for its unmatched width and multi-tier cascade. A picturesque jungle trek leads visitors to the base of the massive mist-covered falls.",
    image: "places/bomburu-ella.jpg",
    likes: 189,
    commentsCount: 24,
    authorName: "Dinesh Fernando",
    authorVotes: 84, // Pro Traveler
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Nuwara Eliya to Welimada Road",
        description:
          "Travel along the Nuwara Eliya - Welimada (A5) road until you reach the Hakgala / Rendapola junction.",
      },
      {
        step: 2,
        title: "Drive to Bomburu Ella Bus Stop",
        description:
          "Turn onto the Bomburu Ella road and proceed to the village trailhead carpark.",
      },
      {
        step: 3,
        title: "Jungle Trek to Base",
        description:
          "Hike approximately 1.5 to 2 km along the scenic forest and stream trail to reach the waterfall base.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/B73K98M123456789",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.123456789!2d80.8351!3d6.9642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3811445555555%3A0x123456789abcdef!2sBomburu%20Ella!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.123456789!2d80.8351!3d6.9642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3811445555555%3A0x123456789abcdef!2sBomburu%20Ella!5e0!3m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Bathing directly under the main cascade can be extremely hazardous due to sudden water surges and slippery submerged rocks.",
      "Rainfall in the upper catchment areas can cause sudden flash floods; vacate the riverbed immediately if water turns muddy or rises.",
    ],
    vehicleAccessibility:
      "Cars, vans, and bikes can reach the main trailhead parking area. The remaining distance must be covered on foot.",
    facilities: [
      "Nearest Hospital: Keppetipola Divisional Hospital / Nuwara Eliya General Hospital",
      "Nearest ATM: Welimada Town / Hakgala",
      "Accommodation: Guesthouses and hotels available in Hakgala, Welimada, and Nuwara Eliya.",
    ],
  },

  // gerandi ella
  {
    id: "14",
    title: "Gerandi Ella Waterfall",
    district: "Kandy",
    shortDescription:
      "A stunning series of multi-tiered waterfalls cascading down steep cliff faces along the Kalugala-Gerandi Ella range.",
    longDescription:
      "Gerandi Ella (located in the Kalugala region near Hasalaka/Mahiyanganaya) is famous for its dramatic vertical drops and striking appearance after rains. The falls consist of several tiers visible from afar, while adventurous trekkers can hike through forest paths to reach various viewing points and pristine stream pools.",
    image: "places/gerandi-ella.jpg",
    likes: 145,
    commentsCount: 16,
    authorName: "Dilshan Ranasinghe",
    authorVotes: 76, // Pro Traveler
    category: "waterfall",
    routes: [
      {
        step: 1,
        title: "Kandy to Hasalaka / Ududumbara",
        description:
          "Take the Kandy - Mahiyangana (A26) highway through the 18 Hairpin Bends towards Hasalaka.",
      },
      {
        step: 2,
        title: "Kalugala Turnoff",
        description:
          "Turn off towards the Kalugala area and proceed along the local road leading towards the base of the mountain range.",
      },
      {
        step: 3,
        title: "Trek to Waterfall Point",
        description:
          "Follow the local footpath through village rubber/spice gardens and forested terrain to reach the waterfall viewing rocks.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/G39K12M8P9876543",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.123456789!2d80.9321!3d7.3312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3611445555555%3A0x87654321fedcba!2sGerandi%20Ella!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.123456789!2d80.9321!3d7.3312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3611445555555%3A0x87654321fedcba!2sGerandi%20Ella!5e0!3m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "Climbing on wet cliff surfaces near the falls is extremely dangerous and prone to slipping.",
      "Flash floods can occur quickly during the rainy season; avoid standing in main water flows during heavy rainfall.",
    ],
    vehicleAccessibility:
      "Cars and vans can reach the village access points; the remaining distance to the falls requires hiking on foot.",
    facilities: [
      "Nearest Hospital: Ududumbara Base Hospital / Hasalaka Divisional Hospital",
      "Nearest ATM: Hasalaka Town / Ududumbara",
      "Accommodation: Small guest houses in Hasalaka and Mahiyanganaya.",
    ],
  },

  // yapahuwa rock fortress
  {
    id: "15",
    title: "Yapahuwa Rock Fortress",
    district: "Kurunegala",
    shortDescription:
      "A magnificent 13th-century rock fortress and ancient capital featuring a dramatic ornamental stone staircase.",
    longDescription:
      "Rising nearly 100 meters above the surrounding plains, Yapahuwa served as the capital of Sri Lanka in the late 13th century. Often compared to Sigiriya, it is best known for its beautifully carved steep ornamental granite staircase leading to the old Palace of the Sacred Tooth Relic.",
    image: "places/yapahuwa.jpg",
    likes: 132,
    commentsCount: 14,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Kurunegala to Maho",
        description:
          "Drive along the Kurunegala-Maho (A10 / B275) road towards Maho town.",
      },
      {
        step: 2,
        title: "Turnoff to Yapahuwa",
        description:
          "Take the Yapahuwa Access Road from Maho Junction for approximately 4km to reach the archaeological site.",
      },
      {
        step: 3,
        title: "Staircase Climb",
        description:
          "Walk through the outer moat and climb the steep granite staircase to explore the upper temple and cave ruins.",
      },
    ],
    // googleMapUrl: "https://maps.app.goo.gl/Y12K34M5P6789012",
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.123456789!2d80.3051!3d7.8285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc11445555555%3A0x123456789abcdef!2sYapahuwa%20Rock%20Fortress!5e0!3m2!1sen!2slk!4v1785735339161!5m2!1sen!2slk",
    // googleIframe: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.123456789!2d80.3051!3d7.8285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afcc11445555555%3A0x123456789abcdef!2sYapahuwa%20Rock%20Fortress!5e0!3m2!1sen!2slk" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>,
    safetyAlerts: [
      "The stone steps are very steep and narrow with limited handrails; step carefully, especially during wet weather.",
      "Mind the intense midday heat on the unshaded rock face; morning or late afternoon visits are recommended.",
    ],
    vehicleAccessibility:
      "Easily accessible by all vehicles (cars, vans, buses) with direct parking near the museum entrance.",
    facilities: [
      "Nearest Hospital: Maho Base Hospital / Kurunegala Teaching Hospital",
      "Nearest ATM: Maho Town",
      "Accommodation: Small local guesthouses and hotels in Maho and Kurunegala.",
    ],
  },

  // Pidurangala Rock
  {
    id: "16",
    title: "Pidurangala Rock",
    district: "Matale",
    shortDescription:
      "A massive rock formation directly opposite Sigiriya, offering unmatched 360-degree panoramic views and a ancient cave monastery.",
    longDescription:
      "Located just north of Sigiriya, Pidurangala Rock carries a rich Buddhist history dating back to the 1st century BC. King Kashyapa relocated the monastery monks here before building his fortress on Sigiriya. Famous for its rewarding trek, ancient reclining Buddha statue, and incredible sunrise view over Sigiriya Rock.",
    image: "places/pidurangala.jpg",
    likes: 310,
    commentsCount: 42,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Sigiriya Junction to Pidurangala Temple",
        description:
          "Head north from Sigiriya Junction along the Sigiriya-Pidurangala Road for about 2km until you reach the Pidurangala Royal Cave Temple entrance.",
      },
      {
        step: 2,
        title: "Temple Entry & Initial Trail",
        description:
          "Pass through the ancient temple, pay the entry fee, and climb the stone stairs passing the historic reclining Buddha image house.",
      },
      {
        step: 3,
        title: "Boulder Scramble to Summit",
        description:
          "Scramble over the final boulder section near the top to emerge onto the vast open rock surface for panoramic views.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.512345678!2d80.7602!3d7.9667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca09887777777%3A0x987654321abcdef!2sPidurangala%20Rock!5e0!3m2!1sen!2slk!4v1785735339163!5m2!1sen!2slk",
    safetyAlerts: [
      "The final 10–15 minutes require boulder scrambling with no handrails or stairs; proper sturdy footwear is essential.",
      "Early morning treks for sunrise are popular but dark; bring a headlamp or flash torch for the initial climb.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, tuk-tuks, and buses with parking available at the Pidurangala Rajamaha Viharaya entrance.",
    facilities: [
      "Nearest Hospital: Sigiriya Rural Hospital / Dambulla Base Hospital",
      "Nearest ATM: Sigiriya Junction / Dambulla Town",
      "Accommodation: Budget eco-lodges, homestays, and boutique hotels surrounding Sigiriya and Pidurangala.",
    ],
  },

  // Pasikuda Beach
  {
    id: "17",
    title: "Pasikuda Beach",
    district: "Batticaloa",
    shortDescription:
      "A world-renowned coastal strip famous for its calm, crystal-clear turquoise waters and shallow offshore reef.",
    longDescription:
      "Located on the east coast of Sri Lanka, Pasikuda (Pasikudah) boasts one of the safest and shallowest stretches of coastline in the island. Protected by a natural coral reef, the ocean here is remarkably calm with virtually no wave action, allowing visitors to walk hundreds of meters out into the ocean safely.",
    image: "places/pasikuda.jpg",
    likes: 275,
    commentsCount: 31,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "coastal",
    routes: [
      {
        step: 1,
        title: "Batticaloa / Polonnaruwa to Valachchenai",
        description:
          "Travel along the Batticaloa-Trincomalee highway (A15) towards Valachchenai town.",
      },
      {
        step: 2,
        title: "Valachchenai to Pasikuda Road",
        description:
          "Turn onto Pasikudah Road from Valachchenai Junction and travel approximately 5km directly towards the bay.",
      },
      {
        step: 3,
        title: "Arrival at Pasikuda Bay",
        description:
          "Head to the main public beach access point or park near your respective resort along the bay.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.123456789!2d81.5645!3d7.9228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afb49123456789a%3A0xabcdef1234567890!2sPasikuda%20Beach!5e0!3m2!1sen!2slk!4v1785735339164!5m2!1sen!2slk",
    safetyAlerts: [
      "Sun exposure is extreme during midday hours; wear sunscreen, a hat, and stay hydrated.",
      "While the inner bay is very safe and shallow, avoid swimming outside the reef boundary where sea currents can strengthen.",
    ],
    vehicleAccessibility:
      "Fully accessible by all vehicles (cars, vans, luxury coaches) with ample dedicated parking spaces.",
    facilities: [
      "Nearest Hospital: Valachchenai Base Hospital / Batticaloa Teaching Hospital",
      "Nearest ATM: Valachchenai Town (5km away) / Resort counters",
      "Accommodation: Abundant luxury 5-star beachfront resorts, boutique hotels, and local guest houses.",
    ],
  },

  // Unawatuna Beach
  {
    id: "18",
    title: "Unawatuna Beach",
    district: "Galle",
    shortDescription:
      "A picturesque horseshoe-shaped bay famous for its golden sands, vibrant beach bars, and clear waters ideal for swimming.",
    longDescription:
      "Located just south of Galle, Unawatuna is one of Sri Lanka's most popular coastal destinations. Protected by an offshore reef, the bay offers calm waters suitable for swimming, snorkeling, and diving. The lively beach strip is lined with seafood restaurants, cafes, and boutique shops, making it a favorite for both relaxation and nightlife.",
    image: "places/unawatuna.jpg",
    likes: 395,
    commentsCount: 52,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "coastal",
    routes: [
      {
        step: 1,
        title: "Colombo / Galle to Unawatuna",
        description:
          "Take the Southern Expressway (E01) towards Galle, then merge onto the A2 (Matara Road) heading south.",
      },
      {
        step: 2,
        title: "Turnoff to Yaddehimulla Road",
        description:
          "Turn right from the main Matara Road onto Yaddehimulla Road or Welle Dewalaya Road towards the bay.",
      },
      {
        step: 3,
        title: "Arrival at Unawatuna Bay",
        description:
          "Follow the main beach access lane down to the shoreline and beachfront promenade.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15871.234567890!2d80.2486!3d6.0100!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae172eebc19a0dd%3A0x15cf1c6fa665d516!2sUnawatuna%20Beach!5e0!3m2!1sen!2slk!4v1785735339165!5m2!1sen!2slk",
    safetyAlerts: [
      "Sea conditions can change during the southwest monsoon season (May to October); look for flags indicating safe swimming zones.",
      "The narrow beach access lanes can be congested with tuk-tuks and pedestrians during peak holiday hours.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and buses via Matara Road; parking near the beach lanes can be limited during high season.",
    facilities: [
      "Nearest Hospital: Karapitiya Teaching Hospital / Galle District Hospital",
      "Nearest ATM: Unawatuna Main Junction / Galle Town",
      "Accommodation: Wide array of options ranging from luxury beachfront hotels to budget hostels and villas.",
    ],
  },

  // Hiriketiya Beach
  {
    id: "19",
    title: "Hiriketiya Beach",
    district: "Matara",
    shortDescription:
      "A trendy, horseshoe-shaped bay famous for its year-round surf waves, lush coconut palms, and vibrant laid-back vibe.",
    longDescription:
      "Nestled in Dikwella on Sri Lanka's southern coast, Hiriketiya (or Hiri) is a picturesque crescent bay enclosed by dense palm groves. Renowned for its reliable surf breaks suitable for both beginners and experienced surfers, the bay has transformed into a vibrant hotspot packed with beachfront cafes, surf schools, and cozy boutique stays.",
    image: "places/hiriketiya.jpg",
    likes: 410,
    commentsCount: 59,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "coastal",
    routes: [
      {
        step: 1,
        title: "Colombo / Galle to Dikwella",
        description:
          "Take the Southern Expressway (E01) towards Beliatta / Matara, then follow the Tangalle Road (A2) to Dikwella town.",
      },
      {
        step: 2,
        title: "Turnoff to Hiriketiya Road",
        description:
          "From Dikwella town junction, drive south along the Pehembiya Road or Hiriketiya Road for about 2km.",
      },
      {
        step: 3,
        title: "Arrival at Hiriketiya Bay",
        description:
          "Follow the sandy lane down to the main beach crescent and surf spot.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.123456789!2d80.6931!3d5.9647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae143a123456789%3A0xabcdef9876543210!2sHiriketiya%20Beach!5e0!3m2!1sen!2slk!4v1785735339166!5m2!1sen!2slk",
    safetyAlerts: [
      "Watch out for beginner surfers and surfboards near the shore break, especially during peak morning and evening hours.",
      "Rocky reefs are present near the sides of the bay; wear reef booties or stay towards the sandy middle section when swimming.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and tuk-tuks. Narrow access roads near the beach mean parking can be limited during high season.",
    facilities: [
      "Nearest Hospital: Dikwella Base Hospital / Matara District General Hospital",
      "Nearest ATM: Dikwella Town (2km away)",
      "Accommodation: Abundant surf hostels, boutique eco-villas, homestays, and beachfront guesthouses.",
    ],
  },

  // Marble Beach
  {
    id: "20",
    title: "Marble Beach",
    district: "Trincomalee",
    shortDescription:
      "A serene and pristine sheltered bay known for its crystal-clear turquoise waters and soft white sands.",
    longDescription:
      "Located along China Bay in Trincomalee, Marble Beach (also known as Marble Bay) is famous for its smooth, calm, and crystal-clear waters that reflect the sky like polished marble. Managed primarily by the Sri Lanka Air Force, it offers a exceptionally clean and well-maintained environment with gentle waves suitable for swimming, snorkeling, and relaxing.",
    image: "places/marble-beach.jpg",
    likes: 280,
    commentsCount: 35,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "coastal",
    routes: [
      {
        step: 1,
        title: "Trincomalee to China Bay",
        description:
          "Drive south along the Trincomalee-Batticaloa Highway (A15) towards China Bay.",
      },
      {
        step: 2,
        title: "Turnoff to Marble Beach Air Force Resort",
        description:
          "Turn left at the Marble Beach road sign before the Kinniya bridge and proceed towards the SLAF checkpoint.",
      },
      {
        step: 3,
        title: "Arrival & Parking",
        description:
          "Pass through the entry checkpoint and park near the designated public beach and restaurant facility area.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.123456789!2d81.2189!3d8.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afbb9876543210f%3A0x123456789abcdef0!2sMarble%20Beach!5e0!3m2!1sen!2slk!4v1785735339167!5m2!1sen!2slk",
    safetyAlerts: [
      "The beach is open to the public daily (typically 8:00 AM to 6:00 PM); national identification or passport may be requested at the Air Force entrance checkpoint.",
      "Sun exposure can be intense during midday hours; bring adequate sun protection and stay hydrated.",
    ],
    vehicleAccessibility:
      "Fully accessible by all vehicle types (cars, vans, buses, tuk-tuks) with structured parking facilities near the beach entrance.",
    facilities: [
      "Nearest Hospital: China Bay Base Hospital / Trincomalee General Hospital",
      "Nearest ATM: China Bay / Trincomalee Town (15km away)",
      "Accommodation: On-site Marble Beach Resort (Air Force managed), plus hotels and guesthouses around Trincomalee.",
    ],
  },

  // Mirissa Beach
  {
    id: "21",
    title: "Mirissa Beach",
    district: "Matara",
    shortDescription:
      "A stunning palm-fringed coastal bay famous for whale watching, Coconut Tree Hill, and vibrant beach nightlife.",
    longDescription:
      "Located on Sri Lanka's tropical southern coast, Mirissa is a vibrant beach town famous for its crescent-shaped sandy bay and laid-back atmosphere. It is world-renowned as one of the best locations for blue whale and dolphin watching excursions. Beyond the ocean, visitors flock to Coconut Tree Hill for scenic sunset views and Parrot Rock for a panoramic look over the bay.",
    image: "places/mirissa.jpg",
    likes: 420,
    commentsCount: 64,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "coastal",
    routes: [
      {
        step: 1,
        title: "Colombo / Galle to Mirissa",
        description:
          "Take the Southern Expressway (E01) towards Godagama / Matara, then exit onto the Matara Road (A2) heading towards Mirissa.",
      },
      {
        step: 2,
        title: "Turnoff to Mirissa Beach Promenade",
        description:
          "Turn off the main Matara Road onto Mirissa Beach Road or Harbor Road depending on your destination.",
      },
      {
        step: 3,
        title: "Arrival at Mirissa Bay & Harbor",
        description:
          "Head straight to the beach promenade or proceed towards the Mirissa Fishery Harbor for whale watching boat tours.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15872.456789123!2d80.4578!3d5.9483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13e123456789b%3A0x1234567890abcdef!2sMirissa%20Beach!5e0!3m2!1sen!2slk!4v1785735339168!5m2!1sen!2slk",
    safetyAlerts: [
      "Crossing over to Parrot Rock during high tide can be dangerous due to strong crashing waves and slippery rocks.",
      "Whale watching tours operate primarily from November to April; always choose licensed operators providing proper life jackets.",
    ],
    vehicleAccessibility:
      "Easily accessible by all vehicles (cars, vans, buses) via the main A2 coast road with roadside parking and hotel lots.",
    facilities: [
      "Nearest Hospital: Matara District General Hospital / Weligama Rural Hospital",
      "Nearest ATM: Mirissa Town Main Street",
      "Accommodation: Abundant beachfront resorts, surf lodges, luxury villas, and budget hostels.",
    ],
  },

  // Ella Rock & Nine Arch Bridge
  {
    id: "22",
    title: "Nine Arch Bridge, Ella",
    district: "Badulla",
    shortDescription:
      "An iconic 19th-century colonial viaduct bridge set amid lush green tea plantations and misty mountains.",
    longDescription:
      "Located in the scenic hill country town of Ella, the Nine Arch Bridge (also called the Bridge in the Sky) is an architectural marvel built entirely of stone, brick, and cement without steel reinforcement. Spanning 91 meters across a dense forest valley, watching the blue passenger trains curve across the bridge is one of Sri Lanka's most famous experiences.",
    image: "places/nine-arch-bridge.jpg",
    likes: 512,
    commentsCount: 89,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Ella Town to Passara Road",
        description:
          "From Ella town center, drive or take a tuk-tuk along the Ella-Passara Road (B100) for about 2km.",
      },
      {
        step: 2,
        title: "Nine Arch Access Trail",
        description:
          "Turn off near the Nine Arch signpost and walk down through the forest path or jungle trail towards the railway track.",
      },
      {
        step: 3,
        title: "Arrival at Viaduct Lookout",
        description:
          "Emerge onto the hillside cafes overlooking the bridge or step onto the tracks to explore the iconic structure.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.123456789!2d81.0601!3d6.8768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465d123456789%3A0xabcdef0123456789!2sNine%20Arch%20Bridge!5e0!3m2!1sen!2slk!4v1785735339169!5m2!1sen!2slk",
    safetyAlerts: [
      "Always listen for train horns and step off the railway tracks and bridge edges well before a train approaches.",
      "The walking trails down to the bridge can be slippery and muddy during heavy rainfall; wear proper footwear.",
    ],
    vehicleAccessibility:
      "Accessible by tuk-tuk or motorbikes down to the trailheads; larger vehicles (cars/vans) must park along Passara Road with a 15-minute walk down.",
    facilities: [
      "Nearest Hospital: Bandarawela Base Hospital / Badulla General Hospital",
      "Nearest ATM: Ella Town Center (2.5km away)",
      "Accommodation: Extensive options including mountain view resorts, eco-lodges, homestays, and hostels across Ella.",
    ],
  },

  // Adam's Peak (Sri Pada)
  {
    id: "23",
    title: "Adam's Peak (Sri Pada)",
    district: "Ratnapura",
    shortDescription:
      "A sacred 2,243-meter tall mountain famous for its holy footprint, historic pilgrimage trail, and spectacular sunrise views.",
    longDescription:
      "Revered by Buddhists, Hindus, Christians, and Muslims alike, Adam's Peak (Sri Pada) stands as one of Sri Lanka's most iconic sacred mountains. The summit houses a sacred footprint impression, believed by Buddhists to belong to Lord Buddha. The nightly climb during the pilgrimage season (December to May) leads thousands of travelers and devotees up thousands of stone steps to witness a breathtaking sunrise above the clouds.",
    image: "places/adams-peak.jpg",
    likes: 468,
    commentsCount: 76,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Hatton to Nallathanniya (Dalhousie)",
        description:
          "Travel from Hatton town via the Hatton-Maskeliya Road to Nallathanniya, the main trailhead base camp.",
      },
      {
        step: 2,
        title: "Nallathanniya Trailhead Entrance",
        description:
          "Cross the archway near the Peace Pagoda and begin the night ascent along the illuminated stone step pathway.",
      },
      {
        step: 3,
        title: "Summmit Climb",
        description:
          "Ascend past Japanese Peace Temple and Indikatupana to complete the ~5,500 steps reaching the sacred peak for sunrise.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.123456789!2d80.4993!3d6.8096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae382a123456789%3A0xabcdef1234567890!2sAdam's%20Peak!5e0!3m2!1sen!2slk!4v1785735339170!5m2!1sen!2slk",
    safetyAlerts: [
      "The night climb involves over 5,000 steep steps and dynamic temperature drops near the top; wear layers and proper footwear.",
      "During off-season months (June to November), the pathway is unlit, shops are closed, and heavy rain/wind conditions prevail.",
    ],
    vehicleAccessibility:
      "Buses, cars, and vans can easily access the Nallathanniya base station where ample public parking is available.",
    facilities: [
      "Nearest Hospital: Maskeliya District Hospital / Glencairn Hospital",
      "Nearest ATM: Maskeliya Town / Hatton Town",
      "Accommodation: Seasonal hotels, guest houses, and rest houses concentrated around Nallathanniya village.",
    ],
  },

  // Ravana Cave
  {
    id: "24",
    title: "Ravana Cave",
    district: "Badulla",
    shortDescription:
      "A legendary 1,370m high cave shrouded in Ramayana folklore, connected to a vast network of subterranean tunnels.",
    longDescription:
      "Located roughly 2km outside Ella town, Ravana Cave is steeped in ancient Ramayana legend, believed to be one of the places where King Ravana hid Princess Sita. Sitting at an elevation of 1,370 meters, the cave entrance opens into a dramatic rock cliff. Archeological excavations have also discovered human remains here dating back over 20,000 years.",
    image: "places/ravana-cave.jpg",
    likes: 340,
    commentsCount: 41,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Ella to Ravana Cave Trailhead",
        description:
          "Travel approximately 2km along the Ella-Wellawaya Road (A23) towards Ravana Ella Temple.",
      },
      {
        step: 2,
        title: "Ravana Temple Staircase Climb",
        description:
          "Begin the steep hike up roughly 650-700 concrete and stone steps leading up the cliffside.",
      },
      {
        step: 3,
        title: "Cave Entrance Arrival",
        description:
          "Reach the cave mouth overlooking the Ella gap; explore the front cavern area safely.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.345678901!2d81.0523!3d6.8621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465e123456789%3A0x123456789abcdef0!2sRavana%20Cave!5e0!3m2!1sen!2slk!4v1785735339171!5m2!1sen!2slk",
    safetyAlerts: [
      "The climb involves over 600 steep steps with minimal shade; bring plenty of drinking water.",
      "Do not venture deep into unlit, narrow tunnel tunnels inside the cave as they are unstable and home to heavy bat colonies.",
    ],
    vehicleAccessibility:
      "Vehicles (cars, vans, tuk-tuks) can park near the Ravana Ella Temple along the main A23 road at the base of the trail.",
    facilities: [
      "Nearest Hospital: Bandarawela Base Hospital / Badulla General Hospital",
      "Nearest ATM: Ella Town Center (2km away)",
      "Accommodation: Widespread hotels, homestays, and eco-lodges across nearby Ella town.",
    ],
  },

  // Dambulla Cave Temple (Jambukola Viharaya)
  {
    id: "25",
    title: "Dambulla Cave Temple",
    district: "Matale",
    shortDescription:
      "Sri Lanka's largest and best-preserved cave temple complex, featuring ancient Buddha statues and vibrant rock murals.",
    longDescription:
      "A UNESCO World Heritage Site dating back to the 1st century BC, the Dambulla Cave Temple (or Golden Temple of Dambulla) consists of five majestic caves carved into a massive 160-meter high rock tower. King Valagamba took refuge here during an invasion, later converting the caves into an elaborate rock monastery filled with 153 Buddha statues and stunning wall paintings.",
    image: "places/dambulla-cave-temple.jpg",
    likes: 450,
    commentsCount: 61,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Dambulla Town to Golden Temple",
        description:
          "Head south from Dambulla town along the Kandy-Jaffna (A9) highway to the Golden Temple base.",
      },
      {
        step: 2,
        title: "Rock Surface Staircase Climb",
        description:
          "Walk up the gradual sloping granite steps leading up the rock face towards the upper cave terrace.",
      },
      {
        step: 3,
        title: "Cave Shrine Exploration",
        description:
          "Remove footwear at the main courtyard gate and explore the five distinct cave chambers.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.123456789!2d80.6517!3d7.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afca0d000000001%3A0xabcdef1234567890!2sDambulla%20Cave%20Temple!5e0!3m2!1sen!2slk!4v1785735339172!5m2!1sen!2slk",
    safetyAlerts: [
      "The bare granite rock surface gets extremely hot under direct sunlight; socks are highly recommended for walking outside the caves.",
      "Be mindful of monkeys around the temple grounds—keep food items and loose belongings hidden in your bag.",
    ],
    vehicleAccessibility:
      "Fully accessible by all vehicle types with a large organized parking area at the base of the Golden Temple.",
    facilities: [
      "Nearest Hospital: Dambulla Base Hospital",
      "Nearest ATM: Dambulla Town Center (1.5km away)",
      "Accommodation: Wide variety of options ranging from luxury eco-resorts to budget guesthouses around Dambulla.",
    ],
  },

  // Nil Diya Pokuna (Underground Cave & Blue Pond)
  {
    id: "26",
    title: "Nil Diya Pokuna",
    district: "Badulla",
    shortDescription:
      "A legendary subterranean cave system hiding a glowing, crystal-clear blue underground pond 80 meters beneath the surface.",
    longDescription:
      "Located near Karandagolla along the Ella-Wellawaya road, Nil Diya Pokuna (Blue Water Pond) is one of Sri Lanka's most mystical and adventurous caving sites. Steeped in Ramayana folklore as part of King Ravana's underground tunnel network, reaching this hidden aquatic cavern requires descending through tight rock squeezes, iron ladders, and pitch-black pitch caverns with headlamps.",
    image: "places/nil-diya-pokuna.jpg",
    likes: 388,
    commentsCount: 53,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Ella to Karandagolla Junction",
        description:
          "Travel approximately 12km south from Ella town along the Ella-Wellawaya Road (A23) to Karandagolla.",
      },
      {
        step: 2,
        title: "Guided Base & Trailhead",
        description:
          "Register at the local village guide station, gear up with safety helmets and headlamps, and hike 500m to the cave entry hole.",
      },
      {
        step: 3,
        title: "Subterranean Descent",
        description:
          "Descend vertical iron ladders and navigate pitch-black boulder passages down to the glowing underground blue pool.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.123456789!2d81.0831!3d6.8214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae465f987654321%3A0xabcdef9876543210!2sNil%20Diya%20Pokuna!5e0!3m2!1sen!2slk!4v1785735339173!5m2!1sen!2slk",
    safetyAlerts: [
      "Strictly mandatory to hire an official local guide with safety gear (helmets/torches); never enter the cave system alone.",
      "Not recommended for individuals suffering from claustrophobia, asthma, cardiac issues, or severe physical mobility constraints.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and tuk-tuks via the main A23 highway with roadside guide office parking.",
    facilities: [
      "Nearest Hospital: Wellawaya Base Hospital / Bandarawela Base Hospital",
      "Nearest ATM: Wellawaya Town / Ella Town",
      "Accommodation: Guesthouses and eco-resorts available nearby along the Ella-Wellawaya route.",
    ],
  },

  // Batatotalena Cave (Diva Guhava)
  {
    id: "27",
    title: "Batatotalena Cave (Diva Guhava)",
    district: "Ratnapura",
    shortDescription:
      "A massive prehistoric cave rich in ancient Balangoda Man archaeological finds and believed to be the sacred Diva Guhava.",
    longDescription:
      "Located near Kuruwita, Batatotalena is a massive natural rock cave capable of sheltering over 500 people. Archaeologically famous for yielding fossil remains of the prehistoric 'Balangoda Man' (Homosapiens balangodensis) dating back over 28,000 years, it holds immense religious importance as the legendary 'Diva Guhava' where Lord Buddha is believed to have rested after visiting Adam's Peak.",
    image: "places/batatotalena-cave.jpg",
    likes: 295,
    commentsCount: 38,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "historical",
    routes: [
      {
        step: 1,
        title: "Colombo / Avissawella to Kuruwita",
        description:
          "Travel along the High Level Road (A4) towards Ratnapura until reaching Kuruwita town junction.",
      },
      {
        step: 2,
        title: "Kuruwita to Erathna Road Turnoff",
        description:
          "Turn onto the Kuruwita-Erathna Road and travel roughly 8km towards the Batatotalena Rajamaha Viharaya.",
      },
      {
        step: 3,
        title: "Temple Trailhead & Cave Ascent",
        description:
          "Ascend through the temple grounds via stone steps and forest trails leading directly up to the cavern mouth.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.234567890!2d80.3651!3d6.8021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38123456789ab%3A0x1234567890abcdef!2sBatatotalena%20Cave!5e0!3m2!1sen!2slk!4v1785735339174!5m2!1sen!2slk",
    safetyAlerts: [
      "The damp stone steps can get slippery during rainy spells; wear shoes with good rubber grip.",
      "Respect the active Buddhist shrine inside the cave by wearing modest attire covering shoulders and knees.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and tuk-tuks; parking is available near the base temple grounds.",
    facilities: [
      "Nearest Hospital: Kuruwita Base Hospital / Ratnapura Teaching Hospital",
      "Nearest ATM: Kuruwita Town (8km away)",
      "Accommodation: Local guesthouses in Kuruwita and hotels near Ratnapura city.",
    ],
  },

  // Sembuwatta Lake & Pine Forest
  {
    id: "28",
    title: "Sembuwatta Lake & Pine Forest",
    district: "Matale",
    shortDescription:
      "A serene man-made lake nestled deep within rolling tea estates and surrounded by towering, dense pine forests.",
    longDescription:
      "Located in Elkaduwa, Sembuwatta Lake is one of Sri Lanka's most picturesque destinations. Surrounded by thick pine forests and lush tea plantations, the emerald-green lake was formed from a natural spring and is powered by a nearby hydroelectric station. Visitors flock here for peaceful forest walks, ziplining, boating, and scenic photography.",
    image: "places/sembuwatta.jpg",
    likes: 365,
    commentsCount: 47,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Matale / Kandy to Elkaduwa",
        description:
          "Drive along the Matale-Elkaduwa Road (B269) or Kandy-Uwathenna Road towards Elkaduwa town.",
      },
      {
        step: 2,
        title: "Elkaduwa Estate Road",
        description:
          "Turn onto the narrow tea estate winding road towards the Sembuwatta entrance gate (approx. 3km).",
      },
      {
        step: 3,
        title: "Arrival at Lake & Forest Reserve",
        description:
          "Park near the main visitor entrance and explore the lake's perimeter trails leading into the pine forest.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.123456789!2d80.6981!3d7.4321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae35e123456789a%3A0xabcdef1234567890!2sSembuwatta%20Lake!5e0!3m2!1sen!2slk!4v1785735339175!5m2!1sen!2slk",
    safetyAlerts: [
      "Swimming directly in Sembuwatta Lake is strictly prohibited due to extreme depth; use the designated natural spring pool nearby.",
      "The estate approach road is narrow, steep, and winding; drive cautiously, especially when encountering oncoming vehicles.",
    ],
    vehicleAccessibility:
      "Accessible by cars, small vans, and tuk-tuks. Large heavy buses may struggle on the final narrow estate stretch.",
    facilities: [
      "Nearest Hospital: Matale District General Hospital / Elkaduwa Rural Hospital",
      "Nearest ATM: Elkaduwa Town / Wattegama Town",
      "Accommodation: On-site summer huts, nearby tea estate bungalows, and boutique eco-lodges.",
    ],
  },

  // Ohiya Pine Forest
  {
    id: "29",
    title: "Ohiya Pine Forest",
    district: "Badulla",
    shortDescription:
      "A tranquil, high-altitude needle forest offering misty mountain walking trails near Horton Plains National Park.",
    longDescription:
      "Perched at an elevation of over 1,700 meters in the central highlands, the Ohiya Pine Forest is famous for its ethereal, misty ambiance and crisp mountain air. Characterized by dense rows of towering pine trees blanketed in pine needle floors, this serene forest provides picturesque trekking routes leading toward Horton Plains, Devil's Staircase, and panoramic mountain valley viewpoints.",
    image: "places/ohiya-pine-forest.jpg",
    likes: 315,
    commentsCount: 39,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Badulla / Nuwara Eliya to Ohiya Station",
        description:
          "Travel via the scenic Main Line train or drive via the Welimada-Ohiya Road (B508) to reach Ohiya Railway Station.",
      },
      {
        step: 2,
        title: "Ohiya-Horton Plains Access Road",
        description:
          "Proceed uphill along the Ohiya-Horton Plains Road for roughly 3km into the dense pine reserve.",
      },
      {
        step: 3,
        title: "Forest Trailhead Exploration",
        description:
          "Step onto the carpeted pine-needle trails threading through the tall pine trees and ridge lookout points.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.567890123!2d80.9012!3d6.8145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46f123456789b%3A0x1234567890abcdef!2sOhiya%20Pine%20Forest!5e0!3m2!1sen!2slk!4v1785735339176!5m2!1sen!2slk",
    safetyAlerts: [
      "Dense fog and sudden mist can reduce visibility rapidly; stay on marked paths during hikes.",
      "Temperatures drop significantly in the late afternoon; bring warm windproof layers and rain protection.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and tuk-tuks via the Ohiya road; narrow sections require cautious mountain driving.",
    facilities: [
      "Nearest Hospital: Boralanda Rural Hospital / Bandarawela Base Hospital",
      "Nearest ATM: Welimada Town / Haputale Town",
      "Accommodation: Cozy mountain bungalows, eco-lodges, and homestays scattered around Ohiya and Haputale.",
    ],
  },

  // Idalgashinna Pine Forest & Railway Ridge
  {
    id: "30",
    title: "Idalgashinna Pine Forest & Railway Ridge",
    district: "Badulla",
    shortDescription:
      "A stunning high-altitude railway station and pine-covered ridge offering dramatic 360-degree views across southern plains and central misty hills.",
    longDescription:
      "Situated along the main highland railway line between Haputale and Ohiya at an elevation of 1,615 meters, Idalgashinna is famous for sitting on a razor-thin mountain ridge. Standing on the railway platform, visitors can see two distinct weather systems simultaneously— the Southern plains of Sabaragamuwa on one side and the Uva mountain range on the other. Dense pine forest trails, scenic rail hikes, and frequent thick mist cover make it a premier trekking destination.",
    image: "places/idalgashinna.jpg",
    likes: 342,
    commentsCount: 41,
    authorName: "Kavinda De Silva",
    authorVotes: 71, // Pro Traveler
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Main Line Train to Idalgashinna Station",
        description:
          "Board the highland train from Colombo, Kandy, or Ella and disembark directly at Idalgashinna Railway Station.",
      },
      {
        step: 2,
        title: "Pine Forest Trail Ascent",
        description:
          "Take the foothill path leading up behind the station master's quarters into the pine forest ridge trail.",
      },
      {
        step: 3,
        title: "Ridge & Viewpoint Hike",
        description:
          "Trek along the pine-needle carpeted ridge path to reach the vantage point overlooking both sides of the mountain gap.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.123456789!2d80.8871!3d6.7865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46e123456789c%3A0x1234567890abcdef!2sIdalgashinna%20Railway%20Station!5e0!3m2!1sen!2slk!4v1785735339177!5m2!1sen!2slk",
    safetyAlerts: [
      "Walking on active railway tracks requires constant vigilance; listen for train signals around sharp curves and tunnels.",
      "Sudden thick mist can drop visibility to near zero on the ridge trail; carry GPS tracking or stay on well-marked paths.",
    ],
    vehicleAccessibility:
      "Best accessed via train. Road access is via narrow, rough estate roads from Haputale suited mainly for 4x4 vehicles or three-wheelers.",
    facilities: [
      "Nearest Hospital: Haputale Rural Hospital / Diyatalawa Base Hospital",
      "Nearest ATM: Haputale Town (8km by rail/road)",
      "Accommodation: Basic local homestays around the station, with extensive hotels available in nearby Haputale.",
    ],
  },

  // Kalupahana Pine Forest
  {
    id: "31",
    title: "Kalupahana Pine Forest",
    district: "Badulla",
    shortDescription:
      "A vast high-altitude pine forest reserve cradling Sri Lanka's tallest waterfall, Bambarakanda Falls.",
    longDescription:
      "Located along the southern slopes of the central highlands near Haldummulla, the Kalupahana Pine Forest is a dramatic wilderness expanse. Famous for enveloping the trail to Bambarakanda Falls (Sri Lanka's highest waterfall at 263 meters) and Lanka Falls, this dense pine canopy offers cool mountain air, carpeted forest floors, and picturesque trekking paths popular among hikers and nature lovers.",
    image: "places/kalupahana-pine-forest.jpg",
    likes: 358,
    commentsCount: 44,
    authorName: "Lakshan Sandeepa",
    authorVotes: 85, // Explorer / Contributor
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Colombo / Ratnapura to Kalupahana Junction",
        description:
          "Travel along the Colombo-Baddulla (A4) highroad past Belihuloya to reach the Kalupahana Junction.",
      },
      {
        step: 2,
        title: "Kalupahana to Bambarakanda Road",
        description:
          "Turn onto the narrow Kalupahana-Bambarakanda Road and proceed approximately 4km through estate settlements.",
      },
      {
        step: 3,
        title: "Pine Forest Trail Ascent",
        description:
          "Begin the trek from the ticket counter into the pine forest reserve toward Bambarakanda Falls and upper Lanka Falls.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.876543210!2d80.8321!3d6.7721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46d123456789d%3A0x1234567890abcdef!2sKalupahana%20Pine%20Forest!5e0!3m2!1sen!2slk!4v1785735339178!5m2!1sen!2slk",
    safetyAlerts: [
      "Pine needle carpets on steep slopes can be surprisingly slick; wear hiking shoes with deep tread.",
      "Be cautious near stream crossings and cliff edges near the waterfalls, especially during monsoonal rains.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and tuk-tuks up to the Bambarakanda ticket booth parking area.",
    facilities: [
      "Nearest Hospital: Haldummulla Rural Hospital / Diyatalawa Base Hospital",
      "Nearest ATM: Haldummulla Town / Haputale Town",
      "Accommodation: Eco-lodges, homestays, and camping spots in Kalupahana and nearby Belihuloya.",
    ],
  },

  // Riverston Pine Forest & Pitawala Patana
  {
    id: "32",
    title: "Riverston Pine Forest & Pitawala Patana",
    district: "Matale",
    shortDescription:
      "A wind-swept mountain pass in the Knuckles Range featuring misty pine woods, dramatic sheer cliffs, and unique pygmy grasslands.",
    longDescription:
      "Located within the UNESCO-designated Knuckles Mountain Range, Riverston is famous for its dramatic cloud-forest ecosystems, cool high-altitude pine plantations, and fierce mountain winds. The trail up to Riverston Telecommunication Tower winds through tall, misty pine trees before opening up to the stunning Riverston Gap and nearby Pitawala Patana—a unique sloping rock-plateau grassland with 'Mini World's End' drop-offs.",
    image: "places/riverston-pine-forest.jpg",
    likes: 389,
    commentsCount: 52,
    authorName: "Lakshan Sandeepa",
    authorVotes: 85, // Explorer / Contributor
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Matale / Kandy to Rattota",
        description:
          "Drive from Matale town along the Matale-Rattota Road (A9/B274) towards Rattota.",
      },
      {
        step: 2,
        title: "Rattota to Riverston Gap",
        description:
          "Ascend the winding mountain pass towards Riverston Peak (B381) passing Bambarakiri Ella.",
      },
      {
        step: 3,
        title: "Pine Trail Walk to Riverston Tower / Pitawala Patana",
        description:
          "Park near the entry barrier and follow the pine-lined paved pathway up to the viewpoint or proceed 2km further to Pitawala Patana.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.456789012!2d80.7512!3d7.5314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae37d123456789e%3A0x1234567890abcdef!2sRiverston%20Peak!5e0!3m2!1sen!2slk!4v1785735339179!5m2!1sen!2slk",
    safetyAlerts: [
      "Extremely strong wind gusts at Riverston Gap can cause loss of balance near cliff edges.",
      "Misty weather can drop visibility suddenly; ensure you stick to marked concrete walkways and trail boundaries.",
    ],
    vehicleAccessibility:
      "Accessible by cars, vans, and bikes via the Rattota-Illukkumbura Road; drive cautiously around tight hairpin bends.",
    facilities: [
      "Nearest Hospital: Rattota Base Hospital / Matale District General Hospital",
      "Nearest ATM: Rattota Town / Matale Town",
      "Accommodation: Eco-lodges, camping resorts, and mountain huts around Rattota and Illukkumbura.",
    ],
  },

  // Hanthana Mountain Range & Pine Forest
  {
    id: "33",
    title: "Hanthana Mountain Range & Pine Forest",
    district: "Kandy",
    shortDescription:
      "A legendary seven-peak mountain range flanking Kandy city, renowned for its dense pine slopes and breathtaking valley viewpoints.",
    longDescription:
      "Rising dramatically above the hill capital of Kandy and the University of Peradeniya campus, the Hanthana Mountain Range is one of Sri Lanka's most popular hiking destinations. The lower to mid-elevation slopes feature sprawling pine plantations with soft, pine-needle-covered paths that lead hikers up to Seven Peaks (Ura Kanda being the highest at 1,240m). It provides panoramic views of Kandy city, the Knuckles range, and the Mahaweli River valley.",
    image: "places/hanthana-pine-forest.jpg",
    likes: 412,
    commentsCount: 48,
    authorName: "Lakshan Sandeepa",
    authorVotes: 85, // Explorer / Contributor
    category: "nature",
    routes: [
      {
        step: 1,
        title: "Kandy Town to Sarasavi Meda / Ceylon Tea Museum",
        description:
          "Take the Hanthana Road from Kandy city towards the Ceylon Tea Museum or University of Peradeniya entrance.",
      },
      {
        step: 2,
        title: "Pine Forest Trailhead Ascent",
        description:
          "Follow the estate path past Upper Hanthana into the shaded pine forest canopy, ascending through carpeted needle trails.",
      },
      {
        step: 3,
        title: "Ridge Trek to Peaks",
        description:
          "Continue along the mountain ridge, emerging from the pine forest onto open grassland summits offering sweeping 360-degree views.",
      },
    ],
    googleMapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.123456789!2d80.6212!3d7.2614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae368123456789f%3A0x1234567890abcdef!2sHanthana%20Mountain%20Range!5e0!3m2!1sen!2slk!4v1785735339180!5m2!1sen!2slk",
    safetyAlerts: [
      "Sudden mist and quick weather shifts can obscure the trail on upper ridges; stick closely to main worn tracks.",
      "Be cautious on steep rock faces near peak edges, especially during or immediately after rain.",
    ],
    vehicleAccessibility:
      "Accessible by cars, tuk-tuks, or local buses up to the Ceylon Tea Museum or Upper Hanthana trailhead area.",
    facilities: [
      "Nearest Hospital: Kandy National Hospital / Peradeniya Teaching Hospital",
      "Nearest ATM: Peradeniya Town / Kandy City Center",
      "Accommodation: Wide variety of boutique hotels, guesthouses, and campus homestays in Kandy and Peradeniya.",
    ],
  },
];
