import type { NavItem } from "@/types";

export const mainNav: NavItem[] = [
  { href: "/", label: "خانه" },
  { href: "/products", label: "محصولات" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/technology", label: "فناوری" },
  { href: "/about", label: "درباره گویا" },
  { href: "/contact", label: "تماس" },
];

export const footerNav = {
  company: [
    { href: "/about", label: "درباره گویا" },
    { href: "/technology", label: "فناوری" },
    { href: "/projects", label: "پروژه‌ها" },
    { href: "/contact", label: "تماس با ما" },
  ],
  products: [
    { href: "/products", label: "همه محصولات" },
    { href: "/products/gooya-core", label: "گویا کور" },
    { href: "/products/gooya-flow", label: "گویا فلو" },
    { href: "/products/gooya-cloud", label: "گویا کلود" },
    { href: "/products/gooya-insight", label: "گویا اینسایت" },
  ],
  legal: [
    { href: "/privacy", label: "حریم خصوصی" },
    { href: "/terms", label: "شرایط استفاده" },
  ],
} as const;
