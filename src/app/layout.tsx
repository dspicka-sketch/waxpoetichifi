import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Wax Poetic | Curated Listening Room · Sebastopol, CA",
    template: "%s | Wax Poetic",
  },
  description:
    "A community-driven vinyl listening room and event space in Sebastopol, California. Tickets, memberships, private rentals, and more.",
  openGraph: {
    siteName: "Wax Poetic",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
