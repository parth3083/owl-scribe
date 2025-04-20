import type { Metadata } from "next";
import  { Toaster } from 'react-hot-toast';
import "./globals.css";
import { Quicksand } from "next/font/google";

const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-viaoda",
});

export const metadata: Metadata = {
  title: "Owl Scribe",
  description: "Owl Scribe is a cutting-edge text processing application that aims to simplify the way we work with content.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quickSand.className} antialiased min-h-[calc(100vh-1px)] flex flex-col bg-[#F5EFE8] text-[#8B4513]  `}
      >
        <Toaster/>
        {children}
      </body>
    </html>
  );
}
