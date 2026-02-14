import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.finepinecatlitter.com"),
  title: {
    default: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    template: "%s | Fine Pine Cat Litter",
  },
  description:
    "Discover the natural power of fine pine cat litter. Sustainable, effective odor control with the fresh scent of the forest. Shop natural pine wood litter today.",
  keywords: [
    "fine pine cat litter",
    "pine cat litter",
    "wood-based cat litter",
    "natural pine litter",
    "biodegradable pine litter",
    "natural cat litter",
    "wood pellet litter",
    "sustainable cat litter",
    "eco-friendly litter",
    "pine pellets for cats",
  ],
  authors: [{ name: "Fine Pine Cat Litter" }],
  alternates: {
    canonical: "/",
    languages: {
      "en-CA": "https://www.finepinecatlitter.com",
      "fr-CA": "https://www.finepinecatlitter.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.finepinecatlitter.com",
    siteName: "Fine Pine Cat Litter",
    title: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    description:
      "Discover the natural power of fine pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
    images: [
      {
        url: "/og/home.png",
        width: 1200,
        height: 630,
        alt: "Fine Pine Cat Litter - Natural Pine-Based Odor Control",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@finepinecat",
    creator: "@finepinecat",
    title: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    description:
      "Discover the natural power of fine pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
    images: ["/og/home.png"],
  },
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
  verification: {
    google: "verification_token",
  },
};

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fine Pine Cat Litter",
  url: "https://www.finepinecatlitter.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.finepinecatlitter.com/og/home.png",
    width: 1200,
    height: 630,
  },
  description:
    "Discover the natural power of fine pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
  sameAs: [
    "https://purrify.ca",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://purrify.ca/contact",
  },
};

// Product Schema for Pine Cat Litter
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Fine Pine Cat Litter",
  image: "https://www.finepinecatlitter.com/og/home.png",
  description:
    "Natural pine cat litter with superior odor control. Made from 100% biodegradable pine wood pellets. Eco-friendly, lightweight, and highly absorbent.",
  brand: {
    "@type": "Brand",
    name: "Fine Pine Cat Litter",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Purrify",
    url: "https://purrify.ca",
  },
  category: "Pet Supplies",
  material: "Pine Wood",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "19.99",
    highPrice: "49.99",
    priceCurrency: "CAD",
    availability: "https://schema.org/InStock",
    url: "https://purrify.ca/products",
    seller: {
      "@type": "Organization",
      name: "Purrify",
      url: "https://purrify.ca",
    },
  },
  keywords: [
    "fine pine cat litter",
    "pine cat litter",
    "wood-based cat litter",
    "natural pine litter",
    "biodegradable pine litter",
  ],
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "Material",
      value: "100% Natural Pine Wood",
    },
    {
      "@type": "PropertyValue",
      name: "Biodegradable",
      value: "Yes",
    },
    {
      "@type": "PropertyValue",
      name: "Absorbency",
      value: "3x weight",
    },
    {
      "@type": "PropertyValue",
      name: "Weight Comparison",
      value: "40% lighter than clay",
    },
  ],
};

// Website Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fine Pine Cat Litter",
  url: "https://www.finepinecatlitter.com",
  description:
    "Your guide to natural pine cat litter. Discover the benefits of wood-based litter for cats.",
  inLanguage: ["en-CA", "fr-CA"],
  publisher: {
    "@type": "Organization",
    name: "Fine Pine Cat Litter",
    url: "https://www.finepinecatlitter.com",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.finepinecatlitter.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.finepinecatlitter.com",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <head>
        {/* Hreflang tags for language alternates */}
        <link rel="alternate" hrefLang="en-CA" href="https://www.finepinecatlitter.com" />
        <link rel="alternate" hrefLang="fr-CA" href="https://www.finepinecatlitter.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.finepinecatlitter.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
