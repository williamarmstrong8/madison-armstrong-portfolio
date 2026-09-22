import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Madison Armstrong | Fashion Merchandising, Editorial & Buying",
  description:
    "Portfolio of Madison Armstrong: fashion merchandising, editorial, styling, and buying. Featuring Mischief Maison Studio, a sustainable womenswear brand concept developed through the Parsons Fashion Business Essentials capstone.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
