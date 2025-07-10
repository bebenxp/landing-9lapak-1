import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TOGEL TERLENGKAP | KELUARAN SDY TERPERCAYA | 9LAPAK",
  description:
    "9Lapak adalah platform game populer di Indonesia dengan tampilan terbaik. Mainkan berbagai jenis game dengan RTP tinggi dan gacor, mulai dari slot, skill...",
  alternates: {
    canonical: "https://9lapak7.xyz/",
  },
  keywords: [
    "togel terlengkap",
    "keluaran sdy terpercaya",
    "9lapak",
    "platform game indonesia",
    "game rtp tinggi",
    "game gacor",
    "slot online",
    "skill games",
    "bandar togel",
    "data sdy",
    "prediksi sdy",
    "sdy hari ini",
    "agen togel terpercaya",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "9Lapak Official Website",
              url: "https://www.9lapakgacor.com",
            }),
          }}
        />
      </Head>
      <body
        className={`${montserratFont.variable} antialiased max-w-lg mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
