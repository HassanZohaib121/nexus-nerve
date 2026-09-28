export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "BRAND STRATEGY",
    subtitle: "Positioning & Market Architecture",
    description:
      "We define the intellectual foundation of your brand: core positioning, competitive differentiation, audience psycho-graphics, and cultural narrative that gives every design decision unmistakable intent.",
    deliverables: [
      "Brand Positioning & Purpose",
      "Audience Architecture",
      "Naming & Verbal Identity",
      "Market Horizon Analysis",
      "Strategic Manifesto"
    ],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "02",
    title: "BRAND IDENTITY",
    subtitle: "Visual Systems & Graphic Artifacts",
    description:
      "Sculpting iconic graphic marks, bespoke typography, nuanced color logic, and comprehensive design systems that endure beyond transient aesthetic cycles.",
    deliverables: [
      "Logotype & Dynamic Monograms",
      "Custom Typography & Font Pairing",
      "Color Architecture & Textures",
      "Comprehensive Brand Guidelines",
      "Stationery & Physical Packaging"
    ],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "03",
    title: "DIGITAL DESIGN",
    subtitle: "UX/UI Architecture & Editorial Platforms",
    description:
      "Creating digital environments with editorial pacing, typographic rigor, and effortless intuitive navigation that captivates demanding international audiences.",
    deliverables: [
      "Digital Platform Architecture",
      "User Journey & Micro-copy",
      "Design Systems & Component Kits",
      "Multi-device Responsive Prototypes",
      "Accessibility & Performance Audits"
    ],
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "04",
    title: "WEB DEVELOPMENT",
    subtitle: "Creative Engineering & Next.js Architecture",
    description:
      "Bespoke, high-performance web engineering utilizing Next.js, modern CSS, dynamic shaders, and choreographed animations that load instantaneously without compromising artistic ambition.",
    deliverables: [
      "Next.js App Router Architecture",
      "Custom Anime.js Orchestrations",
      "Headless CMS Integration",
      "Web Audio & Sensory Interactivity",
      "Sub-second Edge Deployment"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "05",
    title: "ART DIRECTION",
    subtitle: "Visual Storytelling & Curated Imagery",
    description:
      "Orchestrating visual tone across photography, editorial lookbooks, film treatments, and spatial brand environments with meticulous aesthetic coherence.",
    deliverables: [
      "Editorial Photography Concepts",
      "Creative Campaign Treatments",
      "Lookbook & Book Layout Direction",
      "Styling & Material Selection",
      "Post-production Color Grading"
    ],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    number: "06",
    title: "MOTION & INTERACTION",
    subtitle: "Choreographed Physics & Spatial Micro-motion",
    description:
      "Infusing interfaces with kinetic life. We design subtle micro-interactions, kinematic typography, and smooth transitions that make digital surfaces feel physical and responsive.",
    deliverables: [
      "Kinetic Brand Signatures",
      "Interactive Micro-animations",
      "3D Spatial Interactions",
      "Sound-synchronized Motion",
      "Production-ready Web Code"
    ],
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80"
  }
];
