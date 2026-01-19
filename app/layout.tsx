import type { Metadata } from "next";
import "../public/css/globals.css";
import "../public/css/industries-fixes.css";
import "../public/css/why-choose-fixes.css";
import "../public/css/header-fixes.css";
import "../public/css/insights-fixes.css";
import "../public/css/faq-fixes.css";
import "../public/css/footer-fixes.css";
import "../public/css/policy-fixes.css";
import IntroLoader from "@/components/ui/IntroLoader";
// import GlobalIntroTrigger from "@/components/ui/GlobalIntroTrigger";

export const metadata: Metadata = {
  title: "SOL9X - Build Sustainable Secure Solutions for Defense",
  description: "Advanced defense and secure solutions for critical missions",
  metadataBase: new URL("https://sol9x.com"),


  openGraph: {
    title: "SOL9X",
    description: "Secure. Intelligent. Scalable.",
    url: "https://sol9x.com",
    siteName: "SOL9X",
    images: [
      {
        url: "/assets/og-sol9x.png",
        width: 1200,
        height: 630,
        alt: "SOL9X – Secure, Intelligent Systems",
      },
    ],
    type: "website",
  },

  icons: {
    icon: [
      {
        url: "/assets/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: "/assets/apple-touch-icon.png",
  },
  manifest: "/assets/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>
        {children}</body>
    </html>
  );
}

