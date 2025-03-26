import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const montserratFont = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "9LAPAK SLOT GACOR",
  description:
    "9Lapak adalah platform game populer di Indonesia dengan tampilan terbaik. Mainkan berbagai jenis game dengan RTP tinggi dan gacor, mulai dari slot, skill,...",
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
