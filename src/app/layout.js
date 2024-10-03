import "./globals.css";
import Layout from "./components/Layout";
import Head from "next/head";
import favicon from "./favicon.ico";

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
        </body>
    </html>
  );
}
