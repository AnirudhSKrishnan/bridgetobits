import "./globals.css";
import "./fonts.css";
import "./modern-bold-font.css";
import "./cursor.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Bridge To BITS",
  description: "Bridge to BITS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const black = "#111";
  const white = "#fff";
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col" style={{ background: black, color: white }}>
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
