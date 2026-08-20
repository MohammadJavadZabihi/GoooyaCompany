export const siteConfig = {
  name: "گویا",
  nameEn: "Gooya",
  legalName: "شرکت نرم‌افزاری گویا",
  description:
    "گویا نرم‌افزار می‌سازد؛ محصولاتی که در کار روزمره قابل اتکا باشند — از معماری تا تجربه کاربری.",
  url: "https://gooya.dev",
  locale: "fa_IR",
  email: "hello@gooya.dev",
  phone: "+98 21 0000 0000",
  address: "تهران، ایران",
  social: {
    linkedin: "https://linkedin.com/company/gooya",
    github: "https://github.com/gooya",
    twitter: "https://x.com/gooya",
  },
} as const;

export type SiteConfig = typeof siteConfig;
