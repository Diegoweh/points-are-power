import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.pointsarepower.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Points Are Power | Unlock Luxury Travel with Points & Miles",
    template: "%s | Points Are Power",
  },
  description:
    "Transform everyday spending into first-class flights and luxury hotel stays. Ramon Anibal teaches families how to maximize credit card points and miles — without the luxury price tag.",
  keywords: [
    "points and miles",
    "travel hacking",
    "credit card points",
    "luxury travel",
    "free flights",
    "hotel points",
    "family travel",
    "travel coaching",
    "points strategy",
    "Ramon Anibal",
    "Points Are Power",
    "credit card rewards",
    "travel consultant",
    "miles strategy",
  ],
  authors: [{ name: "Ramon Anibal", url: siteUrl }],
  creator: "Ramon Anibal",
  publisher: "Points Are Power",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Points Are Power",
    title: "Points Are Power | Unlock Luxury Travel with Points & Miles",
    description:
      "Transform everyday spending into first-class flights and luxury hotel stays. Ramon Anibal teaches families how to maximize credit card points and miles.",
    locale: "en_US",
    images: [
      {
        url: "/footer-logo.avif",
        width: 1200,
        height: 630,
        alt: "Points Are Power – Unlock Luxury Travel with Points & Miles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Points Are Power | Unlock Luxury Travel with Points & Miles",
    description:
      "Transform everyday spending into first-class flights and luxury hotel stays. Ramon Anibal teaches families how to maximize credit card points and miles.",
    images: ["/footer-logo.avif",],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Points Are Power",
  url: siteUrl,
  logo: `${siteUrl}/footer-logo.avif`,
  image: `${siteUrl}/footer-logo.avif",`,
  description:
    "Points Are Power helps families unlock luxury travel through expert credit card points and miles coaching. Work 1:1 with Ramon Anibal to build a personalized travel strategy.",
  founder: {
    "@type": "Person",
    name: "Ramon Anibal",
    url: siteUrl,
    sameAs: [
      "https://www.facebook.com/profile.php?id=61581023353684",
      "https://www.instagram.com/pointsarepower/",
    ],
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61581023353684",
    "https://www.instagram.com/pointsarepower/",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Travel Points Coaching Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Concierge Strategy Intensive",
        description: "3-Hour Private Consultation with Ramon Anibal",
        price: "157",
        priceCurrency: "USD",
        url: `${siteUrl}/#services`,
      },
      {
        "@type": "Offer",
        name: "Toe in the Water",
        description: "4-Week Group Strategic Introduction",
        price: "597",
        priceCurrency: "USD",
        url: `${siteUrl}/#services`,
      },
      {
        "@type": "Offer",
        name: "Wading in the Water",
        description: "8-Week Group Guided Implementation",
        price: "1297",
        priceCurrency: "USD",
        url: `${siteUrl}/#services`,
      },
      {
        "@type": "Offer",
        name: "Deep Waters Strategy",
        description: "12-Week Group Advanced Optimization",
        price: "1997",
        priceCurrency: "USD",
        url: `${siteUrl}/#services`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
