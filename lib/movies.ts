export type Movie = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  location: string;
  showtimes: string[];
  image: string;
  detailImage: string;
  theme: {
    accent: string;
    dark: string;
    pill: string;
    pillText: string;
  };
};

export const movies: Movie[] = [
  {
    id: "1",
    title: "BEHIND THE STORY",
    category: "ACHTER DE CAMERA · VOOR HET SCHERM",
    tagline: "Cast scene. Meet her moon. But is art was.",
    description: "STEP ONTO THE SET VOLUME STAGE FOR THE FIRST TIME. SHARE TO BUILD WORLDS FROM NOTHING: MEET THOSE INSIDE.",
    location: "EINDHOVEN",
    showtimes: ["19:00", "20:30", "21:45"],
    image: "/ChatGPT Image 26 mei 2026 11_31_00 1.svg",
    detailImage: "/behindthestory.svg",
    theme: {
      accent: "#C4862A",
      dark: "#1E0E00",
      pill: "#C4862A",
      pillText: "#fff",
    },
  },
  {
    id: "2",
    title: "'FRAME BY FRAME'",
    category: "DOCUMENTARY · CINEMA",
    tagline: "A film within a film.",
    description: "THE ART OF CINEMA, CAPTURED ONE FRAME AT A TIME. A JOURNEY THROUGH LIGHT AND SHADOW.",
    location: "EINDHOVEN",
    showtimes: ["18:30", "20:00", "22:15"],
    image: "/image 97.svg",
    detailImage: "/framebyframe.svg",
    theme: {
      accent: "#9A9A9A",
      dark: "#0D0D0D",
      pill: "#3A3A3A",
      pillText: "#fff",
    },
  },
  {
    id: "3",
    title: "BEHIND THE LENS",
    category: "DOCUMENTARY · VISUAL ARTS",
    tagline: "What lies beneath the surface.",
    description: "A DEEP DIVE INTO THE WORLD OF CINEMATOGRAPHY AND THE PEOPLE WHO SHAPE OUR VISUAL LANGUAGE.",
    location: "EINDHOVEN",
    showtimes: ["17:00", "19:30", "21:00"],
    image: "/image 99.svg",
    detailImage: "/behindthelens.svg",
    theme: {
      accent: "#2A6EA6",
      dark: "#030D1A",
      pill: "#2A6EA6",
      pillText: "#fff",
    },
  },
  {
    id: "4",
    title: "PIXEL DEEP",
    category: "SCI-FI · VISUAL",
    tagline: "Beyond the digital horizon.",
    description: "JOURNEY INTO A WORLD WHERE PIXELS BECOME REALITY AND THE DIGITAL MEETS THE ANALOG.",
    location: "EINDHOVEN",
    showtimes: ["20:00", "22:30"],
    image: "/image 100.svg",
    detailImage: "/pixeldeep.svg",
    theme: {
      accent: "#D4520A",
      dark: "#1A0800",
      pill: "#D4520A",
      pillText: "#fff",
    },
  },
];
