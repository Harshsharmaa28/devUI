import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DevUIx",
  description: "A complete solution for learners & Developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_KEY} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 text-[#FFF] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
