import "./globals.css";

export const metadata = {
  title: "Maya-Aska",
  description: "Portfolio of Maya Aska"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
