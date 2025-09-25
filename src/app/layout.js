import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const appleFont = localFont({
    src: "./fonts/AppleGaramond-Light.ttf",
  variable: "--font-apple",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Submmission Generator",
  description: "for sumbmitting midienka work",
  icons: {
    icon: "/log.svg", // path from public/
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(-180deg, #778FFF 0%, #FFFFFF 100%);",
        }}
        className={`${geistSans.variable} ${geistMono.variable} ${appleFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
