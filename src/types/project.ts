export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  disciplines: string[];
  year: string;
  description: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  image: string;
  gallery: string[];
  size?: "large" | "medium" | "small" | "full" | "offset";
  position?: "left" | "right" | "center";
  accentColor?: string;
  featured?: boolean;
}
