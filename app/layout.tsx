import type { Metadata } from "next";
import "./globals.css";

import {Poppins} from "next/font/google";

export const metadata: Metadata = {
  title: "SubScribe",
  description: "SubScribe prototype",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`relative h-[100dvh] max-w-md w-full mx-auto bg-white shadow-xl overflow-hidden flex flex-col`}
    >
      <body className={`min-h-full flex flex-col ${poppins.className}`}>{children}</body>
    </html>
  );
}
