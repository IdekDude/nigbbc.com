import type { Metadata } from "next";
import "./globals.css";
import AgeVerification from "./components/AgeVerification";

const BASE_URL = "https://nigbbc.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "NIGBBC — Nicaraguan Great Big Brown Cigars",
    template: "%s | NIGBBC",
  },
  description:
    "Premium handcrafted Nicaraguan cigars. Bold, brown, and unforgettable. Rolled by master torcedores in Estelí from volcanic-soil tobacco aged 3+ years. Shop the NIGBBC collection.",
  keywords: [
    "Nicaraguan cigars",
    "premium cigars",
    "handcrafted cigars",
    "NIGBBC",
    "Estelí cigars",
    "maduro cigars",
    "handrolled cigars",
    "cigar collection",
    "gran reserva cigars",
    "buy cigars online",
    "nicaraguan tobacco",
    "torcedor",
    "cigar club",
    "full body cigars",
    "robusto cigars",
    "toro cigars",
    "churchill cigars",
  ],
  authors: [{ name: "NIGBBC", url: BASE_URL }],
  creator: "NIGBBC",
  publisher: "NIGBBC",
  category: "Tobacco & Cigars",
  applicationName: "NIGBBC",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "NIGBBC",
    title: "NIGBBC — Nicaraguan Great Big Brown Cigars",
    description:
      "Premium handcrafted Nicaraguan cigars. Bold, brown, and unforgettable. Rolled by master torcedores in Estelí. Shop the full NIGBBC collection.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@nigbbc",
    creator: "@nigbbc",
    title: "NIGBBC — Nicaraguan Great Big Brown Cigars",
    description:
      "Bold. Brown. Unforgettable. Premium Nicaraguan cigars handrolled in Estelí. Aged 3+ years in Spanish cedar.",
  },
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "add-your-google-search-console-token-here",
  },
  other: {
    "og:price:currency": "USD",
    "og:availability": "in stock",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${BASE_URL}/#organization`,
                  name: "NIGBBC",
                  legalName: "Nicaraguan Great Big Brown Cigars",
                  url: BASE_URL,
                  logo: {
                    "@type": "ImageObject",
                    url: `${BASE_URL}/opengraph-image`,
                    width: 1200,
                    height: 630,
                  },
                  description:
                    "Premium handcrafted Nicaraguan cigars rolled by master torcedores in Estelí.",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Estelí",
                    addressCountry: "NI",
                  },
                  sameAs: [
                    "https://www.instagram.com/nigbbc",
                    "https://www.facebook.com/nigbbc",
                    "https://x.com/nigbbc",
                  ],
                  email: "hello@nigbbc.com",
                },
                {
                  "@type": "WebSite",
                  "@id": `${BASE_URL}/#website`,
                  url: BASE_URL,
                  name: "NIGBBC",
                  publisher: { "@id": `${BASE_URL}/#organization` },
                  inLanguage: "en-US",
                },
                {
                  "@type": "WebPage",
                  "@id": `${BASE_URL}/#webpage`,
                  url: BASE_URL,
                  name: "NIGBBC — Nicaraguan Great Big Brown Cigars",
                  isPartOf: { "@id": `${BASE_URL}/#website` },
                  about: { "@id": `${BASE_URL}/#organization` },
                  description:
                    "Shop premium handcrafted Nicaraguan cigars. Aged 3+ years, rolled by master torcedores in Estelí.",
                  inLanguage: "en-US",
                },
                {
                  "@type": "Product",
                  name: "The Managua Maduro",
                  brand: { "@id": `${BASE_URL}/#organization` },
                  description:
                    "Nicaraguan Maduro Toro (6×52). Full strength with notes of dark chocolate, espresso, cedar, and leather.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: "24",
                    availability: "https://schema.org/InStock",
                    url: `${BASE_URL}/#shop`,
                  },
                },
                {
                  "@type": "Product",
                  name: "Gran Reserva Oscuro",
                  brand: { "@id": `${BASE_URL}/#organization` },
                  description:
                    "Oscuro Ligero Churchill (7×48). Full strength with notes of dark fruit, molasses, smoked oak, and clove. Rated 98.",
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price: "32",
                    availability: "https://schema.org/InStock",
                    url: `${BASE_URL}/#shop`,
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "Where are NIGBBC cigars made?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "NIGBBC cigars are handrolled in Estelí, Nicaragua — the cigar capital of the world — using tobacco grown on volcanic hillsides at 900m elevation.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long are NIGBBC cigars aged?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "All NIGBBC fillers and binders are aged a minimum of three years in Spanish cedar rooms before rolling.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Do you offer free shipping?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. NIGBBC offers free shipping on all orders over $150, shipped in humidity-controlled packaging.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#070502]">
        <AgeVerification />
        {children}
      </body>
    </html>
  );
}
