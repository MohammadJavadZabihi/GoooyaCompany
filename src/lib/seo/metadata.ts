import type { Metadata } from "next";
import { siteConfig } from "@/lib/constants/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  keywords = [],
  image = "/og/default.png",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    title === siteConfig.name
      ? `${siteConfig.name} | شرکت نرم‌افزاری`
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [
      "گویا",
      "شرکت نرم‌افزاری",
      "توسعه نرم‌افزار",
      "محصولات دیجیتال",
      ...keywords,
    ],
    authors: [{ name: siteConfig.legalName }],
    creator: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    icons: {
      icon: [{ url: "/brand/gooya-logo.png", type: "image/png" }],
      apple: [{ url: "/brand/gooya-logo.png", type: "image/png" }],
      shortcut: "/brand/gooya-logo.png",
    },
    alternates: {
      canonical: url,
      languages: {
        "fa-IR": url,
      },
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.nameEn,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/gooya-logo.png`,
    image: `${siteConfig.url}/brand/gooya-logo.png`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "تهران",
      addressCountry: "IR",
    },
    sameAs: Object.values(siteConfig.social),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function productJsonLd(product: {
  name: string;
  description: string;
  slug: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    description: product.description,
    applicationCategory: product.category,
    operatingSystem: "Web",
    url: `${siteConfig.url}/products/${product.slug}`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "IRR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  };
}

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
