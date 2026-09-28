export interface NavItem {
  label: string;
  href: string;
  number: string;
}

export const navItems: NavItem[] = [
  { label: "WORK", href: "/work", number: "01" },
  { label: "SERVICES", href: "/services", number: "02" },
  { label: "ABOUT", href: "/about", number: "03" },
  { label: "CONTACT", href: "/contact", number: "04" },
];

export const socialLinks = [
  { name: "INSTAGRAM", url: "https://instagram.com", handle: "@nexusnerve" },
  { name: "LINKEDIN", url: "https://linkedin.com", handle: "nexus-nerve-studio" },
  { name: "BEHANCE", url: "https://behance.net", handle: "nexusnerve" },
  { name: "TWITTER / X", url: "https://twitter.com", handle: "@nexusnerve" },
];

export const studioInfo = {
  name: "NEXUS NERVE",
  tagline: "INDEPENDENT CREATIVE STUDIO",
  location: "PAKISTAN / WORLDWIDE",
  year: "2026",
  email: "hello@nexusnerve.studio",
  phone: "+92 (51) 844-2026",
  address: "Studio 4B, Sector F-7, Islamabad, Pakistan",
  collaborations: "Tokyo — London — New York — Islamabad",
};
