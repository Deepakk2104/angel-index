import "./globals.css";

export const metadata = {
  title: "Angel Index",
  description: "Investor intelligence platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}