// Navigation links
const navLinks = [
  { id: "hero", title: "Home" },
  { id: "specs", title: "Specs" },
  { id: "gallery", title: "Gallery" },
  { id: "features", title: "Features" },
  { id: "test-ride", title: "Test Ride" },
];
// Colors And Models
const models = [
    {name:"Mr Clean", feel: "Timeless café racer elegance, gleaming chrome that turns heads everywhere"},
    {name:"British Racer Green", feel: "Retro racing heritage, bold and timeless "},
    {name:"Rocker Red", feel: "Aggressive and energetic, built to standout with fiery passion "}
]
// Specs cards
const specs = [
  { name: "Engine", detail: "648cc Parallel Twin", highlight: "47 HP" },
  { name: "Torque", detail: "52 Nm @ 5250 rpm", highlight: "Strong Mid-Range" },
  { name: "Top Speed", detail: "160 km/h", highlight: "Café Racer Thrill" },
];

// Gallery images
const galleryImages = [
  { imgPath: "/images/gt650-side.png" },
  { imgPath: "/images/gt650-rider.png" },
  { imgPath: "/images/gt650-closeup.png" },
];

// Feature highlights
const featureLists = [
  "Dual-channel ABS for safety",
  "Classic cafe racer ergonomics",
  "Twin exhausts with signature sound",
  "Retro styling with modern performance",
];

// Test ride info
const testRideInfo = {
  heading: "Book a Test Ride",
  contact: {
    phone: "(+91) 98765-43210",
    email: "rides@gt650.com",
  },
};

const socials = [
  { name: "Instagram", icon: "/images/insta.png", url: "#" },
  { name: "YouTube", icon: "/images/youtube.png", url: "#" },
  { name: "Facebook", icon: "/images/fb.png", url: "#" },
];

export {
  navLinks,
  specs,
  galleryImages,
  featureLists,
  testRideInfo,
  socials,
};