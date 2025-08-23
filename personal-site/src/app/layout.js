import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anish Jha",
  description: "Computer Science Student, Developer, and Innovator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://prod.spline.design" />
        <link rel="preconnect" href="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com" />
        
        {/* DNS prefetch for additional performance */}
        <link rel="dns-prefetch" href="https://prod.spline.design" />
        <link rel="dns-prefetch" href="https://anish-jha-personal-site.s3.us-east-1.amazonaws.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
