import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default:
      "XenlixAI — Intelligent AI Platforms and Automation Tools",
    template: "%s | XenlixAI",
  },
  description:
    "Discover XenlixAI, a technology ecosystem building advanced AI tools, automation systems, and intelligent platforms designed to improve productivity and digital performance.",
  keywords: [
    "artificial intelligence platforms",
    "AI tools for businesses",
    "marketing automation with AI",
    "AI voice agents",
    "AI chatbots",
    "AI productivity applications",
    "machine learning platforms",
    "XenlixAI",
    "AI automation",
    "digital intelligence",
  ],
  authors: [{ name: "XenlixAI", url: "https://hub.xenlixai.com" }],
  creator: "QAB Global LLC",
  publisher: "XenlixAI",
  metadataBase: new URL("https://hub.xenlixai.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hub.xenlixai.com",
    siteName: "XenlixAI",
    title: "XenlixAI — Intelligent AI Platforms and Automation Tools",
    description:
      "Discover XenlixAI, a technology ecosystem building advanced AI tools, automation systems, and intelligent platforms designed to improve productivity and digital performance.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "XenlixAI — AI Technology Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "XenlixAI — Intelligent AI Platforms and Automation Tools",
    description:
      "Discover XenlixAI, a technology ecosystem building advanced AI tools, automation systems, and intelligent platforms.",
    images: ["/og-image.png"],
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
};

/* JSON-LD Structured Data */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "XenlixAI",
  url: "https://hub.xenlixai.com",
  logo: "https://hub.xenlixai.com/logo.png",
  description:
    "XenlixAI is an artificial intelligence technology ecosystem that develops AI-powered tools, automation systems, and digital platforms.",
  founder: {
    "@type": "Organization",
    name: "QAB Global LLC",
  },
  sameAs: ["https://www.xenlixai.com", "https://agency.xenlixai.com"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@xenlixai.com",
    contactType: "customer support",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "XenlixAI",
  url: "https://hub.xenlixai.com",
  description:
    "XenlixAI technology ecosystem — AI platforms, automation tools, and intelligent digital systems.",
  publisher: {
    "@type": "Organization",
    name: "XenlixAI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        className={`${inter.className} antialiased min-h-screen bg-[#020204] text-white`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
