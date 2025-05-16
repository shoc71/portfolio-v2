import "./globals.css";
import { Outfit, Ovo } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeInit from "@/components/Themeinit";

const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"], // non-existent weights above 400
});

export const metadata = {
  title: "Portfolio - Unos",
  description: "Hi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.className} ${ovoFont.className} antialiased`}
      >
        <ThemeInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
