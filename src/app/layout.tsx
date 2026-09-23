import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer/Footer";


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify weights you need
  variable: "--font-oswald",
});

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

export const metadata: Metadata = {
  title: "FIT LOG",
  description:
    "FitLog is a simple fitness tracking website that helps users record workouts, track progress, monitor fitness goals, and stay motivated. It provides an easy way to keep all your fitness activities organized in one place.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black flex flex-col">
        <Navbar></Navbar>
        <div>{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
