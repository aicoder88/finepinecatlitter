import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://finepinecatlitter.com"),
  title: {
    default: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    template: "%s | Fine Pine Cat Litter",
  },
  description:
    "Discover the natural power of pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
  keywords: [
    "pine cat litter",
    "natural cat litter",
    "wood pellet litter",
    "sustainable cat litter",
    "eco-friendly litter",
    "pine pellets for cats",
  ],
  authors: [{ name: "Fine Pine Cat Litter" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finepinecatlitter.com",
    siteName: "Fine Pine Cat Litter",
    title: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    description:
      "Discover the natural power of pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fine Pine Cat Litter | Natural Pine-Based Odor Control",
    description:
      "Discover the natural power of pine cat litter. Sustainable, effective odor control with the fresh scent of the forest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
