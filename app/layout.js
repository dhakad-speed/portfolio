import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import "./globals.css";

export const metadata = {
  title: "Home | PortFolio",
  description: "Home Page",
  icons: {
    icon: "https://iili.io/3znizAJ.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased dark:bg-[#1f1f1f] dark:text-[#ffffffa3] bg-white text-[#0c0407]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
