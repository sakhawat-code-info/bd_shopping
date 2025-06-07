import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

// ✅ Import Navbar and Footer

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    <html lang="en">
      <body className={josefin.variable}>
        <Navbar /> {/* ✅ Navbar at the top */}
        {children}
        <Footer /> {/* ✅ Footer at the bottom */}
      </body>
    </html>
  );
}
