import type { Metadata } from "next";
import { WindSong, Cormorant } from "next/font/google";

import "./globals.css";

const windSongFont = WindSong({
  variable: "--font-wind-song",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const cormorantFont = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thái & Long - Wedding",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-black ${windSongFont.variable} ${cormorantFont.variable} ${cormorantFont.className}`}
      >
        {children}
      </body>
    </html>
  );
}
