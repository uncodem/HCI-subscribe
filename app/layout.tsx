import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SubScribe",
  description: "SubScribe prototype",
};

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
