import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '../styles/animations.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '926 Trades - Premium Australian Products',
  description: 'Premium Australian product exports to China. High-quality goods for discerning clients.',
  keywords: 'Australian exports, China imports, premium products, wholesale trade',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 