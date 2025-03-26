import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "9LAPAK SLOT GACOR",
  description: "9Lapak adalah platform game populer di Indonesia dengan tampilan terbaik. Mainkan berbagai jenis game dengan RTP tinggi dan gacor, mulai dari slot, skill,...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserratFont.variable} antialiased max-w-lg mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
