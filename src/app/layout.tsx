import type { Metadata, Viewport } from "next";
import { Vazirmatn } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { organizationJsonLd, buildMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/constants/site";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#f4f6f9",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  keywords: ["گویا", "توسعه نرم‌افزار", "محصولات دیجیتال", "شرکت فناوری"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
