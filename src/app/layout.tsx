import type { Metadata } from "next";
import { Inter, Syncopate } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syncopate = Syncopate({
  variable: "--font-syncopate",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ketan Sonar | Data Scientist & AI Builder",
  description: "Data Scientist, AI/ML Builder, Cloud & Data Engineer, and Problem Solver based in Mumbai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syncopate.variable}`}>
      <body className="antialiased min-h-screen flex flex-col overflow-x-hidden">
        <SmoothScroll>
          <Navigation />
          <main className="flex-grow overflow-x-hidden">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
