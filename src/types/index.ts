export type ProductStatus = "live" | "beta" | "development";

export type ProductFeature = {
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  name: string;
  title: string;
  shortDescription: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  category: string;
  status: ProductStatus;
  accent: string;
  image: string;
  icon: "cloud" | "flow" | "analytics" | "core" | "shield";
  audience: string[];
  features: ProductFeature[];
  capabilities: string[];
  useCases: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  technologies: string[];
  year: string;
  accent: string;
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export type NavItem = {
  href: string;
  label: string;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  outcomes: string[];
  useCases: string[];
  stack: string[];
  image: string;
};
