import "./globals.css";
import Layout from "./components/Layout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"
import { Cormorant_Garamond, Jacquarda_Bastarda_9 } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
});

const jacquarda = Jacquarda_Bastarda_9({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-jacquarda',
});

export const metadata = {
  title: {
    template: "%s | Maya-Aska",
    default: "Maya-Aska",
    absolute: "Maya-Aska"
  },
  description: "Portfolio of Maya Aska",
  keywords: ["photography", "London", "Maya-Aska", "portrait", "fashion", "art"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${cormorant.variable} ${jacquarda.variable}`}
      >
        <Layout>
          {children}
        </Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
