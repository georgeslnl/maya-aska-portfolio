import "./globals.css";
import Layout from "./components/Layout";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

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
      <body>
        <Layout>
          {children}
        </Layout>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

