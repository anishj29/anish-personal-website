import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Sans, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anish Jha — Software Engineer",
  description:
    "Computer Science student at Rutgers and software engineer. Experience at Wells Fargo, PSEG, and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plexSans.variable}`}>
      <head>
        <link
          rel="preconnect"
          href="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com"
        />
        <link
          rel="dns-prefetch"
          href="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
