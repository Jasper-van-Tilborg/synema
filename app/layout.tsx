import type { Metadata } from "next";
import { Abril_Fatface, Aboreto } from "next/font/google";
import "./globals.css";

const abrilFatface = Abril_Fatface({
  variable: "--font-abril",
  subsets: ["latin"],
  weight: "400",
});

const aboreto = Aboreto({
  variable: "--font-aboreto",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Synema",
  description: "A retro cinema experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${abrilFatface.variable} ${aboreto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
