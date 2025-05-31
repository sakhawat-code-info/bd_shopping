import type { Metadata } from "next";

import "./globals.css";

// app/layout.tsx
import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // দরকার হলে অন্য weight-ও যুক্ত করতে পারেন
  variable: "--font-josefin",
});

export const metadata: Metadata = {
  title: "BD Shopping",
  description: "The ecommerce bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={josefin.variable}>
      <body>{children}</body>
    </html>
  );
}
