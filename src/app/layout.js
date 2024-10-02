import "./globals.css";
import Layout from "./components/Layout";

export const metadata = {
  title: "Maya-Aska",
  description: "Portfolio of Maya Aska"
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
