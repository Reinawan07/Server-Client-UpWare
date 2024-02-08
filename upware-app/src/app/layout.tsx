import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UpWare",
  description: "UpWare E-Commerce",
  openGraph: {
    images: "./Logo.png",
  }
};

export default function RootLayout({
  children,
  showNavbar = true,
  showFooter = true,
}: Readonly<{
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {showNavbar && <Navbar/>}
        {/* <Navbar /> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
