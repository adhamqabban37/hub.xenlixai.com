import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact XenlixAI — Get in Touch for AI Solutions",
  description:
    "Contact XenlixAI for AI platform inquiries, partnership opportunities, and consultation about chatbots, voice agents, and automation systems.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact XenlixAI",
    description:
      "Get in touch for AI platform inquiries, partnerships, and consultation.",
    url: "https://hub.xenlixai.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
