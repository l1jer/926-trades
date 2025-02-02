import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "926 Trades",
    template: "%s | 926 Trades",
  },
  description: "Premium Australian Exports to China",
  keywords: ["Australian exports", "premium goods", "China market", "926 Trades"],
  openGraph: {
    title: "926 Trades",
    description: "Premium Australian Exports to China",
    url: "https://926-trades.com",
    siteName: "926 Trades",
    images: [
      {
        url: "https://926-trades.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "926 Trades",
    description: "Premium Australian Exports to China",
    images: ["https://926-trades.com/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
